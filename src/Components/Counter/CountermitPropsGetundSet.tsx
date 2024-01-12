import React, {useState} from 'react';

interface ICountermitProps {
    startwert:number
    setCounter: () => void
}
/* Counter Komponent erhöht nur den Counter
* Startwert wird  der Komponente übergeben */
const CountermitPropsGetundSet: React.FC<ICountermitProps> = ({startwert, setCounter}) => {

    let [wert, setWert] = useState(startwert);
    const riseWertLocal = () => {
        //setWert(wert++);  // muss nicht zwangläüfig Wert richtig erhöhen
        setWert(prevWert => prevWert + 1);

    }
    return (
        <div>
            <button onClick={() => {
                riseWertLocal();
            setCounter()}}>{wert}</button>
        </div>
    );
};

export default CountermitPropsGetundSet;