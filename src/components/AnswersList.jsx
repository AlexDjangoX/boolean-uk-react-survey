import React from "react";
import AnswersItem from "./AnswersItem";

function AnswersList({ userDataApp, setUserDataApp, setFormData, setEditing }) {
  return (
    <React.Fragment>
      <ul>
        {userDataApp.map((answerItem, i) => (
          <AnswersItem
            answerItem={answerItem}
            key={i}
            setUserDataApp={setUserDataApp}
            setFormData={setFormData}
            setEditing={setEditing}
          />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default AnswersList;
