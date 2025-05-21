import React from "react";
import styled from "styled-components";
import { Carousel, Image } from "antd";

import * as Colors from '../Utils/Constants';

const Gallery = ({ images, Width, Height, Radius }) => {
  return (
    <CarouselWrapper $width={Width} $height={Height} $radius={Radius}>
      <Carousel
        arrows
        autoplay
        autoplaySpeed={5000}
        className="custom-carousel"
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <Image
              className="custom-image"
              preview={false}
              src={image.src}
              width="auto"
              height="auto"
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </Carousel>
    </CarouselWrapper>
  );
};

export default Gallery;

const CarouselWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  height: ${({ $height }) => $height || 'auto'};

  .ant-carousel {
    display: flex;
    justify-content: center;
  }

  .custom-carousel,
  .custom-carousel .slick-list,
  .custom-carousel .slick-track,
  .carousel-slide {
    height: 100%;
    width: ${({ $width }) => $width || '100%'};
  }

  .carousel-slide {
    display: flex !important;
    justify-content: center;
    align-items: center;
    background-color: transparent;
  }

  .custom-image {
    border-radius: ${({ $radius }) => $radius || '0px'};
  }

  
`;
