import React from 'react'
import { useState } from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import { UserAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const { createUser } = UserAuth();

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        try {
            // Sign up logic here
            await createUser(email, password);
            navigate('/account')
        } catch (e) {
            setError(e.message)
            console.log(e.message)
        }
    }

  return (
    <div className="max-w-[700px] mx-auto my-16 p-4">
        <div>
            <h1 className="text-2xl font-bold py-2">Create an account</h1>
            <p className='py-2'>
                Already have an account? <a href="/" className="underline">Sign in.</a>
            </p>
        </div>

        {/* Email Address */}
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    <span className="block text-sm font-medium py-2">Email Address</span>
                    <input
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                        placeholder="you@example.com"
                    />
                </label>
            </div>

            {/* Password */}
            <div>
                <label>
                    <span className="block text-sm font-medium py-2">Password</span>
                    <div className="relative">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type={showPassword ? 'text' : 'password'}
                            className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1"
                            placeholder="*********"
                        />
                        <span
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-2 cursor-pointer text-slate-400 hover:text-slate-600"
                        >
                            {showPassword ? <AiOutlineEyeInvisible size={20} /> : <AiOutlineEye size={20} />}
                        </span>
                    </div>
                </label>
            </div>

            {/* Sign Up Button */}
            <div className="py-4">
                <button
                    type="submit"
                    className="px-4 py-2 bg-sky-500 text-white font-medium rounded-md hover:bg-sky-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sky-500"
                >
                    Sign Up
                </button>
            </div>
        </form>
    </div>
  )
}
export default SignUp