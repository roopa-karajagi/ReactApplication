import React from "react";
import { Grid } from "semantic-ui-react";
import { Route, Redirect, Switch } from "react-router-dom";
import SettingsNav from "./SettingsNav";
import basicPage from "./basicPage";
import AccountPage from "./AccountPage";
import PhotoPage from "./PhotoPage";
import AboutPage from "./AboutPage";

const SettingsDashboard = () => {
  return (
    <Grid>
      <Grid.Column width={12}>
      <Switch>
      <Redirect exact from="/settings" to="/settings/basics" />
        <Route path="/settings/basics" component={basicPage} />
        <Route path="/settings/about" component={AboutPage} />
        <Route path="/settings/photos" component={PhotoPage} />
        <Route path="/settings/account" component={AccountPage} />
      </Switch>
      </Grid.Column>
      <Grid.Column width={4}>
        <SettingsNav />
      </Grid.Column>
    </Grid>
  );
};
export default SettingsDashboard;
