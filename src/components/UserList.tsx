import React from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";

const UserList: React.FC = () => {
  const { error, loading, users } = useTypedSelector((state) => state.user);
  return <div>no data</div>;
};

export default UserList;
