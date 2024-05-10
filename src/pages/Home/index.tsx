import React from "react";
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

import Avatar02 from "../../../assets/avatar02.png";

const Home = (): React.JSX.Element => {
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <UserAvatarButton onPress={() => {}}>
              <UserAvatar source={Avatar02} />
            </UserAvatarButton>

            <UserInfoDetail>
              <UserGreeting>Olá</UserGreeting>
              <UserName>Mario</UserName>
            </UserInfoDetail>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>
    </Container>
  );
};

export default Home;
