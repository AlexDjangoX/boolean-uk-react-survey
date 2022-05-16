import { useState } from "react";
import Form from "./Form";
import AnswersList from "./AnswersList";
import { initialData } from "../Utils";

function Main({ userDataApp, setUserDataApp }) {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState(initialData);
  const [editing, setEditing] = useState(false);

  return (
    <main className="main">
      <section className={`main__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        <AnswersList
          userDataApp={userDataApp}
          setUserDataApp={setUserDataApp}
          formData={formData}
          setFormData={setFormData}
          setEditing={setEditing}
        />
      </section>
      <section className="main__form">
        <Form
          setUserDataApp={setUserDataApp}
          formData={formData}
          setFormData={setFormData}
          setEditing={setEditing}
          editing={editing}
        />
      </section>
    </main>
  );
}

export default Main;
