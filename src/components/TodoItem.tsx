import { FC } from "react";

type TodoPropsType = {
  text: string
};

const Todo: FC<TodoPropsType> = ({ text }) => {
  return (
    <li>{text}</li>
  );
};

export default Todo;
