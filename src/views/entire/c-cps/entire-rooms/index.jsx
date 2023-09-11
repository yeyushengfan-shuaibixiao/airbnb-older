import PropTypes from "prop-types";
import React, { memo, useCallback } from "react";
import { EntireRoomsWapper } from "./style";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import RoomItem from "@/components/room-item";
import { useNavigate } from "react-router-dom";
import { changeDetailsInfoAction } from "@/store/moudules/details";
const EntireRooms = memo((props) => {
   const {roomList , totalCount ,isLoading} = useSelector(state=>({
    roomList : state.entire.roomList,
    totalCount : state.entire.totalCount,
    isLoading : state.entire.isLoading
   }),shallowEqual)
  //  console.log(isLoading) 
   const navigate =  useNavigate()
   const dispatch = useDispatch()

     function itemClickHandle (item){
     dispatch(changeDetailsInfoAction(item))
      navigate("/details")
   }
  return<EntireRoomsWapper>
      <h1>共{totalCount}处房源</h1>
      <div className="list">
       {
        roomList.map(item=>{
          return (
            <RoomItem 
            itemData={item }
             key = {item.id} 
             itemClick={e => itemClickHandle(item)}
             ></RoomItem>
          )
        })
       }
       </div> 
       { isLoading &&<div className="cover"></div>}
     </EntireRoomsWapper>;
});

EntireRooms.propTypes = {};

export default EntireRooms;
