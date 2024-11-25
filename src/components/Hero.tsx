import HeroCards from "./HeroCards"
import ImagesCarousel from "./ImagesCarousel"
import { GiTeacher } from "react-icons/gi"
import { BsRulers } from "react-icons/bs"
import { GrCubes } from "react-icons/gr"
import { PiGraduationCap } from "react-icons/pi"

function Hero() {
    const cards = [{
        title: "courses",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magni",
        color: "#F74C1E",
        Icon: PiGraduationCap
    },
    {
        title: "professional teachers",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magni",
        color: "#008DD2",
        Icon: GiTeacher
    },
    {
        title: "Fully Equipped",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magni",
        color: "#FC0019",
        Icon: BsRulers
    },
    {
        title: "Special Education",
        description: "lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, magni",
        color: "#80CD33",
        Icon: GrCubes
    }
    ]
    return (
        <div className="w-full flex flex-col">
            <ImagesCarousel />
            <div className="w-full flex flex-col relative bottom-12 items-center md:flex md:flex-row md:gap-4 md:justify-center md:flex-wrap lg:flex lg:flex-nowrap lg:px-6 lg:justify-center lg:gap-6 lg:flex-row ">
                {cards.map((card, index) => <HeroCards key={index} title={card.title} description={card.description} color={card.color} Icon={card.Icon} />)}
            </div>
        </div>
    )
}

export default Hero