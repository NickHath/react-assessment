import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// redux
import { connect } from 'react-redux';
import { getTasks, deleteTask, updateTask } from '../../ducks/reducer';

class DetailedView extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
      description: '',
      newTitle: '',
      newDesc: ''
    }
  }

  componentDidMount() {
    this.props.tasks.forEach(task => {
      if (task.id === this.props.match.params.id * 1) {
        this.setState({ title: task.title, description: task.description, newTitle: task.title, newDesc: task.description })
      }
    })
  }

  resetState() {
    this.setState({ newTitle: this.state.title, newDesc: this.state.description });
  }

  handleSubmit() {
    let newProperties = { title: this.state.newTitle, description: this.state.description };
    this.props.updateTask(this.props.match.params.id * 1, newProperties);
  }

  handleInput(field, input) {
    let newState = [...this.state];
    newState[field] = input;
    this.setState(newState);
  }

  render() {
    console.log('STATE', this.state);
    console.log('PROPS', this.props);
    return(
      <div className='detailed-view-wrapper'>
        <Link to='/'>Back to Tasks</Link>
        <p>Task</p>
        <input placeholder={ this.state.newTitle }onChange={ e => this.handleInput('newTitle', e.target.value) }/>
        <p>Description</p>
        <input placeholder={ this.state.newDesc }onChange={ e => this.handleInput('newDesc', e.target.value) }/>
        <div className='buttons'>
          <button onClick={ () => this.handleSubmit() }>Save</button>
          <button onClick={ () => this.resetState() }>Cancel</button>
          <button onClick={ () => this.props.deleteTask(this.props.match.params.id * 1) }>Delete</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { getTasks, updateTask })(DetailedView);