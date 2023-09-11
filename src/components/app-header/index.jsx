import React, { memo ,useState ,useRef,useEffect} from 'react'
import {HeadWarpper ,SearchAreaPlaceholder  } from "./style";
import { ThemeProvider } from "styled-components"
import Headleft from './c-cps/header-left';
import Headcenter from './c-cps/header-center';
import Headright from './c-cps/header-right';
import { shallowEqual, useSelector } from 'react-redux';
import { useScrollPosition } from "@/hooks/useScrollPosition";
import classNames from 'classnames';
const Appheader = memo(() => {
  const [isSearch, setIsSearch] = useState(false)
  const [isAlpha, setIsAlpha] = useState(false)

   const { headerConfig} = useSelector((state)=>({
    headerConfig : state.main.headerConfig
   }),shallowEqual)
   const { isFixed ,isHome } =headerConfig 

    // 其他hooks的逻辑 
  const { scrollY } = useScrollPosition()
  if (isHome && scrollY === 0 && !isSearch) {
    setIsAlpha(true)
    setIsSearch(true)
  }
  if (isHome && isAlpha && scrollY > 0 && isSearch) {
    setIsAlpha(false)
    setIsSearch(false)
  }

  const prevY = useRef()
  useEffect(() => { prevY.current = 0 }, [])
  if (!isSearch) prevY.current = scrollY
  if (Math.abs(prevY.current - scrollY) > 30 && isSearch) setIsSearch(false)

  /** 事件处理逻辑 */
  function searchBarClickHandle() {
    setIsSearch(true)
  }
  return (
    <ThemeProvider theme={{isAlpha}}>
    <HeadWarpper className={classNames({fixed: isFixed})}>
      <div className='content'>
        <div className='top'>
          <Headleft/>
          <Headcenter isSearch={isSearch} searchBarClick={searchBarClickHandle}/>
          <Headright/>
        </div>
        <SearchAreaPlaceholder isSearch={isSearch}/>
      </div>
      { isSearch && !isAlpha && <div className='cover' onClick={e => setIsSearch(false)}></div> }
    </HeadWarpper>
  </ThemeProvider>
)
})

export default Appheader