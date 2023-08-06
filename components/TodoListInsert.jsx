import React from "react";
import { styled } from "styled-components/native";

function TodoListInsert({ value, onChange, onPress }) {
  return (
    <InputGrop>
      <InputBorderBottom>
        <Input
          value={value}
          onChangeText={onChange}
          placeholder="Add new item"
        />
      </InputBorderBottom>
      <AddButton onPress={onPress}>
        <ButtonLabel>ADD</ButtonLabel>
      </AddButton>
    </InputGrop>
  );
}

const InputGrop = styled.View`
  width: 100%;
  height: 10%;

  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const InputBorderBottom = styled.View`
  width: 65%;
  height: 40px;

  border-bottom-width: 2px;
  border-bottom-color: #00948a;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 100%;

  padding-left: 4px;
`;

const AddButton = styled.TouchableOpacity`
  width: 90px;
  height: 40px;
  background-color: #00948a;

  justify-content: center;
  align-items: center;
`;

const ButtonLabel = styled.Text`
  color: #fff;
  font-weight: 700;
`;

export default TodoListInsert;
