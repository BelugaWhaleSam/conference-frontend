import styled, { Styled } from "styled-components";

import { StyledInputProps } from "../../utils/GlobalInterfaces";
import { determineStyledInputBorder } from "../../utils/DeteremineStylesUtil";

export const StyledInputBox = styled.div<StyledInputProps>`
  position: relative;
  border-radius: 5px;
  width: 100%;
  heigth: 56px;
  border: ${(props) => determineStyledInputBorder(props)};
`;
