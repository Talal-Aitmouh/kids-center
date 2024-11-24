import { LucideIcon } from "lucide-react";

export  interface IoffreProps {
    title: string
    description: string,
    Icon:LucideIcon,
    color:string
}

export interface IcourseCardProps {
    title: string,
    description: string,
    image: string,
    category: string,
    price:string,
    teacher: {
        name: string,
        image: string,
        occupation: string
    }
}

export interface ImobileMenuProps {
    links: { name: string, current: boolean }[],
    click: () => void,
    className?: string
}