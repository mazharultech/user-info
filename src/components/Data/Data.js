import React from 'react';

const Data = (props) => {
    const data = props.data;
    console.log(data);
    //const totalIncome = data.reduce((total ,uinc) => total + uinc.income, 0 );
    let total=0;
    for(let i =0 ; i<data.length; i++){
        const usrData = data[i];
        total =total + usrData.income;
    }
    return (
        <div>
            <h2>User Information here</h2>
            <h4>Users: {data.length}</h4>
            <p>Total Anual Income: {total}</p>
        </div>
    );
};

export default Data;