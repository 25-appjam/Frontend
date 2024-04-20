import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";

export const TabBar = () => {
  const location = useLocation();
  const nav = useNavigate();
  const { pathname } = location;

  return (
    <Container>
      <IconContainer $isClicked={pathname === "/"} onClick={() => nav("/")}>
        <p>HOME</p>
      </IconContainer>
      <IconContainer $isClicked={pathname === "/"} onClick={() => nav("/")}>
        <p>HOME</p>
      </IconContainer>
      <IconContainer $isClicked={pathname === "/"} onClick={() => nav("/")}>
        <p>ADS</p>
      </IconContainer>
      <IconContainer $isClicked={pathname === "/"} onClick={() => nav("/")}>
        <p>HOME</p>
      </IconContainer>
      <IconContainer $isClicked={pathname === "/"} onClick={() => nav("/")}>
        <p>HOME</p>
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  padding: 0px 12px;
  gap: 12px;
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: content;
  justify-content: center;
  align-items: center;
  padding: 8px;
`;
