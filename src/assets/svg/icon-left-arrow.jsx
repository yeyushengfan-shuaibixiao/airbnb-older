import React, { memo } from 'react'
import cssStringToObject from '../utils/cssStringToObject'

const IconLeftArrow = memo((props) => {
  const {width =12,height =12} =  props
  return (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" 
        style= {cssStringToObject(`display: block; fill: none; height: ${height}; width: ${width}; stroke: currentcolor; stroke-width: 5.33333px; overflow: visible;` )}
        aria-hidden="true" role="presentation" focusable="false"><path fill="none" d="M20 28 8.7 16.7a1 1 0 0 1 0-1.4L20 4"></path></svg>
    </div>
  )
})

export default IconLeftArrow