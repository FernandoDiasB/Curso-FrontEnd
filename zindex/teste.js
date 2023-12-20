const div = document.querySelector('.rotate-on-hover');

div.addEventListener('mouseenter', () => {
    div.style.transform = 'rotate(45deg)';
});

div.addEventListener('mouseleave', () => {
    div.style.transform = 'rotate(0deg)'; // Retorna a rotação para 0 quando o mouse deixa a div
});
