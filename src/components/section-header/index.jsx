import React, { memo } from 'react'
import { SectionHeaderWapper } from './style'
import PropTypes from 'prop-types'
const SectionHeader = memo((props) => {
    const {title , subtitle} = props
  return (
    <SectionHeaderWapper>
        <h2 className='title'>{title}</h2>
        {subtitle && <h3 className='subTitle'> {subtitle}</h3>}
    </SectionHeaderWapper>
  )
})
SectionHeader.propTypes = {
    title : PropTypes.string ,
    subtitle :PropTypes.string
}
export default SectionHeader