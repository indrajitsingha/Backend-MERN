import React from 'react'
import logo from "@/assets/images/logo-white.png"
import { Button } from './ui/button'
import { Link } from 'react-router-dom'
import { LogIn } from 'lucide-react'
import SearchBox from './SearchBox'
import { Signin } from '@/helpers/RoutesList'


const Topbar = () => {
  return (
    <div className='flex justify-between items-center h-16 fixed w-full z-20 px-5 border-b bg-white'>
      <div><img src={logo} alt="" /></div>
      <div className=' w-[500px]'>
        <SearchBox />
      </div>
      <div>
        <Button className=" rounded-full">
          <LogIn />
          <Link to={Signin}>  Sign In</Link>

        </Button>
      </div>
    </div>
  )
}

export default Topbar