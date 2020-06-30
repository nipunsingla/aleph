import React, { useState } from 'react';
import './Login.scss'
const LoginPage = ({ onLogin }) => {
    const [loginKey, setLoginKey] = useState("");
    const [password, setPassword] = useState("");

    // const SignUp = e => {
    //     e.preventDefault(e);

    //     props.history.push('/signup');
    // }

    const onChange = e => {
        if (e.target.name === "loginKey") setLoginKey(e.target.value);
        if (e.target.name === "password") setPassword(e.target.value);
    }

    const login = e => {
        e.preventDefault(e);
        const authData = {
            loginKey,
            password
        };
        onLogin(e, authData);
    }

    return (

        <div className='Login'>
            <div className='Login-header'>
                <h2>Aleph's</h2>
            </div>
            <div className='Login-section'>
                <img src='https://cdn3.iconfinder.com/data/icons/mixed-communication-and-ui-pack-1/48/general_pack_NEW_glyph_profile-512.png' />
                <div>
                    <h2>One Child,one teacher,one book and one pen can change the world</h2>
                    <h6 className='text-muted'>-Malala Yousafzai, Noble Prize Winner</h6>
                    <div className='text-center'>
                        <span className="dot">
                            <div></div>
                        </span>
                        <span className="dot">
                            <div></div>
                        </span>
                        <span className="dot">
                            <div></div>
                        </span>
                        <span className="dot">
                            <div></div>
                        </span>
                    </div>
                </div>
            </div>
            <div className='detail'>
                <h3> Log In</h3>
                <input name="loginKey" onChange={onChange} type="text" className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="User Name or Phone No." />
                <input name="password" onChange={onChange} type="Password" className="form-control" id="exampleInputPassword1" placeholder="Password" />

                <h5 className='forgot-password'>Forgot Password?</h5>
                <button className="btn btn-primary" onClick={login}>Submit</button>
                <h5 className='text-center'>Or</h5>
                <h3 className='new-account' >Set up a new account,Sign Up</h3>
            </div>
        </div>
    )
}
export { LoginPage };