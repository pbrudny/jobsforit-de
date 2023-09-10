require('dotenv').config();

const express = require('express');
const path = require('path');
const fs = require('fs').promises;
const contentful = require('contentful');
const compression = require('compression');

// Constants
const PORT = process.env.PORT || 5000;
const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT || 'master';
const MAIN_TITLE = "IT jobs with salaries - Jobs For IT";
const MAIN_DESCRIPTION = "Job offers for software developers, testers, UX designers, DevOps";
const MAIN_IMAGE = "https://www.jobsforit.de/static/media/wiewior.4979dfde.png";
const FILE_PATH = path.resolve(__dirname, '..', 'build', 'index.html');

// Contentful client setup
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
  environment: ENVIRONMENT
});

const getJob = slug => client.getEntries({
  content_type: 'job',
  'fields.slug': slug,
  select: 'fields.ogTitle,fields.ogDescription,fields.ogImage,fields.position,fields.company,fields.city',
  limit: 1,
});

// Server setup
const app = express();

// Middleware
app.use(compression());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

// Routes
app.get('/jobs/:id', async (request, response) => {
  const id = request.params.id;
  let data;

  try {
    data = await fs.readFile(FILE_PATH, 'utf8');
    const entries = await getJob(id);
    const { position, ogTitle, ogDescription, ogImage } = entries.items[0].fields;
    const { name: company, logo } = entries.items[0].fields.company.fields;
    const { name: city } = entries.items[0].fields.city.fields;

    const title = ogTitle || `${position} Job - ${company} - ${city} - Jobs For IT`;
    const description = ogDescription || `Working in IT: ${company} is looking for ${position}. Job ${city}.`;
    const image = ogImage ? ogImage.fields.file.url : logo.fields.file.url;

    data = data.replace(new RegExp(MAIN_TITLE, "g"), title);
    data = data.replace(new RegExp(MAIN_DESCRIPTION, "g"), description);
    data = data.replace(MAIN_IMAGE, "https:" + image);

    response.send(data);
  } catch (err) {
    console.error(err);
    if (data) {
      response.send(data);
    } else {
      response.status(500).send('Internal server error');
    }
  }
});

app.get('/*', (req, res) => {
  res.sendFile(FILE_PATH, function(err) {
    if (err) {
      res.status(500).send(err);
    }
  });
});

// Start the server
app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
