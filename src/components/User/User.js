import React,{ useState } from 'react';
import './User.css';
import user from './users.json';
import UserInfo from '../UserInfo/UserInfo';
import Data from '../Data/Data';
const User = () => {
    const user15 = user.slice(0 , 15);
    const [userInfo, setUserInfo] = useState(user15);
    const [data ,setData] = useState([]);
    const handlerUser = (users) =>{
        const newData = [...data, users];
        setData(newData);
    }
    return (
        <div className="allUsers">
            <div className= "user-container">
                {
                    userInfo.map( usrs => <UserInfo
                        handlerUser = {handlerUser}
                        users={usrs}
                        ></UserInfo>)
                }
            </div>
            <div className="user-info">
                <Data data ={data}></Data>
            </div>
        </div>
    );
};

export default User;