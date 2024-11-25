import { ItestimonialProps } from "@/lib/Interfaces"
import Testimonial from "./Testimonial"
import SectionHeader from "./SectionHeader"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Pagination, Autoplay, EffectCards } from 'swiper/modules';


const reviews: ItestimonialProps[] = [
    {
        review: "This service exceeded my expectations. The team was professional, and the results were outstanding. Highly recommend!",
        reviewr: {
            name: "Sarah Williams",
            image: "./testimmonial-01.jpg",
            occupation: "Marketing Specialist"
        }
    },
    {
        review: "I had a wonderful experience. The staff was friendly, and the process was smooth and efficient.",
        reviewr: {
            name: "Michael Carter",
            image: "./best-teacher-01.jpg",
            occupation: "Software Engineer"
        }
    },
    {
        review: "Exceptional service! The attention to detail and quality were impressive. I’ll definitely use this again.",
        reviewr: {
            name: "Emily Johnson",
            image: "./best-teacher-02.jpg",
            occupation: "Interior Designer"
        }
    },
    {
        review: "Very satisfied with the results. The team was attentive to my needs and delivered on time.",
        reviewr: {
            name: "James Anderson",
            image: "./best-teacher-03.jpg",
            occupation: "Freelance Photographer"
        }
    },
    {
        review: "They truly went above and beyond to ensure I was happy. Amazing customer service and great results.",
        reviewr: {
            name: "Rachel Thompson",
            image: "./best-teacher-04.jpg",
            occupation: "Entrepreneur"
        }
    },
    {
        review: "A seamless experience from start to finish. The team was knowledgeable and incredibly helpful.",
        reviewr: {
            name: "David Clark",
            image: "./testimmonial-01.jpg",
            occupation: "Business Consultant"
        }
    }
];


const Testimonials = () => {
    return (
        <div className="bg-cover bg-center object-cover relative py-10 " style={{ backgroundImage: "url(./banner-01.jpg)" }}>
            <div className=" z-40 relative">
                <div className="text-white">
                    <SectionHeader title="WHAT CLIENTS SAY ABOUT US" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius vehicula odio,  Lorem ipsum dolor sit amet, consectetur " />
                </div>
                <div className="flex gap-4 justify-center flex-col items-center">
                    <Swiper
                        modules={[Pagination, Autoplay, EffectCards]}
                        effect="cards"
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
                        pagination={{ clickable: true, el: ".custom-pagination" }}
                        className="w-11/12 mx-auto"
                    >
                        {reviews.map((review, index) => {
                            return (
                                <SwiperSlide key={index}>
                                    <Testimonial {...review} />
                                </SwiperSlide>
                            );
                        })}
                    </Swiper>
                    <div className="custom-pagination mt-6 w-full flex items-center justify-center gap-3"></div>
                </div>
            </div>
            <div className="absolute w-full h-full bg-black opacity-70 overlay top-0 left-0 z-30"></div>
        </div>
    )
}

export default Testimonials