// ** React Imports
import { Link } from 'react-router-dom'
import React, {useSelector} from 'react-redux'
// ** Third Party Components
import classnames from 'classnames'
import PerfectScrollbar from 'react-perfect-scrollbar'
import { Button, ListGroup, ListGroupItem, CustomInput } from 'reactstrap'
import { Mail, Star, Check, Trash, Plus } from 'react-feather'

const TodoSidebar = props => {

  // ** Props
  const { handleTaskSidebar, setMainSidebar, mainSidebar, dispatch, getTasks, params, store, updateFilter, updateAllFilters} = props

  // ** Functions To Handle List Item Filter
  const handleFilter = filter => {
    dispatch(getTasks({ ...params, filter }))
  }

  const handleTag = tag => {
    dispatch(getTasks({ ...params, tag }))
  }

  // ** Functions To Active List Item
  const handleActiveItem = value => {
    if ((params.filter && params.filter === value) || (params.tag && params.tag === value)) {
      return true
    } else {
      return false
    }
  }

  
  // ** Functions To Handle Add Task Click
  const handleAddClick = () => {
    handleTaskSidebar()
    setMainSidebar()
  }
  
  // ** Filters Checkbox Array
  const filters = [
    { label: '01', color: 'danger', className: 'custom-control-danger mb-1 mr-1' },
    { label: '02', color: 'danger', className: 'custom-control-danger mb-1 mr-1' },
    { label: '03', color: 'danger', className: 'custom-control-danger mb-1 mr-1' },
    { label: '04', color: 'warning', className: 'custom-control-warning mb-1 mr-1' },
    { label: '05', color: 'warning', className: 'custom-control-warning mb-1 mr-1' },
    { label: '06', color: 'warning', className: 'custom-control-warning mb-1 mr-1' },
    { label: '07', color: 'primary', className: 'custom-control-primary mb-1 mr-1' },
    { label: '08', color: 'primary', className: 'custom-control-primary mb-1 mr-1' },
    { label: '09', color: 'primary', className: 'custom-control-primary mb-1 mr-1' },
    { label: '10', color: 'success', className: 'custom-control-success mb-1 mr-1' },
    { label: '11', color: 'success', className: 'custom-control-success mb-1  mr-1' },
    { label: '12', color: 'success', className: 'custom-control-success mb-1  mr-1' },
    { label: '13', color: 'info', className: 'custom-control-info mb-1  mr-1' }

  ]

  const selectedCalendars = useSelector(state => state.todo.selectedCalendars)

  return (
    <div
      className={classnames('sidebar-left', {
        show: mainSidebar === true
      })}
    >
      <div className='sidebar'>
        <div className='sidebar-content todo-sidebar'>
          <div className='todo-app-menu'>
            <div className='add-task'>
              <Button.Ripple color='primary' onClick={handleAddClick} block>
                Add Classes
              </Button.Ripple>
             
            </div>
            {/*  here */}
           <div className=" mt-1 mx-2">
              <h5 className='section-label mb-1 '>
                    <span className='align-middle'>Filter</span>
                </h5>

                    <CustomInput
                      type='checkbox'
                      className='mb-1'
                      label='View All'
                      id='view-all'
                      checked={selectedCalendars.length === filters.length}
                      onChange={e => dispatch(updateAllFilters(e.target.checked))}
                    />
                    <div className='calendar-events-filter d-flex justify-content-between pl-1 pr-5 row'>
                      {filters.length &&
                        filters.map(filter => {
                          return (
                            <CustomInput
                              type='checkbox'
                              key={filter.label}
                              id={filter.label}
                              label={filter.label}
                              checked={selectedCalendars.includes(filter.label)}
                              className={classnames({
                                [filter.className]: filter.className
                              })}
                              onChange={e => dispatch(updateFilter(filter.label))}
                            />
                          )
                        })}
                    </div>
           </div>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default TodoSidebar
