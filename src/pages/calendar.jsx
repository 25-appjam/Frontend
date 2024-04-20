import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "../libs/style/theme";
import CalendarImage4 from "../assets/calendar4.png";
import CalendarImage5 from "../assets/calendar5.png";
import Todo1 from "../assets/todo1.png";
import Todo2 from "../assets/todo2.png";
import Todo3 from "../assets/todo3.png";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/common/modal";
import { Input } from "../components/common/input";
import { Button } from "../libs/style/components";
export const Calendar = () => {
  const [a, setA] = useState(0);
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");

  return (
    <Container>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <p>2024. 04. 21</p>
        <Input
          placeholder="할 일을 입력해주세요"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button
          onClick={() => {
            setA(2);
            setValue("");
            setIsOpen(false);
          }}
        >
          일정 추가
        </Button>
      </Modal>
      {a === 0 ? (
        <CalendarImage src={CalendarImage4} onClick={() => setA(1)} />
      ) : (
        <CalendarImage src={CalendarImage5} onClick={() => setIsOpen(true)} />
      )}
      {a === 0 ? (
        <CalendarImage src={Todo1} onClick={() => setA(1)} />
      ) : a === 1 ? (
        <CalendarImage src={Todo2} />
      ) : (
        <CalendarImage src={Todo3} />
      )}
    </Container>
  );
};
const CalendarImage = styled.img`
  width: 350px;
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

const TopDiv = styled.div`
  width: 330px;
  height: 300px;
  border-width: 0px 7px 9px 0px;
  border-color: ${theme.primary2};
  border-style: solid;
  border-radius: 20px;
  box-shadow: 0px 4.129px 4.129px 0px rgba(0, 0, 0, 0.25);
`;

const BottomDiv = styled.div`
  width: 330px;
  height: 300px;
  border-width: 0px 7px 9px 0px;
  border-color: ${theme.primary2};
  border-style: solid;
  border-radius: 20px;
  box-shadow: 0px 4.129px 4.129px 0px rgba(0, 0, 0, 0.25);
`;
