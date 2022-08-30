import { useRef } from "react";

type propsType = {
    newTodoHandler : (todo:string) => void
}

const NewTodo = (props: propsType) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();

        const enteredText = todoTextInputRef.current!.value

        if(enteredText.trim().length == 0) return

        props.newTodoHandler(enteredText)

        todoTextInputRef.current!.value = ''
    }

    return <form onSubmit={submitHandler}>
        <label htmlFor="todo-text">Todo text</label>
        <input type="text" id="todo-text" ref={todoTextInputRef} />
        <button type="submit">Add Todo</button>
    </form>
}

export default NewTodo