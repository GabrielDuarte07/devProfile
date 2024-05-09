import styled from "styled-components/native";
import { DefaultTheme } from "styled-components/native";

export const ContainerSafe = styled.SafeAreaView`
  flex: 1;
`;

export const Container = styled.View`
  flex: 1;
  background-color: ${(props: DefaultTheme) => props.theme.colors.dark};
  justify-content: center;
  align-items: center;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${(props: DefaultTheme) => props.theme.fonts.bold};
  color: ${(props: DefaultTheme) => props.theme.colors.light};
`;
