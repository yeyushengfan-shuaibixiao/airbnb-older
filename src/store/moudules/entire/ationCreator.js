import { getEntireRoomListData } from "@/services";
import * as actionTypes from "./constants";

export const changeCurrentPageAction = (currentPage) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  currentPage,
});
export const changeRoomListAction = (roomList) => ({
  type: actionTypes.CHANGE_ROOM_LIST,
  roomList,
});

export const changeTotalCountAction = (totalCount) => ({
  type: actionTypes.CHANGE_TOTAL_COUNT,
  totalCount,
});
export const changeisLoadingAtion = (isLoading) => ({
  type: actionTypes.CHANGE_ISLOADING,
  isLoading,
});

export const fetchRoomListAction = (page = 0) => {
  return async (dispatch, getstate) => {
    dispatch(changeCurrentPageAction(page - 1));
    // const currentPage = getstate().entire.currentPage;
    // const res = await getEntireRoomListData(currentPage * 20);
    dispatch(changeisLoadingAtion(true));
    const res = await getEntireRoomListData(page);
    dispatch(changeisLoadingAtion(false));
    // console.log(res);
    const roomList = res.list;
    const totalCount = res.totalCount;
    dispatch(changeRoomListAction(roomList));
    dispatch(changeTotalCountAction(totalCount));
  };
};
