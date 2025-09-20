// ============================================================
// CONFETE SIMPLES
// ============================================================
function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * window.innerWidth + 'px';
    confetti.style.background = `hsl(${Math.random()*360}, 80%, 60%)`;
    const size = Math.random() * 8 + 4;
    confetti.style.width = confetti.style.height = size + 'px';
    confetti.style.animationDuration = (Math.random() * 3 + 2) + 's';
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 4000);
}

// Confete contínuo
setInterval(createConfetti, 300);

// ============================================================
// EMOJIS SEGUINDO O MOUSE
// ============================================================
document.addEventListener('mousemove', (e) => {
    if(Math.random() > 0.8) return; // nem sempre pra não poluir
    const emoji = document.createElement('div');
    const emojis = ['🎉','💌','❤️','🥳','🍰'];
    emoji.textContent = emojis[Math.floor(Math.random()*emojis.length)];
    emoji.style.position = 'absolute';
    emoji.style.left = e.pageX + 'px';
    emoji.style.top = e.pageY + 'px';
    emoji.style.fontSize = (Math.random()*20+16)+'px';
    emoji.style.pointerEvents = 'none';
    emoji.style.userSelect = 'none';
    emoji.style.zIndex = 9999;
    document.body.appendChild(emoji);
    setTimeout(() => {
        emoji.style.transform = "translateY(-30px) scale(0.5)";
        emoji.style.opacity = "0";
    }, 50);
    setTimeout(()=>emoji.remove(), 1200);
});

// ============================================================
// ALERT INTERATIVO
// ============================================================
document.querySelector('.envelope-body').addEventListener('click', ()=>{
    alert("Sara! Matheus mandou falar que te ama! Esse recado é do Mateus ❤️. Já o meu... Vai tomar no cu 😡");
});

// ============================================================
// TOAST MENSAGEM ALEATÓRIA
// ============================================================
function showToast(msg){
    const t = document.createElement('div');
    t.className = 'toast';
    t.textContent = msg;
    document.body.appendChild(t);
    setTimeout(()=>t.remove(),2500);
}

const frases = [
    "VAI SE FUDER MATHEUS! 😡",
    "ME AVISA COM ANTECEDÊNCIA DA PRÓXIMA!",
    "SARA PARABENS, MATHEUS TE AMA! ❤️",
    "MATEUS EU TE ODEIO! 😤",
    "ME MANDA 20 NO PIX! 💸",
];

setInterval(()=>{
    showToast(frases[Math.floor(Math.random()*frases.length)]);
},5000);
