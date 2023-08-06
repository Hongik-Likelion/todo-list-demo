import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { styled } from "styled-components/native";
import * as KakaoLogins from "@react-native-seoul/kakao-login";
import { useNavigation } from "@react-navigation/native";
function MyInfoScreen(props) {
  const navigation = useNavigation();
  const [nickname, setNickname] = useState();
  const [email, setEmail] = useState();
  const [gender, setGender] = useState();

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    async function setProfile() {
      try {
        const email = await AsyncStorage.getItem("email");
        const nickname = await AsyncStorage.getItem("nickname");
        const gender = await AsyncStorage.getItem("gender");

        setIsLoading(false);
        setEmail(email);
        setNickname(nickname);
        setGender(gender);
      } catch (err) {
        setError(true);
      }
    }
    setIsLoading(true);
    setProfile();
  }, []);

  const onPressLogout = () => {
    async function kakaoLogout() {
      const message = KakaoLogins.logout();
      console.log(message);
      navigation.navigate("login");
    }

    kakaoLogout();
  };

  if (isLoading) {
    return (
      <View>
        <Text>로딩중...</Text>
      </View>
    );
  }

  if (isError) {
    return (
      <View>
        <Text>에러 발생!</Text>
      </View>
    );
  }

  return (
    <Container>
      <Info>
        <Label>이름</Label>
        <Text>{nickname}</Text>
      </Info>
      <Info>
        <Label>이메일</Label>
        <Text>{email}</Text>
      </Info>
      <Info>
        <Label>성별</Label>
        <Text>{gender}</Text>
      </Info>
      <Button onPress={onPressLogout}>
        <ButtonLabel>로그아웃</ButtonLabel>
      </Button>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;

  background-color: #fff;
`;

const Info = styled.View`
  width: 80%;

  flex-direction: row;
  align-items: center;
`;

const Label = styled.Text`
  font-size: 24px;
  font-weight: 700;

  width: 30%;
`;

const Text = styled.Text`
  font-size: 18px;
  font-weight: 500;
`;

const Button = styled.TouchableOpacity`
  margin-top: 20px;
  width: 100px;
  height: 30px;
  background-color: #000;

  justify-content: center;
  align-items: center;
`;

const ButtonLabel = styled.Text`
  font-weight: 700;
  color: #fff;
`;

export default MyInfoScreen;
