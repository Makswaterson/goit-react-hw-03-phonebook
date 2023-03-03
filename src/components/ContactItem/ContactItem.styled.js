import styled from 'styled-components';

export const StyledItem = styled.li`
  margin: 5px;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;

export const StyledBtn = styled.button`
  width: 70px;
  height: 20px;
  font-size: 14px;
  text-align: center;
  color: #fff;

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
