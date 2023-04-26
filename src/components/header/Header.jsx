import React from "react";
import styled from "styled-components";
import Button from "../UI/button/Button";

export const Header = ({ showExpense,  showUsers , login, logOutHandler }) => {
  return (
    <HeadersForms>
      {login && (
        <ButtonsHeader>
          <Button onClick={showExpense}>Expenses</Button>
          <Button onClick={showUsers}>Users</Button>
          <Button onClick={logOutHandler}>Logout</Button>
        </ButtonsHeader>
      )}
    </HeadersForms>
  );
};
const HeadersForms = styled.header`
  width: 100%;
  height: 80px;
  background-color: #8672c7;
  border-radius: 7px;
`;
const ButtonsHeader = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 65px;
  margin-right: 20px;
  padding-top: 15px;
`;
