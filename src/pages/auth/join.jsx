import styled from "styled-components";
import { AuthLayout } from "../../libs/layout/authLayout";
import { theme } from "../../libs/style/theme";
import { Input } from "../../components/common/input";
import { Button } from "../../libs/style/components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Join = () => {
  const [code, setCode] = useState("");
  const [pw, setPw] = useState("");

  const onClick = () => {
    // 로그인 요청
  };

  const nav = useNavigate();
  return (
    <AuthLayout>
      <Container>
        <h1>가족참가하기</h1>
        <div>
          <Input
            value={code}
            onChange={(e) => setCode(e.target.value)}
            placeholder="초대코드를 입력해주세요 "
          />
          <Input
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="비밀번호를 입력해주세요"
            type="password"
          />
          <GotoLogin>
            가족대표이신가요?
            <p onClick={() => nav("/login")}>로그인</p>
          </GotoLogin>
        </div>
        <Button onClick={onClick}>참가하기</Button>
      </Container>
    </AuthLayout>
  );
};

const GotoLogin = styled.div`
  color: ${theme.primary2};
  font-size: 12px;
  display: flex;
  gap: 4px;
  p {
    cursor: pointer;
    color: ${theme.primary3};
    text-decoration: underline;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: space-between;
  padding: 10vh 32px;
  color: ${theme.primary3};
  > div {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;
