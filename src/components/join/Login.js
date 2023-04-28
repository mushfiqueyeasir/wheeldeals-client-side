/* eslint-disable no-useless-escape */
import React, { useContext } from "react";
import { login } from "../../hooks/login";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";

const Login = ({ swapJoinPage }) => {
  const { userRefetch } = useContext(GLOBAL_CONTEXT);
  const handleLogin = (event) => {
    event.preventDefault();

    const data = {
      phoneNumber: event.target.phoneNumber.value,
      password: event.target.password.value,
    };
    console.log(data);
    login({ data: data, userRefetch: userRefetch });
  };

  return (
    <div className="hero min-h-[93vh]  ">
      <div className="hero-content flex-col lg:flex-row px-0">
        <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row">
          <figure className="w-[100%] w3-animate-left h-[30rem]">
            <div
              className="hero"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/still-life-cafe-racer-style-motorbike_23-2148189632.jpg?w=740&t=st=1682486544~exp=1682487144~hmac=48d71956aad46c790a5ac5ff89d5acab56b3d3a58b2005455129015d4fba02c8)",
              }}
            >
              <div className="hero-content hero-overlay bg-opacity-90 text-center text-neutral-content">
                <div className="w-[18.5rem] lg:w-[28rem]">
                  <h1 className="mb-5 text-4xl font-bold">New Here?</h1>
                  <p className="mb-5">
                    Create a account with your personal information to explore
                    the latest Bikes!
                  </p>
                  <button
                    className="btn bg-[#EBA83A] hover:bg-[#da972c] border-0"
                    onClick={swapJoinPage}
                  >
                    Sign Up
                  </button>
                </div>
              </div>
            </div>
          </figure>

          <div className="card-body justify-center zoom">
            <div className="w-[18.5rem] lg:w-[28rem] ">
              <form onSubmit={handleLogin}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Example:+8801711111111"
                    className="input input-bordered"
                    name="phoneNumber"
                    pattern="^\+8801[3-9][0-9]{8}$"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Include Uppercase, Lowercase, Number, Special"
                    className="input input-bordered"
                    name="password"
                    required
                  />
                </div>
                <div className="form-control mt-6">
                  <button
                    className="btn bg-[#EBA83A] hover:bg-[#da972c] border-[#EBA83A] hover:border-[#da972c]"
                    type="submit"
                  >
                    Login
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
