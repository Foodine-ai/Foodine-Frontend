import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav = [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
  },

  {
    _tag: 'CSidebarNavItem',
    name: 'Add Data',
    to: '/theme/colors',
    icon: 'cil-graph',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Predict',
    to: '/theme/colors',
    icon: 'cil-graph',
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Alerts',
    to: '/theme/colors',
    icon: 'cil-graph',
  }
  
]

export default _nav