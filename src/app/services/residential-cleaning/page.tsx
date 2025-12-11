import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import { CheckCircle, Star } from "lucide-react";

export const metadata = {
    title: "Residential Cleaning Services Ajax | Best House Cleaners",
    description: "Top-rated residential cleaning in Ajax, Ontario. Reliable maids for weekly, bi-weekly, or deep cleaning services. Get a free quote today!",
};

const residentialFaqs = [
    {
        question: "Do I need to be home during the cleaning?",
        answer: "No, you do not need to be home. Many of our Ajax clients provide us with a key or entry code. We interpret your home with the utmost respect and care."
    },
    {
        question: "Are your cleaning products safe for pets?",
        answer: "Yes! We use eco-friendly, non-toxic products that are safe for pets and children. We are a pet-friendly cleaning service."
    },
    {
        question: "What is included in a standard clean?",
        answer: "Our standard cleaning includes dusting, vacuuming, mopping, bathroom sanitation, kitchen surface cleaning, and trash removal. we can customize this list to your needs."
    }
];

export default function ResidentialCleaning() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
                <Image
                    src="/service-residential-kitchen.jpg"
                    alt="Spotless kitchen in Ajax residential home"
                    fill
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
                    priority
                />
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Residential Cleaning Services in Ajax
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Enjoy a cleaner, healthier home without lifting a finger. Trusted by homeowners across Ajax and Durham Region.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/contact" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                            Book Your Clean
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <p className="text-base font-semibold leading-7 text-sky-600">Professional House Cleaning</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Reliable House Cleaners in Ajax, Ontario
                    </h2>
                    <p className="mt-6 text-xl leading-8">
                        Life gets busy, and sometimes cleaning is the last thing you want to do. At <strong>Ajax Cleaning Services</strong>, we specialize in providing top-tier residential cleaning solutions that fit your schedule and lifestyle.
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <p>
                            Whether you need a weekly "maintaining" clean or a thorough monthly scrub, our team of professional <strong>Ajax house cleaners</strong> is here to help. We understand that every home is unique, which is why we offer customizable cleaning plans. We pay attention to the details that matter most to you, from sparkling baseboards to streak-free mirrors.
                        </p>
                        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                            <li className="flex gap-x-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Weekly & Bi-Weekly Service.</strong> Keep your home consistently clean with our recurring service packages.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Custom Checklists.</strong> Tell us what you want cleaned, and we'll make it happen.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Vetted Professionals.</strong> Every cleaner is background-checked, trained, and insured.</span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            We serve all neighbourhoods in Ajax, including South Ajax, Pickering Village, and Deer Creek. Don't spend your weekends scrubbing floors—let our <strong>Ajax cleaning pros</strong> handle the dirty work while you enjoy your free time.
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ items={residentialFaqs} />

            {/* CTA */}
            <div className="bg-white pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Ready for a spotless home?
                        </h2>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Get Your Free Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
