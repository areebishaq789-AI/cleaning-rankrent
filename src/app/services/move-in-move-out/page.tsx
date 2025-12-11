import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import { CheckCircle, Truck } from "lucide-react";

export const metadata = {
    title: "Move-In / Move-Out Cleaning Ajax | Deposit Back Guarantee",
    description: "Expert move-out cleaning services in Ajax. We help you get your security deposit back. Detailed cleaning for empty homes and apartments.",
};

const moveFaqs = [
    {
        question: "Do you guarantee I will get my security deposit back?",
        answer: "While the final decision is up to your landlord, our cleaning checklist is designed to meet strict rental agency standards. We have a very high success rate!"
    },
    {
        question: "Do I need to provide supplies?",
        answer: "No, we bring everything needed to tackle even the toughest stains. You just focus on your move."
    },
    {
        question: "Can you clean on weekends?",
        answer: "Yes, we know moves often happen on weekends. We offer flexible scheduling to fit your moving dates."
    }
];

export default function MoveInMoveOut() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
                <Image
                    src="/service-move-in-boxes.jpg"
                    alt="Clean empty room with moving boxes"
                    fill
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
                    priority
                />
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Move-In / Move-Out Cleaning Ajax
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Take the stress out of moving. We ensure your old home is spotless for the next tenant and your new one is ready for you.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/contact" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                            Book Moving Clean
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <p className="text-base font-semibold leading-7 text-sky-600">End of Tenancy Cleaning</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Get Your Security Deposit Back
                    </h2>
                    <p className="mt-6 text-xl leading-8">
                        Moving is one of the most stressful life events. The last thing you want to do after packing boxes is strictly scrubbing an empty house. Let <strong>Ajax Cleaning Services</strong> handle it with our specialized move-out cleaning.
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <p>
                            We work with landlords and property managers across Ajax and Durham Region, so we know exactly what they look for during inspections. Our <strong>move-in / move-out cleaning in Ajax</strong> covers everything from inside cupboards to behind appliances.
                        </p>
                        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                            <li className="flex gap-x-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Inside Cabinets & Appliances.</strong> We clean where daily housekeeping misses.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Wall Spot Cleaning.</strong> We remove scuffs and marks to leave walls looking fresh.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Carpet Steam Cleaning.</strong> Available as an add-on to remove heavy traffic stains.</span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            Whether you are a tenant trying to secure a deposit or a homeowner preparing to sell, our team ensures the property looks its absolute best.
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ items={moveFaqs} />

            {/* CTA */}
            <div className="bg-white pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Moving soon? Book your clear now.
                        </h2>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Get Move-Out Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
