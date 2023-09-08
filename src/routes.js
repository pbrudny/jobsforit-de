import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const JobsContainer = lazy(() => import("./jobs/JobsContainer/JobsContainer"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Imprint = lazy(() => import("./pages/Imprint"));
const DataSecurity = lazy(() => import("./pages/DataSecurity"));
const Terms = lazy(() => import("./pages/Terms"));
const ChoosePlanContainer = lazy(() => import("./jobs/ChoosePlanContainer/ChoosePlanContainer"));
const NewJobContainer = lazy(() => import("./jobs/NewJobContainer/index"));
const InvoiceDetails = lazy(() => import("./jobs/NewJobContainer/InvoiceDetails"));
const Pricing = lazy(() => import('./static/Pricing'));
const About = lazy(() => import('./static/About'));
const AboutOld = lazy(() => import('./pages/About.js'));
const Company = lazy(() => import('./static/CompanyProfile'));
const BrandsList = lazy(() => import("./brands/BrandsList"));
const EduRoom = lazy(() => import('./EduRoom/EduRoom'));
const Tutorials = lazy(() => import('./EduRoom/Tutorials/Tutorials'));
const Meetups = lazy(() => import('./EduRoom/Meetups/Meetups'));
const Meetup = lazy(() => import('./EduRoom/Meetups/Meetup'));
const StudyMaterial = lazy(() => import('./EduRoom/StudyMaterial/StudyMaterial'));
const StudyMaterialSingle = lazy(() => import('./EduRoom/StudyMaterial/StudyMaterialSingle'));
const Blog = lazy(() => import('./Blog/Blog'));
const BlogSingle = lazy(() => import("./Blog/BlogSingle"));
const Token = lazy(() => import("./Token/J4IT"));
const Statistics = lazy(() => import('./statistics/Statistics'));

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Switch>
      <Route exact path="/" component={JobsContainer} />
      <Route exact path="/filters/:tech/:city" component={JobsContainer} />
      <Route exact path="/filters/:tech" component={JobsContainer} />
      <Route exact path="/jobs/:id" component={JobsContainer} />
      <Route exact path="/jobs/:id/applied" component={JobsContainer} />
      <Route exact path="/choose-plan" component={ChoosePlanContainer} />
      <Route exact path="/add-job-invoice" component={InvoiceDetails} />
      <Route exact path="/add-job" component={NewJobContainer} />
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/about" component={About} />
      <Route exact path="/company" component={Company} />
      <Route exact path="/brand-room" component={BrandsList} />
      <Route exact path="/imprint" component={Imprint} />
      <Route exact path="/edu-room" component={EduRoom} />
      <Route exact path="/tutorials" component={Tutorials} />
      <Route exact path="/meetup" component={Meetup} />
      <Route exact path="/meetups" component={Meetups} />
      <Route exact path="/study-material" component={StudyMaterial} />
      <Route exact path="/study-material-single" component={StudyMaterialSingle} />
      <Route exact path="/blog" component={Blog} />
      <Route exact path="/blog-single" component={BlogSingle} />
      <Route exact path="/statistics" component={Statistics} />
      <Route exact path="/terms-and-conditions" component={Terms} />
      <Route exact path="/privacy-policy" component={DataSecurity} />
      <Route path="*" component={NotFound} />
    </Switch>
  </Suspense>
);

export default Routes;
