import './Login.css';
import { useState } from 'react';


function Login () {
   
const [ action , setAction ]  = useState('Login');

return(
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
            <div className="inputs">
                {action === 'Login' ? <div></div> :<div className="input">
                <i className="fa-solid fa-user"></i>
                    <input type="text" placeholder='Name' />
                </div> }
                <div className="input">
                <i className="fa-solid fa-envelope"></i>
                    <input type="email" placeholder='Email'/>
                </div>
                <div className="input">
                <i className="fa-solid fa-lock"></i>
                    <input type="password" placeholder='Passwrod'/>
                </div>
            </div>
            {action === 'SignUp' ? <div></div> :<div className="forget">
                Forget the password? <span>CLick Me!</span>
            </div> }
            <div className="submit-container">
                <div className={action === 'Login'?'submit gray':'submit'} onClick={() => {setAction('SignUp')}}>Submit</div>
                <div className={action === 'SignUp'?'submit gray':'submit'} onClick={() =>{setAction('Login')}}>Login</div>
            </div>
        </div>
    </div>
)
}

export default Login