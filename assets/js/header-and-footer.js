(function () {
    
    // # Header and Footer
    document.getElementById("Footer").innerHTML = `
    <div class="w-full flex-1 bg-[#021826] tex-white rounded-t-[32px]">
            <div class="container py-16 px-6 lg:px-10 xl:py-20 xl:px-20">

                <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">

                    <!-- Brand -->
                    <div class="lg:col-span-4" data-aos="fade-right">

                        <div class="flex items-center gap-3 font-semibold text-2xl select-none">
                            <a href="./index.html"><img class="h-14 w-auto object-cover"
                                    src="./assets/images/tcc-logo-2.webp" alt="Tricog CardioCheck"></a>
                        </div>

                        <!-- Social -->
                        <div class="flex items-center gap-3 mt-7">
                            <a href="#" aria-label="Tricog on YouTube"
                                class="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 text-white transition hover:bg-white hover:border-black hover:text-black">
                                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.017 1.792-4.686 4.533-4.686 1.313 0 2.686.235 2.686.235v2.962h-1.514c-1.491 0-1.956.929-1.956 1.881v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Tricog on LinkedIn"
                                class="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 text-white transition hover:bg-white hover:border-black hover:text-black">
                                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.9 8.65 23 10.98 23 14.28V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21h-4V9Z" />
                                </svg>
                            </a>
                            <a href="#" aria-label="Tricog on X (Twitter)"
                                class="flex items-center justify-center h-10 w-10 rounded-full border border-gray-300 text-white transition hover:bg-white hover:border-black hover:text-black">
                                <svg class="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M18.9 3H21l-6.6 7.55L22.2 21h-6.4l-5-6.53L4.9 21H2.8l7.06-8.07L2 3h6.55l4.53 5.97L18.9 3Zm-1.12 16.2h1.17L7.28 4.72H6.02l11.76 14.48Z" />
                                </svg>
                            </a>
                        </div>

                    </div>

                    <!-- Link columns -->
                    <div class="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-10">

                        <!-- Explore -->
                        <div data-aos="fade-up" data-aos-delay="0">
                            <h4 class="text-white font-bold mb-5 text-md tracking-wide">Explore</h4>
                            <ul class="space-y-3 text-sm text-white">
                                <li><a href="#HowItWorks" class="text-primary-hover transition">How it works</a></li>
                                <li><a href="#" class="text-primary-hover transition">Risk categories</a></li>
                                <li><a href="#" class="text-primary-hover transition">Clinical evidence</a></li>
                                <li><a href="./support.html" class="text-primary-hover transition">Support</a></li>
                            </ul>
                        </div>

                        <!-- Product -->
                        <div data-aos="fade-up" data-aos-delay="100">
                            <h4 class="text-white font-bold mb-5 text-md tracking-wide">Product</h4>
                            <ul class="space-y-3 text-sm text-white">
                                <li><a href="#" class="text-primary-hover transition">OMRON Complete</a></li>
                                <li><a href="#" class="text-primary-hover transition">Clinician app</a></li>
                                <li><a href="#" class="text-primary-hover transition">For hospital networks</a></li>
                            </ul>
                        </div>

                        <!-- Company -->
                        <div data-aos="fade-up" data-aos-delay="200">
                            <h4 class="text-white font-bold mb-5 text-md tracking-wide">Company</h4>
                            <ul class="space-y-3 text-sm text-white">
                                <li><a href="#" class="text-primary-hover transition">About Tricog</a></li>
                                <li><a href="#" class="text-primary-hover transition">Partners</a></li>
                                <li><a href="#" class="text-primary-hover transition">Pilot programme</a></li>
                            </ul>
                        </div>

                        <!-- Contact -->
                        <div data-aos="fade-up" data-aos-delay="300">
                            <h4 class="text-white font-bold mb-5 text-md tracking-wide">Contact</h4>
                            <ul class="space-y-3 text-sm text-white">
                                <li>
                                    <a href="mailto:support@tricog.com" class="text-primary-hover transition">
                                        support@tricog.com
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:080 4075 3333" class="text-primary-hover transition">
                                        080 4075 3333
                                    </a>
                                </li>
                                <li><a href="#" class="text-primary-hover transition">Book a call</a></li>
                            </ul>
                        </div>

                    </div>

                </div>

                <div
                    class="border-t border-white/20 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">

                    <p class="text-xs text-gray-400 order-2 md:order-1">
                        © 2026 Tricog Health. All rights reserved.
                    </p>

                    <div class="flex items-center gap-8 text-xs text-white order-1 md:order-2">
                        <a href="#" class="text-primary-hover transition">Privacy</a>
                        <a href="#" class="text-primary-hover transition">Terms of use</a>
                        <a href="#"
                            class="flex items-center gap-1.5 font-medium text-white/70 text-primary-hover transition">
                            Back to top
                            <svg class="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                stroke-width="2" aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 19V5m-7 7 7-7 7 7" />
                            </svg>
                        </a>
                    </div>

                </div>
            </div>
        </div>
    `

})();