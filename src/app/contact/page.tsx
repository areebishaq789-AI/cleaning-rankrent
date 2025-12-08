import type { Metadata } from "next";
import { Mail, Phone, MapPin } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us",
    description: "Get a free quote for cleaning services in Ajax. Contact us today via phone or email.",
};

export default function ContactPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
                    <p className="mt-2 text-lg leading-8 text-gray-600">
                        Have questions or want a free quote? We'd love to hear from you.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-4xl grid-cols-1 gap-10 sm:mt-20 lg:grid-cols-2">

                    {/* Contact Info */}
                    <div className="relative rounded-2xl bg-gray-50 p-8 shadow-sm ring-1 ring-gray-900/5">
                        <h3 className="text-xl font-semibold leading-7 text-gray-900">Get in touch</h3>
                        <dl className="mt-6 space-y-6 text-base leading-7 text-gray-600">
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Address</span>
                                    <MapPin className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd>Ajax, Ontario<br />Canada</dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Telephone</span>
                                    <Phone className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd><a className="hover:text-gray-900" href="tel:+15551234567">(555) 123-4567</a></dd>
                            </div>
                            <div className="flex gap-x-4">
                                <dt className="flex-none">
                                    <span className="sr-only">Email</span>
                                    <Mail className="h-7 w-6 text-gray-400" aria-hidden="true" />
                                </dt>
                                <dd><a className="hover:text-gray-900" href="mailto:info@ajaxcleaning.com">info@ajaxcleaning.com</a></dd>
                            </div>
                        </dl>
                    </div>

                    {/* Contact Form */}
                    <form action="#" method="POST" className="mx-auto w-full max-w-xl">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
                            <div className="sm:col-span-2">
                                <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">Name</label>
                                <div className="mt-2.5">
                                    <input type="text" name="name" id="name" autoComplete="name" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">Email</label>
                                <div className="mt-2.5">
                                    <input type="email" name="email" id="email" autoComplete="email" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="phone" className="block text-sm font-semibold leading-6 text-gray-900">Phone</label>
                                <div className="mt-2.5">
                                    <input type="tel" name="phone" id="phone" autoComplete="tel" className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">Message</label>
                                <div className="mt-2.5">
                                    <textarea name="message" id="message" rows={4} className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-sky-600 sm:text-sm sm:leading-6"></textarea>
                                </div>
                            </div>
                        </div>
                        <div className="mt-10">
                            <button type="submit" className="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                                Send Message
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
