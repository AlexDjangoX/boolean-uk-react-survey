import React from "react";
import AnswersItem from "./AnswersItem";

function AnswersList({ userDataApp }) {
  return (
    <React.Fragment>
      <ul>
        {userDataApp.map((answerItem, i) => (
          <AnswersItem answerItem={answerItem} key={i} />
        ))}
      </ul>
    </React.Fragment>
  );
}

export default AnswersList;
