import PropTypes from 'prop-types'
import React, { memo, useState } from 'react'
import  fliter   from "@/assets/data/filter.json";
import { EntireFitterWapper } from "./style";
import classNames from 'classnames';
const EntireFitter = memo((props) => {
   const [selectItems , SetSelectItems]  = useState([])
    function itemClickHandle(item) {
    //  console.log(item)
       const newItems = [...selectItems]
       if(newItems.includes(item)){
        const itemIndex = newItems.findIndex(fliterItem=>fliterItem === item)
         newItems.splice(itemIndex,1)
       }else{
        newItems.push(item) 
       }
    //    console.log(newItems)
      SetSelectItems(newItems)
    }
  return (
    <EntireFitterWapper>
        <div  className='filter' >
        {
            fliter.map((item,index)=>{
             return  <div 
             className= {classNames("item",{active: selectItems.includes(item)})} 
             key={item}
             onClick={e=>{itemClickHandle(item)}}
             >{item}</div>
            })
        }
        </div>
      
    </EntireFitterWapper>
  )
})

EntireFitter.propTypes = {}

export default EntireFitter