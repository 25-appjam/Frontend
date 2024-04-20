import styled from "styled-components";
import { theme } from "../../libs/style/theme";
import { CloseIcon } from "../../assets/close";
import { useEffect, useRef } from "react";

export const Modal = ({ isOpen, setIsOpen, children }) => {
  const dropDownRef = useRef(null);

  useEffect(() => {
    const outSideClick = (e) => {
      const { target } = e;
      if (
        isOpen &&
        dropDownRef.current &&
        !dropDownRef.current.contains(target)
      ) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", outSideClick);
  });

  return (
    <>
      {isOpen && (
        <Container ref={dropDownRef}>
          <CloseButton>
            <button onClick={() => setIsOpen(false)}>
              <CloseIcon />
            </button>
          </CloseButton>
          <ChildrenContainer>{children}</ChildrenContainer>
        </Container>
      )}
    </>
  );
};

const Container = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  background-color: ${theme.primary4};
  top: 50%;
  left: 50%;

  width: 80vw;
  max-height: 50vh;
  overflow-y: auto;
  padding: 15px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  > button {
    background-color: ${theme.primary2};
    border-radius: 50%;
    width: 24px;
    height: 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
  }
`;

const ChildrenContainer = styled.div``;
