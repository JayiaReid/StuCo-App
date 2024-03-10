import '../Home/Login.css'
import Study from '../../../assets/studying.mp4'

export default function Login(){
    return(
        <div id="login">
           <form autoComplete="on" >
                 <span id="Alogo">
                     <video autoPlay muted loop id="Alogo">
                         <source src={Study} type="video/mp4"/>
                     </video>
                 </span>
                <h3> <span style={{color: "#ffbf00"}}>StuCo:</span> <span style={{color: "#54f7f8"}}>Study</span> <span style={{color: "#ff0000"}}>Spaces</span></h3>
                <p className="DK" title="contact IT">Don't Know Username? </p>
                <div className="cred">
                    <input id="uname" className="inputs" type="text" placeholder="student number" required/>
                </div>
                <br/>
                <p className="DK">Don't Know Password?</p>
                <div className="cred">
                    <input id="pwd" type="password" className="inputs" placeholder="password" required/>
                </div>
                <button className='over' type="submit" id="login-btn">SIGN IN</button>

            </form>
        </div>
    );
}