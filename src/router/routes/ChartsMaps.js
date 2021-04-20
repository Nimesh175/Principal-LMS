import { lazy } from 'react'

const ChartMapsRoutes = [
  
  {
    path: '/charts/chartjs',
    component: lazy(() => import('../../views/charts/chart-js'))
  }
]

export default ChartMapsRoutes
