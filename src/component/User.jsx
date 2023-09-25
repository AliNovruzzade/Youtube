import React,{useState} from 'react'
import profilepicture from '../assets/image/profilelogo.jpg'
import { IoSettingsOutline } from "react-icons/io5"
import { BsBagCheck } from "react-icons/bs"
import { AiOutlineHeart } from "react-icons/ai"
import { GrHelp } from "react-icons/gr"
import { BiLogOut } from "react-icons/bi";

const User = () => {

    const profile = true
    const [profileOpen , setProfileOpen] = useState(false)

  return (
    <div className='profile'>

    {
        profile ? (
            <div>
                <button onClick={() => setProfileOpen(!profileOpen)} className='img'>
                    <img src={profilepicture} alt="" />
                </button>

                {
                    profileOpen && (
            <div className='openProfile boxItems'>
                <div className='image'>
                    <div className='img'>
                        <img src={profilepicture} alt="" />
                    </div>
                  <div className='text'>
                    <h4>Ali</h4>
                    <label htmlFor=''>Cracow, PL</label>
                  </div>
                </div>
                  <button className='box'>
                    <IoSettingsOutline className='icon' />
                    <h4>My Account</h4>
                  </button>
                <button className='box'>
                  <BsBagCheck className='icon' />
                  <h4>My Order</h4>
                </button>
                <button className='box'>
                  <AiOutlineHeart className='icon' />
                  <h4>Wishlist</h4>
                </button>
                <button className='box'>
                  <GrHelp className='icon' />
                  <h4>Help</h4>
                </button>
                <button className='box'>
                  <BiLogOut className='icon' />
                  <h4>Log Out</h4>
                </button>
            </div>
                    )
                }

            </div>
        ): (
            <button>My Account</button>
        )
    }

       
    </div>
  )
}

export default User