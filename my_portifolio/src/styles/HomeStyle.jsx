import styled from 'styled-components';

const Main = styled.main`
  .container-projects {
    display: flex;
    justify-content: space-around;
    gap: 20px;

    .about-project {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    p {
      text-align: start;
    }

    a {
      text-decoration: none;
    }
  }
`;

export default Main;
