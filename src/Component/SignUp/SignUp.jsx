import React from 'react';

const SignUp = () => {

    const handleSignUp = e =>{
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(email,password);
        
    }

    return (
      
    <div className="card bg-base-100 w-full max-w-sm mx-auto mt-4 shrink-0 shadow-2xl">
      <div className="card-body">
      <h1 className="text-3xl font-bold  ">Please Sign Up now!</h1>
        <form onSubmit={handleSignUp}>
          <label className="label">Email</label>
          <input type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>

    );
};

export default SignUp;