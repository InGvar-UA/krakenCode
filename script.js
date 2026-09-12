gsap.registerPlugin(ScrollTrigger);

const pageModel = document.getElementById('page-model');

// Создаем ультимативный таймлайн для скролла
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "+=4000", 
        scrub: 1.5, // Делаем движение мыши ещё более плавным и весомым    
        pin: true,     
        onUpdate: (self) => {
            const progress = self.progress;
            
            document.querySelectorAll('.text-block').forEach((block, index) => {
                const step = 1 / 5; 
                if (progress >= index * step && progress < (index + 1) * step) {
                    block.classList.add('active');
                } else {
                    block.classList.remove('active');
                }
            });
        }
    }
});

// КИНЕМАТОГРАФИЧНЫЙ РАЗЛЕТ И ПОВОРОТ
tl.to(pageModel, {
    rotateX: 50,
    rotateY: -30,
    rotateZ: 20,
    duration: 1
})
.to('.layer-ui-elements', {
    translateZ: 320, // Увеличиваем глубину разлета
    x: 50,
    y: -40,
    duration: 1
}, 0)
.to('.layer-glass-panels', {
    translateZ: 180,
    x: -30,
    y: 20,
    duration: 1
}, 0)
.to('.layer-grid', {
    translateZ: 90,
    duration: 1
}, 0)
.to('.layer-base', {
    translateZ: -100,
    boxShadow: "0 100px 200px rgba(0,0,0,0.9)",
    duration: 1
}, 0);

// ИНТЕРАКТИВНЫЙ МИКРО-ПАРАЛЛАКС ОТ МЫШИ
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
    
    gsap.to('#scene-3d', {
        rotateY: mouseX * 20, 
        rotateX: -mouseY * 20, 
        duration: 1,
        ease: "power2.out"
    });
});
