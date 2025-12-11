import Link from "next/link";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white" aria-labelledby="footer-heading">
            <h2 id="footer-heading" className="sr-only">
                Footer
            </h2>
            <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div className="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div className="space-y-8">
                        <span className="text-2xl font-bold text-sky-500">Ajax Cleaning</span>
                        <p className="text-sm leading-6 text-gray-300">
                            Professional residential and commercial cleaning services in Ajax, Ontario.
                            Dedicated to making your space shine.
                        </p>
                        <div className="flex space-x-6">
                            {/* Add social links here if needed */}
                        </div>
                    </div>
                    <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
                        <div className="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/services/residential-cleaning" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Residential Cleaning
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/commercial-cleaning" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Commercial Cleaning
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/move-in-move-out" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Move-in/Move-out
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/services/deep-cleaning" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Deep Cleaning
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="mt-10 md:mt-0">
                                <h3 className="text-sm font-semibold leading-6 text-white">Service Areas</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/locations/whitby" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Whitby
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/locations/pickering" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Pickering
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Ajax (HQ)
                                        </Link>
                                    </li>
                                </ul>
                                <h3 className="text-sm font-semibold leading-6 text-white mt-10">Company</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li>
                                        <Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            About Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="md:grid md:grid-cols-1 md:gap-8">
                            <div>
                                <h3 className="text-sm font-semibold leading-6 text-white">Contact Us</h3>
                                <ul role="list" className="mt-6 space-y-4">
                                    <li className="flex items-center gap-2 text-sm leading-6 text-gray-300">
                                        <MapPin className="h-4 w-4 text-sky-500" />
                                        <span>Ajax, Ontario, Canada</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm leading-6 text-gray-300">
                                        <Phone className="h-4 w-4 text-sky-500" />
                                        <span>(555) 123-4567</span>
                                    </li>
                                    <li className="flex items-center gap-2 text-sm leading-6 text-gray-300">
                                        <Mail className="h-4 w-4 text-sky-500" />
                                        <span>info@ajaxcleaning.com</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
                    <p className="text-xs leading-5 text-gray-400">
                        &copy; {new Date().getFullYear()} Ajax Cleaning Services. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}
