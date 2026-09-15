(function () {
    'use strict';

    /** Debounce helper for resize listeners. */
    function debounce(fn, wait) {
        var t;

        return function () {
            var args = arguments;

            clearTimeout(t);

            t = setTimeout(function () {
                fn.apply(null, args);
            }, wait);
        };
    }

    /* ----------------------------------------------------------------
     * Floating toggle controller
     * ---------------------------------------------------------------- */

    function initFloatingToggle() {
        var toggle = document.getElementById('hmFloatingToggle');
        var indicator = toggle && toggle.querySelector('.hm-float-indicator');

        var buttons = toggle
            ? Array.prototype.slice.call(
                toggle.querySelectorAll('.hm-float-tab')
            )
            : [];

        var mainEl = document.getElementById('siteMain');
        var machineView = document.getElementById('hmMachineView');
        var footer = document.getElementById('Footer');

        if (
            !toggle ||
            !indicator ||
            !buttons.length ||
            !mainEl ||
            !machineView
        ) {
            return;
        }

        /* ------------------------------------------------------------
         * Toggle visibility
         * ------------------------------------------------------------
         * Human mode:
         *   - Hidden before 200px
         *   - Visible after 200px
         *
         * Machine mode:
         *   - Always visible
         * ------------------------------------------------------------ */

        var currentMode = 'human';

        function updateToggleVisibility() {
            var shouldShow =
                currentMode === 'machine' ||
                window.scrollY >= 200;

            toggle.classList.toggle(
                'is-visible',
                shouldShow
            );
        }

        window.addEventListener(
            'scroll',
            updateToggleVisibility,
            { passive: true }
        );

        /* ------------------------------------------------------------
         * Move active indicator
         * ------------------------------------------------------------ */

        function moveIndicator(btn) {
            indicator.style.left = btn.offsetLeft + 'px';
            indicator.style.width = btn.offsetWidth + 'px';
        }

        /* ------------------------------------------------------------
         * Set Human / Machine mode
         * ------------------------------------------------------------ */

        function setMode(mode, opts) {
            opts = opts || {};

            var isMachine = mode === 'machine';

            // Keep track of the current mode so the visibility
            // logic knows whether the toggle should remain visible.
            currentMode = mode;

            buttons.forEach(function (btn) {
                var isActive =
                    btn.getAttribute('data-hm-mode') === mode;

                btn.classList.toggle(
                    'is-active',
                    isActive
                );

                btn.setAttribute(
                    'aria-pressed',
                    isActive ? 'true' : 'false'
                );

                if (isActive) {
                    moveIndicator(btn);
                }
            });

            // Human mode:
            // Show the real site and hide machine view.
            //
            // Machine mode:
            // Hide the real site and show machine view.
            mainEl.hidden = isMachine;
            machineView.hidden = !isMachine;

            // Hide footer while Machine mode is active.
            if (footer) {
                footer.classList.toggle(
                    'hidden',
                    isMachine
                );
            }

            // Update toggle visibility immediately after changing mode.
            updateToggleVisibility();

            // Save selected mode for this browser session.
            if (!opts.silent) {
                try {
                    sessionStorage.setItem(
                        'hmMode',
                        mode
                    );
                } catch (err) {
                    /* storage unavailable */
                }
            }
        }

        /* ------------------------------------------------------------
         * Button click handlers
         * ------------------------------------------------------------ */

        buttons.forEach(function (btn) {
            btn.addEventListener('click', function () {
                setMode(
                    btn.getAttribute('data-hm-mode')
                );
            });
        });

        /* ------------------------------------------------------------
         * Restore previous mode
         * ------------------------------------------------------------ */

        var storedMode = null;

        try {
            storedMode = sessionStorage.getItem('hmMode');
        } catch (err) {
            /* storage unavailable */
        }

        setMode(
            storedMode === 'machine'
                ? 'machine'
                : 'human',
            {
                silent: true
            }
        );

        /* ------------------------------------------------------------
         * Re-align indicator on resize
         * ------------------------------------------------------------ */

        window.addEventListener(
            'resize',
            debounce(function () {
                var current =
                    toggle.querySelector(
                        '.hm-float-tab.is-active'
                    );

                if (current) {
                    moveIndicator(current);
                }
            }, 150)
        );
    }

    /* ----------------------------------------------------------------
     * Init
     * ---------------------------------------------------------------- */

    document.addEventListener(
        'DOMContentLoaded',
        function () {
            var toggle =
                document.getElementById(
                    'hmFloatingToggle'
                );

            if (!toggle) {
                return;
            }

            try {
                initFloatingToggle();
            } catch (err) {
                console.error(
                    '[human-machine-toggle] Initialization failed:',
                    err
                );
            }
        }
    );
})();