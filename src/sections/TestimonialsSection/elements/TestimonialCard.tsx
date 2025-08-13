import Image, { StaticImageData } from "next/image";

export type Testimonials = {
    id: string;
    image: string | StaticImageData ;
    name: string;
    quote: string;
    role: string;
};

interface TestimonialCardProps {
    testimonial: Testimonials
}

export const TestimonialsCard = ({ testimonial }: TestimonialCardProps) => {
    const { image, name, quote, role } = testimonial

    return (
        <div className="flex flex-col justify-center items-center gap-8 w-[584px]">
            <p className="self-stretch text-size-500 font-heavy font-secondary text-black leading-line-height-body-1 text-center">
                {quote}
            </p>
            <Image
                src={image}
                alt={name}
                width={96}
                height={96}
                className="rounded-full object-cover"
            />
            <div className="flex flex-col items-center justify-center text-black self-stretch text-center text-size-400">
                <p className="font-primary font-heavy leading-line-height-body-3 ">
                    {name}
                </p>
                <p className="font-secondary h-line-height-body-2">
                    {role}
                </p>
            </div>
        </div>
    )
}