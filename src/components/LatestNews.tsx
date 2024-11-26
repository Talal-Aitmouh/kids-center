import LatestNewsCard from "./LatestNewsCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import { ILatestNewsCardProps } from "@/lib/Interfaces";
import SectionHeader from "./SectionHeader";

function LatestNews() {
  const Cards: ILatestNewsCardProps[] = [
    {
      image: '/gallery-01.jpg',
      title: 'Standard Post With Preview Image',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus autem distinctio id, expedita porro!',
      date: '15 Sep 2024',
      like: 15,
      comment: 17,
    },
    {
      image: '/gallery-02.jpg',
      title: 'Standard Post With Preview Image',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus autem distinctio id, expedita porro!',
      date: '15 Sep 2024',
      like: 17,
      comment: 17,
    },
    {
      image: '/gallery-03.jpg',
      title: 'Standard Post With Preview Image',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus autem distinctio id, expedita porro!',
      date: '15 Sep 2024',
      like: 10,
      comment: 17,
    },
    {
      image: '/gallery-04.jpg',
      title: 'Standard Post With Preview Image',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus autem distinctio id, expedita porro!',
      date: '15 Sep 2024',
      like: 10,
      comment: 17,
    },
    {
      image: '/gallery-05.jpg',
      title: 'Standard Post With Preview Image',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus autem distinctio id, expedita porro!',
      date: '15 Sep 2024',
      like: 10,
      comment: 17,
    }
  ]
  return (
    <div className="w-full flex flex-col items-center  space-y-3 p-2">
      <SectionHeader title="latest news and updates" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil itaque, inventore molestiae libero quisquam enim."/>
      <div className="flex flex-col w-full items-center justify-center ">
        <Swiper
          modules={[Pagination, Autoplay, EffectCards]}
          // effect="cards" 
          autoplay={{ delay: 3000, disableOnInteraction: true }}
          loop={true}
          centeredSlides={true}
          slidesPerView={1}
          spaceBetween={10}
          breakpoints={{
            1024: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 2,
            },
          }}
          preventInteractionOnTransition={true}
          preventClicks={true}
          pagination={{ clickable: true, el: ".custom-pag" }}
          className="w-11/12 mx-auto"
        >
          {Cards.map((card, index) => {
            return (
              <SwiperSlide key={index}>
                <LatestNewsCard {...card} />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="custom-pag mt-6 w-full flex items-center justify-center gap-3"></div>

      </div>
    </div>
  )
}

export default LatestNews