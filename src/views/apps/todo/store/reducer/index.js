// ** Initial State
const initialState = {
  selectedCalendars: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13'],
  tasks: [],
  selectedTask: {},
  params: {
    filter: '',
    q: '',
    sort: '',
    tag: ''
  }
}

const TodoReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_TASKS':
      return { ...state, tasks: action.tasks, params: action.params }
    case 'UPDATE_TASKS':
      return { ...state }
    case 'REORDER_TASKS':
      return { ...state, tasks: action.tasks }
    case 'SELECT_TASK':
      return { ...state, selectedTask: action.task }

      case 'UPDATE_FILTERS':
        // ** Updates Filters based on action filter
        const filterIndex = state.selectedCalendars.findIndex(i => i === action.filter)
        if (state.selectedCalendars.includes(action.filter)) {
          state.selectedCalendars.splice(filterIndex, 1)
        } else {
          state.selectedCalendars.push(action.filter)
        }
        if (state.selectedCalendars.length === 0) {
          state.events.length = 0
        }
        return { ...state }
      case 'UPDATE_ALL_FILTERS':
        // ** Updates All Filters based on action value
        const value = action.value
        let selected = []
        if (value === true) {
          selected = ['02', '01', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13']
        } else {
          selected = []
        }
        return { ...state, selectedCalendars: selected }  
        
    default:
      return state
  }
}
export default TodoReducer
