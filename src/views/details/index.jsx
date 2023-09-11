import React, { memo, useEffect } from 'react'
import { shallowEqual, useDispatch, useSelector } from 'react-redux'
import { DetailsWapper } from "./style";
import DetailsPicture from './c-cps/details-picture';
import { changeHeaderConfigAction } from '@/store/moudules/main'
const Details = memo(() => {
  const {detailsInfo} = useSelector(state=>({
    detailsInfo : state.details.detailsInfo,
  }),[shallowEqual]) 
  
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(changeHeaderConfigAction({isFixed : false ,isHome: false}))
  },[])
  return (
    <DetailsWapper>
      <DetailsPicture pictureUrls={detailsInfo.picture_urls}></DetailsPicture>
    </DetailsWapper>
  )
})

export default Details