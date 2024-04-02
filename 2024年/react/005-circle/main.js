/*
  height: 0px,
  width: 0px,
  lineHeight: 0px,
  transform: `rotate(0deg)`,
*/

function MyApp() {
  const [isPurple, setIsPurple] = React.useState("");
  const [textColor, setTextColor] = React.useState("");

  const [size, setSize] = React.useState(150);
  const [rotate, setRotate] = React.useState(0);

  const circleStyle = {
    height: `${size}px`,
    width: `${size}px`,
    lineHeight: `${size}px`,
    transform: `rotate(${rotate}deg)`,
  };

  console.log(size, rotate);
  return (
    <main>
      <label>
        Purple
        <input
          type="checkbox"
          value={isPurple}
          onChange={() => setIsPurple(!isPurple)}
        />
      </label>

      <label>
        text color
        <select
          onChange={(e) => setTextColor(e.target.value)}
          value={textColor}
        >
          <option value="" selected>
            White
          </option>
          <option value="text-black">Black</option>
          <option value="text-orange">Orange</option>
        </select>
      </label>

      <label>
        Circle Size
        <input
          type="number"
          value={size}
          onChange={(e) => setSize(e.target.value)}
        />
      </label>

      <label>
        Circle Rotate
        <input
          type="number"
          value={rotate}
          onChange={(e) => setRotate(e.target.value)}
        />
      </label>
      <div
        style={circleStyle}
        className={`circle ${isPurple ? "purple" : ""} ${textColor}`}
      >
        Hi!
      </div>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);

root.render(<MyApp />);
