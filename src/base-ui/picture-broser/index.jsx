import PropTypes from 'prop-types'
import React, { memo, useEffect, useState } from 'react'
import {CSSTransition,SwitchTransition  } from "react-transition-group";
import { PictureBrowserWapper } from "./style";
import IconClose from '@/assets/svg/icon-close';

import IconTriangleBottom from '@/assets/svg/icon-triangle-bottom';
import  Indicator   from "@/base-ui/Indicator";
import classNames from 'classnames'
import IconRightArrow from '@/assets/svg/icon-right-arrow';
import IconTriangleTop from '@/assets/svg/icon-triangle-top';
import IconLeftArrow from '@/assets/svg/icon-left-arrow';
const PictureBrowser = memo((props) => {
    const {pictureUrls =[] , closeClick } = props
    const  [selectIndex,setSelectIndex] =  useState(0)
    const [isRight ,setIsRight] = useState(true)
    const [showList, setShowList] = useState(true)
    // 当图片浏览器展示出来时  滚动的功能消失
    useEffect(()=>{
        document.body.style.overflow = "hidden"
      return ()=>{
        document.body.style.overflow = "auto"
      }
    },[])
    function closeClickHanle(){
        if(closeClick) closeClick()
    }

    function controlClickHanle( isRight = true ) {
       let newIndex =  isRight ? selectIndex + 1 : selectIndex - 1;
      if(newIndex < 0 ) newIndex = pictureUrls.length -1
      if (newIndex > pictureUrls.length -1)  newIndex = 0
      setSelectIndex(newIndex) 
      setIsRight(isRight)
    }  
    function imgItemClickHandle(index) {
      setSelectIndex(index)
      setIsRight(index > selectIndex)
    }
  
    function toggleShowListHandle() {
      setShowList(!showList)
    }
  

  return ( 
    <PictureBrowserWapper $isRight={isRight}>
        <div className="top">
            <div className="closeBtn" onClick={closeClickHanle}>
                <IconClose></IconClose>
            </div>
        </div>
        <div className="slider">
            <div className="control">
                <div className="btn left"  onClick={e=>controlClickHanle(false)}>
                 <IconLeftArrow  width="77" height="77" ></IconLeftArrow>
                </div>
                <div className="btn right" onClick={e=>controlClickHanle(true)}>
                    <IconRightArrow width="77" height="77"  ></IconRightArrow>
                </div>
            </div>  
            <div className="picture">
                <SwitchTransition mode='in-out'>
                <CSSTransition 
                key={pictureUrls[selectIndex]} 
                classNames= "pic"
                timeout={150}
                >
                <img src={pictureUrls[selectIndex]} alt="" />
                </CSSTransition>
                </SwitchTransition>
            </div>
        </div>
        <div className='preview'>
        <div className='info'>
          <div className='desc'>
            <div className='count'>
              <span>{selectIndex+1}/{pictureUrls.length}:</span>
              <span> room Apartment图片{selectIndex+1}</span>
              </div>
            <div className='toggle' onClick={toggleShowListHandle}>
              隐藏照片列表
              { showList ? <IconTriangleBottom/>: <IconTriangleTop/> }
            </div>
          </div>
          <div className='list' style={{height: showList? "67px": "0"}}>
            <Indicator selectIndex={selectIndex}>
              {
                pictureUrls.map((item, index) => {
                  return (
                    <div 
                      className={classNames("item", {active: index === selectIndex})} 
                      key={item}
                      onClick={e => imgItemClickHandle(index)}
                    >
                      <img src={item} alt="" />
                    </div>
                  )
                })
              }
            </Indicator>
          </div>
        </div>
      </div>
    </PictureBrowserWapper>
  )
})

PictureBrowser.propTypes = {
    pictureUrls: PropTypes.array
}

export default PictureBrowser