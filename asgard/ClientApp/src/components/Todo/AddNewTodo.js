import React, { Component } from 'react';
import '././Main.css';
import '././Tab.css';
import '././Todo.css';

export class AddNewTodo extends Component {
  static displayName = AddNewTodo.name;


  render () {
    return (
    <div>  
        <div id="AddNew" className="tabcontent">
            <div className="todo-add-form">
                <form action="">
                    <br/>
                    <input type="text" id="fname" name="fname" placeholder="Pick my Mom"/>
                    <br/>
                    <br/>
                    <input type="date" id="duedate" name="duedate"/>
                    <br/>
                    <br/>
                </form>
            </div>
        </div>
    </div>
    );
  }
}


