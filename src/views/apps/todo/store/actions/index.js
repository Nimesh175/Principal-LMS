import axios from 'axios'

// ** Get Tasks
export const getTasks = params => {
  return dispatch => {
    return axios.get('/apps/classes/tasks', { params }).then(res => {
      dispatch({
        type: 'GET_TASKS',
        tasks: res.data,
        params
      })
    })
  }
}

// ** Re-order Tasks on drag
export const reOrderTasks = tasks => dispatch => dispatch({ type: 'REORDER_TASKS', tasks })

// ** ADD Task
export const addTask = task => {
  return (dispatch, getState) => {
    axios
      .post('/apps/classes/add-tasks', { task })
      .then(res => {
        dispatch({
          type: 'ADD_TASK',
          task: res.data
        })
      })
      .then(dispatch(getTasks(getState().todo.params)))
  }
}

// ** Update Tasks
export const updateTask = task => {
  return (dispatch, getState) => {
    axios
      .post('/apps/classes/update-task', { task })
      .then(res => {
        dispatch({
          type: 'UPDATE_TASK',
          task: res.data
        })
      })
      .then(dispatch(getTasks(getState().todo.params)))
  }
}

// ** Delete Task
export const deleteTask = taskId => {
  return (dispatch, getState) => {
    axios
      .delete('/apps/classes/delete-task', { taskId })
      .then(res => {
        dispatch({
          type: 'DELETE_TASK',
          task: res.data
        })
      })
      .then(() => dispatch(getTasks(getState().todo.params)))
  }
}

// ** Fetch Events
export const fetchEvents = calendars => {
  return dispatch => {
    axios.get('/apps/calendar/events', { calendars }).then(response => {
      dispatch({
        type: 'FETCH_EVENTS',
        events: response.data
      })
    })
  }
}
// ** Add Event
export const addEvent = event => {
  return (dispatch, getState) => {
    axios.post('/apps/calendar/add-event', { event }).then(() => {
      dispatch({
        type: 'ADD_EVENT'
      })
      dispatch(fetchEvents(getState().calendar.selectedCalendars))
    })
  }
}

// ** Filter Events
export const updateFilter = filter => {
  return (dispatch, getState) => {
    dispatch({
      type: 'UPDATE_FILTERS',
      filter
    })
    dispatch(fetchEvents(getState().calendar.selectedCalendars))
  }
}

// ** Add/Remove All Filters
export const updateAllFilters = value => {
  return (dispatch, getState) => {
    dispatch({
      type: 'UPDATE_ALL_FILTERS',
      value
    })
    dispatch(fetchEvents(getState().calendar.selectedCalendars))
  }
}

// ** Select Task
export const selectTask = task => dispatch => dispatch({ type: 'SELECT_TASK', task })
