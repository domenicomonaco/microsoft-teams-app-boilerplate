// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';

import * as microsoftTeams from "@microsoft/teams-js";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Privacy from "./Privacy";
import TermsOfUse from "./TermsOfUse";
import Tab from './Tab';
import TabContextinfo from './TabContextinfo';
import TabConfig from './TabConfig';

import * as utils from './utils/utils';

/**
 * The main app which handles the initialization and routing
 * of the app.
 */
function App() {

  // Check if is running on mobile devices
  const isMobileDevice = /Mobi/i.test(window.navigator.userAgent)

  // Check for the Microsoft Teams SDK object.
  if (microsoftTeams) {
    // Set app routings that don't require microsoft Teams
    // SDK functionality.  Show an error if trying to access the
    // Home page.
    if ((window.parent === window.self) && !isMobileDevice) {
      return (
        <Router>
          <Route exact path="/privacy" component={Privacy} />
          <Route exact path="/termsofuse" component={TermsOfUse} />
          <Route exact path="/tab" component={TeamsHostError} />
          <Route exact path="/tab_contextinfo" component={TeamsHostError} />
          <Route exact path="/config" component={TeamsHostError} />
        </Router>        
      );
    }

    // Initialize the Microsoft Teams SDK
    microsoftTeams.initialize();
    
    // this below is needed if you using showLoadingIndicator as true
    // can not work with localtunnel
    microsoftTeams.appInitialization.notifyAppLoaded();
    microsoftTeams.appInitialization.notifySuccess();    
  
    // Display the app home page hosted in Teams
    return (
      <Router>
        <Route exact path="/tab" component={Tab} />
        <Route exact path="/tab_contextinfo" component={TabContextinfo} />
        <Route exact path="/config" component={TabConfig} />
      </Router>
    );
  }

  // Error when the Microsoft Teams SDK is not found
  // in the project.
  return (
    <h3>Microsoft Teams SDK not found.</h3>
  );
}

/**
 * This component displays an error message in the
 * case when a page is not being hosted within Teams.
 */
class TeamsHostError extends React.Component {
  render() {
    return (
      <div>
        <h3 className="Error">Error: Debug your app within the Teams client.</h3>
      </div>
    );
  }
}

export default App;
