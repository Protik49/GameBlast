import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { MyContext } from "../../contexts/ContextProvider";

const Login = () => {
  const { signInUser, signInWithGoogle } = useContext(MyContext);
  const [error, setError] = useState(null);
  const loaction = useLocation();
  const navigate = useNavigate();
  const goTo = loaction.state || "/";

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    signInUser(email, password)
      .then((result) => {
        navigate(goTo);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleGoogleSignIn = () => {
    signInWithGoogle()
      .then((result) => {
        navigate(goTo);
      })
      .catch((error) => {
        setError(error.message);
      });
  };
  return (
    <div className=" p-10  ">
      <section className="bg-white shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]">
        <div className="grid grid-cols-1 rounded-2xl lg:grid-cols-2 ">
          <div className="flex items-center justify-center px-4 py-6 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
            <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
              <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
                Sign in 
              </h2>
              <p className="mt-2 text-base text-gray-600">
                Don’t have an account?{" "}
                <Link
                  to={"/signup"}
                  className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 hover:underline focus:text-blue-700"
                >
                  Create a free account
                </Link>
              </p>

              <form
                onSubmit={handleSubmit}
                action="#"
                method="POST"
                className="mt-8"
              >
                <div className="space-y-5">
                  <div>
                    <label
                      for=""
                      className="text-base font-medium text-gray-900"
                    >
                      {" "}
                      Email address{" "}
                    </label>
                    <div className="mt-2.5">
                      <input
                        type="email"
                        name="email"
                        id=""
                        placeholder="Enter email to get started"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between">
                      <label
                        for=""
                        className="text-base font-medium text-gray-900"
                      >
                        {" "}
                        Password{" "}
                      </label>
                    </div>
                    <div className="mt-2.5">
                      <input
                        type="password"
                        name="password"
                        id=""
                        placeholder="Enter your password"
                        className="block w-full p-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                      />
                    </div>
                  </div>

                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-blue-600 border border-transparent rounded-md focus:outline-none hover:bg-blue-700 focus:bg-blue-700 cursor-pointer"
                    >
                      Log in
                    </button>
                    {error && <p className="text-red-600 my-4">{error}</p>}
                  </div>
                </div>
              </form>

              <div className="mt-3 space-y-3">
                <button
                  type="button"
                  onClick={handleGoogleSignIn}
                  className="relative inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-gray-700 transition-all duration-200 bg-white border-2 border-gray-200 rounded-md hover:bg-gray-100 focus:bg-gray-100 hover:text-black focus:text-black focus:outline-none cursor-pointer"
                >
                  <div className="absolute inset-y-0 left-0 p-4">
                    <svg
                      className="w-6 h-6 text-rose-500"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.283 10.356h-8.327v3.451h4.792c-.446 2.193-2.313 3.453-4.792 3.453a5.27 5.27 0 0 1-5.279-5.28 5.27 5.27 0 0 1 5.279-5.279c1.259 0 2.397.447 3.29 1.178l2.6-2.599c-1.584-1.381-3.615-2.233-5.89-2.233a8.908 8.908 0 0 0-8.934 8.934 8.907 8.907 0 0 0 8.934 8.934c4.467 0 8.529-3.249 8.529-8.934 0-.528-.081-1.097-.202-1.625z"></path>
                    </svg>
                  </div>
                  Sign in with Google
                </button>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center px-4 py-10 sm:py-16 lg:py-24 bg-gray-50 sm:px-6 lg:px-8">
            <div>
              <img
                className="w-full mx-auto"
                src="https://cdni.iconscout.com/illustration/premium/thumb/girl-filling-sign-in-page-illustration-download-svg-png-gif-file-formats--user-login-cyber-security-pack-science-technology-illustrations-10840103.png?f=webp"
                alt=""
              />

              <div className="w-full max-w-md mx-auto xl:max-w-xl">
                <h3 className="text-2xl font-bold text-center text-black">
                  Design your own card
                </h3>
                <p className="leading-relaxed text-center text-gray-500 mt-2.5">
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                  amet sint. Velit officia consequat duis.
                </p>

                <div className="flex items-center justify-center mt-10 space-x-3">
                  <div className="bg-orange-500 rounded-full w-20 h-1.5"></div>

                  <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>

                  <div className="bg-gray-200 rounded-full w-12 h-1.5"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Login;
