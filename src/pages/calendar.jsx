import React, { useState } from 'react';
import styled from 'styled-components';
import { theme } from '../libs/style/theme';

export const Calendar = () => {
	return (
		<Container>
			<TopDiv></TopDiv>

			<BottomDiv></BottomDiv>
		</Container>
	);
};

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
