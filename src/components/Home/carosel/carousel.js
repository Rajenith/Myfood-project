import React from "react";
import Carousel from "react-bootstrap/Carousel";
import './carosel.css';
function Foodslide() {
    return (
        <div>

            <Carousel id='c-image'>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://th.bing.com/th/id/OIP.Wp6XgnYRrIXB2P0mSTBhBAHaEo?pid=ImgDet&rs=1"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>Health is best of own</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://th.bing.com/th/id/OIP.OtmLDZXEVSuIzx0GW6mqeQHaE3?pid=ImgDet&rs=1"
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Good health and Tasty food</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>welcome</h3>
                        <img src="https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=600"/>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>





        </div>
    )
}
export default Foodslide