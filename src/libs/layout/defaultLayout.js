import styled from "styled-components";
import { TabBar } from "../../components/common/tabBar";
import { Outlet } from "react-router-dom";
import { Notice } from "../../components/common/notice";

export const DefaultLayout = () => {
  return (
    <Container>
      <Notice />
      <ChildrenContainer>
        <Outlet />
      </ChildrenContainer>
      <TabBar />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
const ChildrenContainer = styled.div`
  width: 100%;
  flex: 1;
  overflow: scroll;
`;
