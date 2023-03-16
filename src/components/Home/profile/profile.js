import React from "react";
import photos from "../../photos/myprofile.jpg";
import "./profile.css";
function Profile() {
    return (
        <div id="all">
            <div id="all-all">
                <div id="h1">
                    <h1>Profile</h1>
                    <hr id="hr"></hr>
                </div>
                <div className="d-flex">
                    <ul>
                        <li>
                            <div>
                                <img id="my-img" src={photos} width="70px" height="70px" />
                                <h1>+</h1>
                            </div>
                            <div>
                                <div id="itemss">
                                    <h3><span>Name:</span>{sessionStorage.getItem('Name')}</h3>
                                    <h3><span>Email:</span>{sessionStorage.getItem('Email')}</h3>
                                    <h3><span>Phone:</span>{sessionStorage.getItem('Phone')}</h3>
                                </div>


                            </div>
                        </li>
                    </ul>


                </div>
                <div>
                    <h4><span>Add another account:</span>+</h4>
                </div>
                <div>
                    <p>Back up your browsing data and see your favorites, password, history and more.</p>
                </div>


            </div>

        </div>
    )
}
export default Profile