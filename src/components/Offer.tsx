import { IoffreProps } from "@/lib/Interfaces";





const Offer = ({ title, description, Icon, color, }: IoffreProps) => {
  

  return (
    <div className="flex flex-col items-center justify-center border rounded my-2 py-5 shadow flex-1 cursor-pointer hover:scale-105 transition-all duration-200">
      <div className="border-dashed h-14 w-14 rounded-full border-2 flex justify-center items-center">
        <div
          className={`w-12 h-12 rounded-full flex justify-center items-center`} style={{ backgroundColor: color }}
        >
          <Icon className="text-white" />
        </div>
      </div>
      <div className={`title`}>
        <h1 className="text-xl font-bold capitalize pb-2">{title}</h1>
        <hr className="w-14 h-[3px] border-none"  style={{backgroundColor:color}} />
      </div>
      <p className="leading-normal py-3 max-w-xs">{description}</p>
    </div>
  );
};

export default Offer;


