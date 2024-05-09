import React from "react";
import {
  Container,
  ContainerSafe,
  Header,
  UserWrapper,
  UserInfo,
  UserAvatarButton,
  UserAvatar,
  UserInfoDetail,
  UserGreeting,
  UserName,
} from "./styles";

import Avatar02 from "../../../assets/avatar02.png";

const Home = (): React.JSX.Element => {
  return (
    <ContainerSafe>
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
          </UserWrapper>
        </Header>
      </Container>
    </ContainerSafe>
  );
};

export default Home;
