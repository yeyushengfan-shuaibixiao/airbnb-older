import React, { memo } from 'react'
import { FooterWapper } from './style'
import   footerData from '@/assets/data/footer.json'
const Appfooter = memo(() => {
  return (
    <FooterWapper>
      <div className='footerWapperBox'>
      <ul className='footerList'>
        {footerData.map(item=>{
          return (
            <div  className='list' key={item.name}>
            <a><li className='listName' key={item.name}>{item.name}</li></a>
            <div className='listdsc' key={item}> {item.list.map(item=>{
              return (<li key={item} className='dsc'>{item}</li>)
            })}</div>
            
           </div>
          )
        })} 
        
      </ul> 
      <p> @2023 Airbnb, Inc. All rights reserved.条款·隐私政策·网站地图·全国旅游投诉渠道12301</p>
      </div>
    </FooterWapper>
  )
})

export default Appfooter