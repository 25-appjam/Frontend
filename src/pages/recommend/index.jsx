import React from "react";
import { Weather } from "../../components/recommend/weather";
import styled from "styled-components";
import { theme } from "../../libs/style/theme";
import roulette from "../../assets/roulette.png";
import { useNavigate } from "react-router-dom";
const dothing = [
  {
    image:
      "https://png.pngtree.com/png-clipart/20211116/original/pngtree-books-illustration-education-icon-png-image_6943779.png",
    title: "책",
    content: "책을 읽으면서 인문소양을 키워보세요!!",
  },
  {
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7l9Aem3dkTBPNikw8Gu-mYx2T5CnSGaAiqKN7IxcEpQ&s",
    title: "보드게임",
    content: "가족들과 보드게임을 즐겨보세요!!",
  },
  {
    image:
      "https://www.urbanbrush.net/web/wp-content/uploads/edd/2018/09/urbanbrush-20180922134228421654.png",
    title: "영화",
    content: "영화를 보며 힐링하세요!!",
  },
];
export const Recommend = () => {
  const nav = useNavigate();
  return (
    <Flex>
      <Contianer>
        <Weather />
        <Todo>
          <p>오늘 이런 활동은 어떤가요?</p>
          {dothing.map((item) => (
            <TodoContainer>
              <img src={item.image} alt="img" />
              <div>
                <p>{item.title}</p>
                <p>{item.content}</p>
              </div>
            </TodoContainer>
          ))}
        </Todo>
        <Goto onClick={() => nav("/recommend/roulette")}>
          <div>
            <img src={roulette} />
            <p>룰렛 게임</p>
          </div>
          <div>></div>
        </Goto>
      </Contianer>
    </Flex>
  );
};

const Flex = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
`;

const TodoContainer = styled.div`
  display: flex;
  gap: 10px;
  > img {
    width: 50px;
    height: 50px;
  }
  > div {
    display: flex;
    flex-direction: column;
  }
`;

const Contianer = styled.div`
  display: flex;
  width: 370px;
  gap: 16px;
  padding: 16px;
  flex-direction: column;
`;

const Todo = styled.div`
  background-color: ${theme.primary2};
  border-radius: 10px;
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  > div {
    background-color: ${theme.primary};
    border-radius: 10px;
    padding: 12px;
  }
`;

const Goto = styled.div`
  display: flex;
  padding: 10px;
  border-radius: 12px;
  background-color: #171717;
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: space-between;
  > div {
    p {
      color: white;
      font-size: 20px;
      font-weight: bold;
    }
    display: flex;
    align-items: center;
    gap: 10px;
    > img {
      width: 70px;
    }
  }
  > div:last-child {
    justify-content: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #51c4e9;
    color: white;
    text-align: center;
    line-height: 60px;
    font-size: 55px;
    box-shadow: 0px 0px 4px 1px #51c4e9;
  }
`;
