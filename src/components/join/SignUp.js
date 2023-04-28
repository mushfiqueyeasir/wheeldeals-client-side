import React, { useContext } from "react";
import { GLOBAL_CONTEXT } from "../../layouts/AppLayout";
import { signUp } from "../../hooks/signUp";

const SignUp = ({ swapJoinPage }) => {
  const { userRefetch } = useContext(GLOBAL_CONTEXT);
  const handleSignup = async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      phoneNumber: event.target.phoneNumber.value,
      password: event.target.password.value,
    };
    signUp({ data: data, userRefetch: userRefetch });
  };

  return (
    <div className="hero min-h-[93vh] ">
      <div className="hero-content flex-col lg:flex-row px-0">
        <div className="card card-side bg-base-100 shadow-xl flex-col lg:flex-row ">
          <div className="card-body  zoom  justify-center">
            <div className="w-[18.5rem]  lg:w-[28rem]">
              <form onSubmit={handleSignup}>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="name"
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Phone Number</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Example:+8801711111111"
                    name="phoneNumber"
                    className="input input-bordered"
                    pattern="^\+8801[3-9][0-9]{8}$"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    placeholder="Include Uppercase, Lowercase, Number, Special Character"
                    name="password"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mt-6">
                  <button
                    className="btn bg-[#EBA83A] hover:bg-[#da972c] border-[#EBA83A] hover:border-[#da972c]"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </div>
              </form>
            </div>
          </div>

          <figure className="w-[100%] w3-animate-right h-[30rem]">
            <div
              className="hero"
              style={{
                backgroundImage:
                  "url(https://img.freepik.com/free-photo/custom-motorcycle_1063-91.jpg?w=1380&t=st=1682486594~exp=1682487194~hmac=f3147fe55ced6d00b341653bcb24303e0cebabb6b4446ce8b0c47e1c8518a97e)",
              }}
            >
              <div className="hero-content hero-overlay bg-opacity-90 text-center text-neutral-content">
                <div className="w-[18.5rem] lg:w-[28rem]">
                  <h1 className="mb-5 text-3xl font-bold">Already A Member?</h1>
                  <p className="mb-5">
                    Please Login to get your dream bike and enjoy the road!
                  </p>
                  <button
                    className="btn bg-[#EBA83A] hover:bg-[#da972c] border-[#EBA83A] hover:border-[#da972c] "
                    onClick={swapJoinPage}
                  >
                    Login
                  </button>
                </div>
              </div>
            </div>
          </figure>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
