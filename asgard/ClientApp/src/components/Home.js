import React, { Component } from 'react';
import { SideNavMenu } from './SideNavMenu';
import { Main } from './Main';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <SideNavMenu/>
        <Main/>
      </div>
      
    );
  }
}
