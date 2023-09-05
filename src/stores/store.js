import { observable, decorate, action } from 'mobx';
import _ from 'lodash';
import history from '../history';
import {toJS} from 'mobx';
import { intersection, arrAvg } from '../common/helpers';
import {
  getPages,
  getCities,
  getIndustries,
  getHeroImages,
  getTechnologies,
  getJob,
  getJobs
} from '../contentfulClient';

const sample = arr => arr[Math.floor(Math.random() * arr.length)];

export class Store {
  scrollSkip = 0;
  allJobsLoaded = false;
  fullJobsCache = {};
  useCase = null;
  useCaseResult = null;
  opacity = 1;
  allJobs = [];
  selectedCities = [];
  selectedTechnologies = [];
  jobs = [];
  cities = [];
  heroImage = null;
  industries = [];
  technologies = [];
  pages = [];
  error = null;
  currentJob = null;
  currentJobId = null;
  currentSlug = null;
  fromUrl = false;
  mobileBar = null;
  mobileMenu = false;
  remoteLevel = 0;
  expBottom = 0;
  expTop = 2;
  sort = 0;
  clickedIndex = null;
  salaryBottom = 0;
  salaryTop = 200000;
  allCities = true;
  allTechnologies = true;
  loading = false;
  loadingMore = false;
  filtering = false;
  confetti = false;
  loadingForFilters = false;

  showJobFromUrl(slug) {
    console.log('showJobFromUrl: ', slug);
    this.useCase = 'showJobFromUrl';
    this.fromUrl = true;
    this.currentSlug = slug;
    return this.getFullJob(slug);
  }

  async getAllJobs(limit, skip) {
    this.loading = true;
    try {
      const response = await getJobs(limit, skip);
      this.jobs = this.allJobs = response.items;
      this.loading = false;
    } catch (error) {
      this.loading = false;
      console.log("Error occurred while fetching Entries: ", error);
    }
  };

  async getMoreJobs(limit) {
    this.loadingMore = true;

    try {
      this.scrollSkip += 10;
      const response = await getJobs(limit, this.scrollSkip + 1);
      if (response.items.length === 0) {
        this.allJobsLoaded = true;
      } else {
        const concatenatedJobs = this.allJobs.concat(response.items);
        this.jobs = this.allJobs = _.uniqBy(concatenatedJobs, 'sys.id');
      }
      this.loadingMore = false;
    } catch (error) {
      this.loadingMore = false;
      console.log("Error occurred while fetching Entries: ", error);
    }
  };

 async getJobsFromUrlFiltered(selected, remoteLevel, limit = 1000) {
    this.loading = true;
    try {
      const response = await getJobs(limit);
      this.jobs = this.allJobs = response.items;

      if (selected) {
        this.selectedTechnologies = selected;
        this.filterJobs();
      }

      if (remoteLevel) {
        this.remoteLevel = remoteLevel;
        this.filterJobs();
      }
      if (this.fromUrl && this.currentJob) {
        const slugs = this.jobs.map(j => j.fields.slug);
        this.clickedIndex = slugs.indexOf(this.currentJob.fields.slug);
      }
      this.loading = false;
    } catch (error) {
      this.loading = false;
      console.log("Error occurred while fetching Entries: ", error);
    }
  };

 async getJobsFromUrlTechFiltered(selected, limit = 1000) {
    this.loading = true;
    try {
      const response = await getJobs(limit);
      this.jobs = this.allJobs = response.items;

      if (selected) {
        this.selectedTechnologies = selected;
        this.filterJobs();
      }
      this.loading = false;
    } catch (error) {
      this.loading = false;
      console.log("Error occurred while fetching Entries: ", error);
    }
  };

  async getJobsFromUrl(limit = 1000) {
    this.loading = true;
    try {
      const response = await getJobs(limit);
      this.jobs = this.allJobs = response.items;
      const slugs = this.jobs.map(j => j.fields.slug);
      this.clickedIndex = slugs.indexOf(this.currentJob.fields.slug);
      this.loading = false;
    } catch (error) {
      this.loading = false;
      console.log("Error occurred while fetching Entries: ", error);
    }
  };

