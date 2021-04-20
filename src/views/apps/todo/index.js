// ** React Imports
import { Fragment, useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

// ** Third Party Components
import classnames from 'classnames'

// ** Todo App Components
import Tasks from './Tasks'
import Sidebar from './Sidebar'
import TaskSidebar from './TaskSidebar'
import CardContainer from './CardContainer'
// ** Store & Actions
import { useDispatch, useSelector } from 'react-redux'
import { 
  getTasks, 
  updateTask,
  selectTask,
  addTask,
  deleteTask,
  reOrderTasks,
  updateFilter,
  updateAllFilters 
} from './store/actions'

// ** Styles
import '@styles/react/apps/app-todo.scss'
import TermsRecord from './TermsRecord'

const TODO = () => {
  // ** States
  const [sort, setSort] = useState('')
  const [query, setQuery] = useState('')
  const [mainSidebar, setMainSidebar] = useState(false)
  const [openTaskSidebar, setOpenTaskSidebar] = useState(false)

  // ** Store Vars
  const dispatch = useDispatch()
  const store = useSelector(state => state.todo)
  console.log(store)
  // ** URL Params
  const paramsURL = useParams()
  const params = {
    filter: paramsURL.filter || '',
    q: query || '',
    sortBy: sort || '',
    tag: paramsURL.tag || ''
  }
  const [toggleAction, setToggleAction] = useState(true)

  // ** Function to handle Left sidebar & Task sidebar
  const handleMainSidebar = () => setMainSidebar(!mainSidebar)
  const handleTaskSidebar = () => setOpenTaskSidebar(!openTaskSidebar)

  // ** Get Tasks on mount & based on dependency change
  useEffect(() => {
    dispatch(
      getTasks({
        filter: paramsURL.filter || '',
        q: query || '',
        sortBy: sort || '',
        tag: paramsURL.tag || ''
      })
    )
  }, [store.tasks.length, paramsURL.filter, paramsURL.tag, query, sort])

  return (
    <Fragment>
      {
        toggleAction ? <> 
      <Sidebar
        store={store}
        params={params}
        getTasks={getTasks}
        dispatch={dispatch}
        mainSidebar={mainSidebar}
        urlFilter={paramsURL.filter}
        setMainSidebar={setMainSidebar}
        handleTaskSidebar={handleTaskSidebar}
        updateFilter={updateFilter}
        updateAllFilters={updateAllFilters}
      />
      <div className='content-right'>
        <div className='content-wrapper  '>
          <div className='content-body bg-white overflow-auto'>

          <div
              className={classnames('body-content-overlay', {
                show: mainSidebar === true
              })}
              onClick={handleMainSidebar}
            ></div>

            {/* reUse component */}
            <div className="pt-2 px-2">
           <div className="col-12">
           {/* here */}
              <CardContainer grade={"01"} />
              <CardContainer grade={"02"} />
              <CardContainer grade={"03"} />
              <CardContainer grade={"04"} />
              </div>
           </div>

           {/* here */}
            <TaskSidebar
              store={store}
              params={params}
              addTask={addTask}
              dispatch={dispatch}
              open={openTaskSidebar}
              updateTask={updateTask}
              selectTask={selectTask}
              deleteTask={deleteTask}
              handleTaskSidebar={handleTaskSidebar}
            />
          </div>
        </div>
      </div>
      </> :  <TermsRecord/>}

    </Fragment>
  )
}

export default TODO
