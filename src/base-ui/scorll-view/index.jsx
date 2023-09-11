import PropTypes from 'prop-types'
import React, { memo, useEffect, useRef, useState } from 'react'
import {ScorllViewWapper  } from "./style";
import IconLeftArrow from '@/assets/svg/icon-left-arrow';
import IconRightArrow from '@/assets/svg/icon-right-arrow';
const ScorllView = memo((props) => {
    // 定义按钮状态
 const [showLeft,setShowLeft] =useState(false)
 const [showRight,setShowRight] =useState(false)
 const [positionIndex,setPositionIndex] = useState(0)
//  const [totalDistance,setTotalDistance] =useState(0)
 const totalDistanceRef = useRef()
//  组件渲染完 判断是否显示右边的按钮
   const scrollContentRef  = useRef()
    useEffect(()=>{
        // 一共可以滚动的宽度   
     const scrollWidth =  scrollContentRef.current.scrollWidth;
    // 本事占据的宽度 
     const clientWidth =  scrollContentRef.current.clientWidth;
    //  可滚动的距离
    const distance = scrollWidth - clientWidth;
        setShowRight(distance>0)
        totalDistanceRef.current = distance
    },[props.children])

   function ClickHandle(isLeft){
    const newIndex = isLeft ? positionIndex + 1  :positionIndex - 1 
    const newElement = scrollContentRef.current.children[newIndex];
    const newOffsetLeft  = newElement.offsetLeft;
    scrollContentRef.current.style.transform = `translate(${-newOffsetLeft}px)`
     setPositionIndex(newIndex)
    //  是否继续显示右边按钮
    setShowRight(totalDistanceRef.current > newOffsetLeft)
    setShowLeft(newOffsetLeft > 0)
    }

   
  return (
    <ScorllViewWapper> 
     {showLeft &&  <div className="left" onClick={e=>ClickHandle(false)}>
        <IconLeftArrow/>
        </div>}
      {showRight && <div className="right" onClick={e=>ClickHandle(true)}>
        <IconRightArrow/>
        </div>}
        <div className="scroll">
        <div className="slot" ref={scrollContentRef}>
        {props.children}
      </div>
        </div>
    </ScorllViewWapper>
  )
})

ScorllView.propTypes = {}

export default ScorllView

