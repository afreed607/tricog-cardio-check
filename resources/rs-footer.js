(function () {

    // # Footer
    document.getElementById("Footer").innerHTML = `
    <div class="w-full flex-1 rounded-t-[32px] bg-[#021826] text-white overflow-hidden pb-10">

            <div class="w-full py-14 px-5 md:px-10">

                <!-- Main Footer -->
                <div class="w-full flex flex-col xl:flex-row justify-center gap-14 ">
                    <div class="w-full xl:w-[40%]" data-aos="fade-right">

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
                                        d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.053 1.805.249 2.227.413.56.218.96.478 1.38.898.42.42.68.82.898 1.38.164.422.36 1.057.413 2.227.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.053 1.17-.249 1.805-.413 2.227-.218.56-.478.96-.898 1.38-.42.42-.82.68-1.38.898-.422.164-1.057.36-2.227.413-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.053-1.805-.249-2.227-.413-.56-.218-.96-.478-1.38-.898-.42-.42-.68-.82-.898-1.38-.164-.422-.36-1.057-.413-2.227-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.053-1.17.249-1.805.413-2.227.218-.56.478-.96.898-1.38.42-.42.82-.68 1.38-.898.422-.164 1.057-.36 2.227-.413 1.266-.058 1.646-.07 4.85-.07zm0 2.162c-3.259 0-3.667.014-4.947.072-1.187.054-1.832.252-2.261.42-.568.22-.974.484-1.4.91-.426.426-.69.832-.91 1.4-.168.429-.366 1.074-.42 2.261-.058 1.28-.072 1.688-.072 4.947s.014 3.667.072 4.947c.054 1.187.252 1.832.42 2.261.22.568.484.974.91 1.4.426.426.832.69 1.4.91.429.168 1.074.366 2.261.42 1.28.058 1.688.072 4.947.072s3.667-.014 4.947-.072c1.187-.054 1.832-.252 2.261-.42.568-.22.974-.484 1.4-.91.426-.426.69-.832.91-1.4.168-.429.366-1.074.42-2.261.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.054-1.187-.252-1.832-.42-2.261-.22-.568-.484-.974-.91-1.4-.426-.426-.832-.69-1.4-.91-.429-.168-1.074-.366-2.261-.42-1.28-.058-1.688-.072-4.947-.072zm0 3.678a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm7.846-10.405a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z" />
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
                                        <a href="../resources/inside-the-tricog-cardiocheck-algorithm.html" class="transition-colors duration-200 hover:text-white">
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
                                        <a href="mailto:marketing@tricog.com" class="transition-colors hover:text-white">
                                            <span>marketing@tricog.com</span>
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
                       
                        <form id="DemoForm" class="mt-8 space-y-5" novalidate>

    <!-- Web3Forms -->
    <input type="hidden" name="access_key" value="4da6eff8-a2bd-430d-ad9e-2a5ab6274b34">
    <input type="hidden" name="from_name" value="TCC Demo Request Form">

    <!-- Row 1 -->
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">

        <!-- Name -->
        <div>
            <label for="demo-name" class="mb-2 block text-xs font-medium text-white/75">
                Name
            </label>

            <input
                id="demo-name"
                name="name"
                type="text"
                placeholder="Your name"
                autocomplete="name"
                maxlength="60"
                class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none placeholder:text-white/30 transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">

            <p id="demo-name-error" class="mt-1.5 hidden text-xs text-[#ff6b73]" role="alert"></p>
        </div>

        <!-- Phone -->
        <div>
            <label for="demo-phone" class="mb-2 block text-xs font-medium text-white/75">
                Phone Number
            </label>

            <input
                id="demo-phone"
                name="phone"
                type="tel"
                inputmode="numeric"
                autocomplete="tel"
                placeholder="Your phone number"
                maxlength="10"
                class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none placeholder:text-white/30 transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">

            <p id="demo-phone-error" class="mt-1.5 hidden text-xs text-[#ff6b73]" role="alert"></p>
        </div>

        <!-- Email -->
        <div>
            <label for="demo-email" class="mb-2 block text-xs font-medium text-white/75">
                Email
            </label>

            <input
                id="demo-email"
                name="email"
                type="email"
                autocomplete="email"
                placeholder="you@example.com"
                maxlength="254"
                class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none placeholder:text-white/30 transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">

            <p id="demo-email-error" class="mt-1.5 hidden text-xs text-[#ff6b73]" role="alert"></p>
        </div>

    </div>

    <!-- Row 2 -->
    <div class="grid grid-cols-1 gap-5 sm:grid-cols-3">

        <!-- Role -->
        <div>
            <label for="demo-role" class="mb-2 block text-xs font-medium text-white/75">
                What best describes you?
            </label>

            <select
                id="demo-role"
                name="What best describes you?"
                class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">

                <option value="" disabled selected>Select an option</option>
                <option value="Doctor / Cardiologist">Doctor / Cardiologist</option>
                <option value="Facility Owner / Decision Maker">Facility Owner / Decision Maker</option>
                <option value="Healthcare Staff (Technician, nurse, etc.)">
                    Healthcare Staff (Technician, nurse, etc.)
                </option>
                <option value="Healthcare Professionals">
                    Healthcare Professionals
                </option>
                <option value="Other">Other</option>
            </select>

            <p id="demo-role-error" class="mt-1.5 hidden text-xs text-[#ff6b73]" role="alert"></p>
        </div>

        <!-- Preferred Time -->
        <div>
            <label for="demo-time" class="mb-2 block text-xs font-medium text-white/75">
                Preferred Time to Connect with you
            </label>

            <select
                id="demo-time"
                name="preferred_time"
                class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">

                <option value="" disabled selected>Select a preferred time</option>
                <option value="Morning">Morning</option>
                <option value="Afternoon">Afternoon</option>
                <option value="Evening">Evening</option>
            </select>

            <p id="demo-time-error" class="mt-1.5 hidden text-xs text-[#ff6b73]" role="alert"></p>
        </div>

        <!-- City -->
        <div>
            <label for="demo-city" class="mb-2 block text-xs font-medium text-white/75">
                City
            </label>

            <input
                id="demo-city"
                name="city"
                type="text"
                placeholder="Your city"
                autocomplete="address-level2"
                maxlength="60"
                class="h-12 w-full rounded-xl bg-[#052940] border border-[#37617C]/40 px-4 text-sm text-white outline-none placeholder:text-white/30 transition-all duration-200 focus:border-[#B7232C] focus:bg-white/[0.07] focus:ring-2 focus:ring-[#B7232C]/10">

            <p id="demo-city-error" class="mt-1.5 hidden text-xs text-[#ff6b73]" role="alert"></p>
        </div>

    </div>

    <!-- Submit -->
    <button
        id="demo-submit"
        type="submit"
        class="group inline-flex h-12 max-w-[400px] items-center justify-center gap-3 rounded-xl bg-[#B7232C] px-6 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#82191F] hover:shadow-lg hover:shadow-[#B7232C]/20 disabled:cursor-not-allowed disabled:opacity-60">

        <span id="demo-submit-text">Request a Demo</span>

        <svg
            id="demo-submit-icon"
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
<!-- Success Message -->
<div
    id="demo-success"
    class="hidden mt-8 rounded-2xl border border-[#37617C]/40 bg-[#052940] p-8 text-center">

    <div class="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#B7232C]/15">
        <svg
            class="h-6 w-6 text-[#B7232C]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2">

            <path d="M20 6 9 17l-5-5" />

        </svg>
    </div>

    <h3 class="text-xl font-semibold text-white">
        Demo Request Submitted
    </h3>

    <p class="mt-2 text-sm text-white/65">
        Thank you for making a demo request. Our team will connect shortly.
    </p>

</div>

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

    // Form Validation and Submission
const form = document.getElementById("DemoForm");
    const successMessage = document.getElementById("demo-success");

    const submitButton = document.getElementById("demo-submit");
    const submitText = document.getElementById("demo-submit-text");
    const submitIcon = document.getElementById("demo-submit-icon");

    const nameInput = document.getElementById("demo-name");
    const phoneInput = document.getElementById("demo-phone");
    const emailInput = document.getElementById("demo-email");
    const roleInput = document.getElementById("demo-role");
    const timeInput = document.getElementById("demo-time");
    const cityInput = document.getElementById("demo-city");


    /*
     * -----------------------------
     * Validation Functions
     * -----------------------------
     */

    function showError(input, message) {

        const errorElement = document.getElementById(input.id + "-error");

        input.classList.remove("border-[#37617C]/40");
        input.classList.add("border-[#B7232C]");

        input.setAttribute("aria-invalid", "true");

        if (errorElement) {
            errorElement.textContent = message;
            errorElement.classList.remove("hidden");
        }

        return false;
    }


    function clearError(input) {

        const errorElement = document.getElementById(input.id + "-error");

        input.classList.remove("border-[#B7232C]");
        input.classList.add("border-[#37617C]/40");

        input.removeAttribute("aria-invalid");

        if (errorElement) {
            errorElement.textContent = "";
            errorElement.classList.add("hidden");
        }
    }


    /*
     * Name validation
     *
     * Allows:
     * - Letters
     * - Spaces
     * - Apostrophes
     * - Hyphens
     * - Common accented characters
     */
    function validateName() {

        const value = nameInput.value.trim();

        const nameRegex = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

        if (!value) {
            return showError(nameInput, "Please enter your name.");
        }

        if (value.length < 2) {
            return showError(nameInput, "Name must be at least 2 characters.");
        }

        if (value.length > 60) {
            return showError(nameInput, "Name must not exceed 60 characters.");
        }

        if (!nameRegex.test(value)) {
            return showError(nameInput, "Please enter a valid name.");
        }

        clearError(nameInput);
        return true;
    }


    /*
     * Indian mobile number validation
     *
     * Exactly 10 digits
     * Must begin with 6, 7, 8 or 9
     */
    function validatePhone() {

        const value = phoneInput.value.trim();

        const phoneRegex = /^[6-9][0-9]{9}$/;

        if (!value) {
            return showError(phoneInput, "Please enter your phone number.");
        }

        if (!phoneRegex.test(value)) {
            return showError(
                phoneInput,
                "Enter a valid 10-digit Indian mobile number."
            );
        }

        clearError(phoneInput);
        return true;
    }


    /*
     * Strict email validation
     */
    function validateEmail() {

        const value = emailInput.value.trim();

        /*
         * Prevents:
         * - spaces
         * - missing username
         * - missing @
         * - invalid domain
         * - domains without a proper extension
         */
        const emailRegex =
            /^[A-Za-z0-9.!#$%&'*+/=?^_`{|}~-]+@[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?(?:\.[A-Za-z0-9](?:[A-Za-z0-9-]{0,61}[A-Za-z0-9])?)+$/;

        if (!value) {
            return showError(emailInput, "Please enter your email address.");
        }

        if (value.length > 254) {
            return showError(emailInput, "Email address is too long.");
        }

        if (/\s/.test(value)) {
            return showError(emailInput, "Email address cannot contain spaces.");
        }

        if (!emailRegex.test(value)) {
            return showError(
                emailInput,
                "Please enter a valid email address."
            );
        }

        clearError(emailInput);
        return true;
    }


    /*
     * Role validation
     */
    function validateRole() {

        if (!roleInput.value) {
            return showError(
                roleInput,
                "Please select an option."
            );
        }

        clearError(roleInput);
        return true;
    }


    /*
     * Preferred time validation
     */
    function validateTime() {

        if (!timeInput.value) {
            return showError(
                timeInput,
                "Please select a preferred time."
            );
        }

        clearError(timeInput);
        return true;
    }


    /*
     * City validation
     */
    function validateCity() {

        const value = cityInput.value.trim();

        const cityRegex =
            /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ .'-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;

        if (!value) {
            return showError(cityInput, "Please enter your city.");
        }

        if (value.length < 2) {
            return showError(
                cityInput,
                "City must be at least 2 characters."
            );
        }

        if (value.length > 60) {
            return showError(
                cityInput,
                "City must not exceed 60 characters."
            );
        }

        if (!cityRegex.test(value)) {
            return showError(
                cityInput,
                "Please enter a valid city name."
            );
        }

        clearError(cityInput);
        return true;
    }


    /*
     * -----------------------------
     * Live validation
     * -----------------------------
     */

    nameInput.addEventListener("input", validateName);

    phoneInput.addEventListener("input", function () {

        /*
         * Keep only numbers.
         * This prevents letters and symbols from being entered.
         */
        this.value = this.value.replace(/\D/g, "").slice(0, 10);

        validatePhone();
    });

    emailInput.addEventListener("input", validateEmail);

    roleInput.addEventListener("change", validateRole);

    timeInput.addEventListener("change", validateTime);

    cityInput.addEventListener("input", validateCity);


    /*
     * -----------------------------
     * Form Submission
     * -----------------------------
     */

    form.addEventListener("submit", async function (event) {

        event.preventDefault();

        /*
         * Validate every field.
         */
        const isNameValid = validateName();
        const isPhoneValid = validatePhone();
        const isEmailValid = validateEmail();
        const isRoleValid = validateRole();
        const isTimeValid = validateTime();
        const isCityValid = validateCity();

        const isFormValid =
            isNameValid &&
            isPhoneValid &&
            isEmailValid &&
            isRoleValid &&
            isTimeValid &&
            isCityValid;


        /*
         * Stop if validation fails.
         */
        if (!isFormValid) {

            /*
             * Focus the first invalid field.
             */
            const firstInvalid = form.querySelector(
                '[aria-invalid="true"]'
            );

            if (firstInvalid) {
                firstInvalid.focus();
            }

            return;
        }


        /*
         * Loading state
         */
        submitButton.disabled = true;
        submitText.textContent = "Submitting...";
        submitIcon.classList.add("hidden");


        try {

            const formData = new FormData(form);

            const response = await fetch(
                "https://api.web3forms.com/submit",
                {
                    method: "POST",
                    body: formData
                }
            );


            const result = await response.json();


            if (result.success) {

                /*
                 * Hide the form.
                 */
                form.classList.add("hidden");

                /*
                 * Show success message.
                 */
                successMessage.classList.remove("hidden");

                /*
                 * Scroll gently to the success message.
                 */
                successMessage.scrollIntoView({
                    behavior: "smooth",
                    block: "center"
                });

            } else {

                throw new Error(
                    result.message || "Form submission failed."
                );
            }


        } catch (error) {

            console.error("Web3Forms Error:", error);

            /*
             * Restore button.
             */
            submitButton.disabled = false;
            submitText.textContent = "Request a Demo";
            submitIcon.classList.remove("hidden");

            /*
             * Show a general submission error.
             */
            alert(
                "We couldn't submit your request right now. Please try again."
            );
        }

    });
})();