import { IcourseCardProps } from "@/lib/Interfaces"
import SectionHeader from "./SectionHeader"
import CourseCard from "./CourseCard"
import { Button } from "./ui/button"


const courses: IcourseCardProps[] = [
    {
        title: "Ask For What You Want",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius vehicula odio.",
        category: "Personal Development",
        price: "20$",
        image: "./latest-course-01.jpg",
        teacher: {
            name: "John",
            image: "./latest-course-author.png",
            occupation: "Teacher",
        },
    },
    {
        title: "Little Singe Courses",
        description: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo.",
        category: "Music",
        price: "25$",
        image: "./latest-course-02.jpg",
        teacher: {
            name: "Emma",
            image: "./latest-course-author.png",
            occupation: "Music Teacher",
        },
    },
    {
        title: "Designing With Type",
        description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        category: "Design",
        price: "30$",
        image: "./latest-course-03.jpg",
        teacher: {
            name: "Sophia",
            image: "./latest-course-author.png",
            occupation: "Design Instructor",
        },
    },
]

const categories: { category: string, isActive: boolean }[] = [
    {
        category: 'All',
        isActive: true
    },
    {
        category: 'New Courses',
        isActive: false
    }, {
        category: 'Special Courses',
        isActive: false
    }, {
        category: 'Famous Courses',
        isActive: false
    },
]


const Courses = () => {
    return (
        <div className="max-w-7xl mx-auto px-4">
            <SectionHeader title="Popular Courses" description="Explore our top courses designed to inspire, educate, and spark your creativity." />
            <div className="container  gap-3 md:gap-0 my-10 mx-3 flex items-center justify-between flex-col md:flex-row">
                <select className="block md:hidden border focus:border focus:outline-none px-10 w-4/5 mx-auto py-3 bg-primary">
                {
                        categories.map((cat, index) => {
                            return <option key={index}  className={`px-2 `}> {cat?.category} </option>
                        })
                    }
                </select>
                <div className="filter md:block hidden">
                    {
                        categories.map((cat, index) => {
                            return <Button key={index} variant={cat.isActive ? 'default' : "secondary"} className={`rounded-none px-8 ${!cat.isActive && "hover:bg-primary/40 transition-all duration-200"}`}> {cat?.category} </Button>
                        })
                    }
                </div>
                <div className="flex items-center border rounded-l overflow-hidden flex-1 md:flex-none">
                    <input
                        type="text"
                        placeholder="Search for course here"
                        className="px-4 py-2 w-full  focus:outline-none dark:bg-background "
                    />
                    <Button
                        className="bg-primary hover:bg-primary rounded-none text-white px-4 py-2 relative after:content-[''] after:absolute after:top-1/2 after:-left-2 after:w-4 after:h-4 after:bg-primary after:rotate-45 after:transform after:-translate-y-1/2">
                        Search
                    </Button>
                </div>
            </div>
            <div className="container flex md:flex-row flex-col justify-center items-center gap-4 flex-wrap">
                {
                    courses.map((course, index) => {
                        return <CourseCard key={index} {...course} />
                    })
                }
            </div>
            <div className="text-center">
                <Button variant={"outline"} className="border-primary mt-8 mb-4 rounded px-10">Load More </Button>
            </div>
        </div>
    )
}

export default Courses