import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SearchIcon } from "../../assets/search";
import { TodoIcon } from "../../assets/todo";
import { HomeIcon } from "../../assets/Home";
import { CalendarIcon } from "../../assets/calendar";
import { SettingIcon } from "../../assets/setting";
import { theme } from "../../libs/style/theme";
import { the } from "../../../node_modules/@remix-run/router/dist/router.cjs";

export const TabBar = () => {
  const location = useLocation();
  const nav = useNavigate();
  const { pathname } = location;

  return (
    <Container>
      <IconContainer $isClicked={pathname === "/"} onClick={() => nav("/")}>
        <SearchIcon color={pathname !== "/" ? theme.gray[6] : theme.primary3} />
        <p>활동</p>
      </IconContainer>
      <IconContainer $isClicked={pathname === "/"} onClick={() => nav("/")}>
        <TodoIcon color={pathname !== "/" ? theme.gray[6] : theme.primary3} />
        <p>할 일</p>
      </IconContainer>
      <IconContainer
        $isClicked={pathname === "/home"}
        onClick={() => nav("/home")}
      >
        <HomeIcon
          color={pathname !== "/home" ? theme.gray[6] : theme.primary3}
        />
        <p>홈</p>
      </IconContainer>
      <IconContainer $isClicked={pathname === "/"} onClick={() => nav("/")}>
        <CalendarIcon
          color={pathname !== "/" ? theme.gray[6] : theme.primary3}
        />
        <p>달력</p>
      </IconContainer>
      <IconContainer $isClicked={pathname === "/"} onClick={() => nav("/")}>
        <SettingIcon
          color={pathname !== "/" ? theme.gray[6] : theme.primary3}
        />
        <p>설정</p>
      </IconContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100vw;
  padding: 0px 12px;
  gap: 12px;
  box-shadow: 0px -1px 4px rgba(0, 0, 0, 0.1);
`;
const IconContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: content;
  justify-content: center;
  align-items: center;
  padding: 8px;
  color: ${({ $isClicked }) => ($isClicked ? theme.primary3 : theme.gray[6])};
`;
