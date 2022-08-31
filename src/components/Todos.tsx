import {Todo} from "../models/todo"
import { useTodos } from "../store/todos-context";
import TodoItem from "./TodoItem";

const Todos = () => {
  const {items, removeTodo} = useTodos();
  return (
    <ul className="flex flex-col space-y-4">
      {items.map(item => <TodoItem key={item.id} item={item} onRemoveTodo={removeTodo.bind(null, item.id)}/>)}
    </ul>
  );
};

export default Todos;
