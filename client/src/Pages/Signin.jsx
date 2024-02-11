import { Alert, Button, Label, Spinner, TextInput } from 'flowbite-react'
import React from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { useState } from 'react'


export default function SignIn() {
  const [formData, setFormData] = useState({});
  const [errorMessage, setErrorMessage] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });     
  };
  const handleSubmit=async(e)=>{
    e.preventDefault()
    if (!formData.email || !formData.password) {
      setErrorMessage('Please fill all the fields');
      return;
    }
    try {
      setLoading(true);
      setErrorMessage(null);
      const res=await fetch('/api/auth/signin',{
        method:'POST',
        headers:{
          'Content-Type':'application/json'
        },
        body:JSON.stringify(formData)
      });
      const data=await res.json()
      if (data.success===false) {
        setLoading(false);
       return setErrorMessage(data.message);
      }
      if (res.ok) {
        navigate('/')
      }
    } catch (error) {
      setErrorMessage(data.message);
      setLoading(false);
    }
  };
  return (
    <div className='min-h-screen mt-20'>
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left side */}
        <div className="flex-1">
        <Link to='/' className='font-bold dark:text-white text-4xl'>
        <span className='px-2 py-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Naveen's</span>Blog
    </Link>
    <p className='text-sm mt-5 '>This is demo project. You can sign in with your email and password or google</p>
        </div>
        {/* Right side */}
        <div className="flex-1">
          <form className='flex flex-col gap-5' onSubmit={handleSubmit} >

            <div className="">
          
              <Label value='Your Email'/>
              <TextInput type='email' placeholder='name@company.com' id='email' onChange={handleChange} />

              <Label value='Your Password'/>
              <TextInput type='password' placeholder='**********' id='password' onChange={handleChange} />
            </div>
            <Button gradientDuoTone='purpleToPink' type='submit' disabled={loading}>
            {
              loading ? (<>
                <Spinner size='sm' />
                <span className='ml-2'>Loading...</span>
              </>
              ) : 'Sign In'
            }
            </Button> 

          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't Have an account!</span>
            <Link to='/signup' className='text-purple-500'> Sign Up</Link>
          </div>
          {
            errorMessage && <Alert className='mt-5 ' color="failure">
              {errorMessage}
            </Alert>
          }
        </div>
      </div>
    </div>

  )
}
