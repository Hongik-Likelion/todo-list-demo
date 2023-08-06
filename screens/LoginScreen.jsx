import { useNavigation } from "@react-navigation/native";
import React from "react";
import { styled } from "styled-components/native";
import * as KakaoLogins from "@react-native-seoul/kakao-login";
import AsyncStorage from "@react-native-async-storage/async-storage";
function LoginScreen() {
  const navigation = useNavigation();

  const onPressLoginWithoutKakaoLogin = () => navigation.navigate("home");

  /* kakao 로그인 기능 포함
  const onPressLogin = () => {
    async function kakaoLogin() {
      try {
        const token = await KakaoLogins.login();
        console.log("login success!");
        console.log(format(token));
      } catch (err) {}

      try {
        const profile = await KakaoLogins.getProfile();
        const { nickname, email, gender } = profile;

        await AsyncStorage.setItem("email", email);
        await AsyncStorage.setItem("nickname", nickname);
        await AsyncStorage.setItem("gender", gender);

        navigation.navigate("home");
      } catch (err) {}
    }

    kakaoLogin();
  };
  */

  return (
    <Container>
      <KakaoButton onPress={onPressLoginWithoutKakaoLogin}>
        <Label>카카오 로그인</Label>
      </KakaoButton>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;

const KakaoButton = styled.TouchableOpacity`
  width: 200px;
  height: 60px;

  background-color: yellow;
  border-radius: 12px;

  justify-content: center;
  align-items: center;
`;

const Label = styled.Text`
  font-weight: 700;
  font-size: 20px;
`;

export default LoginScreen;
