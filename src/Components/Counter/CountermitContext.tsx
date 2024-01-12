import React, {useState} from "react";
import {useWahlContext} from "../../Context/WahlContext";
import "./counter.css"

interface CountermitContextProps {
    name : string
}
const CountermitContext : React.FC<CountermitContextProps> = ({name}) => {

    const wahlContext = useWahlContext();
    const selectedPerson = wahlContext.selectedPerson;
    const setSelectedPerson = wahlContext.setSelectedPerson;
    const data = wahlContext.data;
    // console.log(selectedPerson);

    let [wert, setWert] = useState(1);
    const riseWert = (pname:string) => {
        console.log(pname);
        //setWert(wert++);  // muss nicht zwangläüfig Wert richtig erhöhen
        //setWert(prevWert => prevWert + 1);
        wahlContext.setSelectedPerson({kategorie:"Ludwig", name:pname   , stimmen:5});
        {data.filter(value => {
            return value.name === name
        }).map (value => {
            return value.stimmen++;
        })
        }

    }
    return (
        <div className="wahlkarte">
            <h1>{name}</h1>
            {selectedPerson?.name === name ? <p className="red"> red</p>: <p>blue</p>}

            <button onClick={()=>
                riseWert(name)}>
                {data.filter(value => {
                    return value.name === name
                }).map (value => {
                return value.stimmen
             })
            }</button>
        </div>
    );
};

export default CountermitContext;