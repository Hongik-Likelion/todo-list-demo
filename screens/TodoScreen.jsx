import React, { useState } from "react";
import { styled } from "styled-components/native";
import TodoList from "../components/TodoList";
import TodoListInsert from "../components/TodoListInsert";

function TodoScreen() {
  const [todos, setTodos] = useState(() => [
    {
      id: 1,
      content: "Make the app",
      date: "9/16/2051",
      complete: true,
    },
    {
      id: 2,
      content: "Add awesome features",
      date: "8/2/2069",
      complete: false,
    },
    {
      id: 3,
      content: "Create the settings panel",
      date: "8/1/2063",
      complete: false,
    },
  ]);

  const [todoForm, setTodoForm] = useState({
    content: "",
  });

  const onChange = (text) => setTodoForm(text);

  const modify = (modifyTodoId, content) => {
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        content: modifyTodoId === todo.id ? content : todo.content,
      }))
    );
  };

  const onPressAdd = () => {
    const newTodo = {
      id: todos.length + 1,
      content: todoForm,
      date: new Date().toISOString(),
      complete: false,
    };
    setTodos((prev) => [...prev, newTodo]);
  };

  const onPressCheck = (todoId) =>
    setTodos((prev) =>
      prev.map((todo) => ({
        ...todo,
        complete: todoId === todo.id ? !todo.complete : todo.complete,
      }))
    );

  const onPressDelete = (todoId) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== todoId));

  return (
    <Container>
      <TodoListInsert
        value={todoForm.content}
        onChange={onChange}
        onPress={onPressAdd}
      />
      <TodoList
        todos={todos}
        check={onPressCheck}
        deleteTodo={onPressDelete}
        modify={modify}
      />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;

  flex-direction: row;
  flex-wrap: wrap;
`;

export default TodoScreen;
