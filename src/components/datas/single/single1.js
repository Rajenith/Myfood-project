import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Myfood from "../allfood";
import Single from "../single/single";
import './single.css';
function SingleOne() {
    const [one, setOne] = useState({});
    const [foods, setFoods] = useState(Myfood);
    const [show,setShow]=useState(false)
    const history=useHistory();
    const { search } = useLocation();
    const query = new URLSearchParams(search)
    useEffect(() => {
        const Items = foods.find((item) => item.id == query.get('id'));
        setOne(Items);
    },[])
    function Cross(){
       setShow(Single);
       history.push('./navhead')

    }
    return (
        <div>
            <div id="s1-img">
                <img src={one.url} alt="one-img" />
                <h1>{one.name}</h1>
                <button id="del" onClick={()=>Cross()}>X</button>
            </div>
        </div>
    )   
}
export default SingleOne