import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import { SectionTapWapper } from "./style";
import classNames from 'classnames';
import ScorllView from '@/base-ui/scorll-view';
const SectionTaps = memo((props) => {
    const {tabNames =[] ,tabClick} = props
    const [currrentIndex, setCurrentIndex] = useState(0)
    function itemClickHandle(index,name){
      setCurrentIndex(index) 
      tabClick(index,name)
    }
  return (
    <SectionTapWapper>
        <ScorllView>
        {
            tabNames.map((item,index)=>{
                return (
                    <div className={classNames("item",{ active : index === currrentIndex})}
                    key={index}
                    onClick={e=>itemClickHandle(index,item)}
                    >{item}</div>
                )
            })
         }
        </ScorllView>
    </SectionTapWapper>
  )
})

SectionTaps.propTypes = {

    tabNames :PropTypes.array 
}

export default SectionTaps