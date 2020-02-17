import React, { Component } from 'react';
import './Main.css';
import './Tab.css';
import './Todo.css';

export class Main extends Component {
  static displayName = Main.name;

  
    openTabs (e, Name) {

      }

  render () {
    return (
    <div className="main">
        <div className="tab">
            <button className="tablinks" onclick={this.openTabs('AddNew')}>Add New</button>
            <button className="tablinks" onclick={this.openTabs('Edit')}>Edit</button>
            <button className="tablinks" onclick={this.openTabs('Track')}>Track</button>
        </div>
    </div>
    );
  }
}