  async getFullJob(slug) {
    this.loading = true;
    const cached = this.fullJobsCache[slug];

    if (cached) {
      this.currentJob = cached;
      this.currentJobId = cached.sys.id;
      this.currentSlug = slug;
      this.loading = false;
      return true;
    }
    try {
      const response = await getJob(slug);
      console.log('fulljob1: ', response)
      const fullJob = response.items[0];

      if (fullJob) {
        this.currentJobId = fullJob.sys.id;
        this.currentJob = fullJob;
        this.currentSlug = slug;
        this.fullJobsCache[slug] = fullJob;
        this.loading = false;
        return 'fullJobLoaded';
      } else {
        this.loading = false;
        console.log('jobNotFound');
        return 'jobNotFound';
      }

    } catch (error) {
      this.loading = false;
      console.log("Error occurred while fetching JOB: ", error);
    }
  };

  async getTechnologies() {
    try {
      const response = await getTechnologies();
      this.technologies = response.items;
      this.selectedTechnologies = this.technologies.map(tech => tech.fields.name.toLowerCase());
    } catch (error) {
      console.log("Error occurred while fetching Entries", error);
    }
  };

  async getPages() {
    try {
      const response = await getPages();
      this.pages = response.items;
    } catch (error) {
      console.log("Error occurred while fetching Entries: ", error);
    }
  };

  getCityByName(cityName) {
    const filtered = this.cities.filter(city => {
      return city.fields.name === cityName
    });
    return filtered[0]
  }

  getTechByName(name) {
    const filtered = this.technologies.filter(tech => {
      return tech.fields.name === name
    });
    return filtered[0]
  }

  async getHeroImage() {
    if (this.heroImage) {
      return false
    }

    try {
      const response = await getHeroImages();
      this.heroImage = sample(response.items);
    } catch (error) {
      console.log("Error occurred while fetching Entries", error);
    }
  };

  async getCities() {
    if (this.cities.length > 0) {
      return false
    }

    try {
      const response = await getCities();
      this.cities = response.items;
      this.selectedCities = this.cities.map(city => city.fields.name);
    } catch (error) {
      console.log("Error occurred while fetching Entries", error);
    }
  };

  async getIndustries() {
    if (this.industries.length > 0) {
      return false
    }

    try {
      const response = await getIndustries();
      this.industries = response.items;
      this.selectedIndustries = this.industries.map(city => city.fields.name);
    } catch (error) {
      console.log("Error occurred while fetching Entries", error);
    }
  };

  resetCurrentJob() {
    this.currentSlug = null;
    this.currentJob = null;
    this.currentJobId = null;
    this.fromUrl = false;
    this.loading = false;
    if (this.jobs.length === 0) {
      this.getJobs();
    }
    history.push('/');
  }

  //mobile swiping
  getCurrentJobIndex() {
    return this.jobs.findIndex(job => {
      return job.sys.id === this.currentJob.sys.id;
    });
  }

  getNextJobIndex() {
    const currentIndex = this.getCurrentJobIndex();
    const nextIndex = currentIndex + 1;
    if (this.jobs.length > nextIndex) {
      return nextIndex;
    } else {
      return currentIndex;
    }
  }

  getPreviousJobIndex() {
    const currentIndex = this.getCurrentJobIndex();
    const prevIndex = currentIndex - 1;
    return prevIndex;
  }

  setJob(index) {
    let nextJob = this.jobs[index];
    this.getFullJob(nextJob.fields.slug);
    history.push('/jobs/' + nextJob.fields.slug);
  }

  setPrevJob() {
    this.setJob(this.getPreviousJobIndex());
  }

  setNextJob() {
    this.setJob(this.getNextJobIndex());
  }
  // mobile swiping - end

