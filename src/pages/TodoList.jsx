import styled from "styled-components";
import { FamilyCheck } from "../assets/FamilyCheck";
import { theme } from "../libs/style/theme";
import { Profile } from "../assets/Profile";
import { useState } from "react";
import { TodoAdd } from "../assets/TodoAdd";

export const TodoList = () => {
  const [familyInput, setFamilyInput] = useState("");
  const [soloInput, setSoloInput] = useState("");
  const [familyData, setFamilyData] = useState([
    {
      id: 1,
      name: "이승현",
      desc: "저녁에 가족 외식하기",
    },
    {
      id: 2,
      name: "김민교",
      desc: "다같이 책 읽는 시간 가지기",
    },
    {
      id: 3,
      name: "이현진",
      desc: "뭐 해야 할지 모르겠어요",
    },
    {
      id: 4,
      name: "안예성",
      desc: "최선을 다 했는데 소재고갈",
    },
    {
      id: 5,
      name: "김규하",
      desc: "귀엽게 봐주세요",
    },
  ]);

  const [soloData, setSoloData] = useState([
    {
      id: 1,
      desc: "앱잼 가기 ",
    },
    {
      id: 2,
      desc: "개발 끝내기",
    },
    {
      id: 3,
      desc: "디자인 끝내기",
    },
    {
      id: 4,
      desc: "다른팀 방해하기",
    },
    {
      id: 5,
      desc: "뭐가 됐든 즐겁고 행복하기",
    },
  ]);

  return (
    <Container>
      {/* 가족 */}
      <Title>
        <FamilyCheck />
        <p>가족 ToDo</p>
      </Title>
      <InputBox>
        <FamilyAdd_Input
          placeholder="추가할 내용을 입력하세요."
          onChange={(e) => {
            setFamilyInput(e.currentTarget.value);
          }}
        />
        <button
          onClick={() => {
            setFamilyInput("");
            setFamilyData([
              ...familyData,
              {
                id: "",
                name: "김규하",
                desc: familyInput,
              },
            ]);
          }}
        >
          <TodoAdd />
        </button>
      </InputBox>

      <Items>
        {familyData.map((item) => (
          <Item>
            <Profile />
            <p>{item.name}</p>:<Desc>{item.desc}</Desc>
          </Item>
        ))}
      </Items>

      {/* 개인 */}
      <Title>
        <FamilyCheck />
        <p>나의 ToDo</p>
      </Title>
      <InputBox>
        <FamilyAdd_Input
          placeholder="추가할 내용을 입력하세요."
          onChange={(e) => {
            setSoloInput(e.currentTarget.value);
          }}
        />
        <button
          onClick={() => {
            setSoloInput("");
            setSoloData([
              ...soloData,
              {
                id: "",
                desc: soloInput,
              },
            ]);
          }}
        >
          <TodoAdd />
        </button>
      </InputBox>

      <Items>
        {soloData.map((item) => (
          <Item>
            <CheckInput type="checkbox" />
            <p>{item.name}</p>
            <Desc>{item.desc}</Desc>
          </Item>
        ))}
      </Items>
    </Container>
  );
};

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 15px;
  margin-top: 4vh;
`;

const Title = styled.div`
  width: 150px;
  height: 40px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${theme.primary};
  border-radius: 10px;

  p {
    font-size: 20px;
  }
`;

const InputBox = styled.div`
  border-radius: 10px;
  border: 1px solid ${theme.primary3};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 2px 4px;
  button {
    background: none;
    border: none;
  }
`;

const FamilyAdd_Input = styled.input`
  width: 300px;
  height: 30px;
  text-indent: 6px;
  border: none;

  &::placeholder {
    color: ${theme.primary3};
  }

  &:focus {
    outline: none;
  }
`;

const Items = styled.div`
  width: 330px;
  height: 220px;
  border-width: 0px 7px 9px 0px;
  border-color: ${theme.primary2};
  border-style: solid;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 4.129px 4.129px 0px rgba(0, 0, 0, 0.25);
  gap: 10px;
  margin-bottom: 4vh;
  padding: 10px;
  overflow-y: scroll;
`;

const Item = styled.div`
  width: 300px;
  height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  border: 1px solid ${theme.primary3};
  border-radius: 10px;
  padding: 4px 14px;
  gap: 6px;
`;

const Desc = styled.div``;

const CheckInput = styled.input`
  width: 15px;
  height: 15px;
  border-radius: 100%;
`;
