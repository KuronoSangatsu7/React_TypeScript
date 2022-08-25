import {Todo} from "../models/todo"

type todosProps = {
    items: Todo[]
}
const Todos = (props : todosProps) => {
  return (
    <ul>
      {props.items.map(item => <li key={item.id}>{item.text}</li>)}
    </ul>
  );
};

export default Todos;
