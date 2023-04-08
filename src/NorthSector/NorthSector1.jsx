import React from 'react';
import {BasicCard1,BasicCard2,BasicCard3,BasicCard4} from '../card/Card_north';
import './NorthSector1.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

const NorthSector1 = () => {
 
  return (
    <>
      <div className="flex-container">
      <div className="flex-items"><BasicCard1 /></div>
            <div className="flex-items"><BasicCard2 /></div>
            <div className="flex-items"><BasicCard3 /></div>
            <div className="flex-items"><BasicCard4 /></div>                       
      </div>

      <div class="pg_nav">
        <div class="pg1"><Link to="/North/1">1</Link></div>
        <div class="pg2"><Link to="/North/2">2</Link></div>
        <div class="pg3"><Link to="/North/3">3</Link></div>
        <div class="pg4"><Link to="/North/4">4</Link></div>
        <div class="pg5"><Link to="/North/5">5</Link></div>
      </div>
    </>
  )
}

export default NorthSector1