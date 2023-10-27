const textoAnimado = document.getElementById('texto-animado');

textoAnimado.addEventListener('mouseover', () => {
    textoAnimado.style.transform = 'scale(1.2)';
    textoAnimado.style.transition = 'transform 0.3s';
    textoAnimado.style.cursor = 'pointer';
});

textoAnimado.addEventListener('mouseout', () => {
    textoAnimado.style.transform = 'scale(1)';
});
