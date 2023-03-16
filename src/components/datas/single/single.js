import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addtoCart } from "../../redux/reduxdata";
import Myfood from "../allfood";
import './single.css';
import { useHistory, useLocation } from "react-router-dom";
import Navbar from "../../Home/navbar/navbar";
function Single() {
    const [val, setVal] = useState("Order");
    const [order, setOrder] = useState(false);
    const [data, setData] = useState({});
    const [food, setfood] = useState(Myfood);
    const { search } = useLocation();
    const dispatch = useDispatch();
    const query = new URLSearchParams(search)
    useEffect(() => {
        const foods = Myfood.find((item) => item.id == query.get('id'));
        setData(foods);
    })
    function ordee() {
        if (order === true) {
            val('verygood')

        }
        else {
            setVal('Ordered')
        }

    }
    const history=useHistory();
    const non = food.filter((e) => e.key === data.key)
    console.log(non);
    function single(id){
        console.log('good try')
            return (history.push(`/single1?id=${id}`));
    
       
    }
    return (
        <div className="">
            <div>
                <Navbar/>
            </div>

            <div>

                <div className="d-flex col-lg-12 p-5">
                    <div className="col-lg-6">

                        <div id="sing-img">
                            <img src={data.url} key={'sib'} alt="img" id="singleimg" />
                        </div>
                    </div>
                    <div className="col-lg-6 p-3">
                        <div id="sing-name">
                            <h1>{data.name}</h1>
                            <h3>Description:</h3>
                            {" "}<p>{data.description}</p>
                            <h2>Price:{data.price}</h2>
                        </div>
                        <div>
                            <h3 id='rate'>Rating</h3>
                            <div id="rate-order">
                                <button id="rat-ing">{data.rating}</button>
                                <button onClick={() => dispatch(addtoCart(data))} id="si-add">Add cart</button>
                                <button id='or-der' onClick={() => ordee(setOrder)}>{val}</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div>
                </div>
            </div>
            <div>
                <div className="" id="foood">{
                    non.map((e) => {
                        return (
                            <div className="food-img">
                                <img onClick={()=> single(e.id)} src={e.url} alt="sug-img"/>
                                <div className="d-flex" id="pa-pri">
                                    <p>{e.name}</p>
                                    <p>{e.price}</p>
                                </div>
                                <div>
                                    <button onClick={() => dispatch(addtoCart(e))} id="btncart1">Add cart</button>
                                </div>
                            </div>

                        )

                    })
                }</div>

            </div>

        </div>

    )
}
export default Single