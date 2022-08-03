import React, { useState } from 'react';
import { LockClosedIcon } from '@heroicons/react/solid'
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations.js';
import Auth from '../utils/auth.js';

const SignupForm = () => {
  const [signup] = useMutation(ADD_USER);
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [firstName, setFirstname] = useState("")
  const [lastName, setLastname] = useState("")

  const handleFormSubmit = async (event) => {
      event.preventDefault();
      try {
          const response = await signup ({
              variables: { firstName: firstName, lastName: lastName, email: email, password: password},
          });
          const token = response.data.addUser.token;
          Auth.login(token);
      } catch (e) {
          console.log(e);
      }
  };

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === "email") {
      setEmail(inputValue);
    } else if (inputType === "password") {
      setPassword(inputValue);
    } else if (inputType === "firstName") {
      setFirstname(inputValue);
    } else if (inputType === "lastName") {
      setLastname(inputValue);
    }
  }


  return (
        <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://i.pinimg.com/736x/68/a1/11/68a11164a33033eaa2b95eecedd46a3c.jpg"
              alt="Lea Lacroix logo"
            />
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign up an account</h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              Or{' '}
              <a href="/" className="font-medium text-yellow-600 hover:text-yellow-500">
                Login here
              </a>
            </p>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleFormSubmit}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="first-name" className="sr-only">
                  Email address
                </label>
                <input
                  id="first-name"
                  name="firstName"
                  type="firstName"
                  value={firstName}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="First Name"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="last-name" className="sr-only">
                  Email address
                </label>
                <input
                  id="last-name"
                  name="lastName"
                  type="lastName"
                  value={lastName}
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Last Name"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="email-address" className="sr-only">
                  Email address
                </label>
                <input
                  id="email-address"
                  name="email"
                  type="email"
                  value={email}
                  autoComplete="email"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  value={password}
                  autoComplete="current-password"
                  required
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-yellow-500 focus:border-yellow-500 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  onChange={handleInputChange}
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon className="h-5 w-5 text-yellow-400 group-hover:text-yellow-600" aria-hidden="true" />
                </span>
                Sign up
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default SignupForm