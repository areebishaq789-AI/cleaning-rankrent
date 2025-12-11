import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import { CheckCircle, Sparkles } from "lucide-react";

export const metadata = {
    title: "Deep Cleaning Services Ajax | One-Time Detailed Clean",
    description: "Best deep cleaning services in Ajax, Ontario. Comprehensive scrubbing of kitchen, bathrooms, and living areas. Perfect for spring cleaning!",
};

const deepCleanFaqs = [
    {
        question: "How long does a deep clean take?",
        answer: "A deep clean typically takes between 4 to 8 hours depending on the size of your home and its current condition. We send a team to ensure it is done efficiently."
    },
    {
        question: "What is the difference between a standard and deep clean?",
        answer: "A standard clean maintains cleanliness (vacuuming, dusting, wiping). A deep clean attacks buildup: scrubbing grout, cleaning inside appliances, washing baseboards, and dusting light fixtures."
    },
    {
        question: "Do you clean inside the oven and fridge?",
        answer: "Yes, inside oven and fridge cleaning can be added to any deep cleaning package. Just let us know when you book!"
    }
];

export default function DeepCleaning() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
                <Image
                    src="/service-deep-clean.png"
                    alt="Sparkling clean interior after deep cleaning"
                    fill
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
                    priority
                />
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Deep Cleaning Services in Ajax
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Restore your home to its original shine. Our detailed deep cleaning service covers every nook and cranny.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/contact" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                            Book a Deep Clean
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <p className="text-base font-semibold leading-7 text-sky-600">Spring Cleaning & Seasonal Refresh</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        The Best Deep Cleaning in Ajax, Ontario
                    </h2>
                    <p className="mt-6 text-xl leading-8">
                        Has it been a while since your home got a proper scrub? Dirt and dust have a way of hiding in places you rarely see. Our <strong>Ajax deep cleaning service</strong> is designed to reset your home’s cleanliness.
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <p>
                            This isn't just a quick wipe-down. We get on our hands and knees to scrub floors, clean behind toilets, and remove grease from kitchen cabinets. It is the perfect service for spring cleaning, preparing for a party, or just because you deserve a fresh start. We are top-rated for providing the <strong>best deep cleaning in Ajax</strong>.
                        </p>
                        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                            <li className="flex gap-x-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Kitchen & Bath Focus.</strong> We aggressively tackle soap scum, limescale, and burnt-on grease.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Detailed Dusting.</strong> We reach high corners, ceiling fans, and baseboards.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Custom Add-Ons.</strong> Add window cleaning or appliance cleaning to your package.</span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            Residents in Ajax and Whitby trust us to handle their toughest cleaning jobs. If you are overwhelmed by the mess, let our team step in and give you back a home you can feel proud of.
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ items={deepCleanFaqs} />

            {/* CTA */}
            <div className="bg-white pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Give your home a fresh start
                        </h2>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Get Deep Clean Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
