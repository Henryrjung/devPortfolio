import './layout.scss'

import Nav from '../nav/nav'
import { Outlet } from 'react-router-dom'

export default function layout() {
  return (
    <div className='layout'>
      <Nav />
      <div className="page">
        <Outlet />
      </div>
    </div>
  )
}


