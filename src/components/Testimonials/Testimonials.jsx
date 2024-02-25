import React from "react";
import "./testimonials.css"
import { Data } from "./Data";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { AnimatedText } from "../AnimatedText";
import { useTranslation } from "react-i18next";


const Testimonials = () => {
  const { t } = useTranslation();
  return (
    <section className="testimonials container section" id="testimonials">
      <AnimatedText margin="auto">
        <h2 className='section__title text-zinc-900 dark:text-white'>{t('testimonials.title')}</h2>
      </AnimatedText>
      <AnimatedText margin="auto" isInverse>
        <span className='section__subtitle text-slate-500 dark:text-stone-400'>{t('testimonials.description')}</span>
      </AnimatedText>

      <Swiper className="testimonials__container mt-8"
        loop
        grabCursor
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 48,
          }
        }}
        modules={[Pagination]}
      >
        {Data.map(({ id, image, title, description }) => {
          return (
            <SwiperSlide className="testimonial__card dark:bg-zinc-900 bg-white" key={id} style={{ zIndex: 1 }}>
              <img src={image} alt="" className="testimonial__img" />
              <h3 className="testimonial__name dark:text-white">{title}</h3>
              <p className="testimonial__description dark:text-stone-400">{description}</p>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </section>
  )
}

export default Testimonials;