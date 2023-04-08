import React from 'react';
import { BasicCard17, BasicCard18, BasicCard19, BasicCard20 } from '../card/Card_south';
import './SouthSector5.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

const SouthSector5 = () => {
  
  return (
    <>
      <div className="flex-container">
      <div className="flex-items"><BasicCard17 /></div>
        <div className="flex-items"><BasicCard18 /></div>
        <div className="flex-items"><BasicCard19 /></div>
        <div className="flex-items"><BasicCard20 /></div>                       
      </div>

      <div class="pg_nav">
        <div class="pg1"><Link to="/South/1">1</Link></div>
        <div class="pg2"><Link to="/South/2">2</Link></div>
        <div class="pg3"><Link to="/South/3">3</Link></div>
        <div class="pg4"><Link to="/South/4">4</Link></div>
        <div class="pg5"><Link to="/South/5">5</Link></div>
      </div>
    </>
  )
}

export default SouthSector5