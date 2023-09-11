import React, { memo , Suspense} from "react";
import "normalize.css";
import "@/assets/css/yeyuReset.css";
import {  useRoutes } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import  routes   from "@/router";
import Appheader from "./components/app-header";
import Appfooter from "./components/app-footer";
import  useScorllTop from "@/hooks/useScorllTop";
const App = memo(() => {
  // console.log(routes)
    useScorllTop()
  return <div className="app">
    <div className="header">
      <Appheader></Appheader>
    </div>
    <Suspense fallback="loading....">
    <div className="page"> 
      {useRoutes(routes)}
    </div>
    </Suspense>
    <div className="footer">
      <Appfooter></Appfooter>
    </div>
  </div>;
});

export default App;
