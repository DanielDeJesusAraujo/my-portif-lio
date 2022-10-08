import styled from 'styled-components';

const Main = styled.main`
  @keyframes show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  .container-projects {
    display: flex;
    justify-content: space-around;
    gap: 20px;
    margin: 0 55px;

    .about-project {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .content-discribe {
      animation: show 2s forwards ;
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
