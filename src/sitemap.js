const fs = require("fs");
const path = require('path');
const contentful = require("contentful");
const moment = require('moment');
const xmlFormatter = require('xml-formatter');
const { paramsApplier } = require("react-router-sitemap");
require('dotenv').config(); // Ensure environment variables are loaded.

const CONTENTFUL_CONFIG = {
  space: process.env.REACT_APP_SPACE_ID,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  environment: process.env.REACT_APP_ENVIRONMENT || 'master' // added default value 'master'
};

const client = contentful.createClient(CONTENTFUL_CONFIG);

async function fetchContentfulEntries(contentType) {
  try {
    const entries = await client.getEntries({ content_type: contentType });
    return entries.items.length > 0 ? entries.items : [];
  } catch (error) {
    console.error(`Error fetching ${contentType} entries:`, error);
    return [];
  }
}

function generatePathsBasedOnRoute(route) {
  const config = { [route.path]: [{ ...route.params }] };
  return paramsApplier([route.path], config);
}

function generateSitemap(routes) {
  const date = moment().format('YYYY-MM-DD');
  const host = 'https://jobsforit.de';

  const xml = `
      <?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${routes.map(route => `
      <url>
          <loc>${host + route}</loc>
          <lastmod>${date}</lastmod>
      </url>`).join('')}
      </urlset>
  `;

  return xmlFormatter(xml);
}

async function sitemapGenerator() {
  try {
    console.log('Starting sitemap generation...');

    const technologies = (await fetchContentfulEntries("technology")).map(tech => tech.fields.name.toLowerCase());
    const cities = (await fetchContentfulEntries("city")).map(city => city.fields.name.toLowerCase());
    const jobs = (await fetchContentfulEntries('job')).map(job => encodeURIComponent(job.fields.slug));

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
      }
    ];

    const newRoutes = routes.flatMap(generatePathsBasedOnRoute);

    console.log('Saving sitemap to public/sitemap.xml');
    fs.writeFileSync(path.join(process.cwd(), 'public', 'sitemap.xml'), generateSitemap(newRoutes));
    console.log('Sitemap generation completed.');

  } catch (error) {
    console.error('Error generating sitemap:', error);
  }
}

sitemapGenerator();
