document.addEventListener('DOMContentLoaded', function() {
    // ======================
    // Typing Animation
    // ======================
    const name = "Yash Kumar Jain";
    const typedName = document.getElementById('typed-name');
    let i = 0;
    let typingComplete = false;
    
    function typeWriter() {
        if (i < name.length) {
            typedName.innerHTML += name.charAt(i);
            i++;
            setTimeout(typeWriter, 150); // Typing speed (milliseconds)
        } else {
            typingComplete = true;
            // Keep blinking cursor after typing completes
            typedName.style.animation = "blink-caret 0.75s step-end infinite";
            
            // Add a subtle pulse animation after typing completes
            typedName.classList.add('animate-pulse');
        }
    }
    
    // Start typing animation after a slight delay
    setTimeout(typeWriter, 1000);

    // ======================
    // Dropdown Menu
    // ======================
    const menuIcon = document.querySelector('.menu-icon');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    menuIcon.addEventListener('click', function(e) {
        e.stopPropagation();
        dropdownContent.classList.toggle('active');
        this.textContent = dropdownContent.classList.contains('active') ? '✕' : '☰';
    });
    
    // Close dropdown when clicking outside
    document.addEventListener('click', function(e) {
        if (!menuIcon.contains(e.target) && !dropdownContent.contains(e.target)) {
            dropdownContent.classList.remove('active');
            menuIcon.textContent = '☰';
        }
    });

    // ======================
    // Profile Image Effects
    // ======================
    const profileImage = document.querySelector('.profile-image');
    
    profileImage.addEventListener('mouseover', function() {
        this.style.transform = 'scale(1.05) rotate(3deg)';
        this.style.borderColor = 'rgba(255, 255, 255, 0.7)';
        this.style.boxShadow = '0 30px 60px rgba(0, 0, 0, 0.3)';
    });
    
    profileImage.addEventListener('mouseout', function() {
        this.style.transform = 'scale(1)';
        this.style.borderColor = 'rgba(255, 255, 255, 0.4)';
        this.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.2)';
    });

    // ======================
    // Particles.js Configuration
    // ======================
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 100,
                "density": {
                    "enable": true,
                    "value_area": 1000
                }
            },
            "color": {
                "value": "#B5838D"
            },
            "shape": {
                "type": ["circle", "triangle", "polygon"],
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                },
                "polygon": {
                    "nb_sides": 5
                }
            },
            "opacity": {
                "value": 0.4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.1,
                    "sync": false
                }
            },
            "size": {
                "value": 4,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 3,
                    "size_min": 0.5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": true,
                "distance": 120,
                "color": "#E5989B",
                "opacity": 0.3,
                "width": 1.2
            },
            "move": {
                "enable": true,
                "speed": 1.5,
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": true,
                    "rotateX": 800,
                    "rotateY": 1600
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "repulse"
                },
                "onclick": {
                    "enable": true,
                    "mode": "bubble"
                },
                "resize": true
            },
            "modes": {
                "grab": {
                    "distance": 150,
                    "line_linked": {
                        "opacity": 0.8
                    }
                },
                "bubble": {
                    "distance": 200,
                    "size": 20,
                    "duration": 1,
                    "opacity": 0.8,
                    "speed": 2
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.5
                },
                "push": {
                    "particles_nb": 6
                },
                "remove": {
                    "particles_nb": 3
                }
            }
        },
        "retina_detect": true
    });

    // ======================
    // Floating Elements
    // ======================
    const floatingContainer = document.getElementById('floatingElements');
    const shapes = ['circle', 'triangle', 'square', 'blob'];
    const colors = [
        'rgba(255, 180, 162, 0.4)',
        'rgba(230, 152, 155, 0.4)',
        'rgba(181, 131, 141, 0.4)',
        'rgba(109, 104, 117, 0.4)'
    ];
    
    for (let i = 0; i < 25; i++) {
        const element = document.createElement('div');
        element.classList.add('floating-element');
        
        // Random size between 10px and 40px
        const size = Math.random() * 30 + 10;
        element.style.width = `${size}px`;
        element.style.height = `${size}px`;
        
        // Random shape
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        if (shape === 'triangle') {
            element.style.clipPath = 'polygon(50% 0%, 0% 100%, 100% 100%)';
            element.style.borderRadius = '0';
        } else if (shape === 'square') {
            element.style.borderRadius = '5px';
        } else if (shape === 'blob') {
            element.style.borderRadius = '50% 30% 70% 40% / 60% 40% 60% 40%';
        }
        
        // Random color
        element.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
        
        // Random position
        element.style.left = `${Math.random() * 100}%`;
        element.style.bottom = `-${size}px`;
        
        // Random animation duration between 10s and 30s
        const duration = Math.random() * 20 + 10;
        element.style.animationDuration = `${duration}s`;
        
        // Random delay
        element.style.animationDelay = `${Math.random() * 10}s`;
        
        floatingContainer.appendChild(element);
    }

    // ======================
    // Initialize AOS (Animate On Scroll)
    // ======================
    AOS.init({
        duration: 800,
        easing: 'ease-in-out',
        once: true,
        mirror: false
    });
});