import { FC } from "react";
import classes from "./TodoItem.module.css";

type TodoProps = {
  text: string
};

const Todo: FC<TodoProps> = ({ text }) => {
  return (
    <li className={classes.item}>
      {text}
    </li>
  );
};

export default Todo;
