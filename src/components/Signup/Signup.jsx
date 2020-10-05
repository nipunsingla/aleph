import React, { useState } from 'react';
import './Signup.scss'
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { useLazyQuery, useMutation } from '@apollo/client';
import { SEND_OTP_QUERY ,VERIFY_OTP_QUERY,CREATE_USER_MUTATION} from '../../query';
export const SignupPage = (props) => {
    const [count, setCount] = useState(0);
    const [code16, setCode16] = useState("");
    const [mobileno, setmobileno] = useState("");
    const [username, setusername] = useState('');
    const [fullname, setfullname] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmpassword, setConfirmPassword] = useState('');
    const [confirmationcode, setconfirmationcode] = useState('');
    let x = '';
    const login = (e) => {
        e.preventDefault(e);
        props.history.push('/login')

    }

    const [getOtp, getOtpResponse] = useLazyQuery(SEND_OTP_QUERY);
    const [verifyOtp,verifyOtpResponse]=useLazyQuery(VERIFY_OTP_QUERY);
    const [createUser,createUserResponse]=useMutation(CREATE_USER_MUTATION);


    const front = (e) => {
        e.preventDefault(e);
        props.history.push('/')

    }
    const myalldata = (e) => {


        console.log(fullname,email,password,username,mobileno);
        createUser({
            variables:{
                name:fullname,
                email:email,
                password:password,
                username:username,
                usertype:"student",
                schoolusername:"tokyo",
                mobileno:mobileno,
            }
        });

    }
    if(createUserResponse.data){
        props.history.push('/login');
    }
    return (
       <div className='signup'>
       
            <div className='Signup-header'>
                <h2>
                    Aleph's
    </h2>
            </div>
            <div className='detail-signup'>

                <div className='Signup-section'>


                    <p className='back' onClick={() => count == 0 ? null : setCount(count - 1)}>

                        Back
                </p>

                    <div className='text-center'>
                        <span className="dot">
                            <div>

                            </div>
                        </span>
                        <span className="dot">
                            <div>

                            </div>
                        </span>
                        <span className="dot">
                            <div>

                            </div>
                        </span>
                        <span className="dot">
                            <div>

                            </div></span></div>

                </div>
                {count == 0 ?

                    <div className='my-first-component'>

                        <div>
                            <h3>

                                Let's Get Your Teacher's Account Setup

        </h3>
                            <p className='text'>
                                Every one remebers the teacher who made a difference in their lives.With communication tools like Posts and
                                Messages.Aleph's helps you to be that Teacher for your Students
        </p>
                            <h3>
                                Enter Your 16 Digit Code Here
        </h3>
                            <div className='input'>

                                <input type="text" onChange={e => setCode16(e.target.value)} value={code16} className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Your Code Here.." required />
                                <div className='icon1'>

                                    <ArrowForwardIcon onClick={(e) => {
                                        e.preventDefault();
                                        // if (code16.length != 16) {
                                        //     alert("please enter 16 length code");
                                        //     return;
                                        // }
                                        setCount(count + 1)
                                    }} required />
                                </div>

                            </div>

                            <h5 className='text-center'>Or</h5>
                            <h3 className='old-account' onClick={login}>
                                Click Here To Login
</h3>
                        </div>

                    </div> : count == 1 ? 


                        <div className='my-second-component'>
                    
                            <div>
                                <h3>

                                    Let's Get Your Teacher's Account Setup

        </h3>
                                <p className='text'>
                                    Every one remebers the teacher who made a difference in their lives.With communication tools like Posts and
                                    Messages.Aleph's helps you to be that Teacher for your Students
        </p>
                                <h3>
                                    Fill Details To Sign Up
        </h3>

                                <div className='input'>

                                    <input style={{ color: '#08de6c' }} value={code16} className="form-control" placeholder="" required />


                                </div>

                                <div className='input'>

                                    <input type="text" onChange={(e) => {
                                        setmobileno(e.target.value)
                                    }} value={mobileno} className="form-control" placeholder="Enter Your Mobile No" required />

                                </div>

                                <div className='input'>

                                    <input type="text" onChange={(e) => setusername(e.target.value)} value={username} className="form-control" placeholder="Set A User Name" required />


                                </div>

                                <div className='input'>

                                    <input type="text" name='fullname' value={fullname} onChange={(e) => setfullname(e.target.value)} className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Your Full Name" required />


                                </div>

                                <div className='input'>

                                    <input type="email" name='email' value={email} onChange={(e) => setemail(e.target.value)} className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Email" required />


                                </div>
                                <div className='button'>

                                    <button onClick={(e) => {
                                        e.preventDefault();

                                        getOtp({
                                            variables: {
                                                mobileno: mobileno
                                            }
                                        });


                                        setCount(count + 1)
                                    }}>
                                        Next
            </button>

                                    <p className='policy'>
                                        By Signing Up,you agre to our <b> Terms of Service</b> ans <b>Privacy </b>
    policy <span className='text-primary'>...see details</span>
                                    </p>
                                </div>

                                <p className='institute-text'>
                                    Enter Institue with Existing Aleph's account
</p>
                                <h5 className='text-center'>Or</h5>
                                <h3 className='old-account' onClick={login}>
                                    Click Here To Login
</h3>

                            </div>

                        </div> : count == 2 ?
                        getOtpResponse.loading?<div> loading.....</div>:
                        getOtpResponse.error?<div> error ....</div>:
                        !getOtpResponse.data ?<div>there  is some error</div>:<div className='my-third-component'>
                        {
                            console.log(getOtpResponse)
                        }
                            <div>
                                <h3>

                                    Let's Get Your Teacher's Account Setup

        </h3>
                                <p className='text'>
                                    Every one remebers the teacher who made a difference in their lives.With communication tools like Posts and
                                    Messages.Aleph's helps you to be that Teacher for your Students
        </p>
                                <h3>
                                    Enter Confimration Code
        </h3>

                                <div className='input'>

                                    <input type="text" onChange={(e) => setconfirmationcode(e.target.value)} value={confirmationcode} className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Enter Your Confirmation Code" required />
                                </div>
                                <p className='request'> Request a New Confirmation Code</p>

                                <div className='button'>

                                    <button onClick={(e) => {
                                        
                                        
                                        verifyOtp({
                                            variables:{
                                                mobileno:mobileno,
                                                otp:confirmationcode
                                            }
                                        });
                                        
                                        
                                        e.preventDefault(); 
                                        

                                        
                                        
                                        
                                        setCount(count + 1) }} >
                                        Next
            </button>
                                </div>

                                <p className='institute-text'>
                                    Enter Institue with Existing Aleph's account
</p>
                                <h5 className='text-center'>Or</h5>
                                <h3 className='old-account' onClick={login}>
                                    Click Here To Login
</h3>
                            </div>

                        </div> :                            verifyOtpResponse.loading?<div> loading...</div>:

                        verifyOtpResponse.error?<div> error....</div>:
 <div className='my-fourth-component'>
                            

                                <div>
                                    <h3>

                                        Let's Get Your Teacher's Account Setup

        </h3>
                                    <p className='text'>
                                        Every one remebers the teacher who made a difference in their lives.With communication tools like Posts and
                                        Messages.Aleph's helps you to be that Teacher for your Students
        </p>
                                    <h3>
                                        Set Your Password
        </h3>
                                    <div className='input'>

                                        <input type="password" onChange={e => setPassword(e.target.value)} value={password} className="form-control" id="exampleInputName" aria-describedby="emailHelp" placeholder="Set Password" required />


                                    </div>

                                    <div className='input'>

                                        <input type="password" onChange={e => setConfirmPassword(e.target.value)} value={confirmpassword} className="form-control" placeholder="Confirm Password" required required />

                                    </div>
                                    <button className='sign-up' onClick={(e) => myalldata(e)}>
                                        Sign Up
            </button>
                                    <p className='policy'>
                                        By Signing Up,you agre to our <b> Terms of Service</b> ans <b>Privacy </b>
    policy <span className='text-primary'>...see details</span>
                                    </p>
                                    <p className='institute-text'>
                                        Enter Institue with Existing Aleph's account
</p>
                                    <h5 className='text-center'>Or</h5>
                                    <h3 className='old-account' onClick={login}>
                                        Click Here To Login
</h3>
                                </div>

                            </div>
                }




            </div>
            {/* <input type='text' onChange={(e) => setmobileno(e.target.value)} value={mobileno} required /> */}

        </div>


    )
}


// export function NameForm(props) {
//   const [name, setName] = useState("");

//   const handleSubmit = (evt) => {
//       evt.preventDefault();
//       alert(`Submitting Name ${name}`)
//   }
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Frirst Name:
//         <input
//           type="text"
//           value={name}
//           onChange={e => setName(e.target.value)}
//         required/>
//       </label>
//       <input type="submit" value="Submit" required/>
//     </form>
//   );
// }
