// rsf
// rsc
import React, {useState} from 'react';

/* Counter Komponent erhöht nur den Counter für sich
* Startwert wird in der Komponente definiert */
const Counter = () => {

    let [wert, setWert] = useState(0);
    const riseWert = () => {
        //setWert(wert++);  // muss nicht zwangläüfig Wert richtig erhöhen
        setWert(prevWert => prevWert + 1);

    }
   // let vari++;

    return (
        <div>
            <h3>Counter erhöhung testen </h3>
            <button id="increment"
                data-testid="increment"
                onClick={riseWert}><span id="count" data-testid="count">{wert}</span></button>
        <hr/>
        </div>
    );
};

export default Counter;