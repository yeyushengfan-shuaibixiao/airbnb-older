import PropTypes from 'prop-types'
import React, { memo ,useSelector, useState} from 'react'
import { DetailsPictureWapper } from "./style";
import PictureBrowser from '@/base-ui/picture-broser';

const DetailsPicture = memo((props) => {
    const { pictureUrls } = props
    const [showBrowser, setShowBrowser] = useState(false)
  return (
    <DetailsPictureWapper>
        <div className="picture">
        <div className="left">
        <div className="item" onClick={e=>{setShowBrowser(true)}}>
                <img src={pictureUrls ?.[0]} alt="" />
                <div className='cover'></div>
            </div>
        </div>
        <div className="right">
           {
            pictureUrls?.slice(1,5).map(item=>{
               return(
                <div className="item" key={item} onClick={e=>{setShowBrowser(true)}}>
                <img src={item} alt="" />
                <div className='cover'></div>
            </div>
               )
            })
           }
        </div>
        </div> 
        {showBrowser
         && 
        <PictureBrowser 
         closeClick={e=>setShowBrowser(false)} 
         pictureUrls = {pictureUrls} >  
         </PictureBrowser> }
        <div className="showPicture" onClick={e=>{setShowBrowser(true)}}>
          显示照片
        </div>
    </DetailsPictureWapper>
  )
})

DetailsPicture.propTypes = {
 pictureUrls: PropTypes.array
}

export default DetailsPicture