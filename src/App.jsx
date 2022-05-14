import React, { useState, useEffect } from "react";

import "./styles/styles.css";

import Header from "./components/Header";
import Main from "./components/Main";

const baseUrl = "http://localhost:3000";

export default function App() {
  const [userDataApp, setUserDataApp] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(`${baseUrl}/data`);
    const data = await response.json();
    setUserDataApp(data);
  }

  return (
    <>
      <Header />
      <Main setUserDataApp={setUserDataApp} userDataApp={userDataApp} />
    </>
  );
}
