import styled from "styled-components";
import { theme } from "../../libs/style/theme";

export const Input = ({
  value = "",
  onChange,
  type = "text",
  error,
  max,
  width = "100%",
  placeholder = "입력해주세요",
}) => {
  return (
    <Container width={width}>
      <div>
        <TextField
          value={value}
          type={type}
          onChange={onChange}
          maxLength={max}
          placeholder={placeholder}
        />
        {max && (
          <p>
            {value.length}/{max}
          </p>
        )}
      </div>
      <Error>{error}</Error>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: ${({ width }) => width};
  color: ${theme.primary};
  > div {
    display: flex;
    align-items: center;
    border-bottom: 2px solid ${theme.primary};
  }
`;

const TextField = styled.input`
  border-radius: 8px;
  padding: 12px 0px;
  outline: none;
  border: none;
  width: 100%;
  color: ${theme.primary};

  &::-webkit-input-placeholder {
    color: ${theme.primary2};
  }
`;

const Error = styled.span`
  color: ${theme.warning};
`;
