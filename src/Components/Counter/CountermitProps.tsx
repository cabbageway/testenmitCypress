// rsf
// rsc
import React, {useState} from 'react';
import mount from "cypress/react"

interface ICountermitProps {
    startwert:string
}
/* Counter Komponent erhöht nur den Counter
* Startwert wird  der Komponente übergeben */
const CountermitProps: React.FC<ICountermitProps> = ({startwert : string}) => {

    const [wert, setWert] = useState ("");
    const [wert2, setWert2] = useState('');
    const [summe,setSumme] = useState(0)
    const [inputValue, setInput] = useState('');

    const riseWertLocal = () => {
        //setWert(wert++);  // muss nicht zwangläüfig Wert richtig erhöhen
        setWert(prevWert => prevWert + 1);

    }
    const riseWertLocal2 = () => {
        //setWert(wert++);  // muss nicht zwangläüfig Wert richtig erhöhen
        setWert2(prevWert => prevWert + 1);

    }
    const add = () =>{
        setSumme(parseInt(wert) + parseInt(wert2)); // löst rerender aus
    }



    return (
        <div>

            <div>
                <h3>Textinput testen </h3>
                <label htmlFor="textInput">Text Input:</label>
                <input
                    type="text"
                    id="textInput"
                    value={inputValue}
                    onChange={(e)=> {
                        setInput(e.target.value)
                    }} />
                <label htmlFor="copyValue">show copy</label>
                <input type="text" id="copyValue" value={inputValue} />
            </div>
            <hr/>
            <h3>zwei Textinputs, Werte dann bei dritten Button addieren und Testen </h3>
            <button className="btn btn-outline-secondary m-2" onClick={() =>{
                riseWertLocal();
            }
            } >+</button>

            <input
                type="text"
                id="wert1"
                value={wert}
                onChange={(e)=> {
                    setWert(e.target.value)
                }} />
            <button  className="btn btn-outline-secondary m-2"  onClick={() =>{
                riseWertLocal2();
            }
            } >+</button>
            <input
                type="text"
                id="wert2"
                value={wert2}
                onChange={(e)=> {
                    setWert2(e.target.value)
                }} />

            <button className="btn btn-primary m-2" id="btn" data-testid="btn" onClick={() =>{
                add();
            }
            } >Addiere</button>
            <input  id="result" data-testid="result"  type="text" value={summe}/>

            <hr/>

        </div>
    );
};

export default CountermitProps;