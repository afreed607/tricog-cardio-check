/**
 * FAQ Display (fetch + render only, no accordion behavior)
 * ----------------------------------------------------------
 * Fetches FAQ content from a JSON source (local file, or swap DATA_URL
 * for an API endpoint) and renders the sticky-heading + Q&A markup
 * into any element with [data-faq-root]. All items are shown expanded.
 */

const DATA_URL = "assets/js/support-faq-data.json";

// Delay (ms) between rendering each section, so they appear one by one instead of all at once.
const SECTION_LOAD_DELAY_MS = 250;

/** Build one FAQ item, matching the original accordion markup (no toggle JS attached). */
function renderItem(item) {
  const wrapper = document.createElement("div");
  wrapper.className = "accordion-item border-b border-gray-200";

  wrapper.innerHTML = `
    <button class="accordion-btn w-full flex items-center justify-between px-6 py-6 text-left">

      <div class="flex items-center gap-4">
        <span class="text-[#37617C]">
          <svg class="h-6 w-auto" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            ${item.icon}
          </svg>
        </span>

        <span class="font-medium text-gray-900">
          ${item.question}
        </span>
      </div>

      <span class="accordion-icon">+</span>

    </button>

    <div class="accordion-content">
      <div class="px-14 pb-6 text-gray-600 leading-7">
        ${item.answer}
      </div>
    </div>
  `;

  return wrapper;
}

/** Build one full section: sticky heading + its FAQ group. */
function renderSection(section) {
  const section_el = document.createElement("div");
  section_el.className =
    "w-full flex flex-col lg:flex-row items-start gap-6 lg:gap-8 mt-20";
  section_el.setAttribute("data-aos", "fade-up");
  section_el.setAttribute("data-aos-delay", "200");

  const heading = document.createElement("div");
  heading.className = "w-full lg:w-96 lg:sticky lg:top-24 lg:self-start";
  heading.style.position = "-webkit-sticky";
  heading.innerHTML = `<h3 class="text-xl lg:text-2xl font-semibold">${section.heading}</h3>`;

  const group = document.createElement("div");
  group.className = "w-full border border-gray-200 rounded-3xl overflow-hidden";

  section.items.forEach((item) => {
    group.appendChild(renderItem(item));
  });

  section_el.appendChild(heading);
  section_el.appendChild(group);
  return section_el;
}

/** Append each section to root one at a time, pausing briefly between each. */
async function renderSectionsSequentially(root, sections, delayMs = SECTION_LOAD_DELAY_MS) {
  for (const section of sections) {
    root.appendChild(renderSection(section));

    // Let AOS pick up the newly added section before moving to the next one.
    if (window.AOS && typeof window.AOS.refresh === "function") {
      window.AOS.refresh();
    }

    await new Promise((resolve) => setTimeout(resolve, delayMs));
  }
}

/** Fetch the FAQ data and render every section into the root element. */
async function loadFaqAccordion(rootSelector = "[data-faq-root]", dataUrl = DATA_URL) {
  const root = document.querySelector(rootSelector);
  if (!root) return;

  root.setAttribute("aria-busy", "true");
  root.innerHTML = `<p class="text-gray-400 mt-10">Loading FAQs...</p>`;

  try {
    const response = await fetch(dataUrl, { cache: "no-store" });
    if (!response.ok) throw new Error(`Request failed with status ${response.status}`);

    const data = await response.json();
    root.innerHTML = "";

    await renderSectionsSequentially(root, data.sections);

    // Let script.js (loaded globally) know it can now bind accordion click handlers
    // to these freshly-injected .accordion-item elements. Dispatched once, after every
    // section has finished rendering, so click handlers aren't bound more than once.
    document.dispatchEvent(new CustomEvent("accordions:loaded"));
  } catch (err) {
    console.error("Failed to load FAQ content:", err);
    root.innerHTML = `<p class="text-red-500 mt-10">Sorry, the FAQs couldn't be loaded right now.</p>`;
  } finally {
    root.removeAttribute("aria-busy");
  }
}

document.addEventListener("DOMContentLoaded", () => loadFaqAccordion());