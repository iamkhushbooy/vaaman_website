'use client';

import Link from 'next/link';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Instagram, ArrowUp, ChevronRight } from 'lucide-react';

const quickLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/contact', label: 'Contact Us' },
  { href: '/clients', label: 'Our Clients' },
  { href: '/careers', label: 'Careers' },
];

const phoneNumbers = [
  '+91 22 28925400',
  '28625400/28615400/2862501',
];

const emailAddresses = [
  'enquiry@vaaman.in',
  'business.development@vaaman.in',
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ backgroundColor: 'rgb(3, 36, 90)' }} className="relative text-gray-300">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 xl:grid-cols-4">
          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Our Office</h4>
            <div className="space-y-5 text-sm leading-6">
              <div className="flex gap-3">
                <MapPin size={18} className="mt-1 shrink-0 text-[rgb(225,84,18)]" />
                <p>
                  510, Sai Leela Commercial Complex, S.V. Road,
                  <br />
                  Borivali (West), Mumbai-400092, India
                </p>
              </div>

              <div className="flex gap-3">
                <Phone size={18} className="mt-1 shrink-0 text-[rgb(225,84,18)]" />
                <div className="space-y-1 leading-6">
                  <p className="text-sm text-gray-300">Call us</p>
                  <p
                    className="text-sm text-gray-300"
                  >
                    {phoneNumbers[0]}
                  </p>
                  <p className="text-sm text-gray-300">{phoneNumbers[1]}</p>
                </div>
              </div>

              <div className="flex gap-3">
                <Mail size={18} className="mt-1 shrink-0 text-[rgb(225,84,18)]" />
                <div className="space-y-1 break-all">
                  {emailAddresses.map((email) => (
                    <a key={email} href={`mailto:${email}`} className="block transition hover:text-white">
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="flex items-center gap-2 transition hover:text-[rgb(225,84,18)]">
                    <ChevronRight size={16} className="text-[rgb(225,84,18)]" />
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Business Hours</h4>
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold text-white">Monday - Friday</p>
                <p className="text-gray-400">10:00 am - 06:00 pm</p>
              </div>
              <div>
                <p className="font-semibold text-white">Saturday</p>
                <p className="text-gray-400">10:00 am - 05:00 pm</p>
              </div>
              <div>
                <p className="font-semibold text-white">Sunday</p>
                <p className="text-gray-400">Closed</p>
              </div>
            </div>
          </div>

          <div>
            <h4 className="mb-6 text-lg font-bold text-white">Newsletter</h4>
            <p className="mb-4 text-sm leading-6 text-gray-300">
              Stay updated with the latest industry insights, project milestones, and company news from Vaaman.
            </p>
            <div className="mt-6 flex gap-3">
              {[Twitter, Facebook, Linkedin, Instagram].map((Icon, index) => (
                <button
                  key={index}
                  type="button"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(225,84,18)] text-white transition hover:bg-amber-700"
                  aria-label="Social media link"
                >
                  <Icon size={18} />
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-[rgb(5,47,116)] pt-8 text-center">
          <p className="text-sm text-gray-400">
            Copyright © <span className="font-semibold text-[rgb(225,84,18)]">Vaaman Engineers</span>, All Right Reserved.
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[rgb(225,84,18)] text-white shadow-lg transition hover:bg-amber-600"
        aria-label="Scroll to top"
      >
        <ArrowUp size={20} />
      </button>
    </footer>
  );
}
