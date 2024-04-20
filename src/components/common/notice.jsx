import styled from "styled-components";
import { theme } from "../../libs/style/theme";

export const Notice = () => {
  return (
    <Container>
      <marquee behavior="scroll">공지사항</marquee>
    </Container>
  );
};

const Container = styled.div`
  padding: 12px 0px;
  display: flex;
  background-color: ${theme.primary3};
  > marquee {
    background-color: ${theme.primary3};
  }
`;
