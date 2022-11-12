import React from 'react'
import { Link } from 'react-router-dom'

const navbar = () => {
  return (
    <div>
      <nav>
        <ul className='flex'>
            <li className='mx-2'>
                <Link to='/'>Home</Link>
            </li>
            <li className='mx-2'>
                <Link to='/careers'>Careers</Link>
            </li>
            <li className='mx-2'>
                <Link to='/about'>About</Link>
            </li>
            <li className='mx-2'>
                <Link to='/project'>Project</Link>
            </li>

            <li className='mx-2'>
                <Link to='/contact'>Contact</Link>
            </li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar
