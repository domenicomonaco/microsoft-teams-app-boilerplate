// Copyright (c) Domenico Monaco. All rights reserved.
// Licensed under the MIT License.

import React from 'react';

import * as microsoftTeams from "@microsoft/teams-js";

import'./_contextinfo.view.scss';

import {logo} from '../assets/img.js';

/**
 * The 'GroupTab' component renders the main tab content
 * of your app.
 */
class Contextinfo extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      context: {}
    }
  }

  //React lifecycle method that gets called once a component has finished mounting
  //Learn more: https://reactjs.org/docs/react-component.html#componentdidmount
  componentDidMount(){
    // Get the user context from Teams and set it in the state
    microsoftTeams.getContext((context, error) => {
      this.setState({
        context: context
      });
    });
    // Next steps: Error handling using the error object
  }

  render() {
      return (
        <div class="home">
          <h1>Context values</h1>
          <img src={logo} alt="Logo" width="64px" />
          <ul>
            <li><b>appIconPosition: </b>{this.state.context.appIconPosition}</li>
            <li><b>entityId: </b>{this.state.context.entityId}</li>
            <li><b>hostClientType: </b>{this.state.context.hostClientType}</li>
            <li><b>locale: </b>{this.state.context.locale}</li>
            <li><b>loginHint: </b>{this.state.context.loginHint}</li>
            <li><b>ringId: </b>{this.state.context.ringId}</li>
            <li><b>teamSiteDomain: </b>{this.state.context.teamSiteDomain}</li>
            <li><b>tenantSKU: </b>{this.state.context.tenantSKU}</li>
            <li><b>jsonTabUrl: </b>{this.state.context.jsonTabUrl}</li>
            <li><b>theme: </b>{this.state.context.theme}</li>
            <li><b>tid: </b>{this.state.context.tid}</li>
            <li><b>jsonTabUrl: </b>{this.state.context.jsonTabUrl}</li>
            <li><b>upn: </b>{this.state.context.upn}</li>
            <li><b>userLicenseType: </b>{this.state.context.userLicenseType}</li>
            <li><b>userObjectId: </b>{this.state.context.userObjectId}</li>
            <li><b>userPrincipalName: </b>{this.state.context.userPrincipalName}</li>
          </ul>
      </div>
      );
  }
}
export default Contextinfo;