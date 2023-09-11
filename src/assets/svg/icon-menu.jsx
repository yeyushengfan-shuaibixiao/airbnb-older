import React, { memo } from 'react'
import cssStringToObject from '../utils/cssStringToObject'

const IconMenu = memo(() => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 32 32" 
    style= {cssStringToObject("display: block; fill: none; height: 16px; width: 16px; stroke: currentcolor; stroke-width: 3px; overflow: visible;")} 
    aria-hidden="true" role="presentation" focusable="false"><g fill="none"><path d="M2 16h28M2 24h28M2 8h28"></path></g></svg>

  )
})

export default IconMenu