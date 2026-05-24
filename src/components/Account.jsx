import React from 'react'
import {UserAuth} from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const Account = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();
    const handlelogOut = async () => {
        try {
            await logOut();
            navigate('/')
            console.log('You are logged out')
        } catch (e) {
            console.log(e.message)
        }
    }

  return (
    <div className='max-w-[600px] mx-auto my-16 p-4'>
        <h1 className='text-2xl font-bold py-2'>Welcome to Your Account</h1>
        <p className='py-2'>This is a protected page that only authenticated users can access.</p>
        <p className='py-2'>User Email: {user?.email}</p>
        <button onClick={handlelogOut}
            className='px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500'>
            Sign Out
        </button>
    </div>
  )
}

export default Account