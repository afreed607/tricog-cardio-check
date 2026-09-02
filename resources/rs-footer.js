(function () {
    
    // # Header and Footer
    document.getElementById("Footer").innerHTML = `
    <div class="w-full flex-1 rounded-t-[32px] bg-[#021826] text-white overflow-hidden pb-10">

            <div class="w-full max-w-[1700px] py-14 px-5 md:px-10">

                <!-- Main Footer -->
                <div class="w-full flex flex-col lg:flex-row justify-center gap-14 ">
                    <div class="w-full" data-aos="fade-right">

                        <!-- Brand -->
                        <div>
                            <a href="./index.html" class="inline-flex">
                                <img src="../assets/images/tcc-logo-2.webp" alt="Tricog CardioCheck"
                                    class="h-14 sm:h-16 w-auto object-contain">
                            </a>

                            <p class="mt-5 max-w-md text-sm leading-6 text-white/60">
                                Smarter cardiac care through accessible, reliable,
                                and technology-enabled diagnostics.
                            </p>
                        </div>


                        <!-- Social -->
                        <div class="mt-7 flex items-center gap-3">

                            <a href="#" aria-label="Tricog on Facebook"
                                class="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-white hover:bg-white">
                                <svg class="h-4 w-4 text-white transition-colors duration-300 group-hover:text-[#021826]"
                                    viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.017 1.792-4.686 4.533-4.686 1.313 0 2.686.235 2.686.235v2.962h-1.514c-1.491 0-1.956.929-1.956 1.881v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073z" />
                                </svg>
                            </a>

                            <a href="#" aria-label="Tricog on LinkedIn"
                                class="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-white hover:bg-white">
                                <svg class="h-4 w-4 text-white transition-colors duration-300 group-hover:text-[#021826]"
                                    viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.9 8.65 23 10.98 23 14.28V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21h-4V9Z" />
                                </svg>
                            </a>

                            <a href="#" aria-label="Tricog on X"
                                class="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-white hover:bg-white">
                                <svg class="h-4 w-4 text-white transition-colors duration-300 group-hover:text-[#021826]"
                                    viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M18.9 3H21l-6.6 7.55L22.2 21h-6.4l-5-6.53L4.9 21H2.8l7.06-8.07L2 3h6.55l4.53 5.97L18.9 3Zm-1.12 16.2h1.17L7.28 4.72H6.02l11.76 14.48Z" />
                                </svg>
                            </a>

                        </div>


                        <!-- Divider -->
                        <div class="my-10 h-px w-full bg-white/10"></div>


                        <!-- Links + Contact -->
                        <div class="grid grid-cols-2 gap-10 sm:grid-cols-3">

                            <!-- Explore -->
                            <div>
                                <h3 class="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                                    Explore
                                </h3>

                                <ul class="space-y-3.5 text-sm text-white/65">
                                    <li>
                                        <a href="../solutions" class="transition-colors duration-200 hover:text-white">
                                            Solutions
                                        </a>
                                    </li>

                                    <li>
                                        <a href="../resources.html"
                                            class="transition-colors duration-200 hover:text-white">
                                            Resources
                                        </a>
                                    </li>

                                    <li>
                                        <a href="../support.html"
                                            class="transition-colors duration-200 hover:text-white">
                                            FAQs
                                        </a>
                                    </li>
                                </ul>
                            </div>


                            <!-- Company -->
                            <div>
                                <h3 class="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                                    Company
                                </h3>

                                <ul class="space-y-3.5 text-sm text-white/65">
                                    <li>
                                        <a href="https://tricog.com/about-us"
                                            class="transition-colors duration-200 hover:text-white">
                                            About Tricog
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" class="transition-colors duration-200 hover:text-white">
                                            About TCC
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://tricog.com/regulatory-compliance/"
                                            class="transition-colors duration-200 hover:text-white">
                                            Regulatory Compliance
                                        </a>
                                    </li>
                                </ul>
                            </div>


                            <!-- Contact -->
                            <div class="col-span-2 sm:col-span-1">
                                <h3 class="mb-5 text-sm font-semibold uppercase tracking-wider text-white">
                                    Contact
                                </h3>

                                <ul class="space-y-3.5 text-sm text-white/65">
                                    <li>
                                        <a href="mailto:support@tricog.com" class="transition-colors hover:text-white">
                                            <span>support@tricog.com</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="tel:+918040753333" class="transition-colors hover:text-white">
                                            <span>080 4075 3333</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a href="#" class="transition-colors hover:text-white">
                                            <span>Book a demo</span>
                                        </a>
                                    </li>
                                </ul>

                            </div>

                        </div>

                    </div>

                    <div class="w-full relative rounded-[24px] border border-[#042941] bg-[#032032] p-6 sm:p-8 lg:p-9 xl:p-10"
                        data-aos="fade-left">

                        <!-- Decorative glow -->
                        <div
                            class="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#B7232C]/10 blur-3xl">
                        </div>


                        <div class="relative">

                            <span
                                class="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#E05A61]">
                                <span class="h-1.5 w-1.5 rounded-full bg-[#B7232C]"></span>
                                Get in touch
                            </span>

                            <h2 class="max-w-lg text-2xl font-semibold leading-tight text-white sm:text-3xl">
                                Let’s start a conversation.
                            </h2>

                            <p class="mt-3 max-w-lg text-sm leading-6 text-white/55">
                                Have a question, partnership idea, or need help with
                                CardioCheck? Send us a message and our team will get
                                back to you.
                            </p>


                            <!-- Form -->
                            <form action="#" method="POST" class="mt-8 space-y-5">

                                <!-- Name + Email -->
                                <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">

                                    <div>
                                        <label for="footer-name" class="mb-2 block text-xs font-medium text-white/75">
                                            Name
                                        </label>

                                        <input id="footer-name" name="name" type="text" placeholder="Your name" required
                                            class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none placeholder:text-white/30 transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">
                                    </div>


                                    <div>
                                        <label for="footer-email" class="mb-2 block text-xs font-medium text-white/75">
                                            Email
                                        </label>

                                        <input id="footer-email" name="email" type="email" placeholder="you@example.com"
                                            required
                                            class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none placeholder:text-white/30 transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">
                                    </div>

                                    <!-- Phone -->
                                    <div>
                                        <label for="footer-phone" class="mb-2 block text-xs font-medium text-white/75">
                                            Phone
                                            <span class="font-normal text-white/35">(Optional)</span>
                                        </label>

                                        <input id="footer-phone" name="phone" type="tel" placeholder="Your phone number"
                                            class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none placeholder:text-white/30 transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">
                                    </div>
                                </div>




                                <!-- Message -->
                                <div>
                                    <label for="footer-message" class="mb-2 block text-xs font-medium text-white/75">
                                        Message
                                    </label>

                                    <textarea id="footer-message" name="message" rows="4" placeholder="How can we help?"
                                        required
                                        class="w-full resize-none rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 py-3 text-sm text-white outline-none placeholder:text-white/30 transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10"></textarea>
                                </div>


                                <!-- Submit -->
                                <button type="submit"
                                    class="group inline-flex h-12 w-full items-center justify-center gap-3 rounded-xl bg-[#B7232C] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#cf2933] hover:shadow-lg hover:shadow-[#B7232C]/20">
                                    Send message

                                    <svg class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <path d="M5 12h14" />
                                        <path d="m13 6 6 6-6 6" />
                                    </svg>
                                </button>

                            </form>

                        </div>
                    </div>

                </div>

                <div
                    class="mt-14 flex flex-col gap-5 border-t border-white/10 pt-7 sm:flex-row sm:items-center sm:justify-between">

                    <p class="text-xs text-white/40">
                        © 2026 Tricog Health. All rights reserved.
                    </p>

                    <div class="flex items-center gap-6 text-xs">
                        <a href="https://tricog.com/privacy-policy/"
                            class="text-white/50 transition-colors hover:text-white">
                            Privacy
                        </a>

                        <a href="https://tricog.com/terms-of-use-india-tcc/"
                            class="text-white/50 transition-colors hover:text-white">
                            Terms of use
                        </a>
                    </div>

                </div>

            </div>
        </div>
    `

})();