import { lazy } from 'react'
import { Redirect } from 'react-router-dom'

const AppRoutes = [
  
  {
    path: '/apps/chat',
    appLayout: true,
    className: 'chat-application',
    component: lazy(() => import('../../views/apps/chat'))
  },
  {
    path: '/apps/classes',
    exact: true,
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo'))
  },
  {
    path: '/apps/classes/more/1',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo/TermsRecord'))
  },


  {
    path: '/apps/classes/:filter',
    appLayout: true,
    exact: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/classes'
    }
  },
  {
    path: '/apps/classes/tag/:tag',
    appLayout: true,
    className: 'todo-application',
    component: lazy(() => import('../../views/apps/todo')),
    meta: {
      navLink: '/apps/classes'
    }
  },
  {
    path: '/apps/calendar',
    component: lazy(() => import('../../views/apps/calendar'))
  },
  {
    path: '/apps/subject',
    exact: true,
    appLayout: true,
    className: 'subject-application',
    component: lazy(() => import('../../views/apps/subject'))
  },
  {
    path: '/apps/subject/:filter',
    appLayout: true,
    exact: true,
    className: 'subject-application',
    component: lazy(() => import('../../views/apps/subject')),
    meta: {
      navLink: '/apps/subject'
    }
  },
  {
    path: '/apps/subject/tag/:tag',
    appLayout: true,
    className: 'subject-application',
    component: lazy(() => import('../../views/apps/subject')),
    meta: {
      navLink: '/apps/subject'
    }
  },
  {
    path: '/apps/invoice/list',
    component: lazy(() => import('../../views/apps/invoice/list'))
  },
  {
    path: '/apps/invoice/preview/:id',
    component: lazy(() => import('../../views/apps/invoice/preview')),
    meta: {
      navLink: '/apps/invoice/preview'
    }
  },
  {
    path: '/apps/invoice/preview',
    exact: true,
    component: () => <Redirect to='/apps/invoice/preview/4987' />
  },
  {
    path: '/apps/invoice/edit/:id',
    component: lazy(() => import('../../views/apps/invoice/edit')),
    meta: {
      navLink: '/apps/invoice/edit'
    }
  },
  {
    path: '/apps/invoice/edit',
    exact: true,
    component: () => <Redirect to='/apps/invoice/edit/4987' />
  },
  {
    path: '/apps/invoice/add',
    component: lazy(() => import('../../views/apps/invoice/add'))
  },
  {
    path: '/apps/invoice/print',
    layout: 'BlankLayout',
    component: lazy(() => import('../../views/apps/invoice/print'))
  },
  {
    path: '/apps/user/list',
    component: lazy(() => import('../../views/apps/user/list'))
  },
  {
    path: '/apps/user/edit',
    exact: true,
    component: () => <Redirect to='/apps/user/edit/1' />
  },
  {
    path: '/apps/user/edit/:id',
    component: lazy(() => import('../../views/apps/user/edit')),
    meta: {
      navLink: '/apps/user/edit'
    }
  },
  {
    path: '/apps/user/view',
    exact: true,
    component: () => <Redirect to='/apps/user/view/1' />
  },
  // {
  //   path: '/apps/user/view/more/1',
  //   exact: true,
  //   component: () => <Redirect to='/apps/user/view/1' />
  // },
  {
    path: '/apps/user/view/:id',
    component: lazy(() => import('../../views/apps/user/view')),
    meta: {
      navLink: '/apps/user/view'
    }
  },
  {
    path: '/dashboard/main',
    component: lazy(() => import('../../views/dashboard/analytics/index'))
  }
]

export default AppRoutes
