import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import { CheckCircle, MapPin } from "lucide-react";

export const metadata = {
    title: "Cleaning Services Whitby | Top Rated House Cleaners",
    description: "Professional cleaning services in Whitby, Ontario. Residential and commercial cleaning for Brooklin, Downtown Whitby, and Port Whitby areas.",
};

const whitbyFaqs = [
    {
        question: "Do you service North Whitby / Brooklin?",
        answer: "Yes! We have a dedicated team for Whitby that covers everything from the lakefront up to Brooklin and beyond."
    },
    {
        question: "Do you offer same-day service in Whitby?",
        answer: "Depending on our schedule, we can often accommodate same-day or next-day requests in Whitby. Call us to check availability."
    },
    {
        question: "Are your rates the same for Whitby as Ajax?",
        answer: "Yes, we offer flat-rate pricing for standard homes across the entire Durham Region, including Whitby."
    }
];

export default function WhitbyLocation() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
                <Image
                    src="/main-hero-bright.jpg"
                    alt="Clean home in Whitby Ontario"
                    fill
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
                    priority
                />
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Cleaning Services in Whitby, Ontario
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Your local Whitby cleaning experts. We bring sparkle to homes and businesses across the town.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/contact" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                            Get Whitby Quote
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <p className="text-base font-semibold leading-7 text-sky-600">Serving the Durham Region</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Trusted House Cleaners in Whitby
                    </h2>
                    <p className="mt-6 text-xl leading-8">
                        Whitby is a growing community, and we are proud to be part of it. At <strong>Ajax Cleaning Services</strong>, we extend our premium cleaning solutions to all residents and business owners in <strong>Whitby, Ontario</strong>.
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <p>
                            Whether you live in a historic home in downtown Whitby or a new build in Brooklin, our team treats your property with care. We are known for being the <strong>best cleaning company in Whitby</strong> because we don't cut corners. We arrive on time, fully equipped, and ready to work.
                        </p>
                        <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Neighborhoods We Serve</h3>
                        <ul role="list" className="mt-4 max-w-xl space-y-4 text-gray-600">
                            <li className="flex gap-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span>Brooklin & North Whitby</span>
                            </li>
                            <li className="flex gap-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span>Port Whitby & Whitby Shores</span>
                            </li>
                            <li className="flex gap-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span>Downtown Whitby & Pringle Creek</span>
                            </li>
                            <li className="flex gap-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span>Taunton North</span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            Stop searching for "house cleaning near me" and choose the team that guarantees satisfaction. We are ready to make your Whitby home shine.
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ items={whitbyFaqs} />

            {/* CTA */}
            <div className="bg-white pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Live in Whitby? Book us today.
                        </h2>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Get Free Estimate
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
