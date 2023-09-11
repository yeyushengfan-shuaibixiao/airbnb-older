import PropTypes from "prop-types";
import React, { memo } from "react";
import { EntirePaginationWapper } from "./style";
import { Pagination } from 'antd';
import { useDispatch, useSelector } from "react-redux";
import { changeCurrentPageAction, fetchRoomListAction } from "@/store/moudules/entire/ationCreator";
const EntirePagination = memo((props) => {
  const {totalCount ,currentPage , roomList} = useSelector((state=>({
    totalCount : state.entire.totalCount,
    currentPage : state.entire.currentPage,
    roomList : state.entire.roomList
  })))
  const startCount = currentPage * 20 + 1
  const endCount = (currentPage + 1) * 20 
  const dispath = useDispatch()
  function pageChangeHandle(page,pageSize =20) {
    // dispath( changeCurrentPageAction(page -1 ))
    dispath(fetchRoomListAction(page))
    window.scrollTo(0,0)
    // console.log(page)
  }
  return <EntirePaginationWapper>
    { !!roomList.length && <div>
     <Pagination className="Pagination"  defaultCurrent={1} total={totalCount} pageSize={20} onChange = {pageChangeHandle}/>
     <p className="desc">
    第 {startCount}-{endCount} 个房源，共超过{totalCount}个
    </p>
  </div>}

  </EntirePaginationWapper>
  
});

EntirePagination.propTypes = {};

export default EntirePagination;
