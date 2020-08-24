import React from 'react';
import styled from 'styled-components';
import { slides } from './slidesData.js';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slideshow = () => {

    const renderSlides = () => {
        return slides.map((slide,idx) => {

            return (
            <div key={idx}>
                <img src={ slide.image } alt={ slide.title }/>
                <p className="legend">{slide.title}</p>
            </div>
            );
        });
    }

    return (
        <SlideshowStyled className='Slideshow'>
            <Carousel
            showThumbs={false}
            showIndicators={false}
            autoPlay={true}
            infiniteLoop={true}
            showArrows={true}>
            { renderSlides() }
            </Carousel>
        </SlideshowStyled>
    );
}

export default Slideshow;

const SlideshowStyled = styled.div`
    background-color: maroon;
    color: white;
`;