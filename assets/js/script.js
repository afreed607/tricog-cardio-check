(function () {
    'use strict';

    // Mobile/Tablet Menu
    function initMobileMenu(toggleId, panelId) {
        var toggle = document.getElementById(toggleId);
        var panel = document.getElementById(panelId);
        if (!toggle || !panel) return;

        function isOpen() {
            return toggle.classList.contains('is-open');
        }

        function open() {
            toggle.classList.add('is-open');
            toggle.setAttribute('aria-expanded', 'true');
            panel.classList.add('is-open');
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }

        function close() {
            toggle.classList.remove('is-open');
            toggle.setAttribute('aria-expanded', 'false');
            panel.classList.remove('is-open');
            panel.style.maxHeight = '0px';
        }

        toggle.addEventListener('click', function () {
            if (isOpen()) close(); else open();
        });

        // Tapping any link (anchor jump or the Setup page) closes the panel
        Array.prototype.slice.call(panel.querySelectorAll('a')).forEach(function (link) {
            link.addEventListener('click', close);
        });

        // Escape closes the currently open menu and returns focus to the toggle
        panel.addEventListener('keydown', function (e) {
            if (e.key === 'Escape') {
                close();
                toggle.focus();
            }
        });

        // Force-close once the layout crosses into the desktop nav (lg,
        // 1024px), and keep an open panel's measured height correct
        // through resizes/orientation changes below that breakpoint.
        var desktopQuery = window.matchMedia('(min-width: 1024px)');

        function handleViewportChange() {
            if (desktopQuery.matches) {
                close();
            } else if (isOpen()) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        }

        if (desktopQuery.addEventListener) {
            desktopQuery.addEventListener('change', handleViewportChange);
        } else if (desktopQuery.addListener) {
            // Safari < 14 fallback
            desktopQuery.addListener(handleViewportChange);
        }

        window.addEventListener('resize', function () {
            if (isOpen()) panel.style.maxHeight = panel.scrollHeight + 'px';
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        try {
            initMobileMenu('heroMenuToggle', 'heroMobileMenu');
            initMobileMenu('stickyMenuToggle', 'stickyMobileMenu');
        } catch (err) {
            console.error('[mobile-menu] Initialization failed:', err);
        }
    });

    // Payment Modal
    function setupModal(modal) {
        var container = modal.querySelector('.modal-container');
        var closeBtn = modal.querySelector('.modal-close');
        var openTriggers = document.querySelectorAll(
            '[data-modal-target="' + modal.id + '"]'
        );
        var lastFocused = null;
        var isOpen = false;

        function open() {
            if (isOpen || !container) return;
            isOpen = true;
            lastFocused = document.activeElement;

            modal.classList.add('is-visible');
            document.body.classList.add('overflow-hidden');

            // Force a reflow so the "closed" state is committed before we
            // flip to "open" — otherwise there's nothing to transition from.
            void modal.offsetWidth;

            modal.classList.add('is-open');
            document.addEventListener('keydown', onKeydown);
            if (closeBtn) closeBtn.focus();

            document.querySelector(".hm-floating-toggle").classList.add("hidden")
        }

        function close() {
            if (!isOpen || !container) return;
            isOpen = false;

            modal.classList.remove('is-open');
            document.removeEventListener('keydown', onKeydown);

            var onTransitionEnd = function (e) {
                if (e.target !== container) return;
                container.removeEventListener('transitionend', onTransitionEnd);
                modal.classList.remove('is-visible');
                document.body.classList.remove('overflow-hidden');
                if (lastFocused && typeof lastFocused.focus === 'function') {
                    lastFocused.focus();
                }
            };
            container.addEventListener('transitionend', onTransitionEnd);

            document.querySelector(".hm-floating-toggle").classList.remove("hidden")
        }

        function onKeydown(e) {
            if (e.key === 'Escape') close();
        }

        openTriggers.forEach(function (btn) {
            btn.addEventListener('click', open);
        });

        if (closeBtn) closeBtn.addEventListener('click', close);

        // Click on the dark backdrop closes it; clicks inside
        // .modal-container are a different target, so they're ignored.
        modal.addEventListener('click', function (e) {
            if (e.target === modal) close();
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        document.querySelectorAll('.modal-wrapper').forEach(setupModal);
    });
})();