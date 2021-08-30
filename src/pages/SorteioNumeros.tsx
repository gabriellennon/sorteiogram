import { useEffect, useState } from "react";
import { withRouter, useLocation } from "react-router-dom";

export function SorteioNumeros(){
    const [numberSort, setNumberSort] = useState<Number>();
    const location = useLocation();

    useEffect(() => {
        const numberResult = location.state
        // setNumberSort()
      }, [location]);

    return(
        <>
            <h1>Sorteio numeros</h1>
        </>
    )
}