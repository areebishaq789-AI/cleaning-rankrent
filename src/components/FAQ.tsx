"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
    {
        question: "Do you bring your own cleaning supplies?",
        answer:
            "Yes, we bring our own professional-grade, eco-friendly cleaning supplies and equipment. If you have specific products you'd prefer us to use, just let us know!",
    },
    {
        question: "Are you bonded and insured?",
        answer:
            "Absolutely. We are fully bonded and insured for your peace of mind. Your home and property are protected while we are on site.",
    },
    {
        question: "How do I book a cleaning service?",
        answer:
            "Booking is easy! You can get a free quote and book directly through our website by clicking the 'Get a Free Quote' button, or give us a call to schedule your cleaning.",
    },
    {
        question: "What areas do you serve?",
        answer:
            "We proudly serve Ajax and the entire Durham Region, including Pickering, Whitby, and Oshawa. Contact us to check if we service your specific location.",
    },
    {
        question: "What if I'm not satisfied with the cleaning?",
        answer:
            "Your satisfaction is our priority. We offer a 100% satisfaction guarantee. If you're not happy with any part of our service, let us know within 24 hours and we'll re-clean it for free.",
    },
];

export default function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Frequently Asked Questions
                    </h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Have questions? We have answers. If you don't see your question here, feel free to contact us.
                    </p>
                </div>
                <div className="mx-auto mt-16 max-w-2xl divide-y divide-gray-900/10">
                    <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
                        {faqs.map((faq, index) => (
                            <div key={faq.question} className="pt-6">
                                <dt>
                                    <button
                                        onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                        className="flex w-full items-start justify-between text-left text-gray-900"
                                    >
                                        <span className="text-base font-semibold leading-7">{faq.question}</span>
                                        <span className="ml-6 flex h-7 items-center">
                                            {openIndex === index ? (
                                                <ChevronUp className="h-6 w-6" aria-hidden="true" />
                                            ) : (
                                                <ChevronDown className="h-6 w-6" aria-hidden="true" />
                                            )}
                                        </span>
                                    </button>
                                </dt>
                                {openIndex === index && (
                                    <dd className="mt-2 pr-12">
                                        <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                                    </dd>
                                )}
                            </div>
                        ))}
                    </dl>
                </div>
            </div>
        </div>
    );
}
