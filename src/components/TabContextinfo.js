// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

import React from 'react';

import * as microsoftTeams from "@microsoft/teams-js";

import Contextinfo from './views/_contextinfo.view.js';

/**
 * The 'GroupTab' component renders the main tab content
 * of your app.
 */
class TabContextinfo extends React.Component {
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
      return (<>      
        <Contextinfo />
      </>
      );
  }
}
export default TabContextinfo;