import './styles.scss';

import { FormEvent, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useHistory } from 'react-router-dom';


export function CardNumber(props: any) {
    const [sortnumber, setSortNumber] = useState('1');
    const [sortnumber2, setSortNumber2] = useState('100');
    const [sortQuantiNumber, setQuantiNumber] = useState('1');
    const [erroQtd, setErroQtd] = useState(false);
    const [backButton, setBackButton] = useState(false);

    const history = useHistory();

    function calcSize(a: number, b: number){
        let qtdPossible = 0
        for (let i = a; i < b; i++) {
           qtdPossible++; 
        }
        return qtdPossible + 2;
    }

    async function Sort(qtd: number, n1: number, n2: number){
        const values: number[] = []
        //Garantindo que nao tem numero repetido
        while (values.length !== qtd) {
            const sorteio = Math.floor((Math.random() * n2) + n1)
            if(!values.includes(sorteio)){
                values.push(sorteio)
            }
        }
        return values;
    }

    async function handleSortNumber(event: FormEvent){
        setErroQtd(false);
        event.preventDefault();
        const n1 = Number(sortnumber)
        const n2 = Number(sortnumber2)
        const qtd = Number(sortQuantiNumber)

        const verifica = calcSize(n1,n2)
        if(verifica > qtd){
            const numbersResult = await Sort(qtd, n1, n2);

            history.push({
                pathname: `/sorteio/numeros`,
                state: { detail: numbersResult }
            });
        }else{
            setErroQtd(true);
            toast.error("Verifique a quantidade de números e os números 😬")
        }
    }

    return (
        <div className="boxCardUser">
            <img src="https://avatars.githubusercontent.com/u/57332512?v=4" alt="Foto de perfil do usuário" />
            <h1>Sortear números</h1>
            <p>Crie o sorteio de números facilmente utilizando essa opção, você poderá salvar o sorteio e compartilhar o link com outras pessoas.</p>
            <form onSubmit={handleSortNumber}>
                <div className="numbers-input">
                    <div className="inpt-lbs">
                        <label>O resultado terá quantos números?</label>
                        <input type="number" min={1} value={sortQuantiNumber} onChange={event => setQuantiNumber(event.target.value)} />
                    </div>
                    <div className="inpt-lbs">
                        <label>Entre</label>
                        <input type="number" min={1} value={sortnumber} onChange={event => setSortNumber(event.target.value)} />
                    </div>
                    <div className="inpt-lbs">
                        <label>e</label>
                        <input type="number" min={1} value={sortnumber2} onChange={event => setSortNumber2(event.target.value)} />
                    </div>
                </div>
                <div className="buttonsContainer">
                    <button type="submit">Sortear</button>
                    {
                        backButton &&
                        <button>Voltar</button>
                    }
                </div>
            </form>
            {
                erroQtd
                &&
                (
                    <>
                        <p className="quantityError">Quantidade de números é maior que a variação</p>
                        <div>
                            <Toaster
                                position="top-center"
                                reverseOrder={false}
                            />
                        </div>
                    </>
                )

            }
        </div>
    )
}