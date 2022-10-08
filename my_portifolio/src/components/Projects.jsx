import React, { useContext, useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from '../data';
import AppContext from '../context';

function ControlledCarousel() {
  // meu style está no app.css
  const [index, setIndex] = useState(0);
  const { setInfoProject } = useContext(AppContext);
  useEffect(() => {
    setInfoProject({
      title: projects[index].name,
      describe: projects[index].describe,
    })
  }, [index])
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const handleClick = () => {
    console.log('clicou')
    return (
      <a href="https://www.w3schools.com">Visit W3Schools.com!</a>
    )
  }

  return (
    <Carousel interval={5000} className='carousel' activeIndex={index} onSelect={handleSelect}>
      {
        projects.map((item) => (
          <Carousel.Item>
            <img
              onClick={ handleClick }
              className="d-block w-100"
              src={ item.image }
              alt="Third slide"
            />

            <Carousel.Caption>
              <p className="describe">
                <a className="visitar" href={item.url} target="_blank" rel="noreferrer">VISITAR</a>
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default ControlledCarousel;
