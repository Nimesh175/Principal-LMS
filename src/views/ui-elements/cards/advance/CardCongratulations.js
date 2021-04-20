import { Award } from 'react-feather'
import Avatar from '@components/avatar'
import { Card, CardBody, CardText } from 'reactstrap'
import decorationLeft from '@src/assets/images/elements/decore-left.png'
import decorationRight from '@src/assets/images/elements/decore-right.png'
import './styles/cardCongratulations.css'

const CardCongratulations = () => {
  return (
    <Card className='card-congratulations' >
      <CardBody  className='text-center' style={{ backgroundColor: '#008083', borderColor: '#008083' }}>
        <img className='congratulations-img-left' src={decorationLeft} alt='decor-left' />
        <img className='congratulations-img-right' src={decorationRight} alt='decor-right' />
        <Avatar icon={<Award size={28} />}   style={{ backgroundColor: 'rgba(255,255,255,0.1)', borderColor: '#008083' }} size='xl' />
        <div className='text-center'>
          <h1 className='mb-1 text-white'>Welcome Ananda College,</h1>
          <CardText className='m-auto w-75'>
            School has been <strong>95%</strong> success in studies from via online.
          </CardText>
        </div>
      </CardBody>
    </Card>
  )
}

export default CardCongratulations
