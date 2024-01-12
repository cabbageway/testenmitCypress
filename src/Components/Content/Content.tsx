import React, {useState} from 'react';
import CountermitProps from "../Counter/CountermitProps";
import CountermitPropsGetundSet from "../Counter/CountermitPropsGetundSet";

const Content = () => {
    let [zaehler, setZaehler] = useState(50)
    const setCounter = () => {
        setZaehler(prevZaehler=> zaehler++);
    }
    return (
        <div>
         <CountermitProps startwert="100"/>
            <CountermitPropsGetundSet startwert={zaehler} setCounter={setCounter}/>
        <h4>dieser Wert wird nur vom zweiten Zähler in der Elternkomponente erhöht</h4>
            <p>{zaehler}</p>
        </div>
    );
};

export default Content;