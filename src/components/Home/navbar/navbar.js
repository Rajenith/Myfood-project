import React, { useState } from "react";
import { useSelector } from "react-redux";
// import { selectCount } from "../../redux/reduxdata";
import Foodslide from "../carosel/carousel";
import Datas from "../../datas/data";
import { select } from '../../redux/reduxdata';
import Myfood from "../../datas/allfood";
import Menubar from "./menu";
import './navbar.css';
import Footer from "../../footer/footer";
import { useHistory } from "react-router-dom";
import { Prev } from "react-bootstrap/esm/PageItem";
import Discription from "../../discription/discription";
import Team from "../../Team/team";
import Profile from "../profile/profile";
function Navbar() {
    // const cart = useSelector(selectCount);
    const cart1 = useSelector(select);
    const [data, setData] = useState(Myfood);
    const history = useHistory();
    function addCart() {
        history.push('/cart')
    }
    function profi() {
        history.push('/profile')

    }
    const [profile,setProfile]=useState(false)
    const [menu, setMenu] = useState(false)
    function gohome(){
        history.push('/navhead')
    }
    return (
        <div>
            <div className="navBar col-sm-12">
                <div id="logo-img">
                    <img width="50px" alt='log-img' onClick={()=>gohome()} src="https://media1.thehungryjpeg.com/thumbs2/ori_3513978_c18543b50a46f5555d28ce6aaf27267cc0dbf812_natural-fresh-food-vegetables-logo-badge-vector-template.jpg" />
                </div>
                <div id="ul-li">
                    <ul id="list">
                        <li><a href="#home">Home</a></li>
                        <li><a href="#disii">About</a></li>
                        <li><a href="#team">Team</a></li>
                        <li><a href="#contact">Contact</a></li>
                    </ul>

                </div>
                <div onClick={() => addCart()}>
                    <sub><img width="30px" id="crat-img" src="https://www.shutterstock.com/image-vector/shopping-cart-icon-apps-web-600w-2089453900.jpg" alt="cart-img" />
                    </sub><p>{cart1.length}</p>
                </div>
                <div onClick={() => setProfile((Prev) => !(Prev))}>
                    <img width='45px' id="profile-img" alt="pro-img" src="https://www.seekpng.com/png/detail/966-9665493_my-profile-icon-blank-profile-image-circle.png" />
                </div>
                <div>
                    <img width='40px' alt="menu-img" onClick={() => setMenu((Prev) => !(Prev))} src="https://cdn1.iconfinder.com/data/icons/jumpicon-basic-ui-glyph-1/32/-_Dot-More-Option-Menu-64.png" />
                </div>

            </div>  
            <Foodslide/>        
              {menu && <Menubar />}
             {profile && <Profile/>} 
            {/* <div id='home'>
            <Datas />
            </div> */}
            {/* <div id='disii'>
                <Discription />
            </div>
            <div id='team'>
                <Team/>
            </div>
            <div id='contact'>
                <Footer />
            </div>  */}

        </div>

    )
}
export default Navbar