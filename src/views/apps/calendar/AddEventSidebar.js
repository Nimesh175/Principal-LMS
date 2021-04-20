// ** React Imports
import { Fragment, useState } from 'react'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import classnames from 'classnames'
import { toast } from 'react-toastify'
import Flatpickr from 'react-flatpickr'
import { X, Check, Trash } from 'react-feather'
import Select, { components } from 'react-select'
import { useForm, Controller } from 'react-hook-form'
import { Button, Modal, ModalHeader, ModalBody, FormGroup, Label, CustomInput, Input, Form } from 'reactstrap'

// ** Utils
import { selectThemeColors, isObjEmpty } from '@utils'

// ** Avatar Images
import img1 from '@src/assets/images/avatars/2-small.png'
import img2 from '@src/assets/images/avatars/10-small.png'
// import img3 from '@src/assets/images/avatars/2-small.png'
// import img4 from '@src/assets/images/avatars/10-small.png'
// import img5 from '@src/assets/images/avatars/2-small.png'
// import img6 from '@src/assets/images/avatars/10-small.png'

// ** Styles Imports
import '@styles/react/libs/react-select/_react-select.scss'
import '@styles/react/libs/flatpickr/flatpickr.scss'

// ** Toast Component
const ToastComponent = ({ title, icon, color }) => (
  <Fragment>
    <div className='toastify-header pb-0'>
      <div className='title-wrapper'>
        <Avatar size='sm' color={color} icon={icon} />
        <h6 className='toast-title'>{title}</h6>
      </div>
    </div>
  </Fragment>
)

