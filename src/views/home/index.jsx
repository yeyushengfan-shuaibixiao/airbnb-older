import React, { memo, useCallback, useEffect, useState } from 'react'
import { HomeWapper } from './style'
import HomeBannner from './c-cps/home-banner'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import  { fetchHomeDateAction } from '@/store/moudules/home'
import HomeSectionV1 from './c-cps/home-section-v1'
import HomeSectionV2 from './c-cps/home-section-v2'
import  isEmpty  from "@/assets/utils/isEmptyo";
import HomeLongfor from './c-cps/home-longfor'
import HomeSectionV3 from './c-cps/home-section-v3'
import { changeHeaderConfigAction } from '@/store/moudules/main'
const Home = memo((props) => {
 const {
  goodPriceInfo ,
  highScoreInfo,
  discountInfo,
  recommendInfo,
  longforInfo,
  homePlusInfo,
}  
 = useSelector(state=>({
  goodPriceInfo :state.home.goodPriceInfo  ,
  highScoreInfo : state.home.highScoreInfo, 
  discountInfo :  state.home.discountInfo,
  recommendInfo : state.home.recommendInfo,
  longforInfo : state.home.longforInfo,
  homePlusInfo : state.home.homePlusInfo,
  }),shallowEqual) 
  const dispath = useDispatch()
    useEffect(()=>{
      dispath(fetchHomeDateAction())
      dispath(changeHeaderConfigAction({isFixed : true ,isHome: false}))
      // function unmount() {
      //   root.unmount()
      // } 
      // return () => {
      //   // 在这里进行清理操作（组件卸载时调用）
      //   unmount()
      // };
    },[dispath])
  
  return (
   <HomeWapper>
    <HomeBannner></HomeBannner>
    <div className='content'>
       {/* 第一次数据 是 underfind    会渲染两次
       这样只会渲染一次 做了点性能优化 */}
      {isEmpty(discountInfo) && <HomeSectionV2 infoData= {discountInfo}></HomeSectionV2>}
      {isEmpty(recommendInfo) && <HomeSectionV2 infoData= {recommendInfo}></HomeSectionV2>}
      {isEmpty(longforInfo) && <HomeLongfor infoData ={longforInfo} ></HomeLongfor>}
      {isEmpty(goodPriceInfo) && <HomeSectionV1 infoData={goodPriceInfo}></HomeSectionV1> }
      {isEmpty(highScoreInfo) &&  <HomeSectionV1 infoData={highScoreInfo}></HomeSectionV1>}
      {isEmpty(homePlusInfo) &&  <HomeSectionV3 infoData={homePlusInfo} Itemwidth = {"20%"}></HomeSectionV3>}

    </div> 
      
   </HomeWapper>
  )
})

export default Home