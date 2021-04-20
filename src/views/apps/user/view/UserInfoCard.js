// ** React Imports
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Third Party Components
import { Card, CardBody, CardText, Button, Row, Col, Container } from 'reactstrap'
import { DollarSign, TrendingUp, User, Check, Star, Flag, Phone, Mail } from 'react-feather'

const UserInfoCard = ({ selectedUser }) => {
  // ** render user img
  const renderUserImg = () => {
    if (selectedUser !== null && selectedUser.avatar.length) {
      return <img src={selectedUser.avatar} alt='user-avatar' className='img-fluid rounded' height='104' width='104' />
    } else {
      const stateNum = Math.floor(Math.random() * 6),
        states = ['light-success', 'light-danger', 'light-warning', 'light-info', 'light-primary', 'light-secondary'],
        color = states[stateNum]
      return (
        <Avatar
          initials
          color={color}
          className='rounded d-md-flex  col-12 col-sm-12 col-md-2  mb-1'
          content={"Nuwan Pradeep"}
          contentStyles={{
            borderRadius: 0,
            fontSize: 'calc(36px)',
            width: '100%',
            height: '100%'
          }}
          style={{
            height: '90px',
            width: '90px'
          }}
        />
      )
    }
  }

  return (
      <Card >
          <CardBody>
            <Row>
              <Col  xl='12' lg='12' className='d-flex flex-column justify-content-between border-container-lg'>
                <div className='user-avatar-section'>
                  <div className='d-md-flex justify-content-start'>
                    {renderUserImg()}
                    <div className='d-md-flex flex-column ml-1   '>
                      <div className='user-info mb-1 mt-0'>
                        <h4 className='mb-0 '>{"Nuwan Pradeep"}</h4>
                       
                          <CardText tag='span' className="mb-1">
                            {'nuwanpradeep2021@gmail.com'}
                          </CardText>
                        
                          <div className='d-md-flex flex-wrap align-items-center mt-1'>
                            <Button.Ripple tag={Link} to={`/apps/user/edit/${selectedUser.id}`} color='primary'>
                              Edit
                            </Button.Ripple>
                            <Button.Ripple className='ml-1' color='danger' outline>
                              Delete
                            </Button.Ripple>
                          </div>
                      </div>
                        
                    </div>
                  </div>
                </div>
              
              </Col>
              {/* break > */}
              <Col xl='7' lg='12' className='mt-2 mt-xl-2'>
                <div className='user-info-wrapper'>
                  <div className='d-flex flex-wrap align-items-left '>
                    <div className='user-info-title col-12 col-md-3'>
                      <User className='mr-1' size={14} />
                      <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                        FullName
                      </CardText>
                    </div>
                    <CardText className='col-12 col-md-8 pl-3 pl-md-0 '>
                      {"Nuwan Pradeep"}
                    </CardText>
                  </div>
                  
                  <div className='d-flex flex-wrap align-items-left my-50'>
                    <div className='user-info-title col-12 col-md-3'>
                      <Star className='mr-1' size={14} />
                      <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                        NIC No
                      </CardText>
                    </div>
                    <CardText className='text-capitalize col-12 col-md-8 pl-3 pl-md-0 '>
                      {"9977665521V"}
                    </CardText>
                  </div>

                  <div className='d-flex flex-wrap align-items-left my-50'>
                    <div className='user-info-title col-12 col-md-3'>
                      <TrendingUp className='mr-1' size={14} />
                      <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                        DOB
                      </CardText>
                    </div>
                    <CardText className='text-capitalize col-12 col-md-8 pl-3 pl-md-0 '>
                      {'2000/01/01'}
                    </CardText>
                  </div>

                  <div className='d-flex flex-wrap align-items-left my-50'>
                    <div className='user-info-title col-12 col-md-3'>
                      <Mail className='mr-1' size={14} />
                      <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                        Email
                      </CardText>
                    </div>
                    <CardText className='col-12 col-md-8 pl-3 pl-md-0  '>{"nuwanpradeep2021@gmail.com"}</CardText>
                  </div>

                  <div className='d-flex flex-wrap align-items-left'>
                    <div className='user-info-title col-12 col-md-3 '>
                      <Phone className='mr-1 ' size={14} />
                      <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                        Contact
                      </CardText>
                    </div>
                    <CardText className='col-12 col-md-8 pl-3 pl-md-0 '>{ '(+94) 772233121'}</CardText>
                  </div>

                  <div className='d-flex flex-wrap align-items-left my-50'>
                    <div className='user-info-title  col-12 col-md-3 '>
                      <Mail className=' mr-1' size={14} />
                      <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                        Address
                      </CardText>
                    </div>
                    <CardText className=' col-12 col-md-8 pl-3 pl-md-0 '>{"199 / A / 22, Sananayaka, Pitadeniya, Araliya Road, Galle, 80000"}</CardText>
                  </div>

                  <div className='d-flex flex-wrap align-items-left my-50'>
                    <div className='user-info-title  col-12 col-md-3 '>
                      <Mail className=' mr-1' size={14} />
                      <CardText tag='span' className='user-info-title font-weight-bold mb-0'>
                        Class
                      </CardText>
                    </div>
                    <CardText className=' col-12 col-md-8 pl-3 pl-md-0 '>{"10 B"}</CardText>
                  </div>

                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
    
  )
}

export default UserInfoCard
