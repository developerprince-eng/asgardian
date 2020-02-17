import React, { Component } from 'react';
import '././Main.css';
import '././Tab.css';
import '././Todo.css';

export class TrackTodo extends Component {
  static displayName = AddNewTodo.name;
  

  render () {
    return (
    <div>  
        <div id="Track" className="tabcontent">
            <h3>Track</h3>
            <p>Display all To do items and display them on graph</p>
        </div>
    </div>
    );
  }
}


