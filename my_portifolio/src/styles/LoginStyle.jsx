import styled from 'styled-components';

const Main = styled.main`
  height: 100vh;

  .explore {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-image: url(https://blog.carefy.com.br/wp-content/uploads/2021/11/robot-handshake-human-background-futuristic-digital-age-min-950x500.jpg);
    background-size: cover;
    min-height: 90vh;
    min-width: 70vh;
  }

  button {
    opacity: 0.8;
    height: 60px;
    width: 220px;
    border: none;
    :hover {
      opacity: 1;
    }
  }
`;

export default Main;
