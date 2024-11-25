import { LucideIcon } from "lucide-react";
import { IconType } from "react-icons";

export interface IoffreProps {
  title: string;
  description: string;
  Icon: LucideIcon;
  color: string;
}
export interface IpersonProps {
        name: string;
        image: string;
        occupation: string;
}

export interface IcourseCardProps {
  title: string;
  description: string;
  image: string;
  category: string;
  price: string;
  teacher: IpersonProps
}

export interface ImobileMenuProps {
  links: { name: string; current: boolean }[];
  click: () => void;
  className?: string;
  resolvedTheme: string;
}

export interface IheroCardsProps {
  title: string;
  description: string;
  Icon: IconType;
  color: string;
}

export interface IsectionHeaderProps {
  title: string;
  description: string;
}



export interface ItestimonialProps {

    review:string,
    reviewr : IpersonProps

}