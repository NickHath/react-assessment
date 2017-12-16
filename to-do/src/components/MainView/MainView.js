import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// components
import Task from '../Task/Task';

// redux
import { connect } from 'react-redux';
import { getTasks, addTask, deleteTask, completeTask } from '../../ducks/reducer';

class MainView extends Component {
  componentDidMount() {
    this.props.getTasks();
  }

  handleSubmit(title) {
    let newTask = { title: title, description: '', completed: false };
    this.props.addTask(newTask);
  }

  render() {
    const allTasks = this.props.tasks.map(task => <Link to={ `/details/${task.id}` }><Task task={ task } delete={ this.props.deleteTask } complete={ this.props.completeTask }/></Link>)
    return(
      <div className='main-view-wrapper'>
        <h1>To Do:</h1>
        <input ref='newTask'/>
        <button onClick={ () => this.handleSubmit(this.refs['newTask'].value) }>Add New</button>
        { allTasks }
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getTasks, addTask, deleteTask, completeTask })(MainView);