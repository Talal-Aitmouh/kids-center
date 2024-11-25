import { useTheme } from "@/context/theme-provider"
import { IheroCardsProps } from "@/lib/Interfaces"
import { GoArrowRight } from "react-icons/go"

function HeroCards({ title, description, color, Icon }: IheroCardsProps) {
    const { theme } = useTheme()
    return (
        <div className="md:basis-[45%] w-[90%] relative h-[250px] lg:h-[350px] mt-4 flex flex-col p-5 space-y-3 md:w-[60%] lg:w-[300px]" style={{ backgroundColor: color }}>
            {Icon && <Icon size={90} className="text-white text-4xl" />} 
            <div className="w-full h-[60%] flex flex-col py-5">
                <h1 className="text-2xl font-bold text-white">{title}</h1>
                <p className="text-white">{description}</p>
            </div>
            <button className={`w-[50px] flex items-center justify-center h-[50px] right-8 absolute -bottom-0 transition-all duration-300 ease-linear hover:border-t-4 hover:-bottom-1 hover:border-l-4 ${theme === 'dark' ? 'hover:border-black' : 'hover:border-white'}`} style={{ backgroundColor: color }}>
                <GoArrowRight size={20} className="text-white" />
            </button>
        </div>
    )
}

export default HeroCards