import React from 'react';
import {IWahlPerson} from "../../model/interface";
import CountermitContext from "../Counter/CountermitContext";
import WahlContext, {useWahlContext} from "../../Context/WahlContext";


const Wahlübersicht = () => {
    const wahlContext = useWahlContext()
    const data = wahlContext.data;

    return (
        <div>
            {data.map((value)=>{
                return <CountermitContext name={value.name}/>
            })}
        </div>
    );
};

export default Wahlübersicht;