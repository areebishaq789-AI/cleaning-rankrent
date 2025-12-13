import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
    imageSrc?: string;
}

export default function ServiceCard({ title, description, icon, href, imageSrc }: ServiceCardProps) {
    return (
        <Link href={href} className="flex flex-col rounded-2xl bg-white shadow-md ring-1 ring-gray-200 hover:shadow-lg transition-shadow overflow-hidden">
            {imageSrc && (
                <div className="relative h-48 w-full">
                    <Image
                        src={imageSrc}
                        alt={title}
                        fill
                        className="object-cover"
                    />
                </div>
            )}
            <div className="p-6 flex flex-col flex-grow">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 text-white">
                    {icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold leading-7 text-gray-900">{title}</h3>
                <p className="mt-2 flex-grow text-base leading-7 text-gray-600">{description}</p>
                <div className="mt-4">
                    <span className="flex items-center gap-2 text-sm font-semibold leading-6 text-sky-600 hover:text-sky-500">
                        Learn more <ArrowRight className="h-4 w-4" />
                    </span>
                </div>
            </div>
        </Link>
    );
}
