import {createContext, useContext, useState} from 'react';
import {IWahlPerson} from "../model/interface";
import data1 from "./../data/wahlstimmen.json";




interface WahlContextProps {
    data: IWahlPerson[];
    selectedPerson: IWahlPerson | null;
    setSelectedPerson: (person: IWahlPerson) => void ;
    //setStations: (stations: IStation[]) => void ;
}

const WahlContext  = createContext<WahlContextProps>(
    {
    data: data1,
    selectedPerson: {kategorie: "SPÖ", name: "Ludwig", stimmen: 5},
    setSelectedPerson:(person:IWahlPerson) => {}
    })


//console.log("StationContextProps - selected Station Book");

export const useWahlContext = () => {



    const context = useContext(WahlContext);

    if(!context) {
        throw new Error ('StationContext must be used within Provider');
    }
    return context;
}
export default WahlContext;

