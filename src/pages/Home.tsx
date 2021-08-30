
import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';

import iconHamburguer from '../assets/icons/menu_hamburguer.svg';
import sorteioGramLogo from '../assets/img/sorteiogram.logo.png';
import { CardSorteio } from '../components/cardSorteio';
import '../styles/header.scss';

export function Home(){
    const [sortnumber, setSortNumber] = useState('1');
    const [sortnumber2, setSortNumber2] = useState('100');

    const history = useHistory();

    function handleSortNumber(event: FormEvent){
        event.preventDefault();
        const n1 = Number(sortnumber)
        const n2 = Number(sortnumber2)
        //gerando um valor aleatorio entre os valores escritos
        const sort = Math.floor((Math.random() * n2) + n1)
        console.log(sort)
        history.push({
            pathname: `/sorteio/numeros`,
            search: '?query=abc',
            state: { detail: sort }
        });
    }

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
                <div className="boxCardUser">
                    <img src="https://avatars.githubusercontent.com/u/57332512?v=4" alt="Foto de perfil do usuário" />
                    <h1>Sortear números</h1>
                    <p>Crie o sorteio de números facilmente utilizando essa opção, você poderá salvar o sorteio e compartilhar o link com outras pessoas.</p>
                    <form onSubmit={handleSortNumber}>
                        <div className="numbers-input">
                            <div className="inpt-lbs">
                                <label>O resultado terá quantos números?</label>
                                <input type="number" min={1} value={1} />
                            </div>
                            <div className="inpt-lbs">
                                <label>Entre</label>
                                <input type="number" min={1} value={sortnumber} onChange={event => setSortNumber(event.target.value)}/>
                            </div>
                            <div className="inpt-lbs">
                                <label>e</label>
                                <input type="number" min={1} value={sortnumber2} onChange={event => setSortNumber2(event.target.value)}/>
                            </div>
                        </div>
                        <button type="submit">Sortear</button>
                    </form>
                </div>
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