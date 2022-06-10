import React, { useEffect } from "react";
import { UserActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
  const { error, loading, users } = useTypedSelector((state) => state.user);

  const { fetchUsers } = UserActions();

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) {
    return <h1>Идет загрузка ....</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      {users.map((user, index) => {
        return <div key={index}>{user.name}</div>;
      })}
    </div>
  );
};

export default UserList;
