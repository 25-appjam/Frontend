import { useEffect, useState } from "react";
import styled from "styled-components";
import { QuestionIcon } from "../assets/question";
import { theme } from "../libs/style/theme";
import { QuestionWrite } from "../assets/questionWrite";
import { People } from "../assets/people";
import { useNavigate } from "react-router-dom";
import { Modal } from "../components/common/modal";
import { Input } from "../components/common/input";
import { Button } from "../libs/style/components";

export const Home = () => {
  const [questionOpen, setQuestionOpen] = useState(false);

  const [data, setData] = useState(
    () => JSON.parse(localStorage.getItem("data")) || []
  );
  const nav = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [answer, setAnswer] = useState("");
  // useEffect(() => {
  //   if (localStorage.getItem("data"))
  //     setData(JSON.parse(localStorage.getItem("data")));
  // }, [isOpen]);

  useEffect(() => {
    localStorage.setItem("data", JSON.stringify(data));
  }, [data]);

  return (
    <Flex>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div style={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <p style={{ color: theme.primary3 }}>
            오늘의 질문에 대하여 답변해주세요!
          </p>
          <Input value={answer} onChange={(e) => setAnswer(e.target.value)} />
          <Button
            onClick={() => {
              setData([
                ...data,
                {
                  writer: "안예성",
                  content: answer,
                },
              ]);

              setIsOpen(false);
              setAnswer("");
            }}
          >
            답변 전송하기
          </Button>
        </div>
      </Modal>
      <Container>
        {questionOpen ? (
          <QuestionContainer>
            <QuestionIcon />
            가족들이 닮은 동물을 작성해주세요
          </QuestionContainer>
        ) : (
          <QuestionContainer onClick={() => setQuestionOpen(true)}>
            <QuestionIcon />
            <p>오늘의 질문 상자 열기</p>
          </QuestionContainer>
        )}
        <AnswerContainer>
          {data.length ? (
            <>
              {data.map((item) => (
                <PeopleContainer>
                  <People />
                  <p>{item.writer}</p>
                  <p>{item.content}</p>
                </PeopleContainer>
              ))}
            </>
          ) : (
            <p>아무도 답을 작성하지 않았어요</p>
          )}
        </AnswerContainer>
        <QuestionContainer onClick={() => setIsOpen(true)}>
          <QuestionWrite />내 대답 하러가기
        </QuestionContainer>
        <Button onClick={() => nav("/home/list")}>전체 질문 보러가기</Button>
      </Container>
    </Flex>
  );
};

const Flex = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  padding: 16px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 330px;
`;

const QuestionContainer = styled.div`
  cursor: pointer;
  display: flex;
  padding: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${theme.primary3};
  font-weight: bold;
  gap: 10px;
  background-color: ${theme.primary};
  border-radius: 12px;
  height: 76px;
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
    width: 180px;
  }
`;
