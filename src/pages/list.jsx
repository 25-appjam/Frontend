import styled from "styled-components";
import { theme } from "../libs/style/theme";
import { Check } from "../assets/check";
import { useNavigate } from "react-router-dom";
import { ArrowIcon } from "../assets/arrow";
import { Modal } from "../components/common/modal";
import { useState } from "react";
import { People } from "../assets/people";

export const List = () => {
  const [select, setSelect] = useState(0);
  const answer = [
    {
      writer: "안예성",
      content:
        "답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변답변",
    },
  ];
  const data = [
    { id: 1, question: "가족들이 닮은 동물을 각각 작성해주세요" },
    { id: 1, question: "우리 가족들만의 공통점은 어떤 부분인가요?" },
    { id: 1, question: "가장 기억에 남는 가족과의 추억은 어떤 것이 있나요?" },
    { id: 1, question: "우리 가족들과 전혀 다른 점이 있다면 어떤 것인가요?" },
    {
      id: 1,
      question:
        "가족들에게 말하지 못 했던 나의 가장 힘들었던 순간은 언제였나요?",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const nav = useNavigate();
  return (
    <Flex>
      <Container>
        <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}
          >
            <p style={{ color: "black", textAlign: "center" }}>
              {data[select].question}
            </p>
            <AnswerContainer>
              {answer.map((item) => (
                <PeopleContainer>
                  <People />
                  <p>{item.writer}</p>
                  <p>{item.content}</p>
                </PeopleContainer>
              ))}
            </AnswerContainer>
          </div>
        </Modal>
        <Header>
          <ArrowIcon
            onClick={() => {
              nav("/home");
            }}
          />
          <QuestionContainer>
            <Check />
            질문 리스트
          </QuestionContainer>
        </Header>
        <ListContainer>
          {data.map((v, i) => (
            <ListEach
              onClick={() => {
                setIsOpen(true);
                setSelect(i);
              }}
            >
              <p>#{i + 1}</p>
              <p>{v.question}</p>
            </ListEach>
          ))}
        </ListContainer>
      </Container>
    </Flex>
  );
};
const Header = styled.div`
  display: flex;
  padding: 10px;
  gap: 10px;
  align-items: center;
`;

const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${theme.primary2};
  padding: 10px;
  border-radius: 12px;
  gap: 3px;
`;

const ListEach = styled.div`
  display: flex;
  gap: 10px;
  color: ${theme.primary3};
  border: 1px solid ${theme.primary2};
  padding: 10px;
  border-radius: 5px;
`;

const Container = styled.div`
  width: 330px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const QuestionContainer = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.primary3};
  font-weight: bold;
  gap: 10px;
  background-color: ${theme.primary};
  border-radius: 12px;
`;

const PeopleContainer = styled.div`
  width: 100%;
  background-color: ${theme.primary};
  display: flex;
  gap: 10px;
  padding: 20px 10px;
  border-radius: 16px;
  color: ${theme.primary3};
  align-items: center;
  & > p:last-child {
    width: 120px;
  }
`;

const AnswerContainer = styled.div`
  background-color: white;
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 10px;
  border: 2px solid ${theme.primary2};
  border-radius: 12px;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);
  overflow-y: scroll;
  color: ${theme.primary3};
  align-items: center;
`;
