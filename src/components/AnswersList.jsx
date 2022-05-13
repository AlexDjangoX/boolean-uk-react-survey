import AnswersItem from "./AnswersItem";

function AnswersList({ userDataApp }) {
  return (
    <ul>
      {userDataApp.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}

export default AnswersList;
