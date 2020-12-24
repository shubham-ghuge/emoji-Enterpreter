import React, { useState } from "react";
import "./styles.css";

export default function App() {
  // database of our app basic dictionary/object++
  const emojiDictionary = {
    "😀": "Grinning Face",
    "😃": "Grinning Face with Big Eyes",
    "😄": "Grinning Face with Smiling Eyes",
    "😁": "Beaming Face with Smiling Eyes",
    "😆": "Grinning Squinting Face",
    "😅": "Grinning Face with Sweat",
    "🤣": "Rolling on the Floor Laughing",
    "😂": "Face with Tears of Joy",
    "🙂": "Slightly Smiling Face",
    "🙃": "Upside-Down Face",
    "😉": "Winking Face",
    "😊": "Smiling Face with Smiling Eyes",
    "😇": "Smiling Face with Halo",
    "🥰": "Smiling Face with Hearts",
    "😍": "Smiling Face with Heart-Eyes",
    "🤩": "Star-Struck",
    "😘": "Face Blowing a Kiss",
    "😗": "Kissing Face",
    "😚": "Kissing Face with Closed Eyes",
    "😙": "Kissing Face with Smiling Eyes",
    "😋": "Face Savoring Food",
    "😛": "Face with Tongue",
    "😜": "Winking Face with Tongue",
    "🤪": "Zany Face",
    "😝": "Squinting Face with Tongue",
    "🤑": "Money-Mouth Face",
    "🤗": "Hugging Face",
    "🤭": "Face with Hand Over Mouth",
    "🤫": "Shushing Face",
    "🤔": "Thinking Face",
    "🤐": "Zipper-Mouth Face",
    "🤨": "Face with Raised Eyebrow",
    "😐": "Neutral Face",
    "😑": "Expressionless Face",
    "😶": "Face Without Mouth",
    "😏": "Smirking Face",
    "😒": "Unamused Face",
    "🙄": "Face with Rolling Eyes",
    "😬": "Grimacing Face",
    "🤥": "Lying Face",
    "😌": "Relieved Face",
    "😔": "Pensive Face",
    "😪": "Sleepy Face",
    "🤤": "Drooling Face",
    "😴": "Sleeping Face",
    "😷": "Face with Medical Mask",
    "🤒": "Face with Thermometer",
    "🤕": "Face with Head-Bandage",
    "🤢": "Nauseated Face",
    "🤮": "Face Vomiting",
    "🤧": "Sneezing Face",
    "🥵": "Hot Face",
    "🥶": "Cold Face",
    "🥴": "Woozy Face",
    "😵": "Dizzy Face",
    "🤯": "Exploding Head",
    "🤠": "Cowboy Hat Face",
    "🥳": "Partying Face",
    "😎": "Smiling Face with Sunglasses",
    "🤓": "Nerd Face",
    "🧐": "Face with Monocle",
    "😕": "Confused Face",
    "😳": "Flushed Face",
    "🥺": "Pleading Face",
    "😦": "Frowning Face with Open Mouth",
    "😧": "Anguished Face",
    "😨": "Fearful Face",
    "😰": "Anxious Face with Sweat",
    "😥": "Sad but Relieved Face",
    "😢": "Crying Face",
    "😭": "Loudly Crying Face",
    "😱": "Face Screaming in Fear",
    "😖": "Confounded Face",
    "😣": "Persevering Face",
    "😞": "Disappointed Face"
  };
  // useState to print
  const [meaning, setMeaning] = useState("");
  const [emoji, setEmoji] = useState("");
  // converting dictionary into array
  const smiles = Object.keys(emojiDictionary);
  // input handler function
  function inputHandler(event) {
    var inputEmoji = event.target.value;
    setEmoji(inputEmoji);
    var emojiValue = emojiDictionary[inputEmoji];
    if (emojiValue === undefined) {
      emojiValue = "we don't know that";
    }
    setMeaning(emojiValue);
  }
  function clickHandler(clickedEmoji) {
    setEmoji(clickedEmoji);
    var clickEmoji = emojiDictionary[clickedEmoji];
    setMeaning(clickEmoji);
  }
  return (
    <div className="App">
      <h1>Emoji Interpreter</h1>
      <input
        placeholder="Enter (emoji)😀 here to see meaning"
        onChange={inputHandler}
      />
      <h2>
        <span>{emoji}</span> {meaning}
      </h2>
      <div className="container">
        <div className="row justify-content-center">
          {smiles.map((emoji) => (
            <div
              className="col-2 py-sm-4 p-2 m-sm-2 mx-1 my-3 card shadow"
              onClick={() => clickHandler(emoji)}
              key={emoji}
            >
              {emoji}
            </div>
          ))}
        </div>
      </div>
      {/* footer */}
      <footer>
        <h3>
          ⭐ this repo on{" "}
          <a
            href="https://github.com/shubham-ghuge/emoji-Enterpreter"
            target="_blank"
          >
            <span>
              <i class="bx bxl-github"></i>
            </span>
          </a>
        </h3>
        <ul>
          <li>
            <a href="https://www.instagram.com/shubhamghuge_" target="_blank">
              <i class="bx bxl-instagram-alt"></i>
            </a>
          </li>
          <li>
            <a href="https://www.twitter.com/_shubham_ghuge_" target="_blank">
              <i class="bx bxl-twitter"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shubham-ghuge-aa3350188/"
              target="_blank"
            >
              <i class="bx bxl-linkedin-square"></i>
            </a>
          </li>
          <li>
            <a href="https://www.github.com/shubham-ghuge" target="_blank">
              <i class="bx bxl-github"></i>
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
