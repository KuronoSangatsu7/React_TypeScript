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

    return <form className="flex flex-col m-4 space-y-2 w-2/5" onSubmit={submitHandler}>
        <label htmlFor="todo-text" className="">What would you like to do?</label>
        <input type="text" id="todo-text" className="rounded-full p-1 text-black" ref={todoTextInputRef} />
        <button type="submit" className="p-4 bg-myBlue py-2 px-4 rounded-full self-end">Add Todo</button>
    </form>
}

export default NewTodo