import styled from "styled-components";
import { theme } from "./theme";

export const Button = styled.button`
  border-radius: 12px;
  padding: 14px;
  width: ${({ width = "100%" }) => width};
  border: none;
  background-color: ${({ backgroundColor = theme.primary3 }) =>
    backgroundColor};
  color: ${({ color = "white" }) => color};
`;
