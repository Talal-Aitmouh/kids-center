import { useState } from "react"
import LatestNewsCard from "./LatestNewsCard"


function LatestNews() {
  const [steps, setSteps] = useState(1)
  const Cards = [
    {
    img: '/gallery-01.jpg',
    title: 'Standard Post With Preview Image',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus autem distinctio id, expedita porro!',
    date: '15 Sep 2024',
    like: 15,
    comments: 17,
  },
    {
    img: '/gallery-01.jpg',
    title: 'Standard Post With Preview Image',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus autem distinctio id, expedita porro!',
    date: '15 Sep 2024',
    like: 17,
    comments: 17,
  },
    {
    img: '/gallery-01.jpg',
    title: 'Standard Post With Preview Image',
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam necessitatibus autem distinctio id, expedita porro!',
    date: '15 Sep 2024',
    like: 10,
    comments: 17,
  }
]
  return (
    <div className=" flex flex-col items-center space-y-3 p-2">
      <h1 className="uppercase font-bold text-4xl text-center">latest news and updates</h1>
      <p className="text-center font-semibold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil itaque, inventore molestiae libero quisquam enim.</p>
      <div className="flex items-center justify-center">
          {steps == 1 && <LatestNewsCard image={Cards[0].img} like={Cards[0].like} title={Cards[0].title} description={Cards[0].text} date={Cards[0].date} comment={Cards[0].comments} />}
          {steps == 2 && <LatestNewsCard image={Cards[1].img} like={Cards[1].like} title={Cards[1].title} description={Cards[1].text} date={Cards[1].date} comment={Cards[1].comments} />}
          {steps == 3 && <LatestNewsCard image={Cards[2].img} like={Cards[2].like} title={Cards[2].title} description={Cards[2].text} date={Cards[2].date} comment={Cards[2].comments} />}
      </div>
      <div className="flex w-full h-10 items-center justify-center gap-6">
          <div onClick={() => setSteps(1)} className={`w-4 h-4 border rounded-full ${steps == 1 && "bg-primary"}`}></div>
          <div onClick={() => setSteps(2)} className={`w-4 h-4 border rounded-full ${steps == 2 && "bg-primary"}`}></div>
          <div onClick={() => setSteps(3)} className={`w-4 h-4 border rounded-full ${steps == 3 && "bg-primary"}`}></div>
      </div>
    </div>
  )
}

export default LatestNews