import React, { useEffect } from "react";
import { UserActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const TodoList: React.FC = () => {
  const { error, limit, loading, page, todos } = useTypedSelector(
    (state) => state.todo
  );
  const { fetchTodos, setTodoPage } = UserActions();
  const pages = [1, 2, 3, 4, 5];

  useEffect(() => {
    fetchTodos(page, limit);
  }, [page, limit]);

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
            {todo.id} - {todo.title}
          </div>
        );
      })}

      <div style={{ marginTop: 20 }}>
        {pages.map((p) => {
          return (
            <span
              key={p}
              style={{
                padding: 5,
                border: p === page ? "2px solid green" : "1px solid black",
                cursor: "pointer",
              }}
              onClick={() => {
                setTodoPage(p);
              }}
            >
              {p}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
