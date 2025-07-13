document.querySelectorAll('.interactive-img').forEach(img => {
    const text = document.createElement('div');
    text.classList.add('img-hover-text');
    text.innerText = img.getAttribute('data-text');
    text.style.position = 'absolute';
    text.style.display = 'none';
    text.style.background = 'rgba(0,0,0,0.7)';
    text.style.color = '#fff';
    text.style.padding = '5px 10px';
    text.style.borderRadius = '5px';
    document.body.appendChild(text);

    img.addEventListener('mouseover', (e) => {
        text.style.top = `${e.pageY + 10}px`;
        text.style.left = `${e.pageX + 10}px`;
        text.style.display = 'block';
    });

    img.addEventListener('mousemove', (e) => {
        text.style.top = `${e.pageY + 10}px`;
        text.style.left = `${e.pageX + 10}px`;
    });

    img.addEventListener('mouseout', () => {
        text.style.display = 'none';
    });
});
