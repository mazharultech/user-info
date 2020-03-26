import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faPlusCircle} from '@fortawesome/free-solid-svg-icons'
import './UserInfo.css'

const UserInfo = (props) => {
    // console.log(props);
    const { img, name, email, phone, income } = props.users;
    return (
        <div className="userData">
            <div>
                <img src={img} alt="" />
            </div>
            <div className="">
                <h2>{name}</h2>
                <p>Email: {email}</p>
                <p>Phone: {phone}</p>
                <p>Annual Income: ${income}</p>
                <button
                 className="main-btn"
                 onClick = {() => props.handlerUser(props.users)}
                 ><FontAwesomeIcon icon={faPlusCircle} /> add to price</button>
            </div>
        </div>
    );
};

export default UserInfo;