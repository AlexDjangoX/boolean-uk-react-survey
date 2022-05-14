import React from "react";
import AnswersItem from "./AnswersItem";

function AnswersList({ userDataApp }) {
  console.log("AnswerList.jsx", userDataApp);
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
