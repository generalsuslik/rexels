import registration from "../utils/registration";
import '../styles/logout.css';


const LogOut = () => { 
    return (
        <div className="logout-container">
            <div className="content">
                <h2>
                    Are you sure, you want to manually log out from rexels?
                </h2>
                <div className="button-block">
                    <a href="http://127.0.0.1:3000/log-in/" onClick={registration.logout}><button type="submit">Log Out</button></a>
                </div>
            </div>
        </div>
    );

}


export default LogOut;