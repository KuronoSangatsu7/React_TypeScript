import { Todo } from "../models/todo";

type propsType = {
    item: Todo,
    onRemoveTodo: () => void
}

const TodoItem = (props : propsType) => {
    return <li className="py-4 px-24 bg-darkBlue rounded-md hover:bg-darkerBlue" onClick={props.onRemoveTodo}>{props.item.text}</li>
}

export default TodoItem