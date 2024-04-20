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
  background-color: white;
  top: 50%;
  left: 50%;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);

  width: 80vw;
  max-height: 50vh;
  overflow-y: auto;
  padding: 15px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border: 0px solid ${theme.primary2};
  border-right-width: 7px;
  border-bottom-width: 7px;
`;
const CloseButton = styled.div`
  display: flex;
  justify-content: flex-end;
  > button {
    background-color: ${theme.primary2};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: none;
  }
`;

const ChildrenContainer = styled.div``;
