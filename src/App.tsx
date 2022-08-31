import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import FullWrapper from "./components/UI/FullWrapper";
import AppWrapper from "./components/UI/AppWrapper";
import TodosContextProvider from "./store/todos-context";

function App() {
  return (
    <FullWrapper>
      <AppWrapper>
        <TodosContextProvider>
          <Todos />
          <NewTodo />
        </TodosContextProvider>
      </AppWrapper>
    </FullWrapper>
  );
}

export default App;
