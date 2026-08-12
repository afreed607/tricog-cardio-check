/**
 * Human / Machine Toggle
 * -----------------------------------------------------------------------
 * A small pill fixed to the bottom-left of the viewport lets a visitor
 * switch the whole page between two views:
 *
 *   - "Human"   -> the real, rendered site (everything inside <main>).
 *   - "Machine" -> <main> is hidden entirely and replaced with a
 *                  semantic HTML5 document, generated at runtime by
 *                  walking the real DOM, shown in a syntax-highlighted,
 *                  read-only code viewer.
 *
 * The generated markup reads FROM the live page — there is no hard-coded
 * content duplicated anywhere in this file — so it stays in sync
 * automatically as index.html changes.
 *
 * No dependencies. Vanilla JS only.
 * -----------------------------------------------------------------------
 */
(function () {
    'use strict';

    /* ----------------------------------------------------------------
     * Small utilities
     * ---------------------------------------------------------------- */

    /** Escape text for safe insertion as HTML content or attribute value. */
    function escapeHtml(str) {
        return String(str)
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;');
    }

    /** Collapse an element's text content into a single trimmed line. */
    function cleanText(el) {
        if (!el) return '';
        return el.textContent.replace(/\s+/g, ' ').trim();
    }

    /** Debounce helper for resize listeners. */
    function debounce(fn, wait) {
        var t;
        return function () {
            var args = arguments;
            clearTimeout(t);
            t = setTimeout(function () { fn.apply(null, args); }, wait);
        };
    }

    /** Tiny line-based string builder so generated markup stays indented. */
    function createBuilder() {
        var lines = [];
        return {
            add: function (level, text) {
                lines.push('  '.repeat(level) + text);
            },
            toString: function () {
                return lines.join('\n');
            }
        };
    }

    /* ----------------------------------------------------------------
     * Semantic HTML generator
     * Walks the real DOM (via stable #ids and light data-hm-section
     * hooks already present in index.html) and builds a clean HTML5
     * article structure from whatever content is actually there.
     * ---------------------------------------------------------------- */

    function buildSemanticHTML() {
        var b = createBuilder();

        b.add(0, '<article itemscope itemtype="https://schema.org/MedicalWebPage">');

        appendHero(b);
        appendSiteNav(b);
        appendCta(b);
        appendHowItWorks(b);
        appendStats(b);
        appendComparison(b);
        appendTestimonials(b);
        appendFaq(b);
        appendBlog(b);
        appendFooter(b);

        b.add(0, '</article>');

        return b.toString();
    }

    function appendHero(b) {
        var hero = document.getElementById('heroSection');
        if (!hero) return;

        var h1 = hero.querySelector('h1');
        var para = hero.querySelector('p');
        var ctas = hero.querySelectorAll('.btn');

        b.add(1, '<header>');
        if (h1) b.add(2, '<h1>' + escapeHtml(cleanText(h1)) + '</h1>');
        if (para) b.add(2, '<p>' + escapeHtml(cleanText(para)) + '</p>');

        if (ctas.length) {
            b.add(2, '<nav aria-label="Primary calls to action">');
            b.add(3, '<ul>');
            ctas.forEach(function (a) {
                b.add(4, '<li><a href="' + escapeHtml(a.getAttribute('href') || '#') + '">' +
                    escapeHtml(cleanText(a)) + '</a></li>');
            });
            b.add(3, '</ul>');
            b.add(2, '</nav>');
        }
        b.add(1, '</header>');
    }

    function appendSiteNav(b) {
        var links = document.querySelectorAll('#stickyHeader .sticky-links a');
        if (!links.length) return;

        b.add(1, '<nav aria-label="Site">');
        b.add(2, '<ul>');
        links.forEach(function (a) {
            b.add(3, '<li><a href="' + escapeHtml(a.getAttribute('href') || '#') + '">' +
                escapeHtml(cleanText(a)) + '</a></li>');
        });
        b.add(2, '</ul>');
        b.add(1, '</nav>');
    }

    function appendCta(b) {
        var cta = document.querySelector('[data-hm-section="cta"]');
        if (!cta) return;

        var heading = cta.querySelector('h2');
        var para = cta.querySelector('p');
        var button = cta.querySelector('button, a.btn');

        b.add(1, '<section aria-label="Call to action">');
        if (heading) b.add(2, '<h2>' + escapeHtml(cleanText(heading)) + '</h2>');
        if (para) b.add(2, '<p>' + escapeHtml(cleanText(para)) + '</p>');
        if (button) b.add(2, '<p><a href="#" role="button">' + escapeHtml(cleanText(button)) + '</a></p>');
        b.add(1, '</section>');
    }

    function appendHowItWorks(b) {
        var section = document.getElementById('HowItWorks');
        if (!section) return;

        var heading = section.querySelector('h2');
        var intro = section.querySelector('p');
        var stepHeadings = section.querySelectorAll('h4');

        b.add(1, '<section id="how-it-works">');
        if (heading) b.add(2, '<h2>' + escapeHtml(cleanText(heading)) + '</h2>');
        if (intro) b.add(2, '<p>' + escapeHtml(cleanText(intro)) + '</p>');

        if (stepHeadings.length) {
            b.add(2, '<ol>');
            stepHeadings.forEach(function (h4) {
                var stepPara = h4.nextElementSibling;
                b.add(3, '<li>');
                b.add(4, '<h3>' + escapeHtml(cleanText(h4)) + '</h3>');
                if (stepPara) b.add(4, '<p>' + escapeHtml(cleanText(stepPara)) + '</p>');
                b.add(3, '</li>');
            });
            b.add(2, '</ol>');
        }
        b.add(1, '</section>');
    }

    function appendStats(b) {
        var section = document.querySelector('[data-hm-section="stats"]');
        if (!section) return;

        var heading = section.querySelector('h2');
        var cards = section.querySelectorAll('.grid.grid-cols-2 > div');
        // Scoped to the shared ".text" class so we get the closing summary
        // paragraph rather than a stat card's own <p> (e.g. "cardiac patients").
        var closingPara = section.querySelector('p.text');

        b.add(1, '<section id="key-stats">');
        if (heading) b.add(2, '<h2>' + escapeHtml(cleanText(heading)) + '</h2>');

        if (cards.length) {
            b.add(2, '<ul>');
            cards.forEach(function (card) {
                var parts = card.querySelectorAll('h3, p');
                var text = Array.prototype.map.call(parts, cleanText).filter(Boolean).join(' \u2014 ');
                if (text) b.add(3, '<li>' + escapeHtml(text) + '</li>');
            });
            b.add(2, '</ul>');
        }
        if (closingPara) b.add(2, '<p>' + escapeHtml(cleanText(closingPara)) + '</p>');
        b.add(1, '</section>');
    }

    function appendComparison(b) {
        var section = document.querySelector('[data-hm-section="compare"]');
        if (!section) return;

        var heading = section.querySelector('h2');
        var table = section.querySelector('table');

        b.add(1, '<section id="comparison">');
        if (heading) b.add(2, '<h2>' + escapeHtml(cleanText(heading)) + '</h2>');

        if (table) {
            b.add(2, '<table>');

            var headCells = table.querySelectorAll('thead th');
            if (headCells.length) {
                b.add(3, '<thead>');
                b.add(4, '<tr>');
                headCells.forEach(function (th, i) {
                    var text = cleanText(th) || (i === 0 ? 'Feature' : 'Option');
                    b.add(5, '<th scope="col">' + escapeHtml(text) + '</th>');
                });
                b.add(4, '</tr>');
                b.add(3, '</thead>');
            }

            var rows = table.querySelectorAll('tbody tr');
            if (rows.length) {
                b.add(3, '<tbody>');
                rows.forEach(function (tr) {
                    b.add(4, '<tr>');
                    var cells = tr.querySelectorAll('td');
                    cells.forEach(function (td, i) {
                        var raw = cleanText(td);
                        // Normalise glyph-only cells into words a machine (and a
                        // screen reader) can parse unambiguously.
                        var value = raw === '\u2713' ? 'Yes'
                            : raw === '\u2715' ? 'No'
                            : raw === '\u3030' ? 'Partial'
                            : raw;
                        if (i === 0) {
                            b.add(5, '<th scope="row">' + escapeHtml(value) + '</th>');
                        } else {
                            b.add(5, '<td>' + escapeHtml(value) + '</td>');
                        }
                    });
                    b.add(4, '</tr>');
                });
                b.add(3, '</tbody>');
            }
            b.add(2, '</table>');
        }
        b.add(1, '</section>');
    }

    function appendTestimonials(b) {
        var section = document.querySelector('[data-hm-section="testimonials"]');
        if (!section) return;

        var heading = section.querySelector('h2');
        var cards = section.querySelectorAll('.grid.md\\:grid-cols-3 > div');

        b.add(1, '<section id="testimonials">');
        if (heading) b.add(2, '<h2>' + escapeHtml(cleanText(heading)) + '</h2>');

        if (cards.length) {
            b.add(2, '<ul>');
            cards.forEach(function (card) {
                var quote = card.querySelector('p');
                var source = card.querySelector('.text-gray-400');
                b.add(3, '<li>');
                if (quote) b.add(4, '<blockquote>' + escapeHtml(cleanText(quote)) + '</blockquote>');
                if (source) b.add(4, '<cite>' + escapeHtml(cleanText(source)) + '</cite>');
                b.add(3, '</li>');
            });
            b.add(2, '</ul>');
        }
        b.add(1, '</section>');
    }

    function appendFaq(b) {
        var section = document.getElementById('FAQs');
        if (!section) return;

        var heading = section.querySelector('h2');
        var items = section.querySelectorAll('.accordion-item');

        b.add(1, '<section id="faq">');
        if (heading) b.add(2, '<h2>' + escapeHtml(cleanText(heading)) + '</h2>');

        if (items.length) {
            b.add(2, '<dl>');
            items.forEach(function (item) {
                var question = item.querySelector('.font-medium');
                var answer = item.querySelector('.accordion-content');
                b.add(3, '<div>');
                if (question) b.add(4, '<dt>' + escapeHtml(cleanText(question)) + '</dt>');
                if (answer) b.add(4, '<dd>' + escapeHtml(cleanText(answer)) + '</dd>');
                b.add(3, '</div>');
            });
            b.add(2, '</dl>');
        }
        b.add(1, '</section>');
    }

    function appendBlog(b) {
        var section = document.getElementById('Blogs');
        if (!section) return;

        var heading = section.querySelector('h2');
        var intro = section.querySelector('p');
        var posts = section.querySelectorAll('ul > li');

        b.add(1, '<section id="blog">');
        if (heading) b.add(2, '<h2>' + escapeHtml(cleanText(heading)) + '</h2>');
        if (intro) b.add(2, '<p>' + escapeHtml(cleanText(intro)) + '</p>');

        if (posts.length) {
            b.add(2, '<ul>');
            posts.forEach(function (li) {
                var title = li.querySelector('h4');
                var excerpt = li.querySelector('p');
                var author = li.querySelector('a[href="#"]');
                var metaSpans = li.querySelectorAll('.text-sm span');
                var img = li.querySelector('img');

                b.add(3, '<li>');
                b.add(4, '<article>');
                if (title) b.add(5, '<h3><a href="#">' + escapeHtml(cleanText(title)) + '</a></h3>');
                if (img) {
                    var alt = title ? cleanText(title) : 'Blog post cover image';
                    b.add(5, '<img src="' + escapeHtml(img.getAttribute('src') || '') + '" alt="' + escapeHtml(alt) + '">');
                }
                if (excerpt) b.add(5, '<p>' + escapeHtml(cleanText(excerpt)) + '</p>');

                var meta = Array.prototype.map.call(metaSpans, cleanText).filter(Boolean);
                if (author) meta.push(cleanText(author));
                if (meta.length) b.add(5, '<p><small>' + escapeHtml(meta.join(' \u00b7 ')) + '</small></p>');

                b.add(4, '</article>');
                b.add(3, '</li>');
            });
            b.add(2, '</ul>');
        }
        b.add(1, '</section>');
    }

    function appendFooter(b) {
        var footer = document.querySelector('footer');
        if (!footer) return;

        var emailInput = footer.querySelector('input[type="email"]');
        var emailButton = footer.querySelector('button');
        var linkGroups = footer.querySelectorAll('.grid > div');
        var copyright = footer.querySelector('p.text-xs');
        var policyLinks = footer.querySelectorAll('.text-xs.text-gray-500 a');

        b.add(1, '<footer>');

        if (emailInput && emailButton) {
            b.add(2, '<form aria-label="Newsletter signup">');
            b.add(3, '<label for="hm-newsletter-email">Email address</label>');
            b.add(3, '<input id="hm-newsletter-email" type="email" placeholder="' +
                escapeHtml(emailInput.getAttribute('placeholder') || '') + '" required>');
            b.add(3, '<button type="submit">' + escapeHtml(cleanText(emailButton)) + '</button>');
            b.add(2, '</form>');
        }

        linkGroups.forEach(function (group) {
            var heading = group.querySelector('h4');
            var links = group.querySelectorAll('a');
            if (!heading || !links.length) return;

            b.add(2, '<nav aria-label="' + escapeHtml(cleanText(heading)) + '">');
            b.add(3, '<h4>' + escapeHtml(cleanText(heading)) + '</h4>');
            b.add(3, '<ul>');
            links.forEach(function (a) {
                b.add(4, '<li><a href="' + escapeHtml(a.getAttribute('href') || '#') + '">' +
                    escapeHtml(cleanText(a)) + '</a></li>');
            });
            b.add(3, '</ul>');
            b.add(2, '</nav>');
        });

        if (policyLinks.length) {
            b.add(2, '<nav aria-label="Legal">');
            b.add(3, '<ul>');
            policyLinks.forEach(function (a) {
                b.add(4, '<li><a href="' + escapeHtml(a.getAttribute('href') || '#') + '">' +
                    escapeHtml(cleanText(a)) + '</a></li>');
            });
            b.add(3, '</ul>');
            b.add(2, '</nav>');
        }

        if (copyright) b.add(2, '<p>' + escapeHtml(cleanText(copyright)) + '</p>');

        b.add(1, '</footer>');
    }

    /* ----------------------------------------------------------------
     * Syntax highlighting + line numbers
     * A small, self-contained HTML tokenizer — no third-party highlighter
     * needed for a single, well-known grammar (tags / attrs / strings).
     * Runs per-line so every produced <span> stays balanced.
     * ---------------------------------------------------------------- */

    var TAG_RE = /<(\/?)([a-zA-Z][\w-]*)((?:\s+[\w-]+(?:="[^"]*")?)*)\s*(\/?)>/g;
    var ATTR_RE = /([\w-]+)(?:="([^"]*)")?/g;

    function highlightLine(line) {
        var out = '';
        var lastIndex = 0;
        var match;
        TAG_RE.lastIndex = 0;

        while ((match = TAG_RE.exec(line)) !== null) {
            if (match.index > lastIndex) {
                out += '<span class="hm-tk-text">' + escapeHtml(line.slice(lastIndex, match.index)) + '</span>';
            }

            var closingSlash = match[1];
            var tagName = match[2];
            var attrsStr = match[3];
            var selfClosing = match[4];

            out += '<span class="hm-tk-punct">&lt;' + (closingSlash ? '/' : '') + '</span>';
            out += '<span class="hm-tk-tag">' + escapeHtml(tagName) + '</span>';

            if (attrsStr) {
                ATTR_RE.lastIndex = 0;
                var am;
                while ((am = ATTR_RE.exec(attrsStr)) !== null) {
                    var attrName = am[1];
                    var attrVal = am[2];
                    out += ' <span class="hm-tk-attr">' + escapeHtml(attrName) + '</span>';
                    if (attrVal !== undefined) {
                        out += '<span class="hm-tk-punct">=</span><span class="hm-tk-string">"' +
                            escapeHtml(attrVal) + '"</span>';
                    }
                }
            }

            out += '<span class="hm-tk-punct">' + (selfClosing ? ' /' : '') + '&gt;</span>';
            lastIndex = TAG_RE.lastIndex;
        }

        if (lastIndex < line.length) {
            out += '<span class="hm-tk-text">' + escapeHtml(line.slice(lastIndex)) + '</span>';
        }

        return out;
    }

    /** Highlight every line and wrap it for the CSS-counter line-number gutter. */
    function highlightAndNumber(raw) {
        return raw
            .split('\n')
            .map(function (line) {
                return '<span class="hm-line">' + (highlightLine(line) || '&nbsp;') + '</span>';
            })
            .join('');
    }

    /* ----------------------------------------------------------------
     * Machine view — render generated code into the viewer
     * ---------------------------------------------------------------- */

    function renderMachineCode() {
        var codeEl = document.getElementById('hmCodeOutput');
        if (!codeEl || codeEl.dataset.hmBuilt === 'true') return;

        try {
            var raw = buildSemanticHTML();
            codeEl.dataset.hmRaw = raw;
            codeEl.innerHTML = highlightAndNumber(raw);
            codeEl.dataset.hmBuilt = 'true';
        } catch (err) {
            codeEl.textContent = 'Unable to generate the semantic view right now.';
            /* eslint-disable no-console */
            console.error('[human-machine-toggle] Failed to build semantic HTML:', err);
        }
    }

    /* ----------------------------------------------------------------
     * Copy to clipboard
     * ---------------------------------------------------------------- */

    function fallbackCopy(text) {
        try {
            var textarea = document.createElement('textarea');
            textarea.value = text;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'fixed';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            var ok = document.execCommand('copy');
            document.body.removeChild(textarea);
            return ok;
        } catch (err) {
            return false;
        }
    }

    function copyText(text) {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            return navigator.clipboard.writeText(text)
                .then(function () { return true; })
                .catch(function () { return fallbackCopy(text); });
        }
        return Promise.resolve(fallbackCopy(text));
    }

    function initCopyButton() {
        var btn = document.getElementById('hmCopyBtn');
        var status = document.getElementById('hmCopyStatus');
        if (!btn) return;

        btn.addEventListener('click', function () {
            var codeEl = document.getElementById('hmCodeOutput');
            var text = (codeEl && (codeEl.dataset.hmRaw || codeEl.textContent)) || '';
            var label = btn.querySelector('.hm-copy-label');

            copyText(text).then(function (ok) {
                if (ok) {
                    btn.classList.add('is-copied');
                    if (label) label.textContent = 'Copied!';
                    if (status) status.textContent = 'Semantic HTML copied to clipboard.';
                } else if (status) {
                    status.textContent = 'Copy failed. Please select and copy the code manually.';
                }

                setTimeout(function () {
                    btn.classList.remove('is-copied');
                    if (label) label.textContent = 'Copy code';
                }, 2200);
            });
        });
    }

    /* ----------------------------------------------------------------
     * Floating toggle controller — two buttons, an animated indicator,
     * and a full-page swap between <main> and the machine view. The
     * active mode persists in sessionStorage, so it survives scrolling
     * and reloads within the same tab/session.
     * ---------------------------------------------------------------- */

    function initFloatingToggle() {
        var toggle = document.getElementById('hmFloatingToggle');
        var indicator = toggle && toggle.querySelector('.hm-float-indicator');
        var buttons = toggle ? Array.prototype.slice.call(toggle.querySelectorAll('.hm-float-tab')) : [];
        var mainEl = document.getElementById('siteMain');
        var machineView = document.getElementById('hmMachineView');
        var header = document.getElementById('stickyHeader');
        if (!toggle || !indicator || !buttons.length || !mainEl || !machineView) return;

        // Reveal the toggle once the hero section has been scrolled past —
        // same trigger point as #stickyHeader — so it doesn't compete with
        // the hero's own CTAs. Pages with no hero (e.g. setup.html, though
        // the widget isn't currently used there) just show it right away.
        var heroSection = document.getElementById('heroSection');

        if (heroSection && 'IntersectionObserver' in window) {
            var toggleObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    toggle.classList.toggle('is-visible', !entry.isIntersecting);
                });
            }, {
                root: null,
                threshold: 0,
                rootMargin: '-72px 0px 0px 0px'
            });

            toggleObserver.observe(heroSection);
        } else if (heroSection) {
            // Fallback for browsers without IntersectionObserver
            window.addEventListener('scroll', function () {
                var heroBottom = heroSection.getBoundingClientRect().bottom;
                toggle.classList.toggle('is-visible', heroBottom <= 72);
            }, { passive: true });
        } else {
            toggle.classList.add('is-visible');
        }

        function moveIndicator(btn) {
            indicator.style.left = btn.offsetLeft + 'px';
            indicator.style.width = btn.offsetWidth + 'px';
        }

        function setMode(mode, opts) {
            opts = opts || {};
            var isMachine = mode === 'machine';

            buttons.forEach(function (btn) {
                var isActive = btn.getAttribute('data-hm-mode') === mode;
                btn.classList.toggle('is-active', isActive);
                btn.setAttribute('aria-pressed', isActive ? 'true' : 'false');
                if (isActive) moveIndicator(btn);
            });

            // Machine mode hides the real site entirely and shows the
            // generated semantic view in its place.
            mainEl.hidden = isMachine;
            machineView.hidden = !isMachine;

            // The sticky header lives outside <main>, so it isn't hidden by
            // the swap above — force it out of view while machine mode is on.
            if (header) header.classList.toggle('hm-header-hidden', isMachine);

            if (isMachine) renderMachineCode();

            if (!opts.silent) {
                try { sessionStorage.setItem('hmMode', mode); } catch (err) { /* storage unavailable */ }
            }
        }

        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                setMode(btn.getAttribute('data-hm-mode'));
            });
        });

        // Restore the last-selected mode for this session; default to Human.
        var storedMode = null;
        try { storedMode = sessionStorage.getItem('hmMode'); } catch (err) { /* storage unavailable */ }
        setMode(storedMode === 'machine' ? 'machine' : 'human', { silent: true });

        // Re-align the indicator on resize / orientation change / font load.
        window.addEventListener('resize', debounce(function () {
            var current = toggle.querySelector('.hm-float-tab.is-active');
            if (current) moveIndicator(current);
        }, 150));
    }

    /* ----------------------------------------------------------------
     * Init
     * ---------------------------------------------------------------- */

    document.addEventListener('DOMContentLoaded', function () {
        var toggle = document.getElementById('hmFloatingToggle');
        if (!toggle) return; // widget not present on this page

        try {
            initFloatingToggle();
            initCopyButton();
        } catch (err) {
            console.error('[human-machine-toggle] Initialization failed:', err);
        }
    });
})();