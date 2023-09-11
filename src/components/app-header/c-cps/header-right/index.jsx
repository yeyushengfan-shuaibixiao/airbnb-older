import React, { memo, useEffect, useState } from 'react'
import { HeadRightWarpper } from './style'
import IconGlobal from '@/assets/svg/icon-global'
import IconMenu from '@/assets/svg/icon-menu'
import IconUser from '@/assets/svg/icon-user'
const Headright = memo(() => {
  const[showPanal,setShowPanal ]=useState(false)
  useEffect(()=>{
    function windowHandleClick(){
        setShowPanal(false)
    }
    window.addEventListener("click" ,windowHandleClick,true) 
    return (()=>{
      window.removeEventListener("click",windowHandleClick,true)
    })
  },[])
  function showUserPanal () {
    setShowPanal(true)
  }
  return (
    <HeadRightWarpper>
      <div className='btn'>
        <span className='item'>登录</span>
        <span className='item'>注册</span>
        <span className='item global'>
          <IconGlobal></IconGlobal>
        </span>
      </div>
      <div className='user' onClick={showUserPanal}>
        <span className='item'>
          <IconMenu></IconMenu>
        </span>
        <span className='item'>
          <IconUser></IconUser>
          <span className=' highlight'></span>
        </span> 
        {showPanal && <div className='panal'> 
         <div className='top'>
          <div className='register item'>注册</div>
          <div className='login item'>登录</div>
         </div>
         <div className='buttom'>
             <div className='rent item'>出租房源</div>
             <div className='experience item'>开展体验</div>
             <div className='help item'>帮助</div>

         </div>
        </div>}
      </div>
    </HeadRightWarpper>
  )
})

export default Headright