const AddEventSidebar = props => {
  // ** Props
  const {
    store,
    dispatch,
    open,
    handleAddEventSidebar,
    calendarsColor,
    calendarApi,
    refetchEvents,
    addEvent,
    selectEvent,
    updateEvent,
    removeEvent
  } = props

  // ** Vars
  const selectedEvent = store.selectedEvent
  const { register, errors, handleSubmit } = useForm()

  // ** States
  const [url, setUrl] = useState('')
  const [desc, setDesc] = useState('')
  const [title, setTitle] = useState('')
  const [grade, setGrade] = useState('')
  const [classX, setClassX] = useState('')

  const [toggleDropdownT, setToggleDropdownT] = useState(false)
  const [toggleDropdownL, setToggleDropdownL] = useState(false)

  const [teacher, setTeacher] = useState({})
  const [lesson, setLesson] = useState({})
  const [content, setContent] = useState({})
  const [allDay, setAllDay] = useState(false)
  const [location, setLocation] = useState('')
  const [endPicker, setEndPicker] = useState(new Date())
  const [startPicker, setStartPicker] = useState(new Date())
  const [value, setValue] = useState([{ value: 'Business', label: 'Business', color: 'primary' }])

  
  const teacherOptions = [
    { value: 'Nuwan Perera', label: 'Nuwan Perera', avatar: img1 },
    { value: 'Ashen Rathnayaka', label: 'Ashen Rathnayaka', avatar: img2 },
    { value: 'Suneth Kasun', label: 'Suneth Kasun', avatar: img1 },
    { value: 'Tharindu Werarathna', label: 'Tharindu Werarathna', avatar: img2 },
    { value: 'Mohommad Hurran', label: 'Mohommad Hurran', avatar: img1 },
    { value: 'Jevan Mendis', label: 'Jevan Mendis', avatar: img2 }
  ]
  const lessonOptions = [
    { value: 'Mathematics L1', label: 'Mathematics L1', avatar: img1 },
    { value: 'Mathematics L2', label: 'Mathematics L2', avatar: img2 },
    { value: 'Mathematics L3', label: 'Mathematics L3', avatar: img1 },
    { value: 'Mathematics L4', label: 'Mathematics L4', avatar: img2 },
    { value: 'Mathematics L5', label: 'Mathematics L6', avatar: img1 },
    { value: 'Mathematics L6', label: 'Mathematics L6', avatar: img2 }
  ]
  const contentOptions = [
    { value: 'Mathematics Content v1', label: 'Mathematics Content v1', avatar: img1 },
    { value: 'Mathematics Content v2', label: 'Mathematics Content v2', avatar: img2 },
    { value: 'Mathematics Content v3', label: 'Mathematics Content v3', avatar: img1 },
    { value: 'Mathematics Content v4', label: 'Mathematics Content v4', avatar: img2 },
    { value: 'Mathematics Content v5', label: 'Mathematics Content v5', avatar: img1 },
    { value: 'Mathematics Content v6', label: 'Mathematics Content v6', avatar: img2 }
  ]


  const TeachersComponent = ({ data, ...props }) => {
    return (
      <components.Option {...props}>
        <div className='d-flex flex-wrap align-items-center'>
          <Avatar className='my-0 mr-1' size='sm' img={data.avatar} />
          <div>{data.label}</div>
        </div>
      </components.Option>
    )
  }

  // ** Adds New Event
  const handleAddEvent = () => {
    const obj = {
      title,
      start: startPicker,
      end: endPicker,
      allDay,
      display: 'block',
      extendedProps: {
        calendar: value[0].label,
        url: url.length ? url : undefined,
        teacher: teacher.length ? teacher : undefined,
        lesson: lesson.length ? lesson : undefined,
        content: content.length ? content : undefined,
        location: location.length ? location : undefined,
        desc: desc.length ? desc : undefined
      }
    }
    dispatch(addEvent(obj))
    refetchEvents()
    handleAddEventSidebar()
    toast.success(<ToastComponent title='Event Successfully' color='success' icon={<Check />} />, {
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  // ** Reset Input Values on Close
  const handleResetInputValues = () => {
    dispatch(selectEvent({}))
    setTitle('')
    setAllDay(false)
    setUrl('')
    setLocation('')
    setDesc('')
    setTeacher({})
    setLesson({})
    setContent({})
    setValue([{ value: 'Business', label: 'Business', color: 'primary' }])
    setStartPicker(new Date())
    setEndPicker(new Date())
  }

  // ** Set sidebar fields
  const handleSelectedEvent = () => {
    if (!isObjEmpty(selectedEvent)) {
      const calendar = selectedEvent.extendedProps.calendar

      const resolveLabel = () => {
        if (calendar.length) {
          return { label: calendar, value: calendar, color: calendarsColor[calendar] }
        } else {
          return { value: 'Business', label: 'Business', color: 'primary' }
        }
      }
      setTitle(selectedEvent.title || title)
      setAllDay(selectedEvent.allDay || allDay)
      setUrl(selectedEvent.url || url)
      setLocation(selectedEvent.extendedProps.location || location)
      setDesc(selectedEvent.extendedProps.description || desc)
      setTeacher(selectedEvent.extendedProps.teacher || teacher)
      setLesson(selectedEvent.extendedProps.lesson || lesson)
      setContent(selectedEvent.extendedProps.content || content)
      setStartPicker(new Date(selectedEvent.start))
      setEndPicker(selectedEvent.allDay ? new Date(selectedEvent.start) : new Date(selectedEvent.end))
      setValue([resolveLabel()])
    }
  }

  // ** (UI) updateEventInCalendar
  const updateEventInCalendar = (updatedEventData, propsToUpdate, extendedPropsToUpdate) => {
    const existingEvent = calendarApi.getEventById(updatedEventData.id)

    // ** Set event properties except date related
    // ? Docs: https://fullcalendar.io/docs/Event-setProp
    // ** dateRelatedProps => ['start', 'end', 'allDay']
    // ** eslint-disable-next-line no-plusplus
    for (let index = 0; index < propsToUpdate.length; index++) {
      const propName = propsToUpdate[index]
      existingEvent.setProp(propName, updatedEventData[propName])
    }

    // ** Set date related props
    // ? Docs: https://fullcalendar.io/docs/Event-setDates
    existingEvent.setDates(updatedEventData.start, updatedEventData.end, { allDay: updatedEventData.allDay })

    // ** Set event's extendedProps
    // ? Docs: https://fullcalendar.io/docs/Event-setExtendedProp
    // ** eslint-disable-next-line no-plusplus
    for (let index = 0; index < extendedPropsToUpdate.length; index++) {
      const propName = extendedPropsToUpdate[index]
      existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName])
    }
  }

  // ** Updates Event in Store
  const handleUpdateEvent = () => {
    const eventToUpdate = {
      id: selectedEvent.id,
      title,
      allDay,
      start: startPicker,
      end: endPicker,
      url,
      extendedProps: {
        location,
        description: desc,
        teacher,
        lesson,
        content,
        calendar: value[0].label
      }
    }

    const propsToUpdate = ['id', 'title', 'url']
    const extendedPropsToUpdate = ['calendar', 'teacher', 'lesson', 'content', 'location', 'description']

    dispatch(updateEvent(eventToUpdate))
    updateEventInCalendar(eventToUpdate, propsToUpdate, extendedPropsToUpdate)
    handleAddEventSidebar()
    toast.success(<ToastComponent title='Event Updated' color='success' icon={<Check />} />, {
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  // ** (UI) removeEventInCalendar
  const removeEventInCalendar = eventId => {
    calendarApi.getEventById(eventId).remove()
  }
  const handleDeleteEvent = () => {
    dispatch(removeEvent(selectedEvent.id))
    removeEventInCalendar(selectedEvent.id)
    handleAddEventSidebar()
    toast.error(<ToastComponent title='Event Removed' color='danger' icon={<Trash />} />, {
      autoClose: 2000,
      hideProgressBar: true,
      closeButton: false
    })
  }

  // ** Event Action buttons
  const EventActions = () => {
    if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
      return (
        <Fragment>
          <Button.Ripple className='mr-1' type='submit' color='primary'>
            Add
          </Button.Ripple>
          <Button.Ripple color='secondary' type='reset' onClick={handleAddEventSidebar} outline>
            Cancel
          </Button.Ripple>
        </Fragment>
      )
    } else {
      return (
        <Fragment>
          <Button.Ripple
            className='mr-1'
            color='primary'
            // onClick={handleUpdateEvent}
          >
            Update
          </Button.Ripple>
          <Button.Ripple color='danger' onClick={handleDeleteEvent} outline>
            Delete
          </Button.Ripple>
        </Fragment>
      )
    }
  }

  // ** Close BTN
  const CloseBtn = <X className='cursor-pointer' size={15} onClick={handleAddEventSidebar} />

  return (
    <Modal
      isOpen={open}
      toggle={handleAddEventSidebar}
      className='sidebar-lg'
      contentClassName='p-0'
      onOpened={handleSelectedEvent}
      onClosed={handleResetInputValues}
      modalClassName='modal-slide-in event-sidebar'
    >
      <ModalHeader className='mb-1' toggle={handleAddEventSidebar} close={CloseBtn} tag='div'>
        <h5 className='modal-title'>
          {selectedEvent && selectedEvent.title && selectedEvent.title.length ? 'Update' : 'Add'} Event
        </h5>
      </ModalHeader>
      <ModalBody className='flex-grow-1 pb-sm-0 pb-3'>
        <Form
          onSubmit={handleSubmit(data => {
            if (isObjEmpty(errors)) {
              if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
                handleAddEvent()
              } else {
                handleUpdateEvent()
              }
              handleAddEventSidebar()
            }
          })}
        >
          <FormGroup>
            <Label for='title'>
              Title <span className='text-danger'>*</span>
            </Label>
            <Input
              id='title'
              name='title'
              placeholder='Title'
              value={title}
              onChange={e => setTitle(e.target.value)}
              innerRef={register({ register: true, validate: value => value !== '' })}
              className={classnames({
                'is-invalid': errors.title
              })}
            />
          </FormGroup>

          <FormGroup>
            <Label for='grade'>
              Grade <span className='text-danger'>*</span>
            </Label>
            <Input
              id='grade'
              name='grade'
              placeholder='Grade'
              value={grade}
              onChange={e => setGrade(e.target.value)}
              innerRef={register({ register: true, validate: value => value !== '' })}
              className={classnames({
                'is-invalid': errors.title
              })}
            />
          </FormGroup>

          <FormGroup>
            <Label for='class'>
              Class <span className='text-danger'>*</span>
            </Label>
            <Input
              id='class'
              name='class'
              placeholder='Class'
              value={classX}
              onChange={e => setClassX(e.target.value)}
              innerRef={register({ register: true, validate: value => value !== '' })}
              className={classnames({
                'is-invalid': errors.title
              })}
            />
          </FormGroup>


          <FormGroup>
            <Label for='startDate'>Start Date & Time</Label> <span className='text-danger'>*</span>
            <Flatpickr
              required
              id='startDate'
              // tag={Flatpickr}
              name='startDate'
              className='form-control'
              onChange={date => setStartPicker(date[0])}
              value={startPicker}
              options={{
                enableTime: allDay === false,
                dateFormat: 'Y-m-d H:i'
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for='endDate'>End Date & Time</Label> <span className='text-danger'>*</span>
            <Flatpickr
              required
              id='endDate'
              // tag={Flatpickr}
              name='endDate'
              className='form-control'
              onChange={date => setEndPicker(date[0])}
              value={endPicker}
              options={{
                enableTime: allDay === false,
                dateFormat: 'Y-m-d H:i'
              }}
            />
          </FormGroup>

          <FormGroup>
            <Label for='teacher'>Teacher</Label> <span className='text-danger'>*</span>
            <Select
              id='teacher'
              className='react-select'
              classNamePrefix='select'
              isClearable={false}
              options={teacherOptions}
              theme={selectThemeColors}
              value={teacher !== null ? teacher : null}
              onChange={ data => setTeacher(data)}
              onMenuOpen={() => setToggleDropdownT(true)}
              onMenuClose={() => setToggleDropdownT(false)}
              components={{
                Option: TeachersComponent
              }}
            />
          </FormGroup>

          { !toggleDropdownT ? <> 
            <FormGroup>
              <Label for='lesson'>Lessons</Label> <span className='text-danger'>*</span>
              <Select
                isMulti
                id='lesson'
                className='react-select'
                classNamePrefix='select'
                isClearable={false}
                options={lessonOptions}
                theme={selectThemeColors}
                value={lesson.length ? [...lesson] : null}
                onChange={data => setLesson([...data])}
                onMenuOpen={() => setToggleDropdownL(true)}
                onMenuClose={() => setToggleDropdownL(false)}
                // components={{
                //   Option: GuestsComponent
                // }}
              />
            </FormGroup>

                { !toggleDropdownL ? <FormGroup>
                    <Label for='content'>Contents</Label> <span className='text-danger'>*</span>
                    <Select
                      isMulti
                      id='content'
                      className='react-select'
                      classNamePrefix='select'
                      isClearable={false}
                      options={contentOptions}
                      theme={selectThemeColors}
                      value={content.length ? [...content] : null}
                      onChange={data => setContent([...data])}
                      // components={{
                      //   Option: GuestsComponent
                      // }}
                    />
                  </FormGroup> : null
                } 
           </> : null
          }

        <FormGroup className='d-flex mt-3 mb-3'>
          <EventActions />
        </FormGroup> 
                
        </Form>
      </ModalBody>
    </Modal>
  )
}

export default AddEventSidebar
