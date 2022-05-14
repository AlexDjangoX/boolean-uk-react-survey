import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";

function Main({ addDataHandler, userDataApp, setUserDataApp }) {
  const [open, setOpen] = useState(false); //Ignore this state

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList userDataApp={userDataApp} />
      </section>
      <section className="main__form">
        <Form setUserDataApp={setUserDataApp} />
      </section>
    </main>
  );
}

export default Main;
