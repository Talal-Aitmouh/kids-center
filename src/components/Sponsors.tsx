import SectionHeader from "./SectionHeader"


const sponsors: string[] = [
    "./brand-01.png",
    "./brand-02.png",
    "./brand-03.jpg",
    "./brand-04.jpg",
]

const Sponsors = () => {
    return (
        <div>
            <SectionHeader title="Our Sponsors" description="We are proud to work with the following companies and organizations." />

            <div className="grid grid-cols-2 md:grid-cols-3  lg:grid-cols-4 items-center justify-center content-center">
                    {sponsors.map((sponsor,index)=>{
                       return <img src={sponsor} key={index} className={`mx-auto max-w-28`} />
                    }) }
            </div>

        </div>
    )
}

export default Sponsors