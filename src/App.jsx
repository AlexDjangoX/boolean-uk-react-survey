import React, { useState } from "react";

import "./styles/styles.css";

import Header from "./components/Header";
import Main from "./components/Main";

export default function App() {
  const [userDataApp, setUserDataApp] = useState([]);

  const addDataHandler = (data) => {
    setUserDataApp((prevData) => {
      return [data, ...prevData];
    });
  };

  return (
    <>
      <Header />
      <Main addDataHandler={addDataHandler} userDataApp={userDataApp} />
    </>
  );
}
