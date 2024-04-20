import styled from "styled-components";
import { TabBar } from "../../components/common/tabBar";
import { Outlet } from "react-router-dom";

export const DefaultLayout = () => {
  return (
    <Container>
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
