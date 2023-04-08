import React from 'react';
import { BasicCard17, BasicCard18, BasicCard19, BasicCard20 } from '../card/Card_east1';
import './NorthSector5.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

const NorthSector5 = () => {
  
  return (
    <>
      <div className="flex-container">
      <div className="flex-items"><BasicCard17 /></div>
        <div className="flex-items"><BasicCard18 /></div>
        <div className="flex-items"><BasicCard19 /></div>
        <div className="flex-items"><BasicCard20 /></div>                      
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

export default NorthSector5