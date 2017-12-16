import axios from 'axios';

const initialState = {
  tasks: [],
};

const GET_TASKS = 'GET_TASKS'
    , ADD_TASK = 'ADD_TASK'
    , DELETE_TASK = 'DELETE_TASK'
    , UPDATE_TASK = 'UPDATE_TASK'
    , COMPLETE_TASK = 'COMPLETE_TASK';

export default function reducer(state=initialState, action) {
  switch(action.type) {
    case GET_TASKS + '_FULFILLED':
      return Object.assign({}, state, { tasks: action.payload });
    case ADD_TASK + '_FULFILLED':
      return Object.assign({}, state, { tasks: action.payload });
    case DELETE_TASK + '_FULFILLED':
      return Object.assign({}, state, { tasks: action.payload });
    case COMPLETE_TASK + '_FULFILLED':
      return Object.assign({}, state, { tasks: action.payload });
    case UPDATE_TASK + '_FULFILLED':
      return Object.assign({}, state, { tasks: action.payload });
    default: 
      return state;
  }
}

export function getTasks() {
  const results = axios.get(`https://practiceapi.devmountain.com/api/tasks`)
                       .then(res => res.data);
  return {
    type: GET_TASKS,
    payload: results
  };
}

export function addTask(newTask) {
  const results = axios.post(`https://practiceapi.devmountain.com/api/tasks`, newTask)
                       .then(res => res.data);
  return {
    type: ADD_TASK,
    payload: results
  };
}

export function deleteTask(taskId) {
  const results = axios.delete(`https://practiceapi.devmountain.com/api/tasks/${taskId}`)
                       .then(res => res.data);
  return {
    type: DELETE_TASK,
    payload: results
  };
}

export function completeTask(taskId) {
  const results = axios.put(`https://practiceapi.devmountain.com/api/tasks/${taskId}`)
                       .then(res => res.data);
  return {
    type: COMPLETE_TASK,
    payload: results
  }
}

export function updateTask(taskId, newProperties) {
  console.log('HERE', taskId, newProperties);
  const results = axios.patch(`https://practiceapi.devmountain.com/api/tasks/${taskId}`, newProperties)
                       .then(res => res.data);
  return {
    type: COMPLETE_TASK,
    payload: results
  }
}