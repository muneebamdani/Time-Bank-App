import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { ArrowUpRight } from 'react-feather'; // optional Feather icon

import service01 from '../../../images/service-01.svg';
import service02 from '../../../images/service-02.svg';
import service03 from '../../../images/service-03.svg';
import service04 from '../../../images/service-04.svg';

const serviceData = [
  {
    img: service01,
    title: 'Programming & Tech',
    count: '5678 Services',
    link: 'service-grid-sidebar.html',
  },
  {
    img: service02,
    title: 'Business',
    count: '1590 Services',
    link: 'service-grid-sidebar.html',
  },
  {
    img: service03,
    title: 'Social Media',
    count: '7860 Services',
    link: 'service-grid-sidebar.html',
  },
  {
    img: service04,
    title: 'Artificial Intelligence',
    count: '4590 Services',
    link: 'service-grid-sidebar.html',
  },
  {
    img: service02,
    title: 'Business',
    count: '590 Services',
    link: 'service-grid-sidebar.html',
  },
];

const ServiceSlider = () => {
  return (
    <div className="service-sliders">
      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={3}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          576: { slidesPerView: 2 },
          992: { slidesPerView: 3 },
        }}
      >
        {serviceData.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="service-box">
              <div className="service-info">
                <span className="service-icon">
                  <img src={service.img} alt="icon" />
                </span>
                <div className="servive-name">
                  <h5>
                    <a href={service.link}>{service.title}</a>
                  </h5>
                  <p>{service.count}</p>
                </div>
              </div>
              <a href={service.link}>
                <ArrowUpRight />
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ServiceSlider;