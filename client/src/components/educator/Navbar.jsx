import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../../assets/assets'
import { UserButton, useUser } from '@clerk/clerk-react'

const Navbar = () => {
  const { user } = useUser()

  return (
    <div className='flex justify-between items-center px-4 py-2 shadow-md'>
      <Link to='/'>
        <img src={assets.logo} alt="Logo" className='w-28 lg:w-32' />
      </Link>
      <div className='flex items-center gap-5 text-gray-500'>
        <p>Hi {user ? user.fullName : 'Developer'}</p>
        {user ? (
          <UserButton />
        ) : (
          <img className='max-w-8' src={assets.profile_img} alt="Guest Profile" />
        )}
      </div>
    </div>
  )
}

export default Navbar
