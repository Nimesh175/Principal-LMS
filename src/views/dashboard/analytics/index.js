import { useContext } from 'react'
import { kFormatter } from '@utils'
import Avatar from '@components/avatar'
import AvatarGroup from '@components/avatar-group'
import jsonImg from '@src/assets/images/icons/json.png'
import InvoiceList from '@src/views/apps/invoice/list'
import ceo from '@src/assets/images/portrait/small/avatar-s-9.jpg'
import { ThemeColors } from '@src/utility/context/ThemeColors'
import AvgSessions from '@src/views/ui-elements/cards/analytics/AvgSessions'
import SupportTracker from '@src/views/ui-elements/cards/analytics/SupportTracker'
import { Row, Col, Card, CardHeader, CardTitle, CardBody, Media } from 'reactstrap'
import OrdersReceived from '@src/views/ui-elements/cards/statistics/OrdersReceived'
import CardCongratulations from '@src/views/ui-elements/cards/advance/CardCongratulations'
import SubscribersGained from '@src/views/ui-elements/cards/statistics/SubscribersGained'
import HorizontalBarChart from '../../charts/chart-js/ChartjsHorizontalBar'

import '@styles/react/libs/charts/apex-charts.scss'

const AnalyticsDashboard = () => {
  const { colors } = useContext(ThemeColors)
  const labelColor = 'red'
  const tooltipShadow = 'rgba(0, 0, 0, 0.25)'
  const gridLineColor = 'rgba(200, 200, 200, 0.2)'

  const avatarGroupArr = [
      {
        title: 'Billy Hopkins',
        img: require('@src/assets/images/portrait/small/avatar-s-9.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Amy Carson',
        img: require('@src/assets/images/portrait/small/avatar-s-6.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Brandon Miles',
        img: require('@src/assets/images/portrait/small/avatar-s-8.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Daisy Weber',
        img: require('@src/assets/images/portrait/small/avatar-s-7.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      },
      {
        title: 'Jenny Looper',
        img: require('@src/assets/images/portrait/small/avatar-s-20.jpg').default,
        placement: 'bottom',
        imgHeight: 33,
        imgWidth: 33
      }
    ],
    data = [
      {
        title: '12 Payments have been paid',
        content: 'Payments have been paid for all teachers.',
        meta: '',
        metaClassName: 'mr-1',
        customContent: (
          <Media>
            <img className='mr-1' src={jsonImg} alt='data.json' height='23' />
            <Media className='mb-0' body>
              data.json
            </Media>
          </Media>
        )
      },
      {
        title: 'Teachers Meeting',
        content: 'Subject meeting with john @10:15am.',
        meta: '',
        metaClassName: 'mr-1',
        color: 'warning',
        customContent: (
          <Media className='align-items-center'>
            <Avatar img={ceo} />
            <Media className='ml-50' body>
              <h6 className='mb-0'>Nuwan Perera (Mathematics)</h6>
              <span>MBbs.hons Kelaniya Uni.</span>
            </Media>
          </Media>
        )
      },
      {
        title: 'Create a new class for students',
        content: 'Add files to new folder',
        color: 'info',
        meta: '',
        metaClassName: 'mr-1',
        customContent: <AvatarGroup data={avatarGroupArr} />
      }
    ]

  return (
    <div id='dashboard-analytics'>
      <Row className='match-height'>
        <Col lg='6' sm='12'>
          <CardCongratulations />
        </Col>
        <Col lg='3' sm='6'>
          <SubscribersGained kFormatter={kFormatter} />
        </Col>
        <Col lg='3' sm='6'>
          <OrdersReceived kFormatter={kFormatter} warning={colors.warning.main} />
        </Col>
      </Row>
      
      <Row className='match-height'>
          <Col lg='6' sm='12'>
          <HorizontalBarChart
                info={colors.info.main}
                labelColor={labelColor}
                tooltipShadow={tooltipShadow}
                gridLineColor={gridLineColor}
              />
          </Col>

          <Row className='match-height'>
                <Col lg='12' xs='12'>
                  <AvgSessions primary={colors.primary.main} />
                </Col>

                <Col lg='12' xs='12'>
                  <SupportTracker primary={colors.primary.main} danger={colors.danger.main} />
                </Col>
              </Row>

      </Row>

      <Row className='match-height'>
        <Col xs='12'>
          <InvoiceList />
        </Col>
      </Row>
    </div>
  )
}

export default AnalyticsDashboard
