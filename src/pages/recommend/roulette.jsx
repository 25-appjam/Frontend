import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Button } from "../../libs/style/components";
import styled from "styled-components";
import A from "../../assets/p.png";
const data = [{ option: "김민교" }, { option: "이승현" }];

const Roulette = () => {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <Container>
      <img src={A} />
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        onStopSpinning={() => {
          setMustSpin(false);
        }}
      />
      <Button onClick={handleSpinClick} width="330px">
        돌리기
      </Button>
    </Container>
  );
};

export default Roulette;

const Container = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  justify-content: center;
  align-items: center;
  gap: 30px;
  > img {
    width: 80vw;
  }
`;
