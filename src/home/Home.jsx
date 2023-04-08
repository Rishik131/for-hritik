import React from "react";
import './Home.scss';
// import './Home.js';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
  } from "react-router-dom";
import BasicCard from "../card/Card.jsx";
import Directions from "../Directions/Directions";
import NorthSector1 from "../NorthSector/NorthSector1";
import NorthSector2 from "../NorthSector/NorthSector2";
import NorthSector3 from "../NorthSector/NorthSector3";
import NorthSector4 from "../NorthSector/NorthSector4";
import NorthSector5 from "../NorthSector/NorthSector5";
import SouthSector1 from "../SouthSector/SouthSector1";
import SouthSector2 from "../SouthSector/SouthSector2";
import SouthSector3 from "../SouthSector/SouthSector3";
import SouthSector4 from "../SouthSector/SouthSector4";
import SouthSector5 from "../SouthSector/SouthSector5";
import EastSector1 from "../EastSector/EastSector1";
import EastSector2 from "../EastSector/EastSector2";
import EastSector3 from "../EastSector/EastSector3";
import EastSector4 from "../EastSector/EastSector4";
import EastSector5 from "../EastSector/EastSector5";
import WestSector1 from "../WestSector/WestSector1";
import WestSector2 from "../WestSector/WestSector2";
import WestSector3 from "../WestSector/WestSector3";
import WestSector4 from "../WestSector/WestSector4";
import WestSector5 from "../WestSector/WestSector5";
import CancerHospital from "../NorthSector/CancerHospital";
import DentalHospital_n from "../NorthSector/DentalHospital";
import DentalHospital_s from "../SouthSector/DentalHospital_s";

const FindHosp = () =>{
    var hosp_type = document.getElementById("searchHosp").value;
    var url = window.location.href;
    var url_len = url.length;
    var slash_pos = url.lastIndexOf("/")
    var new_url = url.substring(0,slash_pos);
    new_url = new_url + '/'+hosp_type;
    window.location.href = new_url;
};

const Home = () => {
    return (
        <>
        
            <header id="nav-wrapper">
                <nav id="nav">
                    <div className="nav left">
                        <span className="gradient skew"><h1 className="logo un-skew"><a href="#home">RPA proj</a></h1></span>
                        <button id="menu" className="btn-nav"><span className="fas fa-bars"></span></button>
                    </div>

                    <div className="mid">
                        <div className="search_box">
                        <form>
                            <input type="text" id="searchHosp" placeholder="Search" className="search_box1"/>
                        </form>
                        </div>
                        <div className="search_button" >
                        <button onClick={FindHosp} className="search_button1">
                            Search
                        </button>
                        </div>
                    </div>
                    <div className="nav right">
                        <a href="/" className="nav-link active"><span className="nav-link-span"><span className="u-nav">Home</span></span></a>
                        <a href="#Near_you" className="nav-link"><span className="nav-link-span"><span className="u-nav">Near You</span></span></a>
                        <a href="#About" className="nav-link"><span className="nav-link-span"><span className="u-nav">About the project</span></span></a>
                        <a href="#contact" className="nav-link"><span className="nav-link-span"><span className="u-nav">Contact</span></span></a>
                    </div>
                </nav>
            </header>
            <main>
                <section id="home">
                    <div className="intro">
                        <div className="intro_txt1">
                            WE <br />
                            SAVE LIVES
                        </div>
                        <div className="intro_txt2">
                            Suggesting best Hospitals near you <br />
                            based on most reliable reviews
                        </div>
                        <div className="intro_img">
                            <img src="https://github.com/Rishik131/RPA_project/blob/main/frontend/rpa_frontend/src/elements/images/image1_cut.png?raw=true"
                                alt="intro_img" className="intro_img1"/>
                        </div>
                    </div>
                </section>
                <section id="Near_you">
                                {/* <div className="flex-container">
                                {
                                    Array.apply(null, { length: 6 }).map(() => (<div className="flex-items"><BasicCard /></div>))
                                }
                                    
                                 </div>
                     */}
                     <Routes>
                        <Route path="/" element={<Directions/>}/>
                        <Route path="/North/1" element={<NorthSector1/>}/>
                        <Route path="/North/2" element={<NorthSector2/>}/>
                        <Route path="/North/3" element={<NorthSector3/>}/>
                        <Route path="/North/4" element={<NorthSector4/>}/>
                        <Route path="/North/5" element={<NorthSector5/>}/>
                        <Route path="/North/Cancer" element={<CancerHospital/>}/>
                        <Route path="/North/Dental" element={<DentalHospital_n/>}/>
                        <Route path="/South/1" element={<SouthSector1/>}/>
                        <Route path="/South/2" element={<SouthSector2/>}/>
                        <Route path="/South/3" element={<SouthSector3/>}/>
                        <Route path="/South/4" element={<SouthSector4/>}/>
                        <Route path="/South/5" element={<SouthSector5/>}/>
                        <Route path="/South/Dental" element={<DentalHospital_s/>}/>
                        <Route path="/East/1" element={<EastSector1/>}/>
                        <Route path="/East/2" element={<EastSector2/>}/>
                        <Route path="/East/3" element={<EastSector3/>}/>
                        <Route path="/East/4" element={<EastSector4/>}/>
                        <Route path="/East/5" element={<EastSector5/>}/>
                        <Route path="/West/1" element={<WestSector1/>}/>
                        <Route path="/West/2" element={<WestSector2/>}/>
                        <Route path="/West/3" element={<WestSector3/>}/>
                        <Route path="/West/4" element={<WestSector4/>}/>
                        <Route path="/West/5" element={<WestSector5/>}/>
                     </Routes>
                     
                </section>
                <section id="About">

                </section>
                <section id="contact">

                </section>
                <script>

                </script>
            </main>
            {/* <div>hello</div> */}
        </>
    )
}

export default Home