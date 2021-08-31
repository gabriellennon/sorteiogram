
import { useState } from 'react';
import { Link } from 'react-router-dom';
import iconHamburguer from '../../assets/icons/menu_hamburguer.svg';
import sorteioGramLogo from '../../assets/img/sorteiogram.logo.png';
import './styles.scss';

export function NavBar() {
    const [menu, setMenu] = useState(false);

    return (
        <div className="header">
            <div className="container-nav">
                <Link to="/">
                    <img src={sorteioGramLogo} alt="Logo sorteiogram" className="logo" />
                </Link>
                <button className="button-nav" onClick={() => setMenu(!menu)}>
                    <img src={iconHamburguer} alt="Ícone de menu" className="menuIcon" />
                </button>
                <nav className={menu ? "open" : ''}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/sorteio/numeros">Sorteio de números</Link></li>
                        <li><Link to="/sorteio/nomes">Sorteio de nomes</Link></li>
                    </ul>
                </nav>
            </div>

        </div >
    )
}