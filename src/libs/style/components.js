import styled from "styled-components";
import { theme } from "./theme";

export const Button = styled.button`
  border-radius: 12px;
  padding: 14px;
  width: 100%;
  border: none;
  background-color: ${({ backgroundColor = theme.primary }) => backgroundColor};
  color: ${({ color = "white" }) => color};
`;
