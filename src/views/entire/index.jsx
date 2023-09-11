import React, { memo, useEffect } from 'react'
import { EntireWapper } from "./style";
import EntireFitter from './c-cps/entire-fitter';
import EntireRooms from './c-cps/entire-rooms';
import EntirePagination from './c-cps/entire-pagination';
import { useDispatch } from 'react-redux';
import { fetchRoomListAction } from '@/store/moudules/entire/ationCreator';
// import { getEntireRoomListData } from '@/services';
import { changeHeaderConfigAction } from '@/store/moudules/main'
const Entire = memo(() => {
   const  dispatch = useDispatch();
   useEffect(()=>{
     dispatch(fetchRoomListAction())
     dispatch(changeHeaderConfigAction({isFixed : true ,isHome: false}))
    // getEntireRoomListData(0).then(res=>{
    //   console.log(res)
    // })
     
   },[dispatch])
  return (
    <EntireWapper>
    <EntireFitter></EntireFitter>
    <EntireRooms></EntireRooms>
    <EntirePagination></EntirePagination>
    </EntireWapper>
  )
})

export default Entire