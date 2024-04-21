import { useLocation, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { SearchIcon } from "../../assets/search";
import { TodoIcon } from "../../assets/todo";
import { HomeIcon } from "../../assets/Home";
import { CalendarIcon } from "../../assets/calendar";
import { SettingIcon } from "../../assets/setting";
import { theme } from "../../libs/style/theme";

export const TabBar = () => {
  const location = useLocation();
  const nav = useNavigate();
  const { pathname } = location;
  const path = pathname.split("/")[1];

  return (
    <Container>
      <IconContainer
        $isClicked={path === "recommend"}
        onClick={() => nav("/recommend")}
      >
        <SearchIcon
          color={path !== "recommend" ? theme.gray[6] : theme.primary3}
        />
        <p>활동</p>
      </IconContainer>
      <IconContainer
        $isClicked={path === "todolist"}
        onClick={() => nav("/todolist")}
      >
        <TodoIcon
          color={path !== "todolist" ? theme.gray[6] : theme.primary3}
        />
        <p>할 일</p>
      </IconContainer>
      <IconContainer $isClicked={path === "home"} onClick={() => nav("/home")}>
        <HomeIcon color={path !== "home" ? theme.gray[6] : theme.primary3} />
        <p>홈</p>
      </IconContainer>
      <IconContainer
        $isClicked={path === "calendar"}
        onClick={() => nav("/calendar")}
      >
        <CalendarIcon
          color={path !== "calendar" ? theme.gray[6] : theme.primary3}
        />
        <p>달력</p>
      </IconContainer>
      <IconContainer
        $isClicked={path === "setting"}
        onClick={() => nav("/setting")}
      >
        <SettingIcon
          color={path !== "setting" ? theme.gray[6] : theme.primary3}
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
