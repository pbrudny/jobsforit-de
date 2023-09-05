const { paramsApplier } = require("react-router-sitemap");
const fs = require("fs");
const contentful = require("contentful");
const moment = require('moment');
const xmlFormatter = require('xml-formatter');
const path = require('path');

const SPACE_ID = process.env.REACT_APP_SPACE_ID || "f6zwhql64w01";
const ACCESS_TOKEN =
  process.env.REACT_APP_ACCESS_TOKEN ||
  "00b696c26342aa70ce936b551fe48e6548745fa637b6cd0c62fa72886af5bd78";
const MANAGER_TOKEN =
  process.env.REACT_APP_MANAGER_TOKEN ||
  "CFPAT-1BFhL_2UiqD7Q2Z-azTipNT5RgZoqjq0U4UpQQuSTi4";
const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT || "master";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
  environment: ENVIRONMENT,
});

const getTechnologies = () =>
  client.getEntries({
    content_type: "technology",
  });

const getCities = () =>
  client.getEntries({
    content_type: "city",
  });

const getAllJobs = () => client.getEntries({
  content_type: 'job',
  limit: 1000,
  skip: 0,
  select: 'fields.position,fields.slug',
  order: '-fields.displayPriority,-fields.dateDisplayed'
});

const getTechnologyNames = async () => {
  const technologies = await getTechnologies();

  if (technologies.items.length < 0) {
    return false;
  }

  return technologies.items.map((tech) => tech.fields.name.toLowerCase());
};

const getCityNames = async () => {
  const cities = await getCities();

  if (cities.items.length < 0) {
    return false;
  }

  return cities.items.map((city) => city.fields.name.toLowerCase());
};

const getJobSlugs = async () => {
  const jobs = await getAllJobs(1000, 0);

  if (jobs.items.length < 0) {
    return false;
  }

  return jobs.items.map((job) => encodeURIComponent(job.fields.slug));
}

function generatePathsBasedOnRoute(route) {
  const config = {};
  config[route.path] = [{ ...route.params }];

  return paramsApplier([route.path], config);
}

function generateSitemap(routes) {
  const date = moment().format('YYYY-MM-DD');
  const host = 'https://jobsforit.de';
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes
        .map((route) => {
          return `<url><loc>${host + route}</loc><lastmod>${date}</lastmod></url>`;
        })
        .join("")}
      </urlset>
      `;

  return xmlFormatter(xml);
}

async function sitemapGenerator() {
  console.log('Started generating sitemap');
  const technologies = await getTechnologyNames();
  const cities = await getCityNames();
  const jobs = await getJobSlugs();

  const routes = [
    {
      path: "/filters/:tech/:city",
      exact: true,
      params: {
        tech: technologies,
        city: cities,
      },
    },
    {
      path: "/filters/:tech",
      params: {
        tech: technologies,
      },
    },
    {
      path: "/jobs/:id",
      params: {
        id: jobs
      }
    },
    {
      path: "/choose-plan",
    },
    {
      path: "/token",
    },
    {
      path: "/pricing",
    },
    {
      path: "/",
    },
    {
      path: "/about",
    },
    {
      path: "/company",
    },
    {
      path: "/brand-room",
    },
    {
      path: "/imprint",
    },
    {
      path: "/edu-room",
    },
    {
      path: "/tutorials",
    },
    {
      path: "/meetup",
    },
    {
      path: "/meetups",
    },
    {
      path: "/study-material",
    },
    {
      path: "/study-material-single",
    },
    {
      path: "/blog",
    },
    {
      path: "/statistics",
    },
    {
      path: "/terms-and-conditions",
    },
    {
      path: "/privacy-policy",
    },
  ];

  const newRoutes = [];

  routes.forEach((route) => {
    console.log(`Generating paths for: ${route.path}`);
    newRoutes.push(...generatePathsBasedOnRoute(route));
  });

  console.log('Saving sitemap to public/sitemap.xml');
  fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), generateSitemap(newRoutes));
  console.log('Sitemap successfully created');
}

sitemapGenerator();
