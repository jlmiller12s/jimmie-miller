// Main JavaScript

// ==========================================
// GLOBAL STATE
// ==========================================
const state = {
    isLoaded: false,
    activeFilter: 'all'
};

// ==========================================
// LOADER
// ==========================================
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        loader.classList.add('hidden');
        state.isLoaded = true;
        initAOS();
    }, 1500);
});

// ==========================================
// NAVIGATION
// ==========================================
const nav = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');
const navLinks = document.querySelectorAll('.nav-link');

// Scroll behavior
let lastScroll = 0;
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Add scrolled class
    if (currentScroll > 100) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    // Update active nav link
    updateActiveNavLink();

    lastScroll = currentScroll;
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Update active nav link based on scroll position
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 150;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
}

// ==========================================
// SMOOTH SCROLLING
// ==========================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==========================================
// WORK FILTERING
// ==========================================
const filterButtons = document.querySelectorAll('.filter-btn');
const workItems = document.querySelectorAll('.work-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Get filter value
        const filterValue = button.getAttribute('data-filter');
        state.activeFilter = filterValue;

        // Filter items
        workItems.forEach(item => {
            const categories = item.getAttribute('data-category').split(' ');
            
            if (filterValue === 'all' || categories.includes(filterValue)) {
                item.classList.remove('hidden');
                // Re-trigger animation
                setTimeout(() => {
                    item.style.animation = 'none';
                    setTimeout(() => {
                        item.style.animation = '';
                    }, 10);
                }, 10);
            } else {
                item.classList.add('hidden');
            }
        });
    });
});

// ==========================================
// ANIMATIONS ON SCROLL (AOS)
// ==========================================
function initAOS() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, observerOptions);

    // Observe all elements with data-aos
    document.querySelectorAll('[data-aos]').forEach(el => {
        observer.observe(el);
    });
}

// ==========================================
// CURSOR EFFECT (Desktop only - disabled during intro)
// ==========================================
function initCustomCursor() {
    if (window.innerWidth > 768) {
        const cursor = document.createElement('div');
        cursor.classList.add('custom-cursor');
        document.body.appendChild(cursor);

        const cursorFollower = document.createElement('div');
        cursorFollower.classList.add('cursor-follower');
        document.body.appendChild(cursorFollower);

    let mouseX = 0;
    let mouseY = 0;
    let followerX = 0;
    let followerY = 0;

    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.left = mouseX + 'px';
        cursor.style.top = mouseY + 'px';
    });

    // Smooth follower
    function animateFollower() {
        const dx = mouseX - followerX;
        const dy = mouseY - followerY;
        
        followerX += dx * 0.1;
        followerY += dy * 0.1;
        
        cursorFollower.style.left = followerX + 'px';
        cursorFollower.style.top = followerY + 'px';
        
        requestAnimationFrame(animateFollower);
    }
    animateFollower();

    // Hover effects
    const hoverElements = document.querySelectorAll('a, button, .work-item');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.classList.add('hover');
            cursorFollower.classList.add('hover');
        });
        el.addEventListener('mouseleave', () => {
            cursor.classList.remove('hover');
            cursorFollower.classList.remove('hover');
        });
    });

        // Add cursor styles
        const cursorStyles = document.createElement('style');
        cursorStyles.innerHTML = `
            .custom-cursor {
                width: 10px;
                height: 10px;
                background: var(--color-accent);
                border-radius: 50%;
                position: fixed;
                pointer-events: none;
                z-index: 9999;
                transform: translate(-50%, -50%);
                transition: width 0.3s, height 0.3s;
            }
            
            .cursor-follower {
                width: 40px;
                height: 40px;
                border: 1px solid var(--color-accent);
                border-radius: 50%;
                position: fixed;
                pointer-events: none;
                z-index: 9998;
                transform: translate(-50%, -50%);
                transition: width 0.3s, height 0.3s, opacity 0.3s;
                opacity: 0.5;
            }
            
            .custom-cursor.hover {
                width: 20px;
                height: 20px;
            }
            
            .cursor-follower.hover {
                width: 60px;
                height: 60px;
                opacity: 0.3;
            }
            
            #main-content * {
                cursor: none !important;
            }
        `;
        document.head.appendChild(cursorStyles);
    }
}

// Initialize custom cursor when portfolio is revealed
window.initCustomCursor = initCustomCursor;

// ==========================================
// PARALLAX EFFECT
// ==========================================
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-content');
    
    parallaxElements.forEach(el => {
        const speed = 0.5;
        el.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==========================================
// TEXT ANIMATION
// ==========================================
function animateText() {
    const titleLines = document.querySelectorAll('.hero-title .line');
    
    titleLines.forEach((line, index) => {
        setTimeout(() => {
            line.style.animation = 'slideUp 0.8s ease forwards';
        }, index * 100);
    });
}

// Add text animation styles
const textAnimStyles = document.createElement('style');
textAnimStyles.innerHTML = `
    @keyframes slideUp {
        from {
            transform: translateY(100%);
            opacity: 0;
        }
        to {
            transform: translateY(0);
            opacity: 1;
        }
    }
    
    .hero-title .line {
        display: inline-block;
        overflow: hidden;
    }
`;
document.head.appendChild(textAnimStyles);

// Trigger text animation on load
window.addEventListener('load', () => {
    setTimeout(animateText, 1600);
});

// ==========================================
// FORM HANDLING (if needed)
// ==========================================
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // Add your form submission logic here
        alert('Form submitted! (Add your own logic here)');
    });
}

