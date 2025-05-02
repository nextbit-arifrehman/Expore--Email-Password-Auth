import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Layout/FireBase.init';
import { Link } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {

    const [success, setSuccess] = useState(false);
    const [errorMessage, seterrorMessage] = useState('')

    const handllogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email, password);

        seterrorMessage('');

        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user);
                if(!result.user.emailVerified){
                  toast('Please verify your email address');
                }
                else{
                    setSuccess(true);
                }
                
            })
            .catch(error => {
                console.log(error);
                seterrorMessage(error.message);
            });

    }
    return (

        <div className="mt-8 mx-auto card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <h1 className="text-5xl font-bold">Login now!</h1>
                <form onSubmit={handllogin} className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" name='email' className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input type="password" name='password' className="input" placeholder="Password" />
                    <div><a className="link link-hover">Forgot password?</a></div>
                    <button className="btn btn-neutral mt-4">Login</button>
                </form>
                <p className='pt-2'>New to this website? Please <Link className='text-blue-500 underline' to='/signup'>Sign Up</Link></p>
                {
                    errorMessage && <p className='text-red-600'>{errorMessage}</p>
                }
                {success && <p className='text-green-600'>Login successful!</p>}
            </div>
               <ToastContainer />
        </div>


    );
};

export default Login;