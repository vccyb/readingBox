function MyApp() {
  const [currentTodoItem, setCurrentTodoItem] = React.useState("");

  const [todoList, setTodoList] = React.useState([
    { id: 1, text: "Learn React", isCompleted: false },
    { id: 2, text: "Learn Angular", isCompleted: true },
  ]);

  const sortTodo = (o1, o2) => {
    if (o1.isCompleted !== o2.isCompleted) {
      return o1.isCompleted ? 1 : -1;
    }

    return o1.id - o2.id;
  };
  function handleAddTodo() {
    if (!currentTodoItem.length) {
      alert("Please enter a todo item");
      return;
    }
    const addedList = [
      {
        id: Math.random() + Date.now(),
        text: currentTodoItem,
        isCompleted: false,
      },
      ...todoList,
    ];

    addedList.sort(sortTodo);
    setTodoList(addedList);
    setCurrentTodoItem("");
  }

  function handleToggleTodo(id) {
    const toggledTodoList = todoList.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    toggledTodoList.sort(sortTodo);
    setTodoList(toggledTodoList);
  }

  function handleDeleteTodo(id) {
    const deletedTodoList = todoList.filter((todo) => todo.id !== id);
    deletedTodoList.sort(sortTodo);

    setTodoList(deletedTodoList);
  }

  return (
    <main>
      <h1>React Todo List</h1>
      <input
        type="text"
        placeholder="Add item into as todo"
        value={currentTodoItem}
        onChange={(e) => setCurrentTodoItem(e.target.value)}
      ></input>
      <button onClick={handleAddTodo}>Add</button>
      <ul>
        {todoList.map((todo) => {
          return (
            <li className={todo.isCompleted ? "deleted" : ""} key={todo.id}>
              <input
                type="checkbox"
                defaultChecked={todo.isCompleted}
                onClick={() => handleToggleTodo(todo.id)}
              ></input>
              {todo.text}
              <button onClick={() => handleDeleteTodo(todo.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

const appEl = document.querySelector("#app");
const root = ReactDOM.createRoot(appEl);
root.render(<MyApp />);
