import styled from 'styled-components';

export const ContactsList = styled.ul`
  width: 400px;
  padding-left: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ContactsItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ContactName = styled.p`
  font-weight: bold;
`;

export const Button = styled.button`
  cursor: pointer;
  font-size: 14px;
  font-weight: bold;
  min-width: 100px;
  height: 30px;
  border-radius: 10px;
  border: transparent;
  text-transform: capitalize;
  box-shadow: inset 0px 0px 10px 3px rgba(0, 0, 0, 0.69);
  &:hover {
    background-color: rgb(245, 66, 11);
    color: white;
  }
  &:active {
    background-color: rgb(245, 66, 11);
    box-shadow: -4px 4px #666;
    transform: translateX(-8px);
  }
`;