import React from "react";
import Slider from "react-slick";

export default function Carousel({ imagesArray }) {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 6000,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
    <div className=" mx-auto">
      <Slider {...settings} >
        {imagesArray.map((image_url) => {
          return (
            <img className="rounded-md p-2" alt="a" src={image_url.url} objectCover="object-cover" />
          )
        })}
      </Slider>
    </div>
  );
}