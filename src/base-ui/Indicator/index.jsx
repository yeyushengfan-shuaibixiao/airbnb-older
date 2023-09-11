import React, { memo, useEffect, useRef } from 'react'
import { IndicatorWrapper } from './style'

const Indicator = memo((props) => {
  const { selectIndex } = props
  const scrollRef = useRef()

  useEffect(() => {
    // 要拿到 offset，必须设置定位元素
    const selectItemEl = scrollRef.current.children[selectIndex]
    const selectItemWidth = selectItemEl.clientWidth
    const selectItemOffset = selectItemEl.offsetLeft
  // 容器宽度
    const scrollElWidth = scrollRef.current.clientWidth
    const scrollElScroll = scrollRef.current.scrollWidth
  // 计算滚动距离
    let distance = selectItemWidth * 0.5 + selectItemOffset - scrollElWidth * 0.5
    // 左边的处理
    if (distance < 0) distance = 0
    // 右边的处理
    if (distance > scrollElScroll - scrollElWidth) distance = scrollElScroll - scrollElWidth
    scrollRef.current.style.transform = `translate(${-distance}px)`
  }, [selectIndex])

  return (
    <IndicatorWrapper>
      <div className="scroll" ref={scrollRef}>
        {
          props.children
        }
      </div>
    </IndicatorWrapper>
  )
})

Indicator.propTypes = {}

export default Indicator