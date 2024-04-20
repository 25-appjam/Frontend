import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from '../libs/style/components';
import { Modal } from '../components/common/modal';
import { theme } from '../libs/style/theme';
import { JoinFamily } from '../assets/JoinFamily';
import { CreateFamily } from '../assets/CreateFamily';

export const Main = () => {
	const [isOpen, setIsOpen] = useState(false);
	return (
		<Container>
			<Logo>로고</Logo>

			<Title>
				<p>사랑하는 사람과</p>
				다소니
			</Title>

			<Modal isOpen={isOpen} setIsOpen={setIsOpen}>
				<Modal_Container>
					<Modal_CreateFamily>
						<JoinFamily />
					</Modal_CreateFamily>

					<Modal_JoinFamily>
						<CreateFamily />
					</Modal_JoinFamily>
				</Modal_Container>
			</Modal>

			<Button
				width='280px'
				onClick={() => {
					setIsOpen(!isOpen);
				}}
			>
				시작하기
			</Button>
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
	color: ${theme.primary};

	p {
		font-family: "KCC";
		font-size: 32px;
		color: ${theme.primary2};
	}
`;

const Modal_Container = styled.div`height: 200px;`;

const Modal_CreateFamily = styled.div`
	display: flex;
	flex-direction: row;
`;

const Modal_JoinFamily = styled.div`
	display: flex;
	flex-direction: row;
`;
