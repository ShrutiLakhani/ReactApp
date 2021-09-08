import "./styles.css";
const emojiDictionary = {
  "🤣": "Rofl",
  "😍": "Heart Face",
  "🤪": "Excited"
};
export default function App() {
  function inputOnchangeHandler() {
    var userInput = event.target.value;
    console.log("Clicked");
  }
  return (
    <div className="App">
      <h1>Inside Outt</h1>
      <input onChange={inputOnchangeHandler} />
    </div>
  );
}
