import '../../style/common.css';
import './style.css';
import CenteredContent from '../../components/CenteredContent/CenteredContent.js';

function Login() {
  return (
    <>
      <div className="Login">
        <CenteredContent>
            <div id="login">
                <h1>Connexion</h1>
                <div id="login_form">
                    <div>
                      <label htmlFor="username">Pseudo</label>
                      <input type="text" id="Username"></input>
                    </div>
                    <div>
                      <label htmlFor="password">Mot de passe</label>
                      <input type="password" id="Password"></input>
                    </div>
                    <div className="connexion_btn">
                        <p>Connexion</p>
                    </div>
                    <div>
                      <a href="">Mot de passe oublié</a>
                    </div>
                </div>
            </div>
        </CenteredContent>
      </div>
    </>
  );
}

export default Login;
