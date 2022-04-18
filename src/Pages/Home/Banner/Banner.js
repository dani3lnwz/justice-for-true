import React, { useState } from 'react';
import {Carousel} from 'react-bootstrap'

import banner1 from '../../../images/banner/ban-1.jpg'
import banner2 from '../../../images/banner/bn-2.jpg'
import banner3 from '../../../images/banner/ban-3.jpg'

const Banner = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
      setIndex(selectedIndex);
    };
    return (
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Always Be Pattein</h3>
          <p>Catchy Lawyer Slogans Ideas & Taglines</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Alwasy Be Loyal</h3>
          <p>Good Lawyer has Great Knowledge About The Law, Not The Judge</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={banner3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Be  Good Person</h3>
          <p>
            The Confidence to Proceed
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    );
};

export default Banner;