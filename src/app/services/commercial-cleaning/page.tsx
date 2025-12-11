import Link from "next/link";
import Image from "next/image";
import FAQ from "@/components/FAQ";
import { CheckCircle, Building2 } from "lucide-react";

export const metadata = {
    title: "Commercial Cleaning Ajax | Office & Janitorial Services",
    description: "Professional commercial cleaning services in Ajax and Durham Region. We clean offices, retail spaces, and clinics. Bonded and insured.",
};

const commercialFaqs = [
    {
        question: "Do you offer after-hours cleaning?",
        answer: "Yes, we understand that businesses need to operate without disruption. We offer flexible scheduling, including evenings and weekends, to clean your office when it is empty."
    },
    {
        question: "Are you insured for commercial properties?",
        answer: "Absolutely. We carry comprehensive liability insurance and all our staff are covered by WSIB. Your business is safe with us."
    },
    {
        question: "Can you provide a custom cleaning contract?",
        answer: "Yes, we customize our cleaning contracts to match your specific needs, whether you need daily trash service or weekly deep sanitation."
    }
];

export default function CommercialCleaning() {
    return (
        <div className="bg-white">
            {/* Hero */}
            <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 sm:py-32 lg:px-8">
                <Image
                    src="/service-commercial-real.jpg"
                    alt="Clean modern office space in Ajax"
                    fill
                    className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
                    priority
                />
                <div className="mx-auto max-w-2xl text-center">
                    <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                        Commercial Cleaning Services in Ajax
                    </h1>
                    <p className="mt-6 text-lg leading-8 text-gray-300">
                        Create a pristine work environment for your employees and clients. Reliable office cleaning across Durham Region.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link href="/contact" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                            Request a Commercial Quote
                        </Link>
                    </div>
                </div>
            </div>

            {/* Content Section */}
            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24">
                <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
                    <p className="text-base font-semibold leading-7 text-sky-600">Ajax Office Cleaning</p>
                    <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Reliable Janitorial Services for Your Business
                    </h2>
                    <p className="mt-6 text-xl leading-8">
                        A clean office is essential for productivity and professionalism. At <strong>Ajax Cleaning Services</strong>, we provide top-tier commercial cleaning for businesses of all sizes in Ajax, Whitby, and Pickering.
                    </p>
                    <div className="mt-10 max-w-2xl">
                        <p>
                            From small medical clinics to large corporate offices, our team has the training and equipment to handle it all. We are the trusted choice for <strong>commercial cleaning in Ajax</strong> because we show up on time and deliver consistent results. First impressions matter—let us help you make a great one.
                        </p>
                        <ul role="list" className="mt-8 max-w-xl space-y-8 text-gray-600">
                            <li className="flex gap-x-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Office & Retail.</strong> We keep your floors, desks, and common areas spotless.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Sanitation Focus.</strong> Using hospital-grade disinfectants to keep your team healthy.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <CheckCircle className="mt-1 h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                                <span><strong className="font-semibold text-gray-900">Consistent Quality.</strong> Dedicated account managers ensure your standards are always met.</span>
                            </li>
                        </ul>
                        <p className="mt-8">
                            We serve businesses along Harwood Ave, Bayly St, and throughout the Ajax industrial parks. Contact us today for a walkthrough and a customized proposal for your <strong>Ajax commercial cleaning</strong> needs.
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQ Section */}
            <FAQ items={commercialFaqs} />

            {/* CTA */}
            <div className="bg-white pb-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
                        <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Upgrade your office cleanliness today
                        </h2>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Link href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Get Commercial Quote
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
