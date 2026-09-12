// Регистрируем плагин ScrollTrigger в системе GSAP
gsap.registerPlugin(ScrollTrigger);

const pageModel = document.getElementById('page-model');

// 1. ТАЙМЛАЙН СКРОЛЛА: СИНХРОННЫЙ РАЗЛЕТ И СМЕНА УСЛУГ
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "+=4000", 
        scrub: 1.2,    
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

// Настраиваем 3D траекторию деконструкции
tl.to(pageModel, {
    rotateX: 45,
    rotateY: -35,
    rotateZ: 15,
    duration: 1
})
.to('.layer-ui-elements', {
    translateZ: 280,
    x: 40,
    y: -30,
    duration: 1
}, 0)
.to('.layer-glass-panels', {
    translateZ: 160,
    x: -20,
    y: 20,
    duration: 1
}, 0)
.to('.layer-grid', {
    translateZ: 70,
    duration: 1
}, 0)
.to('.layer-base', {
    translateZ: -80,
    boxShadow: "0 60px 120px rgba(0,0,0,0.08)",
    duration: 1
}, 0);


// 2. ИНТЕРАКТИВНЫЙ МИКРО-ПАРАЛЛАКС ОТ МЫШИ
let mouseX = 0;
let mouseY = 0;

window.addEventListener('mousemove', (e) => {
    mouseX = (e.clientX / window.innerWidth) - 0.5;
    mouseY = (e.clientY / window.innerHeight) - 0.5;
    
    gsap.to('#scene-3d', {
        rotateY: mouseX * 15, 
        rotateX: -mouseY * 15, 
        duration: 0.8,
        ease: "power2.out"
    });
});
