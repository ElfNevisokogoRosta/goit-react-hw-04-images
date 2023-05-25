import styled from "styled-components";
const ImgContainer = styled.li`
  width: 386px;
  position: relative; 
  padding-top: 67%;
  box-sizing: border-box;
`
const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
  display: block;
  box-sizing: border-box;
`
const Btn = styled.button`
  cursor: pointer;
  width: 328px;
  display: block;
  margin-left: auto;
  margin-right: auto;
`
export {ImgContainer, Img};