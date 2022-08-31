import {Todo} from "../models/todo"
import TodoItem from "./TodoItem";

type todosProps = {
    items: Todo[],
    onRemoveTodo: (id: string) => void
}
const Todos = (props : todosProps) => {

  return (
    <ul className="flex flex-col space-y-4">
      {props.items.map(item => <TodoItem key={item.id} item={item} onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}/>)}
    </ul>
  );
};

export default Todos;
