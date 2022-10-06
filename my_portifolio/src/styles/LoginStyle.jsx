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
    min-height: 100vh;
    min-width: 100vh;
  }

  .my-name {
    font-size: 40px;
    font-family: 'Montserrat', sans-serif;
  }

  .info-login {
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
  }

  a {
    font-family: 'Montserrat', sans-serif;
    text-decoration: none;
    color: black;
    opacity: 0.8;
    padding: 17px 80px;
    margin-top: 500px;
    background-color: white;
    :hover {
      opacity: 1;
    }
  }
`;

export default Main;
