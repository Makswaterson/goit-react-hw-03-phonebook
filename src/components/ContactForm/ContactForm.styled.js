import { Form, Field } from 'formik';
import styled from 'styled-components';

export const FormStyled = styled(Form)`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  width: 300px;
  border: 1px solid gray;
`;
export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const Button = styled.button`
  width: 100px;
  height: 40px;
  font-size: 16px;
  text-align: center;
  color: #fff;
  margin-top: 10px;
  background-color: #2196f3;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 15%);
  border-radius: 5px;
  border: none;
  :hover,
  :focus {
    background-color: blue;
    color: white;
  }
`;
export const FieldStyled = styled(Field)`
  outline: none;
  padding: 5px;
`;
