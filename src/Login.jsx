import React, { useState } from "react";
import { login, useLoggedIn } from "./cart";

export default function Login() {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);

  const [username, setUsername] = useState("maria");
  const [password, setPassword] = useState("123");

  if (loggedIn) return null;

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className="ri-fingerprint-line text-2xl" id="showLogin"></i>
      </span>
      {showLogin && (
        <div
          className="absolute p-5 border-4 border-blue-800 rounded-md"
          style={{
            width: 300,
            top: "2rem",
            left: -250
          }}
        >
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="border text-sm border-gray-400 p-2 rounded-md w-full text-black"
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="border text-sm border-gray-400 p-2 rounded-md w-full text-black"
          />
          <button
            id="loginbtn"
            className="bg-green-900 text-white py-2 px-4 text-base rounded-md"
            onClick={() => login(username, password)}
          >
            Login
          </button>
        </div>
      )}
    </>
  );
}
