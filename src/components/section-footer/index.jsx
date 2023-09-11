import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionFooterWapper  } from "./style";
import IconRightArrow from '@/assets/svg/icon-right-arrow';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
const SectionFooter = memo((props) => {
    const {name } = props
    let showMessage = "显示更多"
  if(name) {
    showMessage = `显示更多${name}房源`
  }
  // 页面跳转
  const navigate = useNavigate ()
  function moreClickHandle(){
    navigate("/entire")  
    // <Link to="/entire">Go to Entire</Link>
    
  }
  return (
    < SectionFooterWapper $color = {name ? "#00848a":"black"}>
       <div className="more" onClick={moreClickHandle}>
        <span className='text'>{showMessage}</span>
        <span className='arrow'>
            <IconRightArrow/>
        </span>
       </div>
    </SectionFooterWapper>
  )
})

SectionFooter.propTypes = {
    name :PropTypes.string
}

export default SectionFooter