import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import { CheckCircle, MapPin } from "lucide-react";

export const metadata = {
    title: "Pickering Cleaning Services | Reliable Maids",
    description: "Top-rated house cleaning in Pickering, Ontario. Serving Seaton, Liverpool, and Frenchmans Bay. Book your cleaning today!",
};

const pickeringFaqs = [
    {
        question: "Do you clean condos in Pickering?",
        answer: "Yes, we work with many condo buildings near the Pickering GO and waterfront. We are familiar with condo rules and elevator bookings."
    },
    {
        question: "How much does a cleaning cost in Pickering?",
        answer: "Our pricing is transparent and competitive. We offer flat-rate pricing based on the number of bedrooms and bathrooms in your Pickering home."
    },
    {
        question: "Are your cleaners background checked?",
        answer: "Yes, every member of our team undergoes a strict background check and interview process. We only hire people we would trust in our own homes."
    }
];

export default function PickeringLocation() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
                <Image
                    src="/main-hero-bright.jpg"
                    alt="Modern condo in Pickering"
                    fill
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
                    priority
                />
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Cleaning Services in Pickering, Ontario
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        From the waterfront to Seaton, we provide premium cleaning services for Pickering residents.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/contact" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                            Get Pickering Quote
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <p className="text-base font-semibold leading-7 text-sky-600">Durham Region Cleaning Experts</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Pickering's Favorite Maid Service
                    </h2>
                    <p className="mt-6 text-xl leading-8">
                        Pickering is a vibrant city, and your home should reflect that energy. At <strong>Ajax Cleaning Services</strong>, we are happy to serve our neighbors in <strong>Pickering, Ontario</strong> with the same high standards we are known for.
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <p>
                            We understand the unique mix of century homes and modern condos in Pickering. Our cleaners are trained to handle various surfaces and cleaning requirements. Whether you need a <strong>move-in clean in Seaton</strong> or a <strong>weekly service in Liverpool</strong>, we are the team to call.
                        </p>
                        <h3 className="mt-8 text-2xl font-bold tracking-tight text-gray-900">Areas We Cover</h3>
                        <ul role="list" className="mt-4 max-w-xl space-y-4 text-gray-600">
                            <li className="flex gap-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span>Liverpool & Amberlea</span>
                            </li>
                            <li className="flex gap-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span>Frenchman's Bay & Waterfront</span>
                            </li>
                            <li className="flex gap-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span>Seaton & New Developments</span>
                            </li>
                            <li className="flex gap-x-3">
                                <MapPin className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span>Rougemount & West Pickering</span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            Join the hundreds of satisfied customers who trust us with their homes. We are your reliable partners for a cleaner, happier home in Pickering.
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ items={pickeringFaqs} />

            {/* CTA */}
            <div className="bg-white pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready for a break?
                        </h2>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Book Now
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
