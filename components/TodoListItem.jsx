import React, { useState } from "react";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { styled } from "styled-components/native";
function TodoListItem({ todo, check, deleteTodo, modify }) {
  const { id, content, date, complete } = todo;

  const [form, setForm] = useState(content);
  const [modifyMode, setModifyMode] = useState(false);

  return (
    <Container>
      <CheckBox complete={complete} onPress={() => check(id)}>
        {complete && (
          <MaterialCommunityIcons name="check" size={12} color={"#fff"} />
        )}
      </CheckBox>
      {modifyMode ? (
        <Input
          value={form}
          placeholder="Add modify item"
          onChangeText={(text) => setForm(text)}
          onSubmitEditing={() => {
            modify(id, form);
            setModifyMode(false);
          }}
        />
      ) : (
        <ContentGroup>
          <Content>{content}</Content>
          <Date>{date}</Date>
        </ContentGroup>
      )}
      <MaterialCommunityIcons
        name="pencil"
        size={20}
        color={"#00948A"}
        onPress={() => setModifyMode(true)}
      />
      <FontAwesome5
        name="trash"
        size={20}
        color={"#C1372F"}
        onPress={() => deleteTodo(id)}
      />
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  min-height: 10%;
  padding: 20px;

  border-bottom-width: 1px;
  border-bottom-color: #d9d9d9;
`;

const CheckBox = styled.TouchableOpacity`
  width: 16px;
  height: 16px;
  ${({ complete }) =>
    complete ? `background-color: #00948A;` : `border: 2px solid #392f31;`}
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 60%;
`;

const ContentGroup = styled.View`
  width: 60%;
  flex-direction: row;
  flex-wrap: wrap;
`;

const Content = styled.Text`
  width: 100%;
  font-weight: 700;
`;

const Date = styled.Text``;

export default TodoListItem;
