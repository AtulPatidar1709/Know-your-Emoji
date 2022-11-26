import { useState } from "react";
import "./styles.css";

var emojiDictionary = {
  "🥰": "Smiling face with smiling eyes and three hearts",
  "😊": "Smiling Face With Smiling Eyes",
  "😍": "Smiling Face With Heart-Eyes",
  "🤗": "Hugging Face",
  "😇": " Smiling Face With Halo",
  "😘": "Face Throwing a Kiss",
  "🥺": "Face with begging eyes",
  "😅": "Smiling Face With Open Mouth & Cold Sweat",
  "😀": "Grinning Face",
  "❤": "Red Heart",
  "✈️": "You Have a Nice Journey",
};
var enojiArr = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInputHandler(event) {
    var userInput = event.target.value;

    var meaning = emojiDictionary[userInput];

    if (meaning === undefined) {
      meaning = "We Don't Have This in our Data Base";
    }
    setMeaning(meaning);
  }

  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <h1>Hello Welcome</h1>
      {/* <input onChange={emojiInputHandler} /> */}
      <h2>Welcome You have {meaning} Today</h2>

      <h3>Emojis We Know</h3>
      {enojiArr.map(function (emoji) {
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
