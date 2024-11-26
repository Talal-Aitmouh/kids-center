import { IteachersCard } from "@/lib/Interfaces";
import SectionHeader from "./SectionHeader"
import TeachersCard from "./TeachersCard"

function Teachers() {
    const cards: IteachersCard[] = [
        {
            job: "Sr. Teacher",
            name: "Junifer Steel",
            tel: "+124-454 6789",
            image: "best-teacher-01.jpg",
            mail: 'jun@example.com'
        },
        {
            job: "Sr. Teacher",
            name: "Junifer Steel",
            tel: "+124-454 6789",
            image: "best-teacher-02.jpg",
            mail: 'jun@example.com'
        },
        {
            job: "Sr. Teacher",
            name: "Junifer Steel",
            tel: "+124-454 6789",
            image: "best-teacher-03.jpg",
            mail: 'jun@example.com'
        },
        {
            job: "Sr. Teacher",
            name: "Junifer Steel",
            tel: "+124-454 6789",
            image: "best-teacher-04.jpg",
            mail: 'jun@example.com'
        },
    ];

    return (
        <div className="w-full flex flex-col">
            <SectionHeader title="Meet Our best Teachers" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum doloribus expedita fugit. Quasi, quaerat." />
            <div className="w-full flex flex-col items-center justify-center md:p-3 lg:flex-nowrap md:flex-wrap md:flex-row lg:gap-6 lg:px-6">
                {cards.map((card, index) =>  <TeachersCard key={index} {...card} />)}
            </div>
        </div>
    )
}

export default Teachers