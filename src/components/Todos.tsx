import {Todo} from "../models/todo"
import TodoItem from "./TodoItem";

type todosProps = {
    items: Todo[]
}
const Todos = (props : todosProps) => {
  return (
    <ul>
      {props.items.map(item => <TodoItem key={item.id} item={item}/>)}
    </ul>
  );
};

export default Todos;
