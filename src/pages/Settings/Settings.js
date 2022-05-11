import './Settings.css';
import CenteredContent from '../../components/CenteredContent/CenteredContent.js';

function Settings() {
  return (
    <>
      <div className="Settings">
        <br/><br/><br/><br/>
        <CenteredContent>
            <div id="account_settings">
                <p>Paramètre du compte</p>
                <div id="settings_grid">
                    <div>
                      <label htmlFor="Prenom">Prenom</label>
                      <input type="text" id="Prenom"></input>
                    </div>
                    <div>
                      <label htmlFor="Nom">Nom</label>
                      <input type="text" id="Nom"></input>
                    </div>
                    <div>
                      <label htmlFor="Pseudo">Pseudo</label>
                      <input type="text" id="Pseudo"></input>
                    </div>
                    <div>
                      <label htmlFor="Telephone">Telephone</label>
                      <input type="text" id="Telephone"></input>
                    </div>
                    <div>
                      <label htmlFor="Email">Email</label>
                      <input type="text" id="Email"></input>
                    </div>
                </div>
            </div>
        </CenteredContent>
      </div>
    </>
  );
}

export default Settings;
