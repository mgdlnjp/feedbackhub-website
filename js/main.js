// Initialize Lucide icons
document.addEventListener('DOMContentLoaded', () => {
    lucide.createIcons();

    initMobileMenu();
    initFAQ();
    initWidgetDemo();
    initVideoModal();
    initScrollAnimations();
    initSmoothScroll();
});

// Mobile Menu
function initMobileMenu() {
    const mobileMenuBtn = document.getElementById('mobileMenuBtn');
    const navMenu = document.getElementById('navMenu');

    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
}

// FAQ Accordion
function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });

            // Open clicked item if it wasn't active
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
}

// Widget Demo
function initWidgetDemo() {
    const widgetTrigger = document.getElementById('widgetTrigger');
    const widgetModal = document.getElementById('widgetModal');
    const closeWidget = document.getElementById('closeWidget');
    const widgetTypeBtns = document.querySelectorAll('.widget-type-btn');
    const widgetForm = document.querySelector('.widget-form');

    // Open widget modal
    if (widgetTrigger && widgetModal) {
        widgetTrigger.addEventListener('click', () => {
            widgetModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close widget modal
    if (closeWidget && widgetModal) {
        closeWidget.addEventListener('click', () => {
            widgetModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close on backdrop click
        widgetModal.addEventListener('click', (e) => {
            if (e.target === widgetModal) {
                widgetModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }

    // Widget type selection
    widgetTypeBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            widgetTypeBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
        });
    });

    // Widget form submission
    if (widgetForm) {
        widgetForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // Show success message
            const formData = new FormData(widgetForm);
            showNotification('Merci pour votre feedback ! (Démo)', 'success');

            // Close modal
            if (widgetModal) {
                widgetModal.classList.remove('active');
                document.body.style.overflow = '';
            }

            // Reset form
            widgetForm.reset();

            // Reset widget type selection
            widgetTypeBtns.forEach(b => b.classList.remove('active'));
            if (widgetTypeBtns.length > 0) {
                widgetTypeBtns[0].classList.add('active');
            }
        });
    }
}

// Video Modal
function initVideoModal() {
    const demoBtn = document.getElementById('demoBtn');
    const videoModal = document.getElementById('videoModal');
    const closeVideo = document.getElementById('closeVideo');

    // Open video modal
    if (demoBtn && videoModal) {
        demoBtn.addEventListener('click', (e) => {
            e.preventDefault();
            videoModal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close video modal
    if (closeVideo && videoModal) {
        closeVideo.addEventListener('click', () => {
            videoModal.classList.remove('active');
            document.body.style.overflow = '';
        });

        // Close on backdrop click
        videoModal.addEventListener('click', (e) => {
            if (e.target === videoModal) {
                videoModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });

        // Close on Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && videoModal.classList.contains('active')) {
                videoModal.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
}

// Scroll Animations
function initScrollAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        }
    );

    // Observe all cards and sections
    const elements = document.querySelectorAll('.feature-card, .problem-card, .testimonial-card, .pricing-card, .timeline-item');
    elements.forEach(el => {
        observer.observe(el);
    });
}

// Smooth Scroll
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Skip if it's just "#" or modal triggers
            if (href === '#' || href === '#signup' || href === '#login' || href === '#demo') {
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const offsetTop = target.offsetTop - 80; // Account for sticky navbar

                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Show Notification
function showNotification(message, type = 'info') {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#10B981' : '#2563EB'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        z-index: 10001;
        animation: slideInRight 0.3s ease;
    `;
    notification.textContent = message;

    // Add to body
    document.body.appendChild(notification);

    // Remove after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 3000);
}

// Add notification animations
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }

    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Navbar scroll effect
let lastScroll = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Handle signup/login links (demo)
document.addEventListener('click', (e) => {
    const target = e.target.closest('a[href="#signup"], a[href="#login"]');
    if (target) {
        e.preventDefault();
        const action = target.getAttribute('href') === '#signup' ? 'inscription' : 'connexion';
        showNotification(`Formulaire ${action} (En construction)`, 'info');
    }
});
