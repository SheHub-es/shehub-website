import { Icon } from "@/components/ui/Icon";
import { Dribbble, Linkedin, X } from "lucide-react";
import Image, { StaticImageData } from "next/image";

export type MemberCardItem = {
    id: string;
    name: string;
    role: string;
    photoUrl?: string | StaticImageData;
    socials?: { linkedin?: string; x?: string; dribbble?: string };
};

interface CardItemProps {
    item: MemberCardItem;
}

export function CardItem({ item }: CardItemProps) {
    return (
        <div className="flex w-[296px] flex-col items-start gap-6">
            {/* Image Section */}
            <div className="flex h-[296px] p-[74px_12px] flex-col justify-center items-center gap-[10px] self-stretch aspect-square rounded-[50px] bg-[var(--color-background-purpleLight,#D6D4FF)]">
                {item.photoUrl && (
                    <Image
                        src={item.photoUrl}
                        alt={item.name}
                        width={220}
                        height={148}
                        className="object-cover"
                    />
                )}
            </div>

            {/* Content Section */}
            <div className="flex p-[0_16px] flex-col items-start self-stretch">
                {/* Name */}
                <h3 className="self-stretch font-[Nunito] text-[20px] font-bold leading-[32px]">
                    {item.name}
                </h3>

                {/* Job Title */}
                <p className="self-stretch font-[Nunito] text-[18px] font-normal leading-[28px]">
                    {item.role}
                </p>

                {/* Socials */}
                <div className="flex justify-center items-center">
                    {item.socials?.linkedin ? (
                        <a href={item.socials.linkedin} target="_blank" rel="noreferrer">
                            <Icon 
                                icon={Linkedin} 
                                size="sm" 
                                interactive 
                                aria-label="LinkedIn"
                                className="flex justify-center items-center"
                            />
                        </a>
                    ) : (
                        <Icon 
                            icon={Linkedin} 
                            size="sm" 
                            aria-label="LinkedIn"
                            className="flex justify-center items-center"
                        />
                    )}
                    {item.socials?.x ? (
                        <a href={item.socials.x} target="_blank" rel="noreferrer">
                            <Icon 
                                icon={X} 
                                size="sm" 
                                interactive 
                                aria-label="X"
                                className="flex justify-center items-center"
                            />
                        </a>
                    ) : (
                        <Icon 
                            icon={X} 
                            size="sm" 
                            aria-label="X"
                            className="flex justify-center items-center"
                        />
                    )}
                    {item.socials?.dribbble ? (
                        <a href={item.socials.dribbble} target="_blank" rel="noreferrer">
                            <Icon 
                                icon={Dribbble} 
                                size="sm" 
                                interactive 
                                aria-label="Dribbble"
                                className="flex justify-center items-center"
                            />
                        </a>
                    ) : (
                        <Icon 
                            icon={Dribbble} 
                            size="sm" 
                            aria-label="Dribbble"
                            className="flex justify-center items-center"
                        />
                    )}
                </div>
            </div>
        </div>
    );
}