import "styled-components";
import theme from "./theme";
type TypeTheme = typeof theme;

declare module "styled-components" {
  export interface DefaultTheme extends TypeTheme {}
}
