import React, { useState } from "react";
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
  "✈️": "You Have a Nice Journey"
};
var emojiArray = Object.keys(emojiDictionary);

export default function App() {
  // enter and see part
  var [emojiVar, emojiFun] = useState("");
  function onChangeHandeler(event) {
    var emojiEntered = event.target.value;
    emojiVar = emojiDictionary[emojiEntered];
    if (emojiVar === undefined) {
      emojiVar = "We don't have this in our database";
    }
    emojiFun(emojiVar);
  }
  // click and see part
  function onClickHandeler(emoji) {
    var emojiVar = emojiDictionary[emoji];
    emojiFun(emojiVar);
  }

  return (
    <div className="App">
      <h1>Emoji Dictionary</h1>
      {/* enter and see part */}
      <input onChange={onChangeHandeler}></input>
      <h3> -:) {emojiVar}</h3>
      {/* click and ssee part */}
      <h3>Symbols in our Databse </h3>
      {emojiArray.map((emoji) => {
        return (
          <span
            className="emojiDisplay"
            onClick={() => onClickHandeler(emoji)}
            key={emoji}
          >
            {" "}
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
