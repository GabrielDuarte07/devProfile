import React from "react";
import { Container, ContainerSafe, Title } from "./styles";

const Home = (): React.JSX.Element => {
  return (
    <ContainerSafe>
      <Container>
        <Title>Hello World devProfile</Title>
      </Container>
    </ContainerSafe>
  );
};

export default Home;
