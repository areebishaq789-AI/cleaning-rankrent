import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";

export const metadata: Metadata = {
    title: "Our Services",
    description: "Comprehensive cleaning services including residential, commercial, deep cleaning, and move-in/move-out in Ajax.",
};

const services = [
    {
        title: "Residential Cleaning",
        description: "Regular cleaning for your home. Weekly, bi-weekly, or monthly schedules available.",
        features: [
            "Dusting and vacuuming",
            "Kitchen and bathroom sanitization",
            "Floor washing",
            "Bed making and linen changing"
        ],
    },
    {
        title: "Commercial Cleaning",
        description: "Keep your office or retail space professional and welcoming.",
        features: [
            "Desk and workspace cleaning",
            "Trash removal",
            "Restroom maintenance",
            "Common area cleaning"
        ],
    },
    {
        title: "Deep Cleaning",
        description: "A thorough top-to-bottom clean for spring cleaning or special occasions.",
        features: [
            "Baseboards and vents",
            "Inside appliances (fridge/oven)",
            "Window sills and tracks",
            "Grout scrubbing"
        ],
    },
    {
        title: "Move-in / Move-out",
        description: "Get your security deposit back or prepare your new home for arrival.",
        features: [
            "Complete empty home cleaning",
            "Cabinet and drawer cleaning",
            "Appliance cleaning",
            "Spot cleaning walls"
        ],
    },
];

export default function ServicesPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-base font-semibold leading-7 text-sky-600">Our Services</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Professional Cleaning Solutions
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We offer a wide range of services tailored to meet your specific needs. No job is too big or too small.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12 w-full p-8 sm:p-10">
                        {services.map((service) => (
                            <div key={service.title} className="rounded-2xl bg-gray-50 p-6 shadow-sm ring-1 ring-gray-900/5">
                                <h3 className="text-xl font-semibold leading-7 text-gray-900">{service.title}</h3>
                                <p className="mt-2 text-base leading-7 text-gray-600">{service.description}</p>
                                <ul role="list" className="mt-6 space-y-3 text-sm leading-6 text-gray-600">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3">
                                            <Check className="h-6 w-5 flex-none text-sky-600" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="mt-16 flex justify-center">
                    <Link href="/contact" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                        Book a Service
                    </Link>
                </div>
            </div>
        </div>
    );
}
