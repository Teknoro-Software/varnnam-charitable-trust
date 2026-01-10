"use client";

export default function ContactPage() {
    return (
        <main className="bg-white text-[#1f1f1f]">
            {/* ===== PAGE HEADER ===== */}
            <section className="bg-[#f7f7f7]">
                <div className="max-w-[1280px] mx-auto px-6 py-[96px]">
                    <h1 className="text-[48px] font-light tracking-tight mb-6">
                        Contact
                    </h1>
                    <p className="text-[18px] text-gray-600 max-w-[640px] leading-[1.6]">
                        We welcome inquiries related to our programmes, partnerships,
                        research, and general information about the work of Varnnam
                        Charitable Trust.
                    </p>
                </div>
            </section>

            {/* ===== CONTACT CONTENT ===== */}
            <section>
                <div className="max-w-[1280px] mx-auto px-6 py-[96px] grid grid-cols-1 md:grid-cols-3 gap-[72px]">

                    {/* LEFT — CONTACT DETAILS */}
                    <div className="md:col-span-1">
                        <h2 className="relative inline-block text-[22px] font-medium mb-8">
                            Get in touch
                            <span className="absolute left-0 -bottom-2 h-[3px] w-10 bg-[#c62828]" />
                        </h2>

                        <div className="space-y-8 text-[15px] text-gray-700 leading-[1.7]">
                            <div>
                                <p className="font-medium text-[#1f1f1f]">Address</p>
                                <p>
                                    Varnnam Charitable Trust<br />
                                    Chennai, Tamil Nadu<br />
                                    India
                                </p>
                            </div>

                            <div>
                                <p className="font-medium text-[#1f1f1f]">Email</p>
                                <a
                                    href="mailto:info@varnnamtrust.org"
                                    className="text-[#c62828] hover:underline"
                                >
                                    info@varnnamtrust.org
                                </a>
                            </div>

                            <div>
                                <p className="font-medium text-[#1f1f1f]">Office hours</p>
                                <p>
                                    Monday to Friday<br />
                                    9:30 am – 5:30 pm
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT — CONTACT FORM */}
                    <div className="md:col-span-2">
                        <h2 className="relative inline-block text-[22px] font-medium mb-8">
                            Write to us
                            <span className="absolute left-0 -bottom-2 h-[3px] w-10 bg-[#c62828]" />
                        </h2>

                        <form
                            className="grid grid-cols-1 md:grid-cols-2 gap-[24px]"
                            onSubmit={(e) => e.preventDefault()}
                        >
                            {/* Name */}
                            <div>
                                <label className="block text-[14px] mb-2">
                                    Full name
                                </label>
                                <input
                                    type="text"
                                    required
                                    className="w-full border border-gray-300 px-4 py-3 text-[14px] outline-none focus:border-[#c62828]"
                                />
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-[14px] mb-2">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    required
                                    className="w-full border border-gray-300 px-4 py-3 text-[14px] outline-none focus:border-[#c62828]"
                                />
                            </div>

                            {/* Subject */}
                            <div className="md:col-span-2">
                                <label className="block text-[14px] mb-2">
                                    Subject
                                </label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 px-4 py-3 text-[14px] outline-none focus:border-[#c62828]"
                                />
                            </div>

                            {/* Message */}
                            <div className="md:col-span-2">
                                <label className="block text-[14px] mb-2">
                                    Message
                                </label>
                                <textarea
                                    rows={6}
                                    required
                                    className="w-full border border-gray-300 px-4 py-3 text-[14px] outline-none focus:border-[#c62828] resize-none"
                                />
                            </div>

                            {/* Submit */}
                            <div className="md:col-span-2 mt-4">
                                <button
                                    type="submit"
                                    className="inline-flex items-center bg-[#c62828] text-white px-8 py-3 text-[14px] font-medium hover:opacity-90 transition"
                                >
                                    Send message
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </section>
        </main>
    );
}
