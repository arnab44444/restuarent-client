import React, { use, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";
import { auth } from "../firebase.init";

const Login = () => {
  const [error, setError] = useState("");

  const { signInUser, googleSignIn } = use(AuthContext);

  const location = useLocation();

  //console.log(location);

  const navigate = useNavigate();

  const emailRef = useRef();

  const handleLogin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    //console.log(email, password);

    // login user
    signInUser(email, password)
      .then((result) => {
        //console.log(result.user);

        // eta oi portion ta jokon see more e click korbo tokon login page theke login korar por direct
        // show more page niye jabe jodi oi tstae ta thake ar nahole home e niye jabe

        navigate(`${location.state ? location.state : "/"}`);
      })
      
      .catch((error) => {
        //console.log(error.message);
        const errorCode = error.code;
        setError(errorCode);
        toast(errorCode)
      });
  };

  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        //console.log(location)
       // console.log(result.user);
        navigate(location.state || "/");
        
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const handleForgetpassword = () =>{
    //console.log(emailRef.current.value);
    const email = emailRef.current.value;

    setError('')

    // send password reset email
    sendPasswordResetEmail(auth, email)
    .then(()=>{
      toast('A password reset email is sent. Please check your email')
    })
    .catch(error =>{
      setError(error.message);
    })
  }

  return (
    <div className="bg-gradient-to-r from-cyan-900 to-blue-500 p-6 ">
      <div className="card mx-auto mt-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Login now!</h1>

          <form onSubmit={handleLogin} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              ref={emailRef}
              name="email"
              className="input"
              placeholder="Email"
            />

            <label className="label">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />

            <div onClick={handleForgetpassword}>
              <a className="link link-hover">Forgot password?</a>
            </div>

            {/* error */}
            {error && (
              <p className="text-xs text-red-600 text-center">{error}</p>
            )}

            <button className="btn btn-neutral mt-4">Login</button>

            {/* Google */}
            <button
              onClick={handleGoogleLogin}
              className="btn bg-white text-black border-[#e5e5e5]"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>

            <p className="font-semibold text-center pt-5">
              Don't have an account? Please{" "}
              <Link className="text-blue-600" to="/auth/register">
                Register
              </Link>{" "}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;

// console.log(data)

// 4