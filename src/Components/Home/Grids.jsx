// src/components/ThreeUpSlider.jsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import "swiper/css";
import "swiper/css/navigation";
import "./Grids.css";
import cardsData from "./Cardsdata";

const ThreeUpSlider = () => {
  return (
    <section className="threeup container my-5">
      <div className="threeup__head">
        <h2 className="threeup__title">Highlights</h2>
        <div className="threeup__arrows">
          <button
            className="threeup__btn threeup__btn--prev"
            aria-label="Previous"
          >
            <HiChevronLeft />
          </button>
          <button
            className="threeup__btn threeup__btn--next"
            aria-label="Next"
          >
            <HiChevronRight />
          </button>
        </div>
      </div>

      <Swiper
        modules={[Navigation]}
        navigation={{
          prevEl: ".threeup__btn--prev",
          nextEl: ".threeup__btn--next",
        }}
        spaceBetween={20}
        slidesPerView={3}
        slidesPerGroup={1}    
        loop={true}           
        speed={520}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1, spaceBetween: 16 },
          640: { slidesPerView: 2, slidesPerGroup: 1, spaceBetween: 18 },
          1024: { slidesPerView: 3, slidesPerGroup: 1, spaceBetween: 20 },
        }}
      >
        {cardsData.map((item, i) => (
          <SwiperSlide key={i}>
            <article className="threeup__card">
              <div
                className="threeup__image"
                style={{ backgroundImage: `url(${item.image})` }}
              />
              <div className="threeup__body">
                <h3 className="threeup__card-title">{item.title}</h3>
                <p className="threeup__card-text">{item.paragraph}</p>
                <a href={item.link} className="threeup__learn">
                  Learn More →
                </a>
              </div>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ThreeUpSlider;
