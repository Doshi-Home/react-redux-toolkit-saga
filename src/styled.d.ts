import { LightSMC } from "style";
import "styled-components";

declare module "styled-components" {
  /* eslint-disable @typescript-eslint/no-empty-interface */
  export interface DefaultTheme extends LightSMC {}
}