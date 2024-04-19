document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery img');

    let angle = 0;

    setInterval(() => {
        angle += 1;
        images.forEach((image, index) => {
            const offsetX = 200 * Math.cos((angle + index * 36) * Math.PI / 180);
            const offsetY = 200 * Math.sin((angle + index * 36) * Math.PI / 180);
            image.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
        });
    }, 50);
});