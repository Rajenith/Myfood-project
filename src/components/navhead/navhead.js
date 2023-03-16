import React, { useState } from "react";
import Navbar from "../Home/navbar/navbar";
import Datas from "../datas/data";
import Discription from "../discription/discription";
import Footer from "../footer/footer";
import Foodslide from "../Home/carosel/carousel";
import Team from "../Team/team";
function Navhead(){
    return(
        <div>
            <div>
               <Navbar/>
            </div>
            <div>
                <Datas/>
            </div>
            <div>
                <Discription/>
            </div>
            <div>
                <Team/>

            </div>
            <div>
                <Footer/>
            </div>

            

        </div>
    )
}
export default Navhead