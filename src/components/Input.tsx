import styled from "styled-components/macro";
import { HTMLAttributes } from "react";

const Style = styled.div`
    display: flex;
  flex-direction: column;
`;

const StyledLabel = styled.label`
  margin-bottom: .2rem;
`;

const StyledInput = styled.input`
  font-size: 1.2rem;
  background-color: hsl(0,0%, 0%, .3);
  border: .2rem hsl(0, 0%, 100%, .9) solid;
  color: white;
  padding: .3rem 1rem;
`;

interface Props extends HTMLAttributes<HTMLDivElement>{
  value: string,
  setValue: (value: string) => void;
  label: string;
  id: string;
}

function Input(props: Props) {
  const {value, setValue, label, id, ...rest} = props;
  return (
    <Style {...rest}>
      <StyledLabel htmlFor={id}>{label}</StyledLabel>
      <StyledInput value={value} onChange={e => setValue(e.target.value)} id={id} />
    </Style>
  );
}

export default Input;