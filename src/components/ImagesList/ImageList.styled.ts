import styled from "styled-components";
const List = styled.ul`
  box-sizing: border-box;
  width: 100%;
  margin: 0;
  padding: 0;
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 30px;
`
const Btn = styled.button`
  cursor: pointer;
  width: 328px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 30px;
  margin-bottom: 30px;
  padding: 15px 50px;
  font-size: 24px;
  border: none;
  background-color: #3C486B;
  font-weight: 400;
  color: #fff;
  border-radius: 15px;
  transition: all 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover{
    background-color: #F9D949;
    color: #2a2a2a;
  }
`
export {List, Btn}