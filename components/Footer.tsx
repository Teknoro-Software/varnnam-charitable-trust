import { MapPin, Mail, Phone } from "lucide-react";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-[#1f1f1f] text-white">
            <div className="max-w-[1280px] mx-auto px-6 py-[30px]">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-[48px]">

                    

                    <div className="items-start gap-4">
                        <Image
                            src="/logo.png"
                            alt="Varnam Charitable Trust"
                            width={200}
                            height={50}
                        />

                        <div>
                            {/* <h3 className="text-[18px] font-semibold mb-2">
                                Varnam Charitable Trust
                            </h3> */}

                            <p className="text-[14px] text-gray-400 leading-[1.6] max-w-[360px]">
                                Working towards a more equitable, just, and inclusive society
                                through long-term philanthropic initiatives.
                            </p>
                        </div>
                    </div>


                    <div className="mt-5">
                        <h4 className="text-[14px] font-semibold mb-4">About</h4>
                        <ul className="space-y-3 text-[14px] text-gray-400">
                            <li><a href="#" className="hover:text-white">Who we are</a></li>
                            <li><a href="#" className="hover:text-white">Our values</a></li>
                            <li><a href="#" className="hover:text-white">Trustees</a></li>
                            <li><a href="#" className="hover:text-white">Governance</a></li>
                        </ul>
                    </div>

                    <div className="mt-5">
                        <h4 className="text-[14px] font-semibold mb-4">Our work</h4>
                        <ul className="space-y-3 text-[14px] text-gray-400">
                            <li><a href="#" className="hover:text-white">Programmes</a></li>
                            <li><a href="#" className="hover:text-white">Impact</a></li>
                            <li><a href="#" className="hover:text-white">Partnerships</a></li>
                            <li><a href="#" className="hover:text-white">Research & learning</a></li>
                        </ul>
                    </div>

                    <div className="mt-5">
                        <h4 className="text-[14px] font-semibold mb-4 text-white">
                            Contact
                        </h4>

                        <ul className="space-y-4 text-[14px] text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-[#c62828] mt-0.5" />
                                <a
                                    href="https://www.google.com/maps/search/?api=1&query=Tc41%2F101+Sri+Vilas+Padanavu+Lane+Manacad+Trivandrum"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-[#c62828] transition leading-relaxed"
                                >
                                    Tc41/101, Sri Vilas<br />
                                    Padanavu Lane, Manacad<br />
                                    Trivandrum
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <Mail className="h-5 w-5 text-[#c62828]" />
                                <a
                                    href="mailto:info@varnnamtrust.org"
                                    className="hover:text-[#c62828] transition"
                                >
                                    info@varnnamtrust.org
                                </a>
                            </li>

                            <li className="flex items-center gap-3">
                                <Phone className="h-5 w-5 text-[#c62828]" />
                                <a
                                    href="tel:+919961122177"
                                    className="hover:text-[#c62828] transition"
                                >
                                    +91 99611 22177
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-[64px] pt-6 flex justify-between text-[12px] text-gray-500">
                    <p>© {new Date().getFullYear()} Varnam Charitable Trust.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
