import { IoffreProps } from "@/lib/Interfaces";





const Offer = ({title,description,color,Icon}:IoffreProps) => {
  

  return (
    <div className="flex gap-2 py-5 px-4 md:px-2 md:basis-80 flex-1 flex-wrap md:flex-nowrap cursor-pointer hover:shadow dark:hover:shadow-gray-800  transition-all duration-200">
      <div className="border-dashed !h-14 !w-14 rounded-full border-2 grid place-items-center">
        <div className={`!w-10 !h-10 rounded-full flex  justify-center items-center`} style={{ backgroundColor: color }}>
          <Icon className="text-white" />
        </div>
      </div>
      <div className="text flex-1">
      <div className={`title`}>
        <h1 className="text-xl font-bold capitalize pb-2">{title}</h1>
        <hr className="w-14 h-[3px] border-none"  style={{backgroundColor:color}} />
      </div>
      <p className="leading-normal py-3 ">{description}</p>
      </div>
    </div>
  );
};

export default Offer;


