import './home.scss'
import {Link } from 'react-router-dom'

export default function home() {
  return (
    <div className='home'>
      <div className="welcome">
      <h1>Hi I'm,</h1> 
      <h1>Henry Jung</h1> 
      <h2>Full stack developer</h2>

      <Link className='contact-button' to='/contact'>Contact Me</Link>
      </div>
      
    </div>
  )
}
