import styled from "styled-components";
const HeaderContainer = styled.header`
  margin-top: 30px;

`
const Form = styled.form`
  display: block;
  box-sizing: border-box;
  width: 520px;
  margin-left: auto;
  margin-right: auto;
`
const Input = styled.input`
  border: none;
  margin-right: 30px;
  padding: 15px 0px 15px 30px;
  width: 60%;
  background-color: #98EECC;
  border-radius: 15px;
  font-size: 24px;
  color: #4F200D;
`
const Btn = styled.button`
  width: 25%;
  padding: 15px;
  box-sizing: border-box;
  background-color: #79E0EE;
  border: none;
  font-size: 24px;
  border-radius: 15px;
  color: #4F200D;
  cursor: pointer;
  &:hover{
    background-color: #98EECC;
  }
`
export {HeaderContainer, Form, Input, Btn};