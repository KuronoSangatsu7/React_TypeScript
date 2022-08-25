type todosProps = {
    items: string[]
}
const Todos = (props : todosProps) => {
  return (
    <ul>
      {props.items.map(item => <li key={item}>{item}</li>)}
    </ul>
  );
};

export default Todos;
