import React, { memo } from 'react'
import { HeadLeftWarpper } from './style'
import  logo  from "@/assets/img/logo.png";
import { useNavigate  } from "react-router-dom";

const Headleft = memo(() => {
  const navigate = useNavigate ()
  function logoClickHandle() {
     navigate("/home")
  }
  return (
    <HeadLeftWarpper>
      <img src = {logo} alt=""  onClick={logoClickHandle}/>
    </HeadLeftWarpper>
  )
})

export default Headleft