import { Link } from 'react-router-dom'
import Image from '../assets/image.jpg'

function Register() {

  return (
    <>
      <div className="w-full px-12 py-16 lg:w-1/2">
        <h2 className="mb-4 text-3xl">Register</h2>
        <p className="mb-4">
          Create your account. It’s free and only takes a minute
        </p>
        <form action="#">
          <div className="grid grid-cols-2 gap-5">
            <input type="text" placeholder="Firstname" className="px-2 py-1 border border-gray-400 rounded" />
            <input type="text" placeholder="Surname" className="px-2 py-1 border border-gray-400 rounded" />
          </div>
          <div className="mt-5">
            <input type="text" placeholder="Email" className="w-full px-2 py-1 border border-gray-400 rounded" />
          </div>
          <div className="mt-5">
            <input type="password" placeholder="Password" className="w-full px-2 py-1 border border-gray-400 rounded" />
          </div>
          <div className="mt-5">
            <input type="password" placeholder="Confirm Password" className="w-full px-2 py-1 border border-gray-400 rounded" />
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
