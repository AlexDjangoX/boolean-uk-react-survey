import React, { useState, useEffect } from "react";

import "./styles/styles.css";

import Header from "./components/Header";
import Main from "./components/Main";
import "../src/components/server";

const baseUrl = "http://localhost:3000";

export default function App() {
  const [userDataApp, setUserDataApp] = useState([]);
  const [serverError, setServerError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    try {
      const response = await fetch(`${baseUrl}/data`);
      const data = await response.json();
      setUserDataApp(data);
    } catch (error) {
      console.log(error);
      setErrorMessage(error);
      setServerError(true);
    }
  }

  return (
    <>
      <Header serverError={serverError} errorMessage={errorMessage} />
      <Main setUserDataApp={setUserDataApp} userDataApp={userDataApp} />
    </>
  );
}
