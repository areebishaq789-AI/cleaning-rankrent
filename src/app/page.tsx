import Link from "next/link";
import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import FAQ from "@/components/FAQ";
import Testimonials from "@/components/Testimonials";
import { CheckCircle, Home as HomeIcon, Building2, Truck, Sparkles } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Residential Cleaning",
      description: "Keep your home spotless with our regular or one-time cleaning services.",
      icon: <HomeIcon className="h-6 w-6" />,
      href: "/services/residential-cleaning",
      imageSrc: "/service-residential-kitchen.jpg",
    },
    {
      title: "Commercial Cleaning",
      description: "Create a professional environment with our office and business cleaning solutions.",
      icon: <Building2 className="h-6 w-6" />,
      href: "/services/commercial-cleaning",
      imageSrc: "/service-commercial-real.jpg",
    },
    {
      title: "Move-in / Move-out",
      description: "Ensure a smooth transition with our deep cleaning for empty homes.",
      icon: <Truck className="h-6 w-6" />,
      href: "/services/move-in-move-out",
      imageSrc: "/service-move-in-boxes.jpg",
    },
    {
      title: "Deep Cleaning",
      description: "Thorough cleaning for those hard-to-reach places and seasonal refreshing.",
      icon: <Sparkles className="h-6 w-6" />,
      href: "/services/deep-cleaning",
      imageSrc: "/service-deep-clean.png",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative isolate overflow-hidden pt-14">
        <Image
          src="/main-hero-bright.jpg"
          alt="Bright and clean modern living room in Ajax home"
          fill
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          priority
        />
        <div className="absolute inset-0 -z-10 bg-gray-900/70" /> {/* Overlay for readability */}

        <div className="mx-auto max-w-7xl px-6 py-32 sm:py-48 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Professional Cleaning Services in Ajax, Ontario
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Your trusted local choice for spotless homes and offices. We serve Ajax, Whitby, Pickering, and the entire Durham Region with top-rated cleaning solutions.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link href="/contact" className="rounded-md bg-sky-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600">
                Get Free Quote
              </Link>
              <Link href="/contact" className="text-sm font-semibold leading-6 text-white">
                Book Now <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Why Choose Us & SEO Content Section */}
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2 lg:items-start">
            <div>
              <h2 className="text-base font-semibold leading-7 text-sky-600">Why Choose Us?</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                The Most Review-Trusted Cleaners in Ajax
              </p>
              <div className="mt-6 space-y-6 text-base leading-7 text-gray-600">
                <p>
                  Finding reliable <strong>professional cleaning services in Ajax</strong> can be a challenge. You need a team that is trustworthy, thorough, and consistent. That’s exactly what we provide. We are a locally owned and operated business dedicated to making your life easier by taking the chore of cleaning off your hands.
                </p>
                <p>
                  Whether you are looking for <strong>affordable house cleaners in Ajax</strong> for a weekly tidy-up or need a one-time <strong>best deep cleaning in Ajax Ontario</strong>, our experienced team has you covered. We use eco-friendly products that are safe for your family and pets, ensuring a healthy environment along with a sparkling home.
                </p>
                <p>
                  Our commitment to excellence extends beyond just the cleaning itself. We pride ourselves on clear communication, punctual arrivals, and our 100% satisfaction guarantee. if you aren't happy, we'll come back and make it right.
                </p>
              </div>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {['Bonded & Insured', 'Eco-Friendly Products', '100% Satisfaction Guarantee', 'Trained Professionals'].map((feature) => (
                  <div key={feature} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <CheckCircle className="absolute left-1 top-1 h-5 w-5 text-sky-600" aria-hidden="true" />
                      {feature}
                    </dt>{' '}
                    <dd className="inline">
                      — We prioritize your peace of mind.
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="relative isolate">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-xl ring-1 ring-gray-900/10">
                <Image
                  src="/hero-clean.png"
                  alt="Professional cleaning service team in Ajax using eco-friendly products"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="mt-8 border-t border-gray-100 pt-8">
                <h3 className="text-lg font-semibold text-gray-900">Comprehensive Cleaning Solutions for Durham Region</h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  We don't just serve Ajax. We are proud to offer our top-tier cleaning services to our neighbors in <strong>Whitby</strong> and <strong>Pickering</strong> as well. Our team is familiar with the entire Durham Region, ensuring prompt and reliable service wherever you are located.
                </p>
                <ul role="list" className="mt-4 space-y-2 text-sm leading-6 text-gray-600">
                  <li className="flex gap-x-3">
                    <CheckCircle className="h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                    Residential House Cleaning
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircle className="h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                    Commercial Office Cleaning
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircle className="h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                    Move-in / Move-out Services
                  </li>
                  <li className="flex gap-x-3">
                    <CheckCircle className="h-5 w-5 flex-none text-sky-600" aria-hidden="true" />
                    Deep Cleaning
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Service Area SEO Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Serving Ajax, Whitby & Pickering</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We are proud to be the top-rated cleaning service provider in Ajax, Ontario. Our commitment extends to the entire Durham Region.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            <div>
              <h3 className="border-l-4 border-sky-600 pl-4 font-semibold text-gray-900">Ajax Cleaning Services</h3>
              <p className="mt-2">
                Our home base. We know every neighbourhood from South Ajax to the northern developments. We provide the fastest response times for our Ajax clients.
              </p>
            </div>
            <div>
              <h3 className="border-l-4 border-sky-600 pl-4 font-semibold text-gray-900">Detailed Whitby Cleaning</h3>
              <p className="mt-2">
                Just a short drive away, we have a dedicated team serving Whitby. Whether it's a townhouse in Brooklin or a storefront downtown, we are there.
              </p>
            </div>
            <div>
              <h3 className="border-l-4 border-sky-600 pl-4 font-semibold text-gray-900">Pickering Cleaning Pros</h3>
              <p className="mt-2">
                Serving the Pickering community with pride. We handle many commercial accounts and residential homes near the waterfront and up to Seaton.
              </p>
            </div>
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

      {/* Testimonials Section */}
      <Testimonials />

      {/* FAQ Section */}
      <FAQ />

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
