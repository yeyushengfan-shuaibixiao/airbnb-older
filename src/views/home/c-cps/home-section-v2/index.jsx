import PropTypes from 'prop-types'
import React, { memo ,useState,useCallback} from 'react'
import {HomeSectionV2Wapper  } from "./style";
import SectionHeader from '@/components/section-header'
import SectionRooms from '@/components/section-rooms'
import SectionTaps from '@/components/section-taps'
import SectionFooter from '@/components/section-footer';

const HomeSectionV2 = memo((props) => {
    const {infoData} = props
    // 数据转换 
   const tabNames = infoData.dest_address?.map(item=> item.name)
   const initialName = Object.keys(infoData.dest_list)[0]
   const [name,setName] = useState(initialName)
     const tabClickHandle = useCallback(function(index ,name){
                setName(name)
     },[] )
  return (
    <HomeSectionV2Wapper>
        <div className="discount">
        <SectionHeader title={infoData?.title} subtitle={infoData?.subtitle}></SectionHeader>
        <SectionTaps  tabNames = {tabNames}  tabClick={tabClickHandle}></SectionTaps>
        <SectionRooms roomList ={infoData.dest_list?.[name]} $itemwidth="33.3%"></SectionRooms>
        <SectionFooter name={name}></SectionFooter>
      </div>
    </HomeSectionV2Wapper>
  )
})

HomeSectionV2.propTypes = {
infoData : PropTypes.object
}

export default HomeSectionV2