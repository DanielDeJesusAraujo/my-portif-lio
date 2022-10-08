import React, { useContext, useEffect, useState } from 'react'
import Footer from '../components/Footer';
import Header from '../components/Header';
import ControlledCarousel from '../components/Projects';
import AppContext from '../context';
import Main from '../styles/HomeStyle';

function Home() {
  const { infoProject: { title, describe } } = useContext(AppContext)
  const [classText, setClassText] = useState(false)

  useEffect(() => {
    setClassText(false);
    setClassText(true);
  }, [title]);

  return (
    <Main>
      <Header />
      <section className="container-projects">
        <section className="about-project">
          <h2 className={ classText ? 'content-discribe' : ''}>{title}</h2>
          <p className={ classText ? 'content-discribe' : ''}>
            {describe}
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