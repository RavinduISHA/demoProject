import { Link } from "react-router-dom"

export const Login = () => {
  return (
    <>
      <div className="w-full px-12 py-16 lg:w-1/2">
        <h2 className="mb-4 text-3xl">Login</h2>
        <p className="mb-4">
          Login to your account. It’s only takes a minute
        </p>
        <form action="#">
          <div className="mt-5">
            <input type="text" placeholder="Email" className="w-full px-2 py-1 border border-gray-400 rounded" />
          </div>
          <div className="mt-5">
            <input type="password" placeholder="Password" className="w-full px-2 py-1 border border-gray-400 rounded" />
          </div>
          <div className="mt-5">
            <input type="checkbox" className="border border-gray-400" />
            <span>
              I accept the <a href="#" className="font-semibold text-blue-500">Terms of Use</a> &  <a href="#" className="font-semibold text-blue-500">Privacy Policy</a> 
            </span>
          </div>
          <div className="mt-5">
            <button className="w-full py-3 text-center text-white bg-blue-500 rounded">Login</button>
          </div>
        </form>
        <div className="mt-2">
            <span>Don't have account?</span>
            <Link to="/register" className='text-blue-500'>Register</Link>
          </div>
      </div>
    </>
  )
}