// ==========================================
// CHATBOT FUNCTIONALITY
// ==========================================
const chatbotOrb = document.getElementById('chatbot-orb');
const chatbotInterface = document.getElementById('chatbot-interface');
const closeChatbotBtn = document.getElementById('close-chatbot');
const chatInput = document.querySelector('.chat-input input');
const chatSendBtn = document.querySelector('.chat-input button');
const chatBody = document.querySelector('.chat-body');

if (chatbotOrb && chatbotInterface && closeChatbotBtn) {
    // Toggle chatbot interface
    chatbotOrb.addEventListener('click', () => {
        chatbotInterface.classList.toggle('active');
        if (chatbotInterface.classList.contains('active')) {
            // Focus on input when opening
            setTimeout(() => {
                if (chatInput) chatInput.focus();
            }, 300);
        }
    });

    closeChatbotBtn.addEventListener('click', () => {
        chatbotInterface.classList.remove('active');
    });

    // Handle send button click
    if (chatSendBtn) {
        chatSendBtn.addEventListener('click', handleChatMessage);
    }

    // Handle enter key in input
    if (chatInput) {
        chatInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                handleChatMessage();
            }
        });
    }
}

// Chat message handler
function handleChatMessage() {
    if (!chatInput || !chatBody) return;

    const message = chatInput.value.trim();
    if (message === '') return;

    // Add user message to chat
    addMessageToChat('user', message);
    chatInput.value = '';

    // Generate AI response
    setTimeout(() => {
        const response = generateAIResponse(message);
        addMessageToChat('ai', response);
    }, 1000);
}

// Add message to chat body
function addMessageToChat(sender, message) {
    if (!chatBody) return;

    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', `${sender}-message`);

    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = message;

    messageDiv.appendChild(messageContent);
    chatBody.appendChild(messageDiv);

    // Scroll to bottom
    chatBody.scrollTop = chatBody.scrollHeight;

    // Add basic styling for messages
    if (!document.querySelector('#chatbot-styles')) {
        const styles = document.createElement('style');
        styles.id = 'chatbot-styles';
        styles.innerHTML = `
            .chat-message {
                margin-bottom: 12px;
                display: flex;
                ${sender === 'user' ? 'justify-content: flex-end;' : 'justify-content: flex-start;'}
            }

            .message-content {
                max-width: 80%;
                padding: 8px 12px;
                border-radius: 12px;
                font-size: 0.9rem;
                line-height: 1.4;
            }

            .user-message .message-content {
                background-color: var(--color-accent);
                color: var(--color-black);
            }

            .ai-message .message-content {
                background-color: rgba(255, 255, 255, 0.1);
                color: var(--color-text);
                border: 1px solid rgba(255, 255, 255, 0.1);
            }
        `;
        document.head.appendChild(styles);
    }
}

// Simple AI response generator
function generateAIResponse(userMessage) {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
        return "Hello! I'm Jimmie's AI assistant. How can I help you learn more about his work?";
    } else if (lowerMessage.includes('portfolio') || lowerMessage.includes('work') || lowerMessage.includes('projects')) {
        return "Jimmie's portfolio showcases his expertise in AEM development, AI automation, UI/UX design, and Adobe Experience Manager. You can explore his featured projects like Altared Alchemie and various design work.";
    } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('reach')) {
        return "You can contact Jimmie at contact@jimmiemiller.com or connect with him on LinkedIn. He's always interested in new projects and opportunities!";
    } else if (lowerMessage.includes('ai') || lowerMessage.includes('automation') || lowerMessage.includes('altared')) {
        return "Jimmie founded Altared Alchemie, a faith-driven AI consultancy. He helps businesses automate workflows and create AI-powered solutions. Check out altaredalchemie.com for more info!";
    } else if (lowerMessage.includes('skills') || lowerMessage.includes('expertise')) {
        return "Jimmie's expertise includes AEM Development, React.js, UI/UX Design, Adobe Creative Suite, SEO optimization, and AI automation. He has 11+ years of experience in digital development.";
    } else if (lowerMessage.includes('experience') || lowerMessage.includes('background')) {
        return "Jimmie has worked with companies like LeapPoint, REVOLT, Lincoln Center, AB InBev, and Adobe. He specializes in creating impactful digital experiences and AI-powered solutions.";
    } else if (lowerMessage.includes('thank') || lowerMessage.includes('thanks')) {
        return "You're very welcome! Feel free to ask me anything else about Jimmie's work or experience.";
    } else {
        return "That's interesting! Jimmie is a versatile developer with expertise in AEM, AI automation, and UI/UX design. Is there something specific you'd like to know about his work or skills?";
    }
}

// ==========================================
// PERFORMANCE OPTIMIZATION
// ==========================================
// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// ==========================================
// CONSOLE MESSAGE
// ==========================================
console.log('%c👋 Hello there!', 'font-size: 20px; font-weight: bold; color: #00ff88;');
console.log('%cLooking for something? Check out the code!', 'font-size: 14px; color: #808080;');
console.log('%c✉️ Get in touch: contact@jimmiemiller.com', 'font-size: 14px; color: #00ff88;');

// ==========================================
// EASTER EGG
// ==========================================
let clickCount = 0;
const logo = document.querySelector('.nav-logo');

if (logo) {
    logo.addEventListener('click', () => {
        clickCount++;
        if (clickCount === 5) {
            document.body.style.animation = 'rainbow 2s linear infinite';
            setTimeout(() => {
                document.body.style.animation = '';
                clickCount = 0;
            }, 4000);
        }
    });
}

const rainbowStyles = document.createElement('style');
rainbowStyles.innerHTML = `
    @keyframes rainbow {
        0% { filter: hue-rotate(0deg); }
        100% { filter: hue-rotate(360deg); }
    }
`;
document.head.appendChild(rainbowStyles);

