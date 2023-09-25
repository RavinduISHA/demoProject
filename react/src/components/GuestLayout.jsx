import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import Image from '../assets/image.jpg'
import { userStateContext } from '../views/contexts/ContextProvider'

export const GuestLayout = () => {
  const { currentUser, userToken } = userStateContext();

  if(userToken){
    return <Navigate to="/" />
  }
  return (
    <div className="min-h-screen py-36" style={{ backgroundImage: "linear-gradient(115deg, #5a93c4, #dae3eb)" }}>
    <div className="container mx-auto">
      <div className="flex flex-col w-10/12 mx-auto overflow-hidden bg-white shadow-lg lg:flex-row lg:w-8/12 rounded-xl">
        <div className="flex flex-col items-center justify-center w-full p-12 bg-center bg-no-repeat bg-cover lg:w-1/2" style={{ backgroundImage: `url(${Image})` }}>
          <h1 className="mb-3 text-3xl text-white">Welcome</h1>
          <div>
            <p className="text-white">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean suspendisse aliquam varius rutrum purus maecenas ac <a href="#" className="font-semibold text-blue-500">Learn more</a></p>
          </div>
        </div>
        
        <Outlet />
      </div>
    </div>
    </div>
  )
}
