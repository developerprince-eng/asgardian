import React, { Component } from 'react';
import '././Main.css';
import '././Tab.css';
import '././Todo.css';

export class Editodo extends Component {
  static displayName = EditTodo.name;


  render () {
    return (
    <div>  
        <div id="Edit" className="tabcontent">
            <h3>Edit </h3>
            <p>Select from the list of to do items and start editing</p>
        </div>
    </div>
    );
  }
}


