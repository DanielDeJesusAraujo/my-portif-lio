import React, { useContext, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import projects from '../data';

function ControlledCarousel() {
  // meu style está no app.css
  const [index, setIndex] = useState(0);

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
              <h3 className="name">{item.name}</h3>
              <p className="describe">
                { item.describe }
                {'click'}
                {<a href={item.url} target="_blank" rel="noreferrer"> aqui </a>}
                {'para acessar'}
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        ))
      }
    </Carousel>
  );
}

export default ControlledCarousel;
