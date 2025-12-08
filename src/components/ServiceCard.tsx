import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    href: string;
}

export default function ServiceCard({ title, description, icon, href }: ServiceCardProps) {
    return (
        <div className="flex flex-col rounded-2xl bg-white p-6 shadow-md ring-1 ring-gray-200 hover:shadow-lg transition-shadow">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600 text-white">
                {icon}
            </div>
            <h3 className="mt-4 text-lg font-semibold leading-7 text-gray-900">{title}</h3>
            <p className="mt-2 flex-grow text-base leading-7 text-gray-600">{description}</p>
            <div className="mt-4">
                <Link href={href} className="flex items-center gap-2 text-sm font-semibold leading-6 text-sky-600 hover:text-sky-500">
                    Learn more <ArrowRight className="h-4 w-4" />
                </Link>
            </div>
        </div>
    );
}
