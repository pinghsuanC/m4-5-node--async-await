import react from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";

const GetJoke = () => {
  const [jokeSelected, setJokeSelected] = useState("");
  const [jokeFetched, setJokeFetched] = useState("");

  // reflect on the web browser
  const handleClick = (e) => {
    e.preventDefault();
    // check the value selected
    setJokeSelected(
      document.querySelector('input[name="joke_selection"]:checked').value
    );
    // check when nothing has been selected
    if (jokeSelected === "" || jokeSelected === null) {
      alert("Please select one option!");
      return;
    }
    // actually fetching the data
    fetch(`/joke/${jokeSelected}`)
      .then((data) => data.json())
      .then((data) => {
        if (data.status === 200) {
          setJokeFetched(data.message);
        }
      });
  };

  return (
    <Div_joke>
      <div>
        <label for="radio_dad">Dad</label>
        <Input_joke
          type="radio"
          id="radio_dad"
          name="joke_selection"
          value="dad"
        />
      </div>
      <div>
        <label for="radio_tronald">Tronald</label>
        <Input_joke
          type="radio"
          id="radio_tronald"
          name="joke_selection"
          value="tronald"
        />
      </div>
      <div>
        <label for="radio_geek">Geek</label>
        <Input_joke
          type="radio"
          id="radio_geek"
          name="joke_selection"
          value="geek"
        />
      </div>
      <Button_joke onClick={handleClick}>Click me to get a joke!</Button_joke>
      <div>The joke fetched is displayed below, enjoy!</div>
      <p></p>
      <div>Selected: {jokeSelected}</div>
      <Div_displayJoke>{`${jokeFetched}`}</Div_displayJoke>
    </Div_joke>
  );
};
const Div_displayJoke = styled.div`
  margin: 10px;
  padding: 10px;
  width: 500px;
  height: 200px;
  border: 1px solid black;
`;
const Input_joke = styled.input`
  align-self: left;
`;
const Button_joke = styled.button`
  margin: 10px;
  width: auto;
  height: 50px;
`;
const Div_joke = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default GetJoke;
