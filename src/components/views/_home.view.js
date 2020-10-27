// Copyright (c) Domenico Monaco. All rights reserved.
// Licensed under the MIT License.

import React from 'react';

import * as microsoftTeams from "@microsoft/teams-js";

import'./_home.view.scss';

import {logo, kermifrogwait} from '../assets/img.js';

/**
 * The 'GroupTab' component renders the main tab content
 * of your app.
 */
class HomeView extends React.Component {
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
    let userName = Object.keys(this.state.context).length > 0 ? this.state.context['upn'] : "";
      return (
        <div class="home">
          <h1>Congratulations {userName}!</h1>
          <img src={logo} alt="Logo" width="64px" />

          <h2>I was waiting for you! This is the tab you made :-)</h2>
          <img src={kermifrogwait} alt="I was waiting for you" width="auto" />
      </div>
      );
  }
}
export default HomeView;