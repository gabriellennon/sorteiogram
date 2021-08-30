import { useEffect, useState } from "react";
import { withRouter, useLocation } from "react-router-dom";
import { CardDescription } from "../components/cardDescription";
import { CardNumber } from "../components/cardNumber";

export function SorteioNumeros(props: any){
    console.log(props.state)

    const listInstructions = [
        "Informe quantos números você quer no resultado do sorteio. Exemplo: 3",
        "Preencha qual o intervalo deve ser sorteado. Exemplo: entre 1 e 100",
        "Clique em sortear números. Pronto!"
    ]
    return(
        <>
            <div className="content">
                <CardNumber />

                {
                    props.location.state.detail.map((e: number) => <p>{e}</p>)
                }

                <CardDescription 
                    title="Como fazer um sorteio de números"
                    descriptionList={listInstructions}
                />
            </div>
        </>
    )
}