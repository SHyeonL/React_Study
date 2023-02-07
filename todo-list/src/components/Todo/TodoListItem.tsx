import { TodoItem } from "~/types";
import styled from "@emotion/styled";
import { motion } from "framer-motion";

interface Props {
  todoItem: TodoItem;
  deleteTodo: (id: number) => void;
}

const TodoListItem = ({ todoItem, deleteTodo }: Props) => {
  return (
    <Container animate>
      <Item>{todoItem.text}</Item>
      <RemoveIcon onClick={() => deleteTodo(todoItem.id)}>X</RemoveIcon>
    </Container>
  );
};

const Container = styled(motion.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-size: 1rem;
  line-height: 1.5;
`;

const Item = styled.div`
  border-radius: 10px;
  background-color: #ffd7ad;
  padding: 5px 10px;
  width: 100%;
  margin-right: 10px;
`;
const RemoveIcon = styled.div`
  padding: 5px 10px;
  border-radius: 10px;
  font-weight: 700;
  transition: background-color 0.2s ease-in-out;
  background-color: #dadada;
  &:hover {
    background-color: #c4c4c4;
  }
  cursor: pointer;
`;
export default TodoListItem;