  async filterJobs() {
    if (!this.allJobsLoaded) {
      try {
        this.useCase = 'loadingAllForFiltering';
        await this.getMoreJobs(500);
        this.allJobsLoaded = true;
        this.filterLoadedJobs();
      } catch (err) {
        console.log(err);
      }
    } else {
      this.filterLoadedJobs();
    }
  }

  filterLoadedJobs() {
    if (!!this.currentJob) {
      this.resetCurrentJob();
    }

    const remoteFiltered = this.allJobs.filter(job => {
      return !this.remoteLevel || job.fields.remoteLevel >= this.remoteLevel;
    });

    const salaryFiltered = remoteFiltered.filter(job => {
      return !(job.fields.salaryTop < this.salaryBottom || this.salaryTop < job.fields.salaryBottom)
    });

    const expFiltered = salaryFiltered.filter(job => {
      return !(job.fields.expTop < this.expBottom || this.expTop < job.fields.expBottom)
    });

    const jobsBeforeSort = expFiltered.filter(job => {
      if (this.selectedCities !== [] && this.selectedTechnologies !== []) {
        return this.isTechnologySelectedFiltering(job) && this.isCitySelected(job.fields.city.fields.name)
      }

      if (this.selectedCities !== []) {
        return this.isCitySelected(job.fields.city.fields.name)
      }

      if (this.selectedTechnologies !== []) {
        return this.isTechnologySelectedFiltering(job)
      }
    });

    
    if(this.sort !== 0) {
      if(this.sort === 1) { // Latest Added
        jobsBeforeSort.sort((a, b) => {
          let aDate = Date.parse(a.fields.dateDisplayed);
          
          if(!aDate) {
            aDate = Date.parse(a.sys.createdAt);
          }
          
          let bDate = Date.parse(b.fields.dateDisplayed);
          
          if(!bDate) {
            bDate = Date.parse(b.sys.createdAt);
          }

          if ( aDate > bDate ){
            return -1;
          }
          if ( aDate < bDate ){
            return 1;
          }

          return 0;
        }); 
      } else if(this.sort === 2) { // Most popular
        
        // TODO: sort by popularity (don't have this info on backend)

      } else if(this.sort === 3) { // Highest Salary
        jobsBeforeSort.sort((a,b) => (a.fields.salaryTop < b.fields.salaryTop) ? 1 : ((b.fields.salaryTop < a.fields.salaryTop) ? -1 : 0)); 
      }
    }
    this.jobs = [...jobsBeforeSort];
    this.updateFiltersInUrl();
    return this.jobs;
  }

  updateFiltersInUrl() {
    let path;
    if (this.allTechnologies) {
      path = this.remoteLevel ? '/filters/all/remote' : '/';
    } else {
      path = this.remoteLevel ? '/filters/' + this.selectedTechnologies.join(',') + '/remote' : '/filters/' + this.selectedTechnologies.join(',');
    }
    history.push({pathname: path});
    this.filtering = false;
  }

  filterByTechnology(technology) {
    this.selectedTechnologies.push(technology.toLowerCase());
    return this.filterJobs();
  }

  filterByCity(city) {
    this.selectedCities.push(city);
    return this.filterJobs()
  }

  filterBySlug(slug) {
    const filtered = this.allJobs.filter(job => {
      return job.fields.slug === slug
    });
    this.currentJob = filtered[0]
  }

  removeCity(city) {
    this.selectedCities = this.selectedCities.filter(item => item !== city);
  }

  removeTechnology(technology) {
    this.selectedTechnologies = this.selectedTechnologies.filter(item => item !== technology.toLowerCase());
  }

  isCitySelected(city) {
    return this.selectedCities.includes(city);
  }

  isTechnologySelectedFiltering(job) {
    const mainTechnology = job.fields.technology.fields.name.toLowerCase();

    if (job && job.fields.technologies && job.fields.technologies.length > 0) {
      const jobTechs = job.fields.technologies.map(tech => tech.fields.name.toLowerCase()).concat(mainTechnology);
      return intersection(jobTechs, this.selectedTechnologies).length > 0
    } else {
      return this.isTechnologySelected(mainTechnology)
    }
  }

