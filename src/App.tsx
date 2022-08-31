import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import { Todo } from "./models/todo";
import { useState } from "react";
import FullWrapper from "./components/UI/FullWrapper";
import AppWrapper from "./components/UI/AppWrapper";

const initialTodos = [
  { id: "1", text: "Learn Typescript" },
  { id: "2", text: "Master Typescript" },
];

function App() {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const handleNewTodo = (todo: string) => {
    setTodos((prevState) => [...todos, { id: todo, text: todo }]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevState) => prevState.filter(todo => todo.id !== todoId))
  }

  return (
    <FullWrapper>
      <AppWrapper>
      <Todos items={todos} onRemoveTodo={removeTodoHandler}/>
      <NewTodo newTodoHandler={handleNewTodo} />
      </AppWrapper>
    </FullWrapper>
  );
}

export default App;
