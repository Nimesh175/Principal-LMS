// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import chat from '@src/views/apps/chat/store/reducer'
import Notification from '@src/views/apps/managenotifucations/store/reducer'
import todo from '@src/views/apps/todo/store/reducer'
import subject from '@src/views/apps/subject/store/reducer'
import users from '@src/views/apps/user/store/reducer'
import invoice from '@src/views/apps/invoice/store/reducer'
import calendar from '@src/views/apps/calendar/store/reducer'
import dataTables from '@src/views/tables/data-tables/store/reducer'

const rootReducer = combineReducers({
  auth,
  todo,
  subject,
  chat,
  users,
  navbar,
  layout,
  invoice,
  calendar,
  dataTables,
  Notification
})

export default rootReducer
