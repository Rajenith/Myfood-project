import React from "react";
import { increment, decrement, handleRemove } from "../../../redux/reduxdata";
import { useDispatch, useSelector } from "react-redux";
import { select, selectCount, Totalcart } from "../../../redux/reduxdata";
import './caart.css';
const Cart = () => {
    const cvalue = useSelector(select);
    const cartval = useSelector(selectCount);
    const totalAmount = useSelector(Totalcart);
    const dispatch = useDispatch();
    return (
        <div>
            <div>
            </div>
            <div className="d-flex justify-center text-center">
                <div className="all-cart-image col-lg-6">{cvalue.map((e) => {
                    return (
                        <div className="cart-dish-page">
                            <div id="cart-image-box">
                                <img src={e.url} alt='c-img' />
                            </div>
                            <div id="cart-in-de-button">
                                <h2>{e.name}</h2>
                                <button id="incre" onClick={() => dispatch(increment(e))}>+</button>
                                {<span>{e.cartquantity}</span>}
                                <button id="decre" onClick={() => dispatch(decrement(e))}>-</button>
                                <h5>
                                    Price: ${parseInt(e.price) * Number(e.cartquantity)}</h5>
                            </div>
                            <div id="order-btn">
                                <button id="del-btn" onClick={() => dispatch(handleRemove(e))}>X</button>
                                <button id="orderbtn">order</button>
                            </div>
                        </div>

                    )
                })}</div>
                <div className="col-lg-6" id="total">
                    <h1>Purchase our product price</h1>
                    <hr></hr>
                    <p>Total Price:<span>Rs{" "}{totalAmount}</span></p>
                    <img alt="smll-pic" src=" https://images.pexels.com/photos/1624487/pexels-photo-1624487.jpeg?auto=compress&cs=tinysrgb&w=600" />
                </div>
            </div>
        </div>

    )
}
export default Cart