function MyApp() {
  const [textInput, setTextInput] = React.useState("");
  return (
    <main>
      <h1>Title</h1>
      <input
        type="text"
        onChange={(event) => setTextInput(event.target.value)}
      ></input>
      <p>{textInput}</p>
    </main>
  );
}

const appEl = document.getElementById("app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
