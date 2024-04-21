import React, { useState } from "react";
import styled from "styled-components";
import { Button } from "../libs/style/components";
import { theme } from "../libs/style/theme";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/common/modal";
import { CreateFamily } from "../assets/CreateFamily";
import { JoinFamily } from "../assets/JoinFamily";
import { LogoImage } from "../assets/logo";

export const Main = () => {
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Container>
      <LogoImage />

      <Title>
        <p>사랑하는 사람과</p>
        다소니
      </Title>

      <Button width="280px" onClick={() => setIsOpen(true)}>
        시작하기
      </Button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <ModalContainer>
          <ButtonConatiner>
            <CreateFamily />
            <button onClick={() => nav("/make")}>가족 만들기</button>
          </ButtonConatiner>
          <ButtonConatiner>
            <JoinFamily />
            <button onClick={() => nav("/join")}>초대코드로 시작하기</button>
          </ButtonConatiner>
        </ModalContainer>
      </Modal>
    </Container>
  );
};

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const ButtonConatiner = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  > button {
    cursor: pointer;
    width: 100%;
    background-color: white;
    border: 1px solid ${theme.primary3};
    color: ${theme.primary3};
    border-radius: 12px;
    font-size: 16px;
    font-weight: bold;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 30px;
`;

const Logo = styled.div`
  width: 180px;
  height: 180px;
  background-color: #d9d9d9;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "KCC";
  font-size: 46px;
  color: ${theme.primary};

  p {
    font-family: "KCC";
    font-size: 32px;
    color: ${theme.primary2};
  }
`;
