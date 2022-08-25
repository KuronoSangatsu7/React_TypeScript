import Todos from "./components/Todos";
import { Todo } from "./models/todo";

function App() {
  const todos : Todo[] = [
    {id: '1', text: "Learn Typescript"},
    {id: '2', text: "Master Typescript"},
    {id: '3', text: "Talk Typescript"}
  ]
  return (
    <div>
     <Todos items={todos}/>
    </div>
  );
}

export default App;
