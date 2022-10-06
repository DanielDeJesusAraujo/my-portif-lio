import React from 'react'
import Main from '../styles/LoginStyle';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <Main>
      <section className="explore">
        <div>
          <p className="my-name">
          Bem vindo(a) ao meu portifólio.
          </p>
          <p className="info-login">
            Veja meus projetos clicando no botão a baixo
          </p>
          <Link to="/home">Explore</Link>
        </div>
      </section>
    </Main>
  )
}

export default Login;