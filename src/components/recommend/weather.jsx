import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { weatherData } from "../../libs/utils/api/weather";
import styled from "styled-components";

export const Weather = () => {
  const { data } = useQuery(["weather"], weatherData);

  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <Container>
      <WeatherContainer>
        <p>{data?.weather[0].main}</p>
        <p>{Math.round((data?.main.temp - 273.15) * 100) / 100}° </p>
        <div>
          <p>
            {Math.round((data?.main.temp_min - 273.15) * 100) / 100}° /{" "}
            {Math.round((data?.main.temp_max - 273.15) * 100) / 100}°{" "}
          </p>
        </div>
      </WeatherContainer>
      <Circle></Circle>
    </Container>
  );
};

const Circle = styled.div`
  width: 150px;
  height: 150px;
  background-color: #ec7263;
  border-radius: 50%;
  overflow: hidden;
`;
const WeatherContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  gap: 5px;

  > p {
    &:first-child {
      font-size: 20px;
    }
    font-size: 46px;
  }
  > div {
    display: flex;
    > p {
      font-size: 16px;
    }
  }
`;

const Container = styled.div`
  width: 330px;
  border-radius: 10px;
  background: linear-gradient(180deg, #ec7263 0%, #864138 100%);
  padding: 20px 27px;
  display: flex;
  justify-content: space-between;
`;
