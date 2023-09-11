import PropTypes from 'prop-types'
import React, { memo } from 'react'
import { SectionRoomsWapper } from './style'
import RoomItem from '@/components/room-item'

const SectionRooms = memo((props) => {
    const {roomList =[] ,$itemwidth } =props
  return (
    <SectionRoomsWapper>
        <div className='roomList'>
               {
                     roomList.slice(0,8).map(item => (
                      <RoomItem itemData={item} key={item.id} itemwidth={$itemwidth} />
                    ))    
                     
                }
           </div>

    </SectionRoomsWapper>
  )
})

SectionRooms.propTypes = {
    roomList : PropTypes.array,
    $itemwidth: PropTypes.string,
 }

export default SectionRooms