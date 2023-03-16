import React from "react";
import { useHistory } from "react-router-dom";
import video from "../video/wecome1.mp4";
import './wel.css';
function Wel() {
    const history = useHistory();
    function next() {
        history.push('/sign')
    }
    return (
        <>
            <div id="vid-div">
                <video autoPlay loop muted playsInline className="video" id='my-vid'>
                    <source src={video} type='video/mp4' alt="vid"></source>
                </video>
            </div>
            <div id="head-center">
                <h1>R & K Restarunt</h1>
                <h3>Welcome To All</h3>
                <button onClick={() => next()}>Order Now</button>

            </div>

        </>

    )
}
export default Wel