import React, {useState} from 'react';
import {Link} from "react-router-dom";

const Header = () => {
    return (

        <div className="container m-2 bg-primary p-5 text-center rounded-2">
            { /* teams.map((value)=> {
                return  <p key={value.id}> {value.name}</p>
            }) */}
            <h1>Wahlbarometer</h1>

        </div>
    );
};

export default Header;
