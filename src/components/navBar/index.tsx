
import { Link } from 'react-router-dom';
import iconHamburguer from '../../assets/icons/menu_hamburguer.svg';
import sorteioGramLogo from '../../assets/img/sorteiogram.logo.png';
import './styles.scss';

export function NavBar(){
    return(
        <div className="header">
        <div className="container-nav">
            <Link to="/">
                <img src={sorteioGramLogo} alt="Logo sorteiogram" className="logo" />
            </Link>
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
    )
}