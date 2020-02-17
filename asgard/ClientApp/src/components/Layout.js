import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { SideNavMenu } from './SideNavMenu';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <SideNavMenu />
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
