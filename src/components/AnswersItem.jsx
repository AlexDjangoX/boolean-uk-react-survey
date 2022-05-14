const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

async function deleteFromLocalServer(el) {
  try {
    return await fetch(`http://localhost:3000/data/${el}`, {
      method: "DELETE",
    });
  } catch (error) {
    console.log(error);
  }
}

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, i) => (
        <li key={i}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

export default function AnswersItem({ answerItem, setFormData }) {
  return (
    <li>
      <article className="answer">
        <button
          type="button"
          onClick={() => {
            setFormData;
          }}
        >
          Edit
        </button>
        <button
          id={answerItem.id}
          onClick={(e) => deleteFromLocalServer(e.target.id)}
        >
          Delete
        </button>
        <h3>{answerItem.userName || "Anon"} said:</h3>
        <p>
          <em>How do you rate your rubber duck colour?</em>
          <span className="answer__line">{answerItem.rating}</span>
        </p>

        <em>How do you like to spend time with your rubber duck?</em>
        <ItemsList list={answerItem.timeSpent} />

        <p>
          <em>What else have you got to say about your rubber duck?</em>
          <span className="answer__line">{answerItem.review}</span>
        </p>
      </article>
    </li>
  );
}
