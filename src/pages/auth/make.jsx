import styled from "styled-components";
import { AuthLayout } from "../../libs/layout/authLayout";
import { theme } from "../../libs/style/theme";
import { Input } from "../../components/common/input";
import { Button } from "../../libs/style/components";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthRegister } from "../../libs/utils/api/auth";
import { useMutation } from "@tanstack/react-query";

export const Make = () => {
  const [name, setName] = useState("");
  const [familyName, setFamilyName] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [pw, setPw] = useState("");
  const [email, setEmail] = useState("");
  const nav = useNavigate();

  const { mutate: postRegister } = useMutation(AuthRegister, {
    onSuccess: (res) => {
      console.log(res);
      localStorage.setItem("token", res.accessToken);
      nav("/home");
    },
    onError: (err) => {
      console.log(err);
    },
  });
  const onClick = () => {
    if (pw !== pwCheck) {
      alert("비밀번호 확인이 일치하지 않습니다.");
      return;
    } else {
      postRegister({ email, password: pw, familyName, name });
    }
  };

  return (
    <AuthLayout>
      <Container>
        <h1>가족 생성하기</h1>
        <div>
          <Input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="내 이름을 입력해주세요"
          />
          <Input
            value={familyName}
            onChange={(e) => setFamilyName(e.target.value)}
            placeholder="가족이름을 입력해주세요(ex. 안씨네.. 이씨네..)"
          />
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="이메일을 입력해주세요"
          />
          <Input
            value={pw}
            onChange={(e) => setPw(e.target.value)}
            placeholder="비밀번호를 입력해주세요"
            type="password"
            ㄴ
          />
          <Input
            value={pwCheck}
            onChange={(e) => setPwCheck(e.target.value)}
            placeholder="비밀번호를 확인해주세요"
            type="password"
          />
          <GotoLogin>
            가족대표이신가요?
            <p onClick={() => nav("/login")}>로그인</p>
          </GotoLogin>
        </div>
        <Button onClick={() => onClick()}>참가하기</Button>
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
