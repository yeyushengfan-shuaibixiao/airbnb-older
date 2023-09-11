import { Rate } from 'antd';
import PropTypes from 'prop-types'
import React, { memo, useRef } from 'react'
import {  RoomItemWapper} from "./style";
import { Carousel } from 'antd';
import IconLeftArrow from '@/assets/svg/icon-left-arrow';
import IconRightArrow from '@/assets/svg/icon-right-arrow';
const RoomItem = memo((props) => {
    const {itemData ,itemwidth = "20%" , itemClick} =props   
     const sliderRef = useRef()
    function controlClickHandle(e,isRight = true) { 
      e.stopPropagation()
      
      isRight ? sliderRef.current.next() : sliderRef.current.prev()
    } 
    const pictureEL = (
      <div className="cover">
                <img src={itemData.picture_url} alt="" />
          </div> 
    )
    const sliderEL  = (
      <div className='slider'>
      <div className="control">
        <div className="btn left"  onClick={e=>{controlClickHandle(e,false)}}>
          <IconLeftArrow className= "icon" height= {30} width = {30}></IconLeftArrow>
        </div>
        <div className="btn right" onClick={e=>{controlClickHandle(e,true)}}>
          <IconRightArrow className= "icon" height= {30} width = {30}></IconRightArrow>
        </div>
      </div>  
      <div className='indicator'>
</div>
    <Carousel  dots = {false} ref ={sliderRef}>
      {itemData?.picture_urls?.map(item=>{
        return  <div className="cover" key ={item}>
        <img src={item} alt="" />
       </div> 
      })}
    </Carousel>
    </div>
    )
   function itemClickHanle(e){
      if(itemClick) itemClick(itemData)
   }
  return (
     <RoomItemWapper 
     $itemwidth= {itemwidth} 
     $verifycolor={itemData?.verify_info.text_color}
      onClick={e=>itemClickHanle(e)}
      >
        <div  >  
         <div className="inner" >
           {!itemData.picture_urls ?pictureEL : sliderEL}
             
              <div className="desc" >
                {itemData.verify_info.messages.join(".")}
                <div className="name">
                    {itemData.name}
                </div>
                <div className="price">
                   ￥{itemData.price}
                </div> 
                 <div className="buttom">
                 <Rate allowHalf defaultValue={itemData?.star_rating ??  4.5} />
                 <span className='count'>{itemData.reviews_count}.</span>
                 <span className='extra'>{itemData?.buttom_info?.content??"超赞房东"}</span>
                 </div>
                
              </div>
            </div> 
        </div>
     </RoomItemWapper>
  )
})

RoomItem.propTypes = {
    itemData : PropTypes.object,
    // $itemwidth: PropTypes.string,
}

export default RoomItem