const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

// function ItemsList({ list }) {
//   return (
//     <ul>
//       {list.map((item) => (
//         <li>{answersSet[item]}</li>
//       ))}
//     </ul>
//   );
// }

export default function AnswersItem({ username, color, timeSpent, review }) {
  return (
    <li>
      <article className="answer">
        <h3>{username || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck color?</em>
          <span className="answer__line">{color}</span>
        </p>
        <p>
          <em>How do you like to spend time with your rubber duck?</em>
          {/* <ItemsList list={timeSpent} /> */}
        </p>
        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{review}</span>
        </p>
      </article>
    </li>
  );
}
