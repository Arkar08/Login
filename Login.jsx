import './Login.css';
import { useState } from 'react';


function Login () {
    const [ action , setAction ] = useState('Login');
    return(
        <div className="container">
            <div className="parent">
                <div className="text">{action}</div>
                <div className="underline"></div>
                <div className="inputs">
                    {action ==='Login'? <div></div> :<div className="input">
                        <input type="text" placeholder='name' className='name'/>
                    </div>}
                    <div className="input">
                        <input type="email" placeholder='email' className='email'/>
                    </div>
                    <div className="input">
                        <input type="password" placeholder='password ' className='password'/>
                    </div>
                </div>
                {action==='SignUp'?<div></div> : <div className="click">forget password ? <span>Click Me?</span></div>}
                <div className="submit-container">
                    <div className={action==="Login"? "submit gray":"submit"} onClick={() =>{setAction('SignUp')}}>Submit</div>
                    <div className={action==="SignUp" ? "submit gray" :"submit"} onClick={() =>{setAction('Login')}}>Login</div>
                </div>
            </div>
        </div>
    )
}

export default Login