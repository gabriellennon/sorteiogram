
import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';

import iconHamburguer from '../assets/icons/menu_hamburguer.svg';
import sorteioGramLogo from '../assets/img/sorteiogram.logo.png';
import { CardNumber } from '../components/cardNumber';
import { CardSorteio } from '../components/cardSorteio';
import '../styles/header.scss';

export function Home(){


    return(
        <div className="container">
            <div className="header">
                <div className="container-nav">
                    <img src={sorteioGramLogo} alt="Logo sorteiogram" className="logo" />
                    <img src={iconHamburguer} alt="Ícone de menu" className="menuIcon" />
                </div>
                <nav>
                    <ul>
                        <li>Home</li>
                        <li>Sorteio de números</li>
                        <li>Sorteio de nomes</li>
                        <li>Amigo Secreto</li>
                    </ul>
                </nav>
            </div>
            <div className="content">
                <CardNumber />

                <CardSorteio 
                    title="Sortear nomes"
                    description="Crie o sorteio de nomes, você poderá inserir manualmente ou fazer o upload de um arquivo com os nomes para realizar o sorteio."
                    textButton="criar sorteio de nomes"
                    linkButton="/sorteio/nomes"
                />
                <CardSorteio 
                    title="Sortear amigo secreto"
                    description="Crie o sorteio de amigo secreto simplificado com essa ferramenta que não exige cadastro. O resultado será enviado para todos os participantes."
                    textButton="criar amigo secreto"
                    linkButton="/sorteio/amigo-secreto"
                />
            </div>
        </div>
    )
}