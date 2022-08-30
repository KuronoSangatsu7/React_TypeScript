import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/todo";
import { useState } from "react";
import FullWrapper from "./components/UI/FullWrapper";

const initialTodos = [
  { id: "1", text: "Learn Typescript" },
  { id: "2", text: "Master Typescript" },
  { id: "3", text: "Speak Typescript" },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleNewTodo = (todo: string) => {
    setTodos((prevState) => [...todos, { id: todo, text: todo }]);
  };

  return (
    <FullWrapper>
      <Todos items={todos} />
      <NewTodo newTodoHandler={handleNewTodo} />
    </FullWrapper>
  );
}

export default App;
