import React from "react";
import { styled } from "styled-components/native";
import TodoListItem from "./TodoListItem";

function TodoList({
  todos,
  check,
  deleteTodo,

  modify,
}) {
  return (
    <Container>
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          check={check}
          deleteTodo={deleteTodo}
          modify={modify}
        />
      ))}
    </Container>
  );
}

const Container = styled.View`
  width: 100%;

  height: 90%;
`;

export default TodoList;
