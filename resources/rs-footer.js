(function () {
    
    // # Header and Footer
    document.getElementById("Footer").innerHTML = `
    <div class="w-full flex-1 rounded-t-[32px] bg-[#021826] text-white overflow-hidden pb-10">

            <div class="w-full py-14 px-5 md:px-10">

                <!-- Main Footer -->
                <div class="w-full flex flex-col lg:flex-row justify-center gap-14 ">
                    <div class="w-full xl:w-[40%]" data-aos="fade-right">

                        <!-- Brand -->
                        <div>
                            <a href="../index.html" class="inline-flex">
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

                            <a href="https://www.facebook.com/tricog/" target="_blank" rel="noopener noreferrer" aria-label="Tricog on Facebook"
                                class="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-white hover:bg-white">
                                <svg class="h-4 w-4 text-white transition-colors duration-300 group-hover:text-[#021826]"
                                    viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073c0 6.019 4.388 11.009 10.125 11.927v-8.437H7.078v-3.49h3.047V9.413c0-3.017 1.792-4.686 4.533-4.686 1.313 0 2.686.235 2.686.235v2.962h-1.514c-1.491 0-1.956.929-1.956 1.881v2.268h3.328l-.532 3.49h-2.796V24C19.612 23.082 24 18.092 24 12.073z" />
                                </svg>
                            </a>

                            <a href="https://in.linkedin.com/company/tricog-health" target="_blank" rel="noopener noreferrer" aria-label="Tricog on LinkedIn"
                                class="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-white hover:bg-white">
                                <svg class="h-4 w-4 text-white transition-colors duration-300 group-hover:text-[#021826]"
                                    viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21.9 8.65 23 10.98 23 14.28V21h-4v-6c0-1.43-.03-3.27-2-3.27-2 0-2.3 1.56-2.3 3.17V21h-4V9Z" />
                                </svg>
                            </a>

                            <a href="https://x.com/tricoghealth" target="_blank" rel="noopener noreferrer" aria-label="Tricog on X"
                                class="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-white hover:bg-white">
                                <svg class="h-4 w-4 text-white transition-colors duration-300 group-hover:text-[#021826]"
                                    viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M18.9 3H21l-6.6 7.55L22.2 21h-6.4l-5-6.53L4.9 21H2.8l7.06-8.07L2 3h6.55l4.53 5.97L18.9 3Zm-1.12 16.2h1.17L7.28 4.72H6.02l11.76 14.48Z" />
                                </svg>
                            </a>

                            <a href="https://www.instagram.com/tricoghealth/" target="_blank" rel="noopener noreferrer" aria-label="Tricog on Instagram"
                                class="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-white hover:bg-white">
                                <svg class="h-4 w-4 text-white transition-colors duration-300 group-hover:text-[#021826]"
                                    viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.96.24 2.65.51.72.28 1.33.66 1.94 1.27.61.61.99 1.22 1.27 1.94.27.69.46 1.48.51 2.65.06 1.27.07 1.65.07 4.85 0 3.2-.01 3.58-.07 4.85-.05 1.17-.24 1.96-.51 2.65a5.36 5.36 0 0 1-1.27 1.94 5.36 5.36 0 0 1-1.94 1.27c-.69.27-1.48.46-2.65.51-1.27.06-1.65.07-4.85.07-3.2 0-3.58-.01-4.85-.07-1.17-.05-1.96-.24-2.65-.51a5.36 5.36 0 0 1-1.94-1.27 5.36 5.36 0 0 1-1.27-1.94c-.27-.69-.46-1.48-.51-2.65C2.17 15.58 2.16 15.2 2.16 12c0-3.2.01-3.58.07-4.85.05-1.17.24-1.96.51-2.65.28-.72.66-1.33 1.27-1.94A5.36 5.36 0 0 1 5.95 1.29c.69-.27 1.48-.46 2.65-.51C9.87 2.17 10.25 2.16 12 2.16Zm0 1.98c-3.14 0-3.5.01-4.74.07-.95.04-1.47.2-1.81.34-.46.18-.79.39-1.13.74-.35.34-.56.67-.74 1.13-.13.34-.3.86-.34 1.81-.06 1.24-.07 1.6-.07 4.74 0 3.14.01 3.5.07 4.74.04.95.2 1.47.34 1.81.18.46.39.79.74 1.13.34.35.67.56 1.13.74.34.13.86.3 1.81.34 1.24.06 1.6.07 4.74.07 3.14 0 3.5-.01 4.74-.07.95-.04 1.47-.2 1.81-.34.46-.18.79-.39 1.13-.74.35-.34.56-.67.74-1.13.13-.34.3-.86.34-1.81.06-1.24.07-1.6.07-4.74 0-3.14-.01-3.5-.07-4.74-.04-.95-.2-1.47-.34-1.81a3.05 3.05 0 0 0-.74-1.13 3.05 3.05 0 0 0-1.13-.74c-.34-.13-.86-.3-1.81-.34-1.24-.06-1.6-.07-4.74-.07Zm0 3.37a4.49 4.49 0 1 1 0 8.98 4.49 4.49 0 0 1 0-8.98Zm0 7.4a2.91 2.91 0 1 0 0-5.82 2.91 2.91 0 0 0 0 5.82Zm5.72-7.6a1.05 1.05 0 1 1-2.1 0 1.05 1.05 0 0 1 2.1 0Z" />
                                </svg>
                            </a>

                            <a href="https://www.youtube.com/channel/UCV-uGseptgruiCZrFuPz9SA" target="_blank" rel="noopener noreferrer" aria-label="Tricog on YouTube"
                                class="group flex h-10 w-10 items-center justify-center rounded-full border border-white/20 transition-all duration-300 hover:border-white hover:bg-white">
                                <svg class="h-4 w-4 text-white transition-colors duration-300 group-hover:text-[#021826]"
                                    viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                    <path
                                        d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.55 12 3.55 12 3.55s-7.5 0-9.38.5A3.02 3.02 0 0 0 .5 6.19C0 8.08 0 12 0 12s0 3.92.5 5.81a3.02 3.02 0 0 0 2.12 2.14c1.88.5 9.38.5 9.38.5s7.5 0 9.38-.5a3.02 3.02 0 0 0 2.12-2.14C24 15.92 24 12 24 12s0-3.92-.5-5.81ZM9.55 15.57V8.43L15.82 12l-6.27 3.57Z" />
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
                                        <a href="../solutions.html" class="transition-colors duration-200 hover:text-white">
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
                                        <a href="https://tricog.com/about-us/" target="_blank" rel="noopener noreferrer"
                                            class="transition-colors duration-200 hover:text-white">
                                            About Tricog
                                        </a>
                                    </li>

                                    <li>
                                        <a href="./inside-the-ricog-cardiocheck-algorithm.html" class="transition-colors duration-200 hover:text-white">
                                            About TCC
                                        </a>
                                    </li>

                                    <li>
                                        <a href="https://tricog.com/regulatory-compliance/" target="_blank" rel="noopener noreferrer"
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
                                </ul>

                            </div>

                        </div>

                    </div>

                    <div class="w-full xl:w-[60%] relative rounded-[24px] border border-[#042941] bg-[#032032] p-6 sm:p-8 lg:p-9 xl:p-10"
                        data-aos="fade-left">

                        <div class="relative">
                        <span
                            class="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#E05A61]">
                            <span class="h-1.5 w-1.5 rounded-full bg-[#B7232C]"></span>
                            Request a Demo
                        </span>
                        
                        <h2 class="text-2xl font-semibold leading-tight text-white sm:text-3xl">
                            See how CardioCheck can work for you.
                        </h2>
                        
                        <p class="mt-3 max-w-xl text-sm leading-6 text-white/55">
                            Interested in CardioCheck? Tell us a little about yourself and
                            choose a convenient time. Our team will get in touch with you
                            to schedule a personalized demo.
                        </p>
                        <form action="#" method="POST" class="mt-8 space-y-5" id="DemoForm">
                        
                            <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">
                        
                                <div>
                                    <label for="demo-name" class="mb-2 block text-xs font-medium text-white/75">
                                        Name
                                    </label>
                        
                                    <input
                                        id="demo-name"
                                        name="name"
                                        type="text"
                                        placeholder="Your name"
                                        required
                                        class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none placeholder:text-white/30 transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">
                                </div>
                                <div>
                                    <label for="demo-phone" class="mb-2 block text-xs font-medium text-white/75">
                                        Phone Number
                                    </label>
                        
                                    <input
                                        id="demo-phone"
                                        name="phone"
                                        type="tel"
                                        placeholder="Your phone number"
                                        required
                                        class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none placeholder:text-white/30 transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">
                                </div>
                                <div>
                                    <label for="demo-email" class="mb-2 block text-xs font-medium text-white/75">
                                        Email
                                    </label>
                        
                                    <input
                                        id="demo-email"
                                        name="email"
                                        type="email"
                                        placeholder="you@example.com"
                                        required
                                        class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none placeholder:text-white/30 transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">
                                </div>
                        
                            </div>
                            <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">

                            <div>
                            <label for="demo-role" class="mb-2 block text-xs font-medium text-white/75">
                                What best describes you?
                            </label>
                    
                            <select
                                id="demo-role"
                                name="role"
                                required
                                class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">
                                <option value="" disabled selected>Select an option</option>
                                <option value="doctor">Doctor / Healthcare Professional</option>
                                <option value="hospital">Hospital / Healthcare Organization</option>
                                <option value="clinic">Clinic / Diagnostic Center</option>
                                <option value="business">Business / Organization</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        
                                <div>
                                    <label for="demo-time" class="mb-2 block text-xs font-medium text-white/75">
                                        Preferred Time to Connect
                                    </label>
                        
                                    <select
                                        id="demo-time"
                                        name="preferred_time"
                                        required
                                        class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">
                                        <option value="" disabled selected>Select a preferred time</option>
                                        <option value="morning">Morning (9 AM – 12 PM)</option>
                                        <option value="afternoon">Afternoon (12 PM – 3 PM)</option>
                                        <option value="evening">Evening (3 PM – 6 PM)</option>
                                    </select>
                                </div>
                                <div>
                                    <label for="demo-city" class="mb-2 block text-xs font-medium text-white/75">
                                        City
                                    </label>
                        
                                    <input
                                        id="demo-city"
                                        name="city"
                                        type="text"
                                        placeholder="Your city"
                                        required
                                        class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none placeholder:text-white/30 transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">
                                </div>
                        
                            </div>
                            <button
                                type="submit"
                                class="group inline-flex h-12 max-w-[400px] items-center justify-center gap-3 rounded-xl bg-[#B7232C] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#82191F] hover:shadow-lg hover:shadow-[#B7232C]/20">
                        
                                Request a Demo
                        
                                <svg
                                    class="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="2">
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
                        <a href="https://tricog.com/privacy-policy/" target="_blank" rel="noopener noreferrer"
                            class="text-white/50 transition-colors hover:text-white">
                            Privacy
                        </a>

                        <a href="https://tricog.com/terms-of-use-india-tcc/" target="_blank" rel="noopener noreferrer"
                            class="text-white/50 transition-colors hover:text-white">
                            Terms of use
                        </a>
                    </div>

                </div>

            </div>
        </div>
    `

})();