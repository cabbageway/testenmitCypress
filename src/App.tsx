import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./Components/Counter/Counter";
import Content from "./Components/Content/Content";
import Wahlübersicht from "./Components/Wahlkomponente/Wahlübersicht";
import WahlContext from "./Context/WahlContext";
import {IWahlPerson} from "./model/interface";
import data1 from "./data/wahlstimmen.json";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./Components/Layout";
import Ranking from "./Components/Wahlkomponente/Ranking";
import CountermitProps from "./Components/Counter/CountermitProps";

function App() {
    const data = data1;
    const [selectedPerson, setPerson] = useState<IWahlPerson>({kategorie: "SPÖ", name: "Ludwig", stimmen: 5});//todo: refactoring

    const setSelectedPerson = (person:IWahlPerson) => {
        setPerson(person);
    }
  return (
    <div className="App">
        <Counter/>
         <CountermitProps startwert="19"/>
        {/* <Wahlübersicht/>
        <BrowserRouter>
            <WahlContext.Provider    value={{data,setSelectedPerson,selectedPerson}}>
                <Routes>
                    <Route path="/" element={<Layout/>}  />
                        <Route path="wahlübersicht" index element={<Wahlübersicht/>} />
                        <Route path="ranking" index element={<Ranking/>} />

                </Routes>
            </WahlContext.Provider>
        </BrowserRouter> */}

    </div>
  );
}

export default App;
