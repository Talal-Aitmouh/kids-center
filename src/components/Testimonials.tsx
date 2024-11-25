import { ItestimonialProps } from "@/lib/Interfaces"
import Testimonial from "./Testimonial"






const reviews: ItestimonialProps[] = [
    {
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius vehicula odio. ',
        reviewr: {
            name: "john doe",
            image: './testimmonial-01.jpg',
            occupation: "parent"
        }
    },
    {
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius vehicula odio. ',
        reviewr: {
            name: "john doe",
            image: './testimmonial-01.jpg',
            occupation: "parent"
        }
    }, {
        review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla varius vehicula odio. ',
        reviewr: {
            name: "john doe",
            image: './testimmonial-01.jpg',
            occupation: "parent"
        }
    }
]



const Testimonials = () => {
    return (

        <div >
            
            {
                reviews.map((review, index) => {
                    return <Testimonial key={index} {...review} />
                })
            }
        </div>
    )
}

export default Testimonials