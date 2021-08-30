import './styles.scss';

type CardsProps = {
    title: string;
    descriptionList: string[];
}
export function CardDescription(props: CardsProps){

    return(
        <div className="boxCard">
            <h1>{props.title}</h1>
            <ol>
                {props.descriptionList.map(e => <li>{e}</li>)}
            </ol>
        </div>
    )
}