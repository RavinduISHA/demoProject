import { Link } from 'react-router-dom'
// import Image from '../assets/image.jpg'
import { useState } from 'react'
import axiosClient from '../axios.js'

function Register() {
  const [fisrtname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirmation, setPasswordConfirmation] = useState('');
  const [error, setError] = useState({__html: ''});

  const onSubmit = (ev) =>  {
    ev.preventDefault()
    setError({__html: ''})

    // Check if passwords match
    if (password !== passwordConfirmation) {
      setError({__html: 'Passwords do not match'});
      return;
    }

    axiosClient.post('/register', {
      fname: fisrtname,
      lname: lastname,
      email,
      password,
      confirm_password: passwordConfirmation
    })
    .then(({data}) => {
      console.log(data);
    })
    .catch((error) =>{
      if (error.response) {
        const Ferrors = Object.values(error.response.data.errors).reduce((accum,next) => [...next, ...accum],[])
        console.log(Ferrors)
        setError({__html: Ferrors.join('<br>')})
      }
      console.error(error)
    })
  }

  return (
    <>
      <div className="w-full px-12 py-16 lg:w-1/2">
        <h2 className="mb-4 text-3xl">Register</h2>
        <p className="mb-4">
          Create your account. It’s free and only takes a minute
        </p>

        {/* validation erros */}
        {error.__html && (<div className="px-3 py-2 text-white bg-red-500 rounded"
        dangerouslySetInnerHTML={error}></div>)}

        <form action="#" onSubmit={onSubmit}>
          <div className="grid grid-cols-2 gap-5 mt-2">
            <input type="text" placeholder="Firstname" id='first-name' name='firstname' value={fisrtname} onChange={ev => setFirstName(ev.target.value)} className="px-2 py-1 border border-gray-400 rounded" />
            <input type="text" placeholder="Lastname" id='last-name' name='lastname' value={lastname} onChange={ev => setLastName(ev.target.value)} className="px-2 py-1 border border-gray-400 rounded" />
          </div>
          <div className="mt-5">
            <input type="text" placeholder="Email" id='email' name='email' value={email} onChange={ev => setEmail(ev.target.value)} className="w-full px-2 py-1 border border-gray-400 rounded" />
          </div>
          <div className="mt-5">
            <input type="password" placeholder="Password" id='password' name='password' value={password} onChange={ev => setPassword(ev.target.value)} className="w-full px-2 py-1 border border-gray-400 rounded" />
          </div>
          <div className="mt-5">
            <input type="password" placeholder="Confirm Password" id='confirm-password' name='confirm_password' value={passwordConfirmation} onChange={ev => setPasswordConfirmation(ev.target.value)} className="w-full px-2 py-1 border border-gray-400 rounded" />
          </div>
          <div className="mt-5">
            <input type="checkbox" className="border border-gray-400" />
            <span>
              I accept the <a href="#" className="font-semibold text-blue-500">Terms of Use</a> &  <a href="#" className="font-semibold text-blue-500">Privacy Policy</a> 
            </span>
          </div>
          <div className="mt-5">
            <button className="w-full py-3 text-center text-white bg-blue-500 rounded">Register Now</button>
          </div>
          <div className="mt-2">
            <span>Already have an account?</span>
            <Link to="/login" className='text-blue-500'>Login</Link>
          </div>
        </form>
      </div>
    </>
  )
}

export default Register
