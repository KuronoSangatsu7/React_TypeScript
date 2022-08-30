import { Todo } from "../models/todo";

type propsType = {
    item: Todo
}

const TodoItem = (props : propsType) => {
    return <li>{props.item.text}</li>
}

export default TodoItem