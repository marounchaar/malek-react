import React, { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

import "./Carousel.css";
import {
  MdNavigateNext,
  MdNavigateBefore,
  MdPause,
  MdPlayArrow,
} from "react-icons/md";

import Carousel1 from "../../assets/law.png";
import CarouselVideo from "../../assets/carousel2.mp4";

const carouselData = [
  {
    img: Carousel1,
    title: 'Intellectual Property & AI-Innovation:Secure Your Edge',
    subtitle:
      "In a world increasingly shaped by artificial intelligence, protecting innovation demands more than traditional legal strategies.",
    description:
      "At SSBLaw, we understand how AI disrupts the rule, from automated content generation to algorithmic inventions, from data-driven decision tools to unseen model biases. We help you navigate this evolving landscape and ensure your IP remains enforceable, defensible, and future-ready.",
  },
  {
    img: "",
    video: CarouselVideo,
    title: "AI-Invention & Patents",
    subtitle: "Helping clients patent inventions that incorporate machine learning, AI architectures, or autonomous logic.",
    description: "Ensuring compliance with patent eligibility and novelty standards. Advising on authorship, ownership, and copyright of work produced in whole or part by AI; drafting robust licensing agreements to avoid ambiguity.",
  },
  // {
  //   img: Carousel3,
  //   title: "Carousel1",
  //   subtitle: "Carousel1",
  //   description: "Description Carousel3",
  // },
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAutoplayRunning, setIsAutoplayRunning] = useState(true);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  // Progress bar
  useEffect(() => {
    if (!isAutoplayRunning) return; // Stop progress when autoplay is paused

    const interval = setInterval(() => {
      setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
    }, 100); // 10s total

    return () => clearInterval(interval);
  }, [activeIndex, isAutoplayRunning]);

  return (
    <div className="carousel-container" style={{ position: "relative" }}>
      <Swiper
        ref={swiperRef}
        modules={[Navigation, Autoplay]}
        loop
        autoplay={{ delay: 10000, disableOnInteraction: false }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.realIndex);
          setProgress(0);
        }}
      >
        {carouselData.map((src, i) => (
  <SwiperSlide key={i}>
    {src.video ? (
      <video
        src={src.video}
        className="carousel-img"
        autoPlay
        muted
        loop
        playsInline
      />
    ) : (
      <img src={src.img} alt={`Slide ${i}`} className="carousel-img" loading="lazy"/>
    )}
    <div className="slide-content">
      <h1 className="title mb-3" dangerouslySetInnerHTML={{ __html: src.title }}></h1>
      <h4 className="subtitle mb-3">{src.subtitle}</h4>
      <p className="description">{src.description}</p>
    </div>
  </SwiperSlide>
))}

      </Swiper>

      <div ref={prevRef} className="carousel-prev">
        <MdNavigateBefore size={35} />
      </div>
      <div ref={nextRef} className="carousel-next">
        <MdNavigateNext size={35} />
      </div>

      <div
        className="autoplay-toggle"
        onClick={() => {
          const swiper = swiperRef.current.swiper;
          if (swiper.autoplay.running) {
            swiper.autoplay.stop();
            setIsAutoplayRunning(false);
          } else {
            swiper.autoplay.start();
            setIsAutoplayRunning(true);
          }
        }}
      >
        {isAutoplayRunning ? <MdPause size={30} /> : <MdPlayArrow size={30} />}
      </div>


      <div className="progress-bar">
        <div
          style={{
            width: `${progress}%`,
            height: "100%",
            backgroundColor: "#051c2c",
            transition: "width 0.1s linear",
          }}
        ></div>
      </div>
    </div>
  );
};

export default Carousel;
