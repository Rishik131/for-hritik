import React from 'react';
import {BasicCard9,BasicCard10,BasicCard11,BasicCard12} from '../card/Card_east1';
import './SouthSector3.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

const SouthSector3 = () => {
  
  return (
    <>
      <div className="flex-container">
      <div className="flex-items"><BasicCard9 /></div>
            <div className="flex-items"><BasicCard10 /></div>
            <div className="flex-items"><BasicCard11/></div>
            <div className="flex-items"><BasicCard12 /></div>                        
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

export default SouthSector3