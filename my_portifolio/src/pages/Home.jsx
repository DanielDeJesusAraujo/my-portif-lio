import React from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import ControlledCarousel from '../components/Projects';
import Main from '../styles/HomeStyle';

function Home() {
  return (
    <Main>
      <Header />
      <section className="container-projects">
        <section className="about-project">
          <h2>SOBRE OS PROJETOS</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique,
            nulla cumque? Reiciendis, tempore quod odit dolorem dignissimos cumque
            perspiciatis ea quas natus. Ea ipsa inventore reprehenderit velit autem
            repellendus illum.
          </p>
        </section>
        <section className="slide">
          <ControlledCarousel />
        </section>
      </section>
      <Footer />
    </Main>
  )
}

export default Home;