import "styled-components/native";
import theme from "../global/styles/theme";
type TypeTheme = typeof theme;

declare module "styled-components/native" {
  export interface DefaultTheme extends TypeTheme {}
}
