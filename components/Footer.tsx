export default function Footer() {
    return (
        <footer className="bg-[#1f1f1f] text-white">
            <div className="max-w-[1280px] mx-auto px-6 py-[30px]">

                <div className="grid grid-cols-1 md:grid-cols-4 gap-[48px]">

                    <div>
                        <h3 className="text-[18px] font-semibold mb-4">
                            Varnnam Charitable Trust
                        </h3>
                        <p className="text-[14px] text-gray-400 leading-[1.6]">
                            Working towards a more equitable, just, and inclusive society
                            through long-term philanthropic initiatives.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-[14px] font-semibold mb-4">About</h4>
                        <ul className="space-y-3 text-[14px] text-gray-400">
                            <li><a href="#" className="hover:text-white">Who we are</a></li>
                            <li><a href="#" className="hover:text-white">Our values</a></li>
                            <li><a href="#" className="hover:text-white">Trustees</a></li>
                            <li><a href="#" className="hover:text-white">Governance</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[14px] font-semibold mb-4">Our work</h4>
                        <ul className="space-y-3 text-[14px] text-gray-400">
                            <li><a href="#" className="hover:text-white">Programmes</a></li>
                            <li><a href="#" className="hover:text-white">Impact</a></li>
                            <li><a href="#" className="hover:text-white">Partnerships</a></li>
                            <li><a href="#" className="hover:text-white">Research & learning</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-[14px] font-semibold mb-4">Contact</h4>
                        <ul className="space-y-3 text-[14px] text-gray-400">
                            <li>Chennai, Tamil Nadu</li>
                            <li>
                                <a href="mailto:info@varnnamtrust.org" className="hover:text-white">
                                    info@varnnamtrust.org
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>

                <div className="border-t border-white/10 mt-[64px] pt-6 flex justify-between text-[12px] text-gray-500">
                    <p>© {new Date().getFullYear()} Varnnam Charitable Trust.</p>
                    <div className="flex gap-6">
                        <a href="#" className="hover:text-white">Privacy</a>
                        <a href="#" className="hover:text-white">Terms</a>
                    </div>
                </div>

            </div>
        </footer>
    );
}
