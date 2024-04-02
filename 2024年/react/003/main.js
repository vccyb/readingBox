import "./style.css";

function AppContent() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (username === "" || password === "") {
      alert("Please enter a username and password");
      return;
    }
    // alert(username + " " + password);
    console.log(username + " " + password);
    setPassword("");
    setUsername("");
  }

  return (
    <main
      style={{
        border: "1px solid black",
        padding: "1rem",
        borderRadius: "0.5rem",
      }}
    >
      <h2
        style={{
          textAlign: "center",
        }}
      >
        Login Form
      </h2>
      <form
        onSubmit={handleSubmit}
        style={{
          textAlign: "center",
        }}
      >
        <input
          type="text"
          className="input"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
        />
        <br />
        <input
          type="password"
          className="input"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <br />
        <button>Login</button>
      </form>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<AppContent />);
