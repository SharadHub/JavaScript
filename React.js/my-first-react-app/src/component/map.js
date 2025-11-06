const todos = [
  { id: 1, text: "Learn React", done: true },
  { id: 2, text: "Master Array Methods", done: false },
  { id: 3, text: "Build Portfolio", done: false }
];

function TodoList() {
  return (
    <section>
      <h2>Todos</h2>
      <ul>
        {todos.map(todo => (
          <li key={todo.id} style={{ color: todo.done ? "green" : "red" }}>
            {todo.text}
          </li>
        ))}
      </ul>
    </section>
  );
}
export default TodoList;