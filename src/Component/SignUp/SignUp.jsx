import { createUserWithEmailAndPassword, sendEmailVerification} from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../../Layout/FireBase.init';
import { FaEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {


  const [success, setSuccess] = useState(false);
  const [errorPop, seterrorPop] = useState('');
  const [show, setShow] = useState(false);

  const handleSignUp = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const terms = e.target.terms.checked;


    console.log(email, password, terms);

    setSuccess(false);
    seterrorPop('');


    if (!terms) {
      seterrorPop('Please accept Our Terms and Conditions')
      return;
    }

    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#^()\-_=+{};:,<.>]).{8,}$/;

    if (strongPasswordRegex.test(password) === false) {
      seterrorPop("Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.");
      return;
    }



    createUserWithEmailAndPassword(auth, email, password)
      .then(mailPass => {
        console.log(mailPass);
       

        // email verify
        // sendEmailVerification(result.user)
        sendEmailVerification(auth.currentUser)
        .then(()=>{
          setSuccess(true);
          toast("Account created! Please check your email for verification.");

        })

      })
      .catch(error => {
        console.log(error);
        seterrorPop(error.message);
      });



  }

  return (

    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-4 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-3xl font-bold  ">Please Sign Up now!</h1>
        <form onSubmit={handleSignUp}>
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>

          <div className='relative'>
            <input
              type={show ? 'text' : 'password'}
              name='password'
              className="input"
              placeholder="Password" />
            <button
              type='button'
              onMouseDown={() => { setShow(!show) }}
              className='btn btn-xs absolute top-2 right-8 '>
              {
                show ? <FaRegEyeSlash /> : <FaEye />
              }

            </button>
          </div>

          <div><a className="link link-hover">Forgot password?</a></div>

          <label className="label pt-3">
            <input type="checkbox" name='terms' className="checkbox" />
            <span>
              I accept the <a href="/terms" className="link link-hover text-blue-500 underline">Terms and Conditions</a>
            </span>
          </label>
          <br />

          <button className="btn btn-neutral mt-4">Sign Up</button>
          <p className='pt-2'>Already have an account? Please <Link className='text-blue-500 underline' to='/login'>Login</Link></p>
        </form>
        {
          errorPop && <p className='text-red-400'>{errorPop}</p>
        }
        {
          success && <p className='text-green-400'>User has created successfully</p>
        }
      </div>
      <ToastContainer />
    </div>

  );
};

export default SignUp;