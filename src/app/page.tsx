import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";
import { CheckCircle, Home as HomeIcon, Building2, Truck, Sparkles } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Keep your home spotless with our regular or one-time cleaning services.",
      icon: <HomeIcon className="h-6 w-6" />,
      href: "/services",
    },
    {
      title: "Commercial Cleaning",
      description: "Create a professional environment with our office and business cleaning solutions.",
      icon: <Building2 className="h-6 w-6" />,
      href: "/services",
    },
    {
      title: "Move-in / Move-out",
      description: "Ensure a smooth transition with our deep cleaning for empty homes.",
      icon: <Truck className="h-6 w-6" />,
      href: "/services",
    },
    {
      title: "Deep Cleaning",
      description: "Thorough cleaning for those hard-to-reach places and seasonal refreshing.",
      icon: <Sparkles className="h-6 w-6" />,
      href: "/services",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#0ea5e9] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" }}></div>
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Best Cleaning Services in Ajax, Ontario
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Experience a cleaner home and a clearer mind. We provide top-rated, reliable residential and commercial cleaning services across Ajax and Durham Region.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link href="/contact" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
              Get a Free Quote
            </Link>
            <Link href="/services" className="text-sm font-semibold leading-6 text-gray-900">
              View Services <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-sky-600">Why Choose Us?</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need for a spotless home
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are dedicated to providing the highest quality service with a focus on trust, reliability, and satisfaction.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
              {['Bonded & Insured', 'Eco-Friendly Products', '100% Satisfaction Guarantee', 'Trained Professionals'].map((feature) => (
                <div key={feature} className="relative pl-16">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-sky-600">
                      <CheckCircle className="h-6 w-6 text-white" aria-hidden="true" />
                    </div>
                    {feature}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    You can trust us to take care of your property with our verified and professional team.
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Services List Section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Cleaning Services</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Tailored solutions for every need. From cozy apartments to large offices.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-white">
        <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to reclaim your weekends?
              <br />
              Book your cleaning today.
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
              Join hundreds of satisfied customers in Ajax. Get a free, no-obligation quote in minutes.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                Get Started
              </Link>
              <Link href="/about" className="text-sm font-semibold leading-6 text-white">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
            <svg viewBox="0 0 1024 1024" className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]" aria-hidden="true">
              <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                  <stop stopColor="#7775D6" />
                  <stop offset="1" stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
