import PropTypes from 'prop-types'
import React, { memo } from 'react'
import {HomeSectionV1Wapper  } from "./style";
import SectionHeader from '@/components/section-header';
import SectionRooms from '@/components/section-rooms';
import SectionFooter from '@/components/section-footer';
const HomeSectionV1 = memo((props) => {
  const {infoData } =props
  return (
    <HomeSectionV1Wapper>
        <SectionHeader title ={infoData.title} subtitle={infoData?.subtitle}></SectionHeader>
        <SectionRooms roomList={infoData.list} $itemwidth = "25%" ></SectionRooms>
        <SectionFooter></SectionFooter>
    </HomeSectionV1Wapper>
  )
})

HomeSectionV1.propTypes = {
    infoData :PropTypes.object
}

export default HomeSectionV1