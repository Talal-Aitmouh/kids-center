import SectionHeader from "./SectionHeader"
import TeachersCard from "./TeachersCard"

function Teachers() {
    return (
        <div className="w-full flex flex-col">
            <SectionHeader title="Meet Our best Teachers" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus laborum doloribus expedita fugit. Quasi, quaerat."/>
            <div className="w-full flex items-center justify-center">
                <TeachersCard />
            </div>
        </div>
    )
}

export default Teachers