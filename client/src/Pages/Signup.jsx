import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left side */}
        <div className="flex-1">
        <Link to='/' className='font-bold dark:text-white text-4xl'>
        <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Naveen's</span>Blog
    </Link>
    <p className='text-sm mt-5 '>This is demo project. You can sign up with your email and password or google</p>
        </div>
        {/* Right side */}
        <div className="flex-1">
          <form className='flex flex-col gap-5'>

            <div className="">
              <Label value='Your Username'/>
              <TextInput type='text' placeholder='Username' id='username'/>

              <Label value='Your Email'/>
              <TextInput type='email' placeholder='name@company.com' id='email'/>

              <Label value='Your Password'/>
              <TextInput type='password' placeholder='Password' id='password'/>
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit'>
            Sign Up
            </Button> 

          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account!</span>
            <Link to='/signin' className='text-purple-500'> Sign In</Link>
          </div>
        </div>
      </div>
    </div>

  )
}
