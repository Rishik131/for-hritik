import React from 'react';
import './Directions.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


const Directions = () => {
  return (
    <>
      <div class="parent">
        <div class="div1">
          {/* <a href="/North/1" class="btn_n">North</a> */}
          <Link to="/North/1" class="btn_n">North</Link>
        </div>
        <div class="div2">
          <a href="/West/1" class="btn_w">West</a>
        </div>
        <div class="div3">
          <a href="/East/1" class="btn_e">East</a>
        </div>
        <div class="div4">
          <a href="/South/1" class="btn_s">South</a>
        </div>
      </div>
    </>
  )
}

export default Directions;