import React from 'react';
import {BasicCard9,BasicCard10,BasicCard11,BasicCard12} from '../card/Card_east1';
import './EastSector3.scss';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useNavigate
} from "react-router-dom";

const EastSector3 = () => {
  
  return (
    <>
      <div className="flex-container">
            <div className="flex-items"><BasicCard9 /></div>
            <div className="flex-items"><BasicCard10 /></div>
            <div className="flex-items"><BasicCard11/></div>
            <div className="flex-items"><BasicCard12 /></div>                      
      </div>

      <div class="pg_nav">
        <div class="pg1"><Link to="/East/1">1</Link></div>
        <div class="pg2"><Link to="/East/2">2</Link></div>
        <div class="pg3"><Link to="/East/3">3</Link></div>
        <div class="pg4"><Link to="/East/4">4</Link></div>
        <div class="pg5"><Link to="/East/5">5</Link></div>
      </div>
    </>
  )
}

export default EastSector3