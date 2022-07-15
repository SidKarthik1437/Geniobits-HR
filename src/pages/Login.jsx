import React, { useState } from "react";
// import { Input, Button } from "@material-tailwind/react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../context/userContext";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  // eslint-disable-next-line
  const [user, setUser] = useRecoilState(userState);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email === "admin" && password === "admin") {
      setUser({ data: {}, type: "admin" });
      localStorage.setItem(
        "authUser",
        JSON.stringify({ data: {}, type: "Admin" })
      );
      console.log("login successful");
      history.push("/");
    } else {
      let res = await (
        await axios.get("https://gorest.co.in/public/v2/users")
      ).data;
      console.log(res);

      const match = res.find((user) => {
        return user.email === email;
      });

      if (match) {
        console.log("Login Successful!");
        setUser({ data: match, type: "User" });
        await localStorage.setItem(
          "authUser",
          JSON.stringify({ data: match, type: "User" })
        );
        history.push("/");
      } else {
        alert("Login Failed! Enter valid credentials");
      }
    }
  };

  return (
    <div className="container flex mx-auto min-w-full overflow-y-hidden justify-center items-center h-screen bg-grey-primary">
      <div className="flex flex-col shadow-lg rounded bg-white">
        <div className="bg-black rounded-md m-5 mb-0 py-10 px-10 flex items-center justify-center">
          <p className="text-white select-none">Welcome!</p>
        </div>
        <div className="bg-white flex flex-col rounded m-5 mb-0 mt-0 py-10 px-10">
          <p className="text-black mb-10 select-none desktop:text-2xl phones:text-xl">
            Enter Email and Password
          </p>
          <form
            // className="flex"
            method="POST"
            onSubmit={handleSubmit}
            // eslint-disable-next-line react/jsx-no-duplicate-props
            className="flex flex-col"
          >
            <input
              type="text"
              placeholder="Email"
              className="text-sm text-black w-full py-5 px-2 mr-3 h-2 mb-2 border border-grey-primary shadow-lg rounded bg-white"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="text-sm text-black w-full py-5 px-2 mr-3 h-2 mb-2 border border-grey-primary shadow-lg rounded bg-white"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="bg-black w-full px-2 py-2 h2 mb-2 mt-4 text-white rounded"
            >
              <span className="tracking-widest">Login</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
