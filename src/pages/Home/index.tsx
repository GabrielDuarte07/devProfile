import React, { useContext } from "react";
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  UserAvatarButton,
  UserAvatar,
  UserInfoDetail,
  UserGreeting,
  UserName,
  Icon,
} from "./styles";
import { Config } from "../../global/env/env";

import Avatar02 from "../../../assets/avatar02.png";
import { authContext } from "../../contexts/AuthContext";
import { Alert } from "react-native";

const Home = (): React.JSX.Element => {
  const { user, signOut } = useContext(authContext);

  const handleSignOut = () => {
    Alert.alert("Logout", "Tem certeza que deseja sair do app?", [
      {
        text: "cancelar",
        onPress: () => {},
      },
      {
        text: "Logout",
        onPress: signOut,
      },
    ]);
  };

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar
                source={
                  user.avatar_url
                    ? { uri: Config.API_AVATARS + user.avatar_url }
                    : Avatar02
                }
              />
            </UserAvatarButton>

            <UserInfoDetail>
              <UserGreeting>Olá</UserGreeting>
              <UserName>{user.name}</UserName>
            </UserInfoDetail>
          </UserInfo>

          <Icon name="power" onPress={handleSignOut} />
        </UserWrapper>
      </Header>
    </Container>
  );
};

export default Home;
