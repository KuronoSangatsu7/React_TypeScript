import { Todo } from "../models/todo";
import React, { useContext, useState } from "react";

const initialTodos = [
  { id: "1", text: "Learn Typescript" },
  { id: "2", text: "Master Typescript" },
];

type contextType = {
  items: Todo[];
  addTodo: (todo: string) => void;
  removeTodo: (id: string) => void;
};

type propsType = {
  children: React.ReactNode;
};

const TodosContext = React.createContext<contextType>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContextProvider = (props: propsType) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodoHandler = (todo: string) => {
    setTodos((prevState) => [...todos, { id: todo, text: todo }]);
  };

  const removeTodoHandler = (todoId: string) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== todoId));
  };

  const contextValue: contextType = {
    items: todos,
    addTodo: addTodoHandler,
    removeTodo: removeTodoHandler,
  };

  return (
    <TodosContext.Provider value={contextValue}>
      {props.children}
    </TodosContext.Provider>
  );
};

export const useTodos = () => useContext(TodosContext)
export default TodosContextProvider