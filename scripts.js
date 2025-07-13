function setupGalleryTextToggles() {
    const isMobile = window.matchMedia("(max-width: 900px)").matches;
    document.querySelectorAll('.gallery-item').forEach(item => {
        const text = item.querySelector('.gallery-text');
        // Remove all previous click handlers
        item.onclick = null;

        if (isMobile) {
            text.style.opacity = '0';
            text.style.pointerEvents = 'none';

            item.onclick = function(e) {
                e.stopPropagation();
                // If already open, close it
                if (text.style.opacity === '1') {
                    text.style.opacity = '0';
                    text.style.pointerEvents = 'none';
                } else {
                    // Hide all others
                    document.querySelectorAll('.gallery-text').forEach(t => {
                        t.style.opacity = '0';
                        t.style.pointerEvents = 'none';
                    });
                    text.style.opacity = '1';
                    text.style.pointerEvents = 'auto';
                }
            };
        } else {
            text.style.opacity = '0';
            text.style.pointerEvents = 'none';
            item.onclick = null;
        }
    });

    // Tap anywhere else closes open captions
    if (isMobile) {
        document.addEventListener('click', function hideAllGalleryText(e) {
            if (!e.target.closest('.gallery-item')) {
                document.querySelectorAll('.gallery-text').forEach(t => {
                    t.style.opacity = '0';
                    t.style.pointerEvents = 'none';
                });
            }
        });
    }
}


function setupMobileMenu() {
    const navToggle = document.querySelector('.nav-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    if (navToggle && mobileMenu) {
        navToggle.addEventListener('click', function(e) {
            e.stopPropagation();
            mobileMenu.classList.toggle('open');
        });

        document.addEventListener('click', function(e) {
            if (mobileMenu.classList.contains('open') && !mobileMenu.contains(e.target) && e.target !== navToggle) {
                mobileMenu.classList.remove('open');
            }
        });
    }
}

window.addEventListener('resize', function() {
    setupGalleryTextToggles();
});

window.addEventListener('DOMContentLoaded', function() {
    setupGalleryTextToggles();
    setupMobileMenu();
});
