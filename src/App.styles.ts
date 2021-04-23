import styled, { createGlobalStyle } from 'styled-components';
import BGImage from './imgs/background.jpg';

// You can call this whatever you want
export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-image: url(${BGImage});
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    box-sizing: border-box;
    font-family: 'Archivo', 'sans-serif';
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #e0e2ec;
    font-weight: 200;
    max-width: 1000px;
    text-align: center;
  }

  .score {
    color: #545454;
    font-size: 2rem;
    margin: 0;
    font-family: 'Abel';
  }

  h1 {
    font-family: 'Abel';
    color: #e0e2ec;
    font-size: 50px;
    font-weight: 400;
    text-align: center;
  }

  h1 > span {
    font-family: 'Abel';
    color: #ff5c3e;
    font-size: 50px;
    font-weight: 400;
  }

  .start, .next {
    cursor: pointer;
    background: #ff5c3e;
    border: 0;
    border-radius: 20px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    color: #fff
  }

  .start {
    max-width: 200px; 
  }
`