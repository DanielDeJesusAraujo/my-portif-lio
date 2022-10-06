import styled from 'styled-components';

const MainHeader = styled.header`
  background-color: aliceblue;
  display: flex;
  justify-content: space-around;
  align-items: center;

  * {
    font-family: 'Montserrat', sans-serif;
  }

  nav {
    display: flex;
    flex-basis: 300px;
    justify-content: space-around;
    * {
      text-decoration: none;
      color: #181619;
    }
  }
`;

export default MainHeader;
