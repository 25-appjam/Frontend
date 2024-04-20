import styled from "styled-components";
import { theme } from "../../libs/style/theme";

export const Input = ({
  value = "",
  label,
  onChange,
  type = "text",
  error,
  max,
}) => {
  return (
    <Container>
      <div>
        <Label htmlFor={label}>{label}</Label>
        {max && (
          <p>
            {value.length}/{max}
          </p>
        )}
      </div>
      <TextField
        value={value}
        id={label}
        type={type}
        onChange={onChange}
        maxLength={max}
      />
      <Error>{error}</Error>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  > div {
    display: flex;
    justify-content: space-between;
    color: ${theme.gray[3]};
  }
`;

const Label = styled.label`
  color: ${theme.gray[3]};
`;
const TextField = styled.input`
  border-radius: 8px;
  padding: 12px 16px;
  outline: none;
  border: none;
  background-color: ${theme.gray[8]};
`;

const Error = styled.span`
  color: ${theme.warning};
`;
