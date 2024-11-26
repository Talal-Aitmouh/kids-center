import CountUp from "react-countup";
import SectionHeader from "./SectionHeader";
function FactSection() {
    return (
        <section className="w-full  text-white lg:justify-center flex flex-col items-center p-5 relative">
            <div className="w-full h-full absolute top-0 left-0 -z-10 overflow-hidden">
                <img src="/facts.jpg" className="w-full h-full object-cover filter brightness-50 blur-[3px]" alt="" />
            </div>
           <SectionHeader title="FACTS AND FIGURE ABOUT KIDS CENTER" description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa itaque rem quae modi molestiae quaerat exercitationem tempora soluta repellat iste." />
            <div className="w-full gap-2 text-white md:h-[20vh] mt-3 flex flex-col md:flex-row">
                <div className="w-full flex items-center justify-center gap-5 lg:pl-2">
                    <div className="w-full space-y-1 flex flex-col">
                        <div className="w-full flex flex-col items-center md:flex-row">
                            <h1 className="text-5xl text-white font-semibold md:text-[45px] lg:text-7xl"><CountUp enableScrollSpy scrollSpyOnce start={0} separator="" end={5000} /></h1>
                            <p className="text-3xl md:text-xl">Subjects</p>
                        </div>
                        <span className="w-[60%] md:w-[20%] bg-[#F64B1F] h-[3px]"></span>
                    </div>
                    <div className="w-full space-y-1 flex flex-col">
                        <div className="w-full flex flex-col items-center md:flex-row">
                            <h1 className="text-5xl font-semibold md:text-[45px] lg:text-7xl"><CountUp enableScrollSpy scrollSpyOnce separator="" end={3500} /></h1>
                            <p className="text-2xl md:text-xl">Modern Labs</p>
                        </div>
                        <span className="w-[60%] md:w-[20%] bg-[#F64B1F] h-[3px]"></span>
                    </div>
                </div>
                <div className="w-full flex items-center justify-between gap-5">
                    <div className="w-[50%] space-y-1 flex flex-col">
                        <div className="w-full flex flex-col items-center md:flex-row">
                            <h1 className="text-5xl font-semibold md:text-[45px] lg:text-7xl"><CountUp enableScrollSpy scrollSpyOnce separator="" end={3000} /></h1>
                            <p className="text-2xl md:text-xl">Instructions</p>
                        </div>
                        <span className="w-[60%] md:w-[20%] bg-[#F64B1F] h-[3px]"></span>
                    </div>
                    <div className="w-[50%] space-y-1 flex flex-col">
                        <div className="w-full flex flex-col items-center md:flex-row">
                            <h1 className="text-5xl font-semibold md:text-[45px] lg:text-7xl"><CountUp enableScrollSpy scrollSpyOnce separator="" end={5500} /></h1>
                            <p className="text-3xl md:text-xl">Students</p>
                        </div>
                        <span className="w-[60%] md:w-[20%] bg-[#F64B1F] h-[3px]"></span>
                    </div>
                </div>
            </div>
            <div className="w-full mt-6 flex flex-col items-center gap-4 md:flex-row md:justify-center">
                <button className="w-[70%] text-white h-14 border hover:bg-white hover:text-black transition-all duration-200 ease-linear border-white text-2xl uppercase md:w-[15%] md:h-12 md:text-sm">See More</button>
                <button className="w-[70%] text-white h-14 border hover:bg-white hover:text-black transition-all duration-200 ease-linear border-white text-2xl uppercase md:w-[15%] md:h-12 md:text-sm">Buy Now</button>
            </div>
        </section>
    )
}

export default FactSection