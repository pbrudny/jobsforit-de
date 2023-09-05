const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const path = require('path');
const fs = require('fs')
const contentful = require("contentful");
const compression = require('compression');

const SPACE_ID = process.env.REACT_APP_SPACE_ID;
const ACCESS_TOKEN = process.env.REACT_APP_ACCESS_TOKEN;
const MANAGER_TOKEN = process.env.REACT_APP_MANAGER_TOKEN;
const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT || "master";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN,
  environment: ENVIRONMENT
});

const getJob = (slug) => client.getEntries({
  content_type: 'job',
  'fields.slug': slug,
  select: 'fields.ogTitle,fields.ogDescription,fields.ogImage,fields.position,fields.company,fields.city',
  limit: 1,
});

const mainTitle = "IT jobs with salaries - Jobs For IT";
const mainDescription = "Job offers for software developers, testers, UX designers, DevOps";
const mainImage = "https://www.jobsforit.de/static/media/wiewior.4979dfde.png";

app.use(compression());
app.use(express.static(path.resolve(__dirname, '..', 'build')));

const filePath = path.resolve(__dirname, '..', 'build', 'index.html');
const filePathPolicy = path.resolve(__dirname, '..', 'build', 'privacy-policy.html');

app.get('/jobs/:id', function(request, response) {
  const id = request.params.id;
  fs.readFile(filePath, 'utf8', (err,data) => {
    if (err) {
      return console.log(err);
    }

    getJob(id)
      .then(entries => {
        const { position, ogTitle, ogDescription, ogImage } = entries.items[0].fields;
        const { name: company, logo } = entries.items[0].fields.company.fields;
        const { name: city } = entries.items[0].fields.city.fields;
        const title = ogTitle || `${position} Job - ${company} - ${city} - Jobs For IT`;
        const description = ogDescription || `Working in IT: ${company} is looking for ${position}. Job ${city}.`;
        const image = ogImage ? ogImage.fields.file.url : logo.fields.file.url;
        data = data.replace(new RegExp(mainTitle,"g"), title);
        data = data.replace(new RegExp(mainDescription,"g"), description);
        data = data.replace(mainImage, "https:" + image);
        response.send(data);
      }).catch(err => {
      console.error(err);
      response.send(data);
    });
     });
});

// fixed client side urls: https://stackoverflow.com/questions/27928372/react-router-urls-dont-work-when-refreshing-or-writing-manually?page=2&tab=active#tab-top
app.get('/*', function(req, res) {
  res.sendFile(filePath, function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

app.listen(port, () => console.log(`Listening to you on port ${port}`));
