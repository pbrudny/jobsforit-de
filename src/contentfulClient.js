import * as contentful from "contentful";
import * as contentfulManagement from "contentful-management";

const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const MANAGER_TOKEN = process.env.REACT_APP_MANAGER_TOKEN;
const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
  environment: ENVIRONMENT
});

const manager = contentfulManagement.createClient({
  accessToken: MANAGER_TOKEN,
});

const jobsLimit = process.env.REACT_APP_DESKTOP_LIMIT || 300;

export const getPages = () => client.getEntries({
  content_type: 'page',
  order: 'fields.positionTop'
});

export const getPosts = () => client.getEntries({
  content_type: 'post',
});

export const getTechnologies = () => client.getEntries({
  content_type: 'technology',
  order: 'fields.buttonPosition'
});

export const getCities = () => client.getEntries({
  content_type: 'city',
  order: 'fields.buttonPosition'
});

export const getHeroImages = () => client.getEntries({
  content_type: 'heroImage',
});

export const getCompanies = (limit, skip = 0) => client.getEntries({
  content_type: 'company',
  limit: limit,
  skip: skip,
  order: 'fields.name'
});

export const getIndustries = () => client.getEntries({
  content_type: 'industry',
  order: 'fields.buttonPosition'
});

export const getOfficePerks = () => client.getEntries({
  content_type: 'officePerks',
  order: 'fields.title'
});

export const getBenefits = () => client.getEntries({
  content_type: 'benefits',
  order: 'fields.title'
});

export const getJobs = (limit = jobsLimit, skip = 0) => client.getEntries({
  content_type: 'job',
  limit: limit,
  skip: skip,
  select: 'sys.id,sys.createdAt,fields.dateDisplayed,' +
    'fields.position,fields.slug,fields.localCurrency,fields.technologies,' +
    'fields.salaryBottom,fields.salaryTopLocal,fields.salaryBottomLocal,fields.mustHave,' +
    'fields.salaryTop,fields.technology,fields.expBottom,fields.expTop,' +
    'fields.company,fields.city,fields.remoteLevel,fields.displayPriority',
  order: '-fields.displayPriority,-fields.dateDisplayed'
});

export const getJobsSalaries = (limit = jobsLimit, skip = 0) => client.getEntries({
  content_type: 'job',
  limit: limit,
  skip: skip,
  select: 'fields.salaryBottom,fields.salaryTop,fields.technology,fields.expBottom,fields.expTop'
});

export const getJob = (slug) => client.getEntries({
  content_type: 'job',
  'fields.slug': slug,
  limit: 1,
  order: '-fields.displayPriority,-fields.dateDisplayed'
});

export const createImageCompanyJob = async (companyDetails, jobDetails) => {
  const file = companyDetails.logo;
  try {
    const space = await manager.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT);
    let asset = await environment.createAssetFromFiles({
      fields: {
        title: {
          'en-US': file.name
        },
        description: {
          'en-US': 'Testing upload'
        },
        file: {
          'en-US': {
            contentType: file.type,
            fileName: file.name,
            file: file
          }
        }
      }
    });
    asset = await asset.processForAllLocales();
    asset = await asset.publish();
    await createCompanyAndJob(companyDetails, jobDetails, asset.sys.id);
  } catch(error) {
    console.log(error);
  }
};

export const createCompanyAndJob = async (companyDetails, jobDetails, assetId) => {
  try {
    const space = await manager.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT);
    const entry = await environment.createEntry('company', {
      fields: {
        name: {
          'en-US': companyDetails.name
        },
        website: {
          'en-US': companyDetails.website
        },
        size: {
          'en-US': companyDetails.size
        },
        industry: {
          'en-US': companyDetails.industry
        },
        description: {
          'en-US': companyDetails.description
        },
        logo: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Asset',
              id: assetId
            }
          }
        },
      }
    });

    await createJob(jobDetails, entry.sys.id);
  } catch(err) {
    console.log(err)
  }
 };

export const CreateCity = async (cityName) => {
  try {
    const space = await manager.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT);
    const entry = await environment.createEntry('city', {
      fields: {
        name: {
          'en-US': cityName
        }
      }
    });
  } catch(err) {
    console.error(err);
  }
};

export const createJob = async (jobDetails, companyId) => {
  try {
    const space = await manager.getSpace(SPACE_ID);
    const environment = await space.getEnvironment(ENVIRONMENT);
    const entry = await environment.createEntry('job', {
      fields: {
        position: {
          'en-US': jobDetails.position
        },
        company: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: companyId
            }
          }
        },
        city: {
          'en-US': {
            sys: {
              type: 'Link',
              linkType: 'Entry',
              id: jobDetails.cityId
            }
          }
        },
        expBottom: {
          'en-US': jobDetails.expBottom
        },
        expTop: {
          'en-US': jobDetails.expTop
        },
        salaryBottom: {
          'en-US': parseInt(jobDetails.salaryBottom)
        },
        salaryTop: {
          'en-US': parseInt(jobDetails.salaryTop)
        },
        slug: {
          'en-US': jobDetails.slug
        },
        agreementType: {
          'en-US': jobDetails.agreementType
        },
        titleA: {
          'en-US': jobDetails.titleA
        },
        titleB: {
          'en-US': jobDetails.titleB
        },
        titleC: {
          'en-US': jobDetails.titleC
        },
        titleD: {
          'en-US': jobDetails.titleD
        },
        titleE: {
          'en-US': jobDetails.titleE
        },
        descriptionA: {
          'en-US': jobDetails.titleA
        },
        descriptionB: {
          'en-US': jobDetails.titleB
        },
        descriptionC: {
          'en-US': jobDetails.titleC
        },
        descriptionD: {
          'en-US': jobDetails.titleD
        },
        descriptionE: {
          'en-US': jobDetails.titleE
        },
        applyUrl: {
          'en-US': jobDetails.applyUrl
        },
        applyEmail: {
          'en-US': jobDetails.applyEmail
        },
        localCurrency: {
          'en-US': jobDetails.localCurrency
        },

      }
    });
    console.log(entry);
  } catch(err) {
    console.error(err);
  }
 };
