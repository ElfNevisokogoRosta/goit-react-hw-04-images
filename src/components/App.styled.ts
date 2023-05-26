import styled from "styled-components";
const Container = styled.div`
  width: 1280px;
  margin-left: auto;
  margin-right: auto;
  box-sizing: border-box;
  padding: 0px 15px;
`
const SearchFor = styled.p`
  width: 400px;
  padding: 0;
  margin-left: auto;
  margin-right: auto;
  font-size: 28px;
  font-weight: 700;
  text-align: center;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #2a2a2a;
`
const MainTitle = styled.h1`
  display: block;
  margin: 0;
  padding: 0;
  width: 460px;
  margin: 30px auto 30px auto;
  text-transform: uppercase;
  color: #2B3A55;
  font-size: 48px;
`
export {Container, SearchFor, MainTitle}