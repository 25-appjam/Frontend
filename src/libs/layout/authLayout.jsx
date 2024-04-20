import styled from "styled-components";
import { ArrowIcon } from "../../assets/arrow";
import { useNavigate } from "react-router-dom";

export const AuthLayout = ({ children }) => {
  const nav = useNavigate();

  return (
    <Conatainer>
      <Header>
        <ArrowIcon
          onClick={() => {
            nav("/");
          }}
        />
      </Header>
      {children}
    </Conatainer>
  );
};
const Header = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Conatainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
