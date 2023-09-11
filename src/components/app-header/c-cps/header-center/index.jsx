import React, { memo ,useState } from 'react'
import { HeadCenterWarpper } from './style'
import IconSearch from '@/assets/svg/icon-search'
import { CSSTransition } from "react-transition-group"
import  searchTitles  from "@/assets/data/search_titles.json";
import SearchTabs from './c-cps/search-tabs'
import SearchSections from './c-cps/search-sections'
const Headcenter = memo((props) => {
  const { isSearch, searchBarClick } = props
  const [currentTab, setCurrentTab] = useState(0)

  /** 过滤数据 */
  const titles = searchTitles.map(item => item.title)

  /** 事件处理 */
  function tabClickHandle(index) {
    setCurrentTab(index)
  }
  return (
    <HeadCenterWarpper>
      <CSSTransition
        in={!isSearch}
        classNames="bar"
        timeout={250}
        unmountOnExit={true}
      >
        <div className='search-bar' onClick={e => searchBarClick()}>
          <div className='text'>搜索房源和体验</div>
          <span className='icon'>
            <IconSearch/>
          </span>
        </div>
      </CSSTransition>
      <CSSTransition
        in={isSearch}
        classNames="detail"
        timeout={250}
        unmountOnExit={true}
      >
        <div className='search-detail'>
          <SearchTabs titles={titles} tabClick={tabClickHandle}/>
          <div className='infos'>
            <SearchSections searchInfos={searchTitles[currentTab].searchInfos}/>
          </div>
        </div>
      </CSSTransition>
    </HeadCenterWarpper>
  )
})

export default Headcenter