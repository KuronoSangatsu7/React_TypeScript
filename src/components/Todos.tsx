import {Todo} from "../models/todo"
import TodoItem from "./TodoItem";

type todosProps = {
    items: Todo[]
}
const Todos = (props : todosProps) => {
  return (
    <ul className="flex flex-col space-y-4">
      {props.items.map(item => <TodoItem key={item.id} item={item}/>)}
    </ul>
  );
};

export default Todos;
