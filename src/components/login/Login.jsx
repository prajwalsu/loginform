import React, { useState } from "react";
// import "./";

function Login() {                                //state to store data
  let [login, setLogin] = useState({
    userName: "",
    password: "",
  });
  let [printData, setPrintData] = useState({   //to print the data from console to browser
    printUserName: "",
    printPassword: "",
  });                                           //taking a copy of the data
  const loginFunc = (e) => {
    e.preventDefault();
    const loginCopy = { ...login };
    loginCopy[e.target.name] = e.target.value;
    console.log(loginCopy, "login copy");
    setLogin(loginCopy);                        //
  };
  const handleSubmit = (e) => {
    e.preventDefault();                           //it will prevent default behaviour of refreshing actions
    setPrintData({
      ...printData,                           //to print the data from console to browser
      printUserName: login.userName,
      printPassword: login.password,            
    });                                          //
    
    localStorage.setItem("userName", login.userName); //even after refreshing the local storage not to be changed
    localStorage.setItem("password",login.password);
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label htmlFor="" className="lb1">
          User Name:
        </label>
        <input
          type="text"
          className="inp1"
          onChange={loginFunc}
          name="userName"
          value={login.userName}
        />
        <label htmlFor="" className="lb2">
          Password:
        </label>
        <input
          type="text"
          className="inp2"
          onChange={loginFunc}
          name="password"
          value={login.password}
        />
        <button type="submit">LogIn</button>
        <button onClick={() => {
            localStorage.clear();
        }}>LogOut</button>             
         {/* //after clicking on logout button the data on browser is changing or refreshing */}
      </form>
      <p>{localStorage.getItem("userName")}</p>   
      {/* //used on refreshing, the data present on the browser not to be changed */}
      <p>{localStorage.getItem("password")}</p>
    </div>
  );
}

export default Login;