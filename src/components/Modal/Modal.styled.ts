import styled from "styled-components";
const ModalWraper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(42, 42, 42, 0.6) ;
`
const ModalContainer =styled.div`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
  transform: translateY(200px);
  position: relative;
  padding-top: 47%;
  box-sizing: border-box;
`
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  box-sizing: border-box;
`
const Btn= styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 100;
  background-color: tomato;
  width: 48px;
  height: 48px;
  border: none;
  font-size: 40px;
  padding: 0px;
  box-sizing: border-box;
  cursor: pointer;
  border-radius: 20%;
  background-color: rgb(253, 206, 223, 0.5);
  transition: background-color, 250ms, cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover{
    background-color: rgb(253, 206, 223);
  }
`
export {ModalWraper, ModalContainer, Img, Btn}