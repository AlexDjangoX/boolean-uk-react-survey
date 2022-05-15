import { Button, Grid } from "@nextui-org/react";

const answersSet = {
  swimming: "Swimming",
  bathing: "Bathing",
  chatting: "Chatting",
  noTime: "I don't like to spend time with it",
};

function ItemsList({ list }) {
  return (
    <ul>
      {list.map((item, i) => (
        <li key={i}>{answersSet[item]}</li>
      ))}
    </ul>
  );
}

export default function AnswersItem({
  answerItem,
  setFormData,
  setUserDataApp,
  setEditing,
}) {
  async function deleteFromLocalServer(el) {
    try {
      console.log("élement ID", el);
      await fetch(`http://localhost:3000/data/${el.id}`, {
        method: "DELETE",
      });
      setUserDataApp((previous) =>
        previous.filter((item) => item.id !== el.id)
      );
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <li>
      <article className="answer">
        <Grid.Container gap={2}>
          <Grid>
            <Button
              color="warning"
              auto
              type="button"
              onClick={(e) => {
                console.log("ánswer item editing", answerItem);
                setEditing(true);
                setFormData(answerItem);
              }}
            >
              Edit
            </Button>
          </Grid>
          <Grid>
            <Button
              color="error"
              auto
              id={answerItem.id}
              onPress={() => deleteFromLocalServer(answerItem)}
            >
              Delete
            </Button>
          </Grid>
        </Grid.Container>

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
