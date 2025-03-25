import React from 'react'
import Container from '../components/Container'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import Image from '../components/Image'
import Banner1 from '../assets/banner1.png'
import Banner2 from '../assets/banner2.png'


const Banner: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <section>
      <Container className="mt-5">
        <Slider {...settings}>
          <div className="w-full h-[490px] outline-none">
            <Image src={Banner1} alt="Banner Image" />
          </div>
          <div className="w-full h-[490px] outline-none">
            <Image src={Banner2} alt="Banner Image" />
          </div>
          <div className="w-full h-[490px] outline-none">
            <Image src={Banner1} alt="Banner Image" />
          </div>
          <div className="w-full h-[490px] outline-none">
            <Image src={Banner2} alt="Banner Image" />
          </div>
        </Slider>
      </Container>
    </section>
  );
}

export default Banner
