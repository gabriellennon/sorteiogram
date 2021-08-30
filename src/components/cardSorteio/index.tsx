import { useHistory } from 'react-router-dom';
import './styles.scss';

type CardsProps = {
    title: string;
    description: string;
    textButton: string;
    linkButton?: string;
}

export function CardSorteio(props: CardsProps){
    const history = useHistory();

    function handleGoSort(){
        if(props.linkButton){
            history.push(props.linkButton)
        }

    }

    return(
        <div className="boxCard">
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <button onClick={handleGoSort}>{props.textButton}</button>
        </div>
    )
}