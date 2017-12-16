import React from 'react';

export default function Task(props) {
  return (
    <div className='task-wrapper'>
      <p>{ props.task.title }</p>
      <button onClick={ () => props.complete(props.task.id) }>Complete</button>
      <p onClick={ () => props.delete(props.task.id) }>X</p>
    </div>
  );
}