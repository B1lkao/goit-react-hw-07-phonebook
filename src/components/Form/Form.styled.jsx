import styled from 'styled-components';

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 400px;
  border-style: solid;
  border-radius: 12px;
  box-shadow: rgb(0 0 0 / 19%) 0px 8px 20px 0px, rgb(0 0 0 / 23%) 0px 6px 6px;
  padding: 20px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
  text-shadow: 2px 1px 3px #333333;
`;

export const Input = styled.input`
  width: 350px;
  height: 30px;
  margin-top: 4px;
  border-radius: 6px;
  border: transparent;
  border-bottom: groove;
  box-shadow: inset 0px 0px 5px 1px rgba(0, 0, 0, 0.29);
`;

export const Button = styled.button`
  margin-top: 10px;
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  width: 150px;
  height: 30px;
  border-radius: 10px;
  border: transparent;
  text-transform: capitalize;
  box-shadow: inset 0px 0px 10px 3px rgba(0, 0, 0, 0.69);
  &:hover {
    background-color: #3e8e41;
    color: white;
  }
  &:active {
    background-color: #3e8e41;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;