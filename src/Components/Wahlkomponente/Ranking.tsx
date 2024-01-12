import React from 'react';
import wahlContext, {useWahlContext} from "../../Context/WahlContext";

const Ranking = () => {
    const wahlContext = useWahlContext();
    const data = wahlContext.data;
    data.sort((a,b)=>{
        if (a.stimmen < b.stimmen) {
            return 1;
        }
        if (a.stimmen > b.stimmen) {
            return -1;
        }
        return 0;
    })
    // const {data} = useWahlContext()
    return (
        <>
            {
     data.map (value => {
         return <p>{value.name} {value.stimmen}</p>
     })
            }
        </>
    )
};

export default Ranking;