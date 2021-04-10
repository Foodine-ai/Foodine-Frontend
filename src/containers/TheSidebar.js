import React from 'react'
import logo from '../containers/overlay.png'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav'

const TheSidebar = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return (
    <CSidebar
      id="sidebar"
      show={show}
      onShowChange={(val) => dispatch({ type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/" style={{ backgroundColor: 'white' }}>
        <img src={logo} className="logo-img" />
      </CSidebarBrand>
      <CSidebarNav id="navbar-white">
        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
        <div className="attend">
          <div className="attend-inner">
            <h5>Add attendance</h5>
            <p>Add csv/xslx attendance files to update attendance and refresh stats</p>
            <button id="body-card">Add Data</button>
          </div>
        </div>
      </CSidebarNav>
    </CSidebar>
  )
}

export default React.memo(TheSidebar)
