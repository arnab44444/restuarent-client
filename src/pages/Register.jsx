import React, { use, useState } from "react";
import { Link, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {
  const [nameError, setNameError] = useState("");

  const { createUser, setUser, updateUser } = use(AuthContext);

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const name = e.target.name.value;

    if (name.length < 4) {
      toast("name should be more than 4 character");
      return;
    } else {
      setNameError("");
    }

    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    //console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        //console.log(user);

        //setUser(user)

        toast.success('Register successfully')

        // update user portion

        updateUser({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ ...user, displayName: name, photoURL: photo });
          })
          .catch((error) => {
           // console.log(error);
            setUser(user);
            toast(error)
          });

        navigate("/");
      })
      .catch((error) => {
       // console.log(error.message);
        setNameError(error.message);
        toast(error.message)
      });
  };

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 p-6 ">
      <div className="card mx-auto mt-10 bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-4">
        <form onSubmit={handleRegister} className="card-body">
          <h1 className="text-3xl font-bold text-center">Register now!</h1>

          <fieldset className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input"
              placeholder="Name"
            />

            <label className="label">Photo URL</label>
            <input
              type="text"
              name="photo"
              className="input"
              placeholder="photo url"
            />

            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />

            <label className="input validator">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <g
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2.5"
                  fill="none"
                  stroke="currentColor"
                >
                  <path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path>
                  <circle
                    cx="16.5"
                    cy="7.5"
                    r=".5"
                    fill="currentColor"
                  ></circle>
                </g>
              </svg>
              <input
                type="password"
                name="password"
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
              />
            </label>
            
            <p className="validator-hint hidden">
              Must be more than 8 characters, including
              <br />
              At least one number <br />
              At least one lowercase letter <br />
              At least one uppercase letter
            </p>

            {/* nameerror */}

            {nameError && (
              <p className="text-xs text-red-600 text-center">{nameError}</p>
            )}

            <button type="submit" className="btn btn-neutral mt-4">
              Register
            </button>

            <p className="font-semibold text-center pt-5">
              Already have an account? Please{" "}
              <Link className="text-blue-600" to="/auth/login">
                Login
              </Link>{" "}
            </p>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Register;

// 5th commit