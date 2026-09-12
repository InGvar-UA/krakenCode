// Интерактивный трекинг мыши для «живого» фона
document.addEventListener('mousemove', (e) => {
    // Находим координаты мыши относительно центра
    const x = (e.clientX / window.innerWidth) - 0.5;
    const y = (e.clientY / window.innerHeight) - 0.5;

    // Плавно смещаем каждую сферу с разной инерцией (эффект параллакса)
    gsap.to('#orb-blue', {
        x: x * 60,
        y: y * 60,
        duration: 1.5,
        ease: "power2.out"
    });

    gsap.to('#orb-amber', {
        x: -x * 40,
        y: -y * 40,
        duration: 2,
        ease: "power2.out"
    });

    gsap.to('#orb-silver', {
        x: x * 30,
        y: -y * 50,
        duration: 1.8,
        ease: "power2.out"
    });
});

console.log("Интерактивный живой фон Apple-Style успешно активирован.");