  isTechnologySelected(tech) {
    return this.selectedTechnologies.includes(tech.toLowerCase());
  }

  async resetAllFilters() {
    this.salaryBottom = 0;
    this.salaryTop = 200000;
    this.expBottom = 0;
    this.expTop = 2;
    this.resetCities();
    this.resetTechnologies();
    const response = await getJobs();
    this.jobs = this.allJobs = response.items;
    this.filterJobs();
  }

  resetCities() {
    this.selectedCities = this.cities.map(city => city.fields.name);
    this.allCities = true;
  }

  resetTechnologies() {
    this.selectedTechnologies = this.technologies.map(technology => technology.fields.name.toLowerCase());
    this.allTechnologies = true;
  }

  toggleMobileBar() {
    this.mobileBar = !this.mobileBar;
  }

  toggleMobileMenu() {
    this.mobileMenu = !this.mobileMenu;
  }

  async mobileFiltering() {
    this.loadingForFilters = true;
    await this.filterJobs();
    await this.toggleMobileBar();
    this.loadingForFilters = false;
  }

  get maxTopSalary() {
    return Math.max(...this.jobs.map(job => job.fields.salaryTop))
  }

  get medianSalary() {
    const values = this.jobs.map(job => job.fields.salaryTop);
    
    values.sort(function(a,b){
      return a-b;
    });

    const half = Math.floor(values.length / 2);

    if (values.length % 2) {
      return values[half];
    }

    return (values[half - 1] + values[half]) / 2.0;
  }

  maxSalary(jobs) {
    return Math.max(...jobs.map(job => job.fields.salaryTop))
  }

  salariesForTech(tech) {
    console.log('jobs0', this.jobs.length)
    console.log('jobsi', this.jobs)

    const jobs = this.jobs.filter(job => job.fields.technology.fields.name.toLowerCase() == tech);
    console.log('jobs1', jobs.length)
    const avgJobs = jobs.map(job => (job.fields.salaryTop - job.field.salaryBottom) / 2);
    console.log('jobs2', avgJobs.length)

    return {
      max: this.maxSalary(jobs), avg: arrAvg(avgJobs)
    };
  }

}

decorate(Store, {
  scrollSkip: observable,
  allJobsLoaded: observable,
  error: observable,
  useCase: observable,
  mobileBar: observable,
  mobileMenu: observable,
  salaryBottom: observable,
  remoteLevel: observable,
  salaryTop: observable,
  expBottom: observable,
  expTop: observable,
  selectedTechnologies: observable,
  selectedCities: observable,
  allJobs: observable,
  jobs: observable,
  clickedIndex: observable,
  loading: observable,
  loadingMore: observable,
  filtering: observable,
  cities: observable,
  heroImage: observable,
  industries: observable,
  technologies: observable,
  pages: observable,
  mobileTablet: observable,
  currentJob: observable,
  currentJobId: observable,
  currentSlug: observable,
  confetti: observable,
  fromUrl: observable,
  getJobs: action,
  getCurrentJobIndex: action,
  setPrevJob: action,
  setNextJob: action,
  resetCurrentJob: action,
  updateFiltersInUrl: action,
  filterByCity: action,
  filterByTechnology: action,
  filterBySlug: action,
  filterJobs: action,
  filterLoadedJobs: action,
  getCities: action,
  getCityByName: action,
  getTechByName: action,
  getPages: action,
  getTechnologies: action,
  isCitySelected: action,
  isTechnologySelected: action,
  isTechnologySelectedFiltering: action,
  resetAllFilters: action,
  resetCities: action,
  resetTechnologies: action,
  salariesForTech: action,
  allCities: observable,
  allTechnologies: observable,
  opacity: observable,
  loadingForFilters: observable,
  toggleMobileBar: action,
  toggleMobileMenu: action,
  mobileFiltering: action
});

export default new Store();
