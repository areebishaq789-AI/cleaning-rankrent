import type { Metadata } from "next";
import Link from "next/link";
import { Users, Star, Award } from "lucide-react";

export const metadata: Metadata = {
    title: "About Us",
    description: "Learn about Ajax Cleaning Services. Providing trusted residential and commercial cleaning in Ajax since 2024.",
};

export default function AboutPage() {
    return (
        <div className="bg-white">
            <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl lg:mx-0">
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300">
                            We are a dedicated team of cleaning professionals serving Ajax and the Durham Region. Our mission is to provide reliable, high-quality cleaning services that give you back your time.
                        </p>
                    </div>
                </div>
            </div>

            <div className="mx-auto max-w-7xl px-6 lg:px-8 py-24 sm:py-32">
                <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Commitment</h2>
                    <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
                        <div className="lg:w-full lg:max-w-2xl lg:flex-auto">
                            <p className="text-xl leading-8 text-gray-600">
                                At Ajax Cleaning Services, we understand that inviting someone into your home or office requires trust. That's why we meticulously vet and train every member of our team. We are bonded, insured, and committed to your satisfaction.
                            </p>
                            <div className="mt-10 max-w-xl text-base leading-7 text-gray-700">
                                <p>
                                    Whether you need a weekly maid service, a deep clean before a holiday, or regular office maintenance, we treat every job with the same level of care and attention to detail. We use eco-friendly products where possible to ensure the safety of your family and pets.
                                </p>
                            </div>
                        </div>
                        <div className="lg:flex lg:flex-auto lg:justify-center">
                            <dl className="w-64 space-y-8 xl:w-80">
                                {[
                                    { name: 'Satisfied Clients', value: '500+', icon: Users },
                                    { name: 'Projects Completed', value: '10k+', icon: Star },
                                    { name: 'Years of Service', value: '10+', icon: Award },
                                ].map((stat) => (
                                    <div key={stat.name} className="flex flex-col-reverse gap-y-4">
                                        <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
                                        <dd className="text-5xl font-semibold tracking-tight text-gray-900 flex items-center gap-2">
                                            <stat.icon className="h-8 w-8 text-sky-600" />
                                            {stat.value}
                                        </dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="mt-16 flex justify-center">
                    <Link href="/contact" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                        Work With Us
                    </Link>
                </div>
            </div>
        </div>
    );
}
