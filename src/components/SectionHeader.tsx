import { IsectionHeaderProps } from "@/lib/Interfaces"

const SectionHeader = (
    { title, description }: IsectionHeaderProps) => {
    return (
        <div>
            <h1 className="uppercase text-3xl   mx-3 md:mx-auto leading-relaxed   font-bold text-center my-4">{title} </h1>
            <h2 className="text-lg px-4 text-center md:max-w-lg mx-auto leading-loose mb-4">{description}</h2>
            <hr className="bg-primary h-1 w-72 mx-auto mb-4 border-none" />
        </div>
    )
}

export default SectionHeader