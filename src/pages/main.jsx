import React from 'react';
import styled from 'styled-components';
import { Button } from '../libs/style/components';

export const Main = () => {
	return (
		<Container>
			<Logo>로고</Logo>

			<Title>
				<p>사랑하는 사람과</p>
				다소니
			</Title>

			<Button width="280px">시작하기</Button>
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
	gap: 30px;
`;

const Logo = styled.div`
	width: 180px;
	height: 180px;
	background-color: #d9d9d9;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 20px;
`;

const Title = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-family: "KCC";
	font-size: 46px;
	color: #e74646;

	p {
		font-family: "KCC";
		font-size: 32px;
		color: #fa9884;
	}
`;
