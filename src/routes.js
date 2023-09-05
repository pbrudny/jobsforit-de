import React from "react";
import { Switch, Route } from "react-router-dom";
import JobsContainer from "./jobs/JobsContainer/JobsContainer";
import NotFound from "./pages/NotFound";
import Imprint from "./pages/Imprint";
import DataSecurity from "./pages/DataSecurity";
import Terms from "./pages/Terms";
import ChoosePlanContainer from "./jobs/ChoosePlanContainer/ChoosePlanContainer";
import NewJobContainer from "./jobs/NewJobContainer/index";
import InvoiceDetails from "./jobs/NewJobContainer/InvoiceDetails";
import Pricing from './static/Pricing';
import About from './static/About';
import AboutOld from './pages/About.js';
import Company from './static/CompanyProfile';
import BrandsList from "./brands/BrandsList";
import EduRoom from './EduRoom/EduRoom';
import Tutorials from './EduRoom/Tutorials/Tutorials';
import Meetups from './EduRoom/Meetups/Meetups';
import Meetup from './EduRoom/Meetups/Meetup';
import StudyMaterial from './EduRoom/StudyMaterial/StudyMaterial';
import StudyMaterialSingle from './EduRoom/StudyMaterial/StudyMaterialSingle';
import Blog from './Blog/Blog';
import BlogSingle from "./Blog/BlogSingle";
import Token from "./Token/J4IT";
import Statistics from './statistics/Statistics';

const Routes = () => (
    <Switch>
      <Route exact path="/filters/:tech/:city" component={JobsContainer} />
      <Route exact path="/filters/:tech" component={JobsContainer} />
      <Route exact path="/jobs/:id" component={JobsContainer} />
      <Route exact path="/jobs/:id/applied" component={JobsContainer} />
      <Route exact path="/choose-plan" component={ChoosePlanContainer} />
      <Route exact path="/add-job-invoice" component={InvoiceDetails} />
      <Route exact path="/add-job" component={NewJobContainer} />
      {/*<Route exact path="/token" component={AboutOld} />*/}
      <Route exact path="/pricing" component={Pricing} />
      <Route exact path="/" component={JobsContainer} />
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
      <Route exact path="/*" component={NotFound} />
    </Switch>
);

export default Routes;
