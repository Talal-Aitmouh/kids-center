import { Share2 } from "lucide-react"

function TeachersCard() {
    return (
        <div className="w-[95%] h-[40vh] border flex">
            <div className="relative w-[50%] h-full flex">
                <img src="/best-teacher-01.jpg" className="w-full h-full object-cover" alt="" />
                <div className="absolute bottom-0 left-0 w-20 h-20 bg-primary flex items-center justify-center">
                    <Share2 className="text-white" size={40}/>
                </div>
            </div>
            <div className="w-[50%] flex flex-col p-4 h-full">
                    
            </div>
        </div>
    )
}

export default TeachersCard