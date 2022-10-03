const help = document.getElementById('help');

help.addEventListener('click', typeText);

function typeText() {
    const p = document.createElement('p');
    p.textContent = "Seriously? What's so hard to understand about this? It's a red button!"
    p.style.cursor = 'text'; 
    p.style.fontWeight = 300;
    p.style.textAlign = 'center';
    document.body.appendChild(p);
    help.removeEventListener('click', typeText);
}