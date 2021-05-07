import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1000px;
  min-width: 500px;
  border-radius: 25px;
  padding: 20px;
  text-align: center;

  p {
    font-size: 1rem;
    color: #e0e2ec;
  }

  .number {
    color: #ff5c3e;
  }
`

type ButtonWrapperProps = {
  isCorrect: boolean;
  userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button { 
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ isCorrect, userClicked }) =>
      isCorrect
        ? '#5cd89f'
        : !isCorrect && userClicked
        ? '#ff5851'
        : '#e0e2ec'};
    border: 0;
    border-radius: 20px;
    color: #1c1b20;
  }
`;