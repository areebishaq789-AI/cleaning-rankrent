"use client";

import { Star } from "lucide-react";

const testimonials = [
    {
        content: "I’ve hired several cleaning companies in Ajax over the years, but this team is by far the best. They didn't just do a surface clean; they really got into the corners and details. My kitchen and bathrooms have never looked this sparkling. I highly recommend them for anyone looking for reliable residential cleaning.",
        author: "Sarah Jenkins",
        location: "Ajax, Ontario",
        rating: 5,
    },
    {
        content: "Our office in Whitby needed a serious deep clean before we reopened. The crew was professional, punctual, and extremely thorough. They worked around our schedule to minimize disruption. It's great to walk into a fresh, clean workspace every morning now. 5 stars!",
        author: "Michael Thompson",
        location: "Whitby, Ontario",
        rating: 5,
    },
    {
        content: "Moving out is stressful enough without worrying about the cleaning deposit. I hired them for a move-out clean in Pickering, and they did a phenomenal job. The landlord was impressed, and I got my full deposit back. Worth every penny for the peace of mind.",
        author: "Priya Kumar",
        location: "Pickering, Ontario",
        rating: 5,
    },
];

export default function Testimonials() {
    return (
        <section className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-lg font-semibold leading-8 tracking-tight text-sky-600">Testimonials</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        What our locals are saying
                    </p>
                </div>
                <div className="mx-auto mt-16 flow-root max-w-2xl sm:mt-20 lg:mx-0 lg:max-w-none">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {testimonials.map((testimonial, index) => (
                            <div key={index} className="rounded-2xl bg-gray-50 p-8 text-sm leading-6 shadow-sm ring-1 ring-gray-900/5">
                                <div className="flex gap-x-1 text-sky-600">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="h-5 w-5 fill-current" aria-hidden="true" />
                                    ))}
                                </div>
                                <blockquote className="mt-6 text-gray-900">
                                    <p>“{testimonial.content}”</p>
                                </blockquote>
                                <div className="mt-6 flex items-center gap-x-4">
                                    <div className="font-semibold text-gray-900">
                                        {testimonial.author}
                                        <span className="font-normal text-gray-600"> – {testimonial.location}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
