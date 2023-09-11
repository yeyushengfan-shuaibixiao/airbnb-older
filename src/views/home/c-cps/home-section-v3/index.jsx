import RoomItem from '@/components/room-item'
import SectionHeader from '@/components/section-header'
import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {HomeSectionV3Wapper  } from "./style";
import ScorllView from '@/base-ui/scorll-view';
import SectionFooter from '@/components/section-footer';

const HomeSectionV3 = memo((props) => {
    const {infoData } = props
  return (
     <HomeSectionV3Wapper>
     <SectionHeader title={infoData.title} subtitle={infoData.subtitle}></SectionHeader>
     <div className='roomList'>
      <ScorllView>
       {
        
        infoData.list.map(item=>{
            return <RoomItem itemData = {item} key={item.id} $itemWidth={"20%"}  ></RoomItem>
        })
       }
       </ScorllView>
       
     </div>
     <SectionFooter name="plus"></SectionFooter>
     </HomeSectionV3Wapper>
  )
})

HomeSectionV3.propTypes = {
    infoData : PropTypes.object,
    name  : PropTypes.string
}

export default HomeSectionV3