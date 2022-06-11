import React, { useEffect } from "react";
import { UserActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const { error, limit, loading, page, todos } = useTypedSelector(
    (state) => state.todo
  );

  const { fetchTodos, setTodoPage } = UserActions();

  if (loading) {
    return <h1>Идет загрузка ....</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {todo.id} - {todo.name}
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
