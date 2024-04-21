import styled from "styled-components";
import { theme } from "../libs/style/theme";
import { Button } from "../libs/style/components";
import { useState } from "react";
import { Modal } from "../components/common/modal";
import { Input } from "../components/common/input";

export const Setting = () => {
  const [a, setA] = useState(false);

  const [n, setN] = useState("");
  const [p, setP] = useState("");
  const [people, setPeople] = useState(false);

  return (
    <Flex>
      <Modal isOpen={a} setIsOpen={setA}>
        <p>가족 구성원 추가하기</p>
        <Input
          placeholder="이름을 입력해주세요"
          value={n}
          onChange={(e) => setN(e.target.value)}
        />
        <Input
          placeholder="비밀번호를 입력해주세요"
          value={p}
          onChange={(e) => setP(e.target.value)}
        />
        <Button
          onClick={() => {
            setPeople(true);
            setA(false);
          }}
        >
          가족 구성원 추가하기
        </Button>
      </Modal>
      <Container>
        <ListContianer>
          <h3>가족 구성원 목록</h3>
          <div>
            <PeopleContainer>
              <div>이름</div>
              <p>비밀번호</p>
            </PeopleContainer>
            <PeopleContainer>
              <div>안예성</div>
              <p>akfasdlkf</p>
            </PeopleContainer>
            <PeopleContainer>
              <div>이현진</div>
              <p>thisispassword</p>
            </PeopleContainer>
            <PeopleContainer>
              <div>김민교</div>
              <p>helloworld</p>
            </PeopleContainer>
            <PeopleContainer>
              <div>이승현</div>
              <p>password</p>
            </PeopleContainer>
            {people && (
              <PeopleContainer>
                <div>{n}</div>
                <p>{p}</p>
              </PeopleContainer>
            )}
          </div>
          <Button onClick={() => setA(true)}>가족 구성원 추가하기</Button>
        </ListContianer>
      </Container>
    </Flex>
  );
};

const Flex = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  width: 330px;
  padding: 16px 0px;
`;

const ListContianer = styled.div`
  padding: 10px;
  border-radius: 12px;
  border: 2px solid ${theme.primary3};
  width: 100%;
  display: flex;
  align-items: center;
  color: ${theme.primary3};
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.25);

  flex-direction: column;

  gap: 20px;
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

const PeopleContainer = styled.div`
  display: flex;
  gap: 10px;
  width: 300px;
  align-items: center;
  > div {
    padding: 5px;
    width: 70px;
    text-align: center;
    border: 1px solid ${theme.primary3};
    border-radius: 3px;
  }
  > p {
    flex: 1;
  }
`;
