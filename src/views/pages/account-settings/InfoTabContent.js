import { Fragment, useState } from 'react'
import classnames from 'classnames'
import Flatpickr from 'react-flatpickr'
import { useForm, Controller } from 'react-hook-form'
import { Label, Input, FormGroup, Row, Col, Button, Form, Media } from 'reactstrap'
import LOGO from '../../../assets/images/avatars/Ananda_Crest.png'
import '@styles/react/libs/flatpickr/flatpickr.scss'

const InfoTabContent = ({ data }) => {
  const { register, errors, handleSubmit, control, trigger } = useForm({
    defaultValues: { dob: data.dob || new Date() }
  })

  const [avatar, setAvatar] = useState(data.avatar ? data.avatar : '')

  const onChange = e => {
    const reader = new FileReader(),
      files = e.target.files
    reader.onload = function () {
      setAvatar(reader.result)
    }
    reader.readAsDataURL(files[0])
  }

  const onSubmit = data => trigger()

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Row>
      <Col  sm='12'>
        <Media>
          <Media className='mr-25' left>
            <Media object className='rounded mr-50' src={LOGO} alt='Generic placeholder image' height='60' width='60' />
          </Media>
          <Media className='mt-75 ml-1' body>
            <Button.Ripple tag={Label} className='mr-75' size='sm' color='primary'>
              Upload
              <Input type='file' onChange={onChange} hidden accept='image/*' />
            </Button.Ripple>
            <Button.Ripple color='secondary' size='sm' outline>
              Reset
            </Button.Ripple>
            <p>Allowed JPG, GIF or PNG. Max size of 800kB</p>
          </Media>
        </Media>
      </Col>

      <Col sm='6'>
          <FormGroup>
            <Label for='phone'>School Name</Label>
            <Input
              id='phone'
              name='phone'
              placeholder=''
              className={classnames({
                'is-invalid': errors.phone
              })}
              innerRef={register({ required: true })}
            />
          </FormGroup>
        </Col>

        <Col sm='6'>
          <FormGroup>
            <Label for='phone'>Principal Full Name</Label>
            <Input
              id='phone'
              name='phone'
              placeholder=''
              className={classnames({
                'is-invalid': errors.phone
              })}
              innerRef={register({ required: true })}
            />
          </FormGroup>
        </Col>

        <Col sm='12'>
          <FormGroup>
            <Label for='bio'>Address</Label>
            <Controller
              id='bio'
              rows='4'
              as={Input}
              name='bio'
              type='textarea'
              control={control}
              defaultValue={data.bio || ''}
              placeholder='No 12, Colombo Road, Galle, Sri Lanka'
              innerRef={register({ required: true })}
              className={classnames({ 'is-invalid': errors.bio })}
            />
          </FormGroup>
        </Col>
            
        {/* <Col sm='6'>
          <FormGroup>
            <Label for='website'>Website</Label>
            <Input
              type='url'
              id='website'
              name='website'
              defaultValue={data.website || ''}
              placeholder='Website Address'
              className={classnames({
                'is-invalid': errors.website
              })}
              innerRef={register({ required: true })}
            />
          </FormGroup>
        </Col> */}
        <Col sm='6'>
          <FormGroup>
            <Label for='phone'>Phone</Label>
            <Input
              id='phone'
              name='phone'
              placeholder='Phone Number'
              className={classnames({
                'is-invalid': errors.phone
              })}
              innerRef={register({ required: true })}
            />
          </FormGroup>
        </Col>
        <Col className='mt-1' sm='12'>
          <Button.Ripple className='mr-1' color='primary'>
            Save changes
          </Button.Ripple>
          <Button.Ripple color='secondary' outline>
            Cancel
          </Button.Ripple>
        </Col>
      </Row>
    </Form>
  )
}

export default InfoTabContent
