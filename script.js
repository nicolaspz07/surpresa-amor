
// --- CONFIGURAÇÃO IMPORTANTE ---
// Coloque a data de início do namoro aqui no formato: ANO-MÊS-DIA
const dataInicioNamoro = new Date('2024-09-07 23:00:00'); // Exemplo: 25 de Outubro de 2023 às 20h

// Coloque o nome das suas fotos aqui
const listaDeFotos = [
    'foto/foto1.jpg',
    'foto/foto2.jpg',
    'foto/foto3.jpg',
    'foto/foto4.jpg',
    'foto/foto5.jpg',
];


// --- FIM DA CONFIGURAÇÃO ---


// Pega os elementos do HTML
const envelope = document.getElementById('envelope');
const conteudoSurpresa = document.getElementById('conteudo-surpresa');
const elementoTempo = document.getElementById('tempo-juntos');
const elementoFoto = document.getElementById('foto-casal');

let fotoAtual = 0;

// Função que abre a surpresa
envelope.addEventListener('click', () => {
    envelope.style.display = 'none'; // Esconde o envelope
    conteudoSurpresa.classList.remove('escondido'); // Mostra o conteúdo

    // Inicia o contador e o slideshow
    iniciarContador();
    iniciarSlideshow();
});

// Função para atualizar o contador de tempo
function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicioNamoro;

    // Cálculos de tempo
    let segundos = Math.floor(diferenca / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);

    horas %= 24;
    minutos %= 60;
    segundos %= 60;
    
    // Formata o texto para exibição
    elementoTempo.textContent = `${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;
}

// Função para trocar as fotos
function trocarFoto() {
    fotoAtual = (fotoAtual + 1) % listaDeFotos.length; // Volta para a primeira foto quando chega no final
    elementoFoto.src = listaDeFotos[fotoAtual];
}

// Inicia os processos
function iniciarContador() {
    atualizarContador(); // Roda uma vez imediatamente
    setInterval(atualizarContador, 1000); // Depois atualiza a cada segundo
}

function iniciarSlideshow() {
    if (listaDeFotos.length > 0) {
        elementoFoto.src = listaDeFotos[0]; // Mostra a primeira foto
        if (listaDeFotos.length > 1) {
            setInterval(trocarFoto, 4000); // Troca de foto a cada 4 segundos
        }
    }
}


