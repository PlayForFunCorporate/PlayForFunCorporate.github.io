import './Header.css';
import { Routes, Route, Link } from "react-router-dom";
import { findByLabelText } from '@testing-library/react';
function Header(props)
{
    return(
        <>
            <header>
                <Link to="/Settings"><div id="menu"></div></Link>
                <div id="header_title">
                    <Link to="/">{props.children}</Link>
                </div>
                <span id="popupShape1" style={{display:"none"}}></span>
                <div id="profile">
                    <span id="profilePopup">
                        <h2>Bonjour {props.user} !</h2>
                        <div className="profileButton">
                            <img src={require('./img/profile.png')}/>
                            <p>
                                <Link to="/Profile">Profil</Link>
                            </p>
                        </div>
                        <div className="gameStats">
                            <img src={require('./img/stats.png')}></img>
                            <p>
                                <Link to="/Stats">Statistiques de jeux</Link>
                            </p>
                        </div>
                        <Link to="/Login" className='disconnect'><div>
                            Déconnexion
                        </div></Link>
                    </span>
                </div>
                <span id="popupShape2" style={{display:"none"}}></span>
            </header>
        </>
    );
}
export default Header;