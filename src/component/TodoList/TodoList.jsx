import { useState } from "react";
import Todo from "../Todo/Todo";
import TodoForm from "../TodoForm/TodoForm";

const TodoList = ({ todos, onComplete, onDelete, onUpdateTodo }) => {
  const [edit, setEdit] = useState({ id: null, text: "", isCompleted: false });
  const editTodo = () => {
    onUpdateTodo(edit.id);
  };
  const renderTodos = () => {
    if (todos.length === 0) return <p> add some todos </p>;

    return todos.map((todo) => {
      return (
        <Todo
          key={todo.id}
          todo={todo}
          onComplete={() => onComplete(todo.id)}
          onDelete={() => onDelete(todo.id)}
          onEdit={() => setEdit(todo)}
        />
      );
    });
  };
  return (
    <div>{edit.id ? <TodoForm submitTodo={editTodo} /> : renderTodos()}</div>
  );
};

export default TodoList;
