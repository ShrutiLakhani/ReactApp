import React, { useState } from "react";
import "./styles.css";
const emojiDictionary = {
  "🤣": "Rofl",
  "😍": "Heart Face",
  "🤪": "Excited",
  "🙃": "Upside-Down Face",
  "😘": "Kissing",
  "🤑": "Rich",
  "🤯": "Mind Blown",
  "🤥": "Pinocchio - Liar",
  "😫": "Fed up",
  "👽": "Alien"
};
var emojiWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function inputOnchangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We don't have it in our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>Inside Outt</h1>
      <input onChange={inputOnchangeHandler} />
      <h2> {meaning} </h2>
      <h3>emoji as we know</h3>
      {emojiWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
