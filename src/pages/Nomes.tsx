import { FormEvent, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../styles/boxCard.scss';


export function Nomes() {
    const history = useHistory();
    const [namesText, setNameText] = useState('');
    const [valueNumber, setValueNumber] = useState('1');
    const [newNameFilter, setNameFilter] = useState<string[]>([]);

    function handleBack() {
        history.push('/')
    }

    function handleSortName(event: FormEvent) {
        event.preventDefault();
        const namesFormatted = namesText.split("\n")

        //Fazendo o sorteio
        for (let i = 0; i < namesFormatted.length; i++) {
            const j = Math.floor(Math.random() * (i + 1));
            [namesFormatted[i], namesFormatted[j]] = [namesFormatted[j], namesFormatted[i]];
        }

        //Filtrando a quantidade de nomes que o usuario quer
        const numberNames = Number(valueNumber);
        const newNameFilterAr = [];

        for (let i = 0; i < numberNames; i++) {
            const element = namesFormatted[i];
            newNameFilterAr.push(element)
        }

        setNameFilter(newNameFilterAr);
        console.log(newNameFilterAr)
    }

    return (
        <div className="content">
            <div className="boxCardName">
                <h1>Sortear nomes</h1>
                <p>Crie o sorteio de números facilmente utilizando essa opção, você poderá salvar o sorteio e compartilhar o link com outras pessoas.</p>
                <form onSubmit={handleSortName}>
                    <div className="numbers-input">
                        <div className="inpt-lbs">
                            <label>O resultado terá quantos nomes?</label>
                            <input type="number" min={1} value={valueNumber} onChange={event => setValueNumber(event.target.value)} />
                        </div>
                        <div className="inpt-lbs">
                            <label>Insira aqui um nome por linha</label>
                            <textarea placeholder="Digite os nomes" onChange={event => setNameText(event.target.value)} />
                        </div>
                    </div>
                    {
                        newNameFilter.length > 0 &&
                        <div className="result">
                            <p>
                                Resultado:
                                {newNameFilter.map((e) => <span className="results-number">{e}</span>)}
                                🥳
                            </p>
                        </div>
                    }

                    <div className="container-buttons">
                        <button type="submit">Sortear</button>
                        <button onClick={handleBack}>Voltar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}