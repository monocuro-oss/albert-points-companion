import React, { ChangeEventHandler, FC } from 'react';
import styled from 'styled-components';
import FilterIcon from './FilterIcon';

const Container = styled.div`
  align-items: center;
  display: flex;
  margin-bottom: 2rem;
  position: relative;
`;
const Input = styled.input`
  background-color: ${(props) => props.theme.colors.textbox};
  border: none;
  border-radius: 0.6rem;
  box-sizing: border-box;
  color: ${(props) => props.theme.colors.text};
  font-size: 1rem;
  padding: 1rem 1rem 1rem 3.5rem;
  width: 100%;
`;
const IconContainer = styled.div`
  left: 1rem;
  position: absolute;
`;

interface FilterboxProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  value: string;
}
const Filterbox: FC<FilterboxProps> = ({ value, onChange, placeholder }) => {
  return (
    <Container>
      <IconContainer>
        <FilterIcon />
      </IconContainer>
      <Input value={value} onChange={onChange} placeholder={placeholder} />
    </Container>
  );
};

export default Filterbox;
