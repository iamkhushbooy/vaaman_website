'use client';

import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';
import Link from 'next/link';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => {
            setSubmitted(false);
            setFormData({ name: '', email: '', subject: '', message: '' });
        }, 3000);
    };

    return (
        <>
            <main>

                <section className="relative h-96 bg-blue-950 text-white flex items-center overflow-hidden">
                    {/* 1. Removed opacity-20 so the image is fully visible */}
                    <div className="absolute inset-0">
                        <img
                            src="/contact/contact-banner.jpeg"
                            alt="Contact banner"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* 2. Updated gradient to fade from dark left to transparent right */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900/80 to-transparent"></div>

                    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <h1 className="text-5xl md:text-6xl font-bold mb-4">Contact</h1>
                        <p className="text-lg text-gray-200">
                            <Link href="/" className="hover:text-white transition">Home</Link>
                            {' / '}
                            <Link href="/contact" className="hover:text-white transition">Pages</Link>
                            {' / '}
                            <span>Contact</span>
                        </p>
                    </div>
                </section>

                {/* Main Contact Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
                    <div className="max-w-7xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
                            {/* Contact Info Cards */}
                            <div className="bg-gray-100 p-12 text-center">
                                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Phone size={40} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Phone Number</h3>
                                <p className="text-gray-600 mb-2">+91 9928036938</p>
                                <p className="text-gray-600 mb-6">+91 22 28925400</p>
                                <Link
                                    href="tel:+919928036938"
                                    className="inline-flex items-center gap-2 px-6 py-2 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
                                >
                                    Call Now <span>→</span>
                                </Link>
                            </div>

                            <div className="bg-gray-100 p-12 text-center">
                                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <Mail size={40} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Email Address</h3>
                                <p className="text-gray-600 mb-2">info@vaaman.com</p>
                                <p className="text-gray-600 mb-6">support@vaaman.com</p>
                                <Link
                                    href="mailto:info@vaaman.com"
                                    className="inline-flex items-center gap-2 px-6 py-2 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
                                >
                                    Email Now <span>→</span>
                                </Link>
                            </div>

                            <div className="bg-gray-100 p-12 text-center">
                                <div className="w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <MapPin size={40} className="text-white" />
                                </div>
                                <h3 className="text-2xl font-bold text-blue-900 mb-4">Office Address</h3>
                                <p className="text-gray-600 mb-2">510, Sai Leela Commercial Complex, S.V.Road, Borivali (West), Mumbai-400092, India</p>
                                <p className="text-gray-600 mb-6">+91 9928036938</p>
                                <Link
                                    href="#"
                                    className="inline-flex items-center gap-2 px-6 py-2 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
                                >
                                    Direction <span>→</span>
                                </Link>
                            </div>
                        </div>

                        {/* Contact Form & Description */}
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                            {/* Left Side - Text */}
                            <div>
                                <p className="text-amber-500 font-semibold text-lg mb-2">CONTACT US</p>
                                <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6 leading-tight">
                                  Have something on your mind? Don't hesitate to get in touch.
                                </h2>
                                <p className="text-gray-600 mb-8 leading-relaxed">
                                    At Vaaman, we are committed to delivering excellence and innovation in every project. Whether you have a specific inquiry, need a detailed quote, or want to discuss a potential partnership, our team of experts is here to help. Fill out the form, and let's bring your vision to life.
                                </p>

                                {/* Contact Info with Icons */}
                                <div className="space-y-6">
                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Phone size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-blue-900">Call Us</h4>
                                            <p className="text-gray-600">+91 9928036938</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="w-14 h-14 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0">
                                            <Mail size={24} className="text-white" />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-blue-900">Mail Us</h4>
                                            <p className="text-gray-600">info@vaaman.com</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="Your Name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-500"
                                        />
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Your Email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-500"
                                        />
                                    </div>

                                    <input
                                        type="text"
                                        name="subject"
                                        placeholder="Subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-500"
                                    />

                                    <textarea
                                        name="message"
                                        placeholder="Message"
                                        rows={6}
                                        value={formData.message}
                                        onChange={handleChange}
                                        className="w-full px-4 py-3 border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:border-amber-500"
                                    ></textarea>

                                    <button
                                        type="submit"
                                        className="w-full px-8 py-3 bg-amber-500 text-white font-semibold hover:bg-amber-600 transition"
                                    >
                                        {submitted ? 'Message Sent!' : 'Send Message'}
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                {/* FAQ Section */}
                <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <h2 className="text-4xl font-bold text-blue-900 text-center mb-16">Frequently Asked Questions</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    q: 'How do I get started?',
                                    a: 'Simply fill out our contact form above or call us directly. Our team will be in touch within 24 hours.'
                                },
                                {
                                    q: 'What are your business hours?',
                                    a: 'We operate Monday to Friday, 9:00 AM to 7:00 PM. Emergency support available 24/7.'
                                },
                                {
                                    q: 'Do you offer consultations?',
                                    a: 'Yes, we offer free initial consultations. Contact us to schedule yours today.'
                                },
                                {
                                    q: 'What is your response time?',
                                    a: 'We aim to respond to all inquiries within 24 hours during business days.'
                                }
                            ].map((faq, index) => (
                                <div key={index} className="bg-white p-8 border-l-4 border-amber-500">
                                    <h4 className="text-lg font-bold text-blue-900 mb-3">{faq.q}</h4>
                                    <p className="text-gray-600">{faq.a}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
