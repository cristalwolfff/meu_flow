// Espera o documento carregar
document.addEventListener('DOMContentLoaded', () => {

    // --- Referências aos elementos da tela ---
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const statusDisplay = document.getElementById('status');
    const postureNameDisplay = document.getElementById('postureName');
    const yogiNameDisplay = document.getElementById('yogiName');
    const timerDisplay = document.getElementById('timerDisplay');
    const notificationSound = document.getElementById('notificationSound');
    
    const synth = window.speechSynthesis;

    // --- 1. Definição do Treino (com Nomes - Pedido 2) ---
    const treino = [
        { instrucao: "Vamos começar. Sente-se confortavelmente. Relaxe o ombro direito.", nomePt: "Preparação", nomeYogi: "Sukhasana", duracao: 10 },
        { instrucao: "Respire fundo. Mantenha o braço direito totalmente relaxado.", nomePt: "Respiração Inicial", nomeYogi: "Sukhasana", duracao: 170 }, // 10 + 170 = 3 min
        { instrucao: "Alongamento de pescoço. Incline a orelha esquerda para o ombro esquerdo. Muito gentilmente.", nomePt: "Alongamento Pescoço (Lado Esq)", nomeYogi: "", duracao: 60 },
        { instrucao: "Torção de coluna sentado, para a esquerda. Use o core.", nomePt: "Torção Sentada", nomeYogi: "Ardha Matsyendrasana (Modo)", duracao: 30 },
        { instrucao: "Torção de coluna sentado, para a direita. Sem forçar.", nomePt: "Torção Sentada", nomeYogi: "Ardha Matsyendrasana (Modo)", duracao: 30 },
        { instrucao: "Vamos levantar. Fique em postura da montanha. Braços relaxados.", nomePt: "Postura da Montanha", nomeYogi: "Tadasana", duracao: 60 },
        { instrucao: "Postura da cadeira. Mão esquerda na anca. Braço direito morto.", nomePt: "Postura da Cadeira", nomeYogi: "Utkatasana (Modo)", duracao: 45 },
        { instrucao: "Descanse em pé.", nomePt: "Descanso", nomeYogi: "Tadasana", duracao: 15 },
        { instrucao: "Postura da cadeira, segunda vez. Foque nas coxas.", nomePt: "Postura da Cadeira", nomeYogi: "Utkatasana (Modo)", duracao: 45 },
        { instrucao: "Descanse em pé.", nomePt: "Descanso", nomeYogi: "Tadasana", duracao: 15 },
        { instrucao: "Sequência lado esquerdo. Passo largo atrás com pé direito. Guerreiro Dois Modificado. Braço esquerdo estendido.", nomePt: "Guerreiro II (Lado Esq)", nomeYogi: "Virabhadrasana II (Modo)", duracao: 60 },
        { instrucao: "Postura do Triângulo. Mão esquerda na canela ou anca.", nomePt: "Triângulo (Lado Esq)", nomeYogi: "Trikonasana (Modo)", duracao: 60 },
        { instrucao: "Lunge Baixo. Joelho direito no chão. Mão esquerda na coxa.", nomePt: "Lunge Baixo (Lado Esq)", nomeYogi: "Anjaneyasana (Modo)", duracao: 60 },
        { instrucao: "Meio Espargata. Estique a perna esquerda.", nomePt: "Meio Espargata (Lado Esq)", nomeYogi: "Ardha Hanumanasana (Modo)", duracao: 60 },
        { instrucao: "Transição. Volte para a frente do tapete.", nomePt: "Transição", nomeYogi: "Tadasana", duracao: 30 },
        { instrucao: "Sequência lado direito. Passo largo atrás com pé esquerdo. Guerreiro Dois Modificado. Braço esquerdo para trás.", nomePt: "Guerreiro II (Lado Dir)", nomeYogi: "Virabhadrasana II (Modo)", duracao: 60 },
        { instrucao: "Postura do Triângulo. Mão esquerda na anca.", nomePt: "Triângulo (Lado Dir)", nomeYogi: "Trikonasana (Modo)", duracao: 60 },
        { instrucao: "Lunge Baixo. Joelho esquerdo no chão.", nomePt: "Lunge Baixo (Lado Dir)", nomeYogi: "Anjaneyasana (Modo)", duracao: 60 },
        { instrucao: "Meio Espargata. Estique a perna direita.", nomePt: "Meio Espargata (Lado Dir)", nomeYogi: "Ardha Hanumanasana (Modo)", duracao: 60 },
        { instrucao: "Transição. Volte à frente e deite-se de costas com cuidado.", nomePt: "Transição", nomeYogi: "Deitar", duracao: 60 },
        { instrucao: "Ponte de Glúteos. Braços relaxados. Suba as ancas.", nomePt: "Ponte de Glúteos", nomeYogi: "Setu Bandhasana", duracao: 30 },
        { instrucao: "Desça.", nomePt: "Descanso", nomeYogi: "", duracao: 5 },
        { instrucao: "Ponte de Glúteos, suba.", nomePt: "Ponte de Glúteos", nomeYogi: "Setu Bandhasana", duracao: 30 },
        { instrucao: "Desça.", nomePt: "Descanso", nomeYogi: "", duracao: 5 },
        { instrucao: "Ponte de Glúteos, última vez.", nomePt: "Ponte de Glúteos", nomeYogi: "Setu Bandhasana", duracao: 30 },
        { instrucao: "Desça.", nomePt: "Descanso", nomeYogi: "", duracao: 5 },
        { instrucao: "Dead Bug modificado. Joelhos a 90 graus. Alterne as pernas.", nomePt: "Dead Bug (Modo)", nomeYogi: "", duracao: 120 },
        { instrucao: "Figura Quatro. Tornozelo esquerdo no joelho direito. Puxe com a mão esquerda.", nomePt: "Figura 4 (Lado Esq)", nomeYogi: "Sucirandhrasana", duracao: 90 },
        { instrucao: "Troque o lado. Tornozelo direito no joelho esquerdo. Puxe com a mão esquerda.", nomePt: "Figura 4 (Lado Dir)", nomeYogi: "Sucirandhrasana", duracao: 90 },
        { instrucao: "Savasana. Relaxe todo o corpo no chão. Solte o ombro direito.", nomePt: "Relaxamento Final", nomeYogi: "Savasana", duracao: 180 },
        { instrucao: "Treino concluído. Parabéns.", nomePt: "Fim", nomeYogi: "Namaste", duracao: 5 }
    ];

    // --- 2. Variáveis de Controle ---
    let indicePosturaAtual = 0;
    
    // *** LINHA 1 DA CORREÇÃO ***
    // Precisamos guardar o tempo total numa constante separada.
    const tempoTotalDoTreino = treino.reduce((total, p) => total + p.duracao, 0);
    
    // tempoRestante começa com o tempo total para ser exibido na tela.
    let tempoRestante = tempoTotalDoTreino; 
    
    let timerInterval = null; // Onde guardamos o "setInterval"
    let isPaused = true; // Começa pausado

    // --- 3. Funções Principais ---

    // (Função de Falar - sem mudanças)
    function falar(texto, callback) {
        synth.cancel(); // Para qualquer fala anterior
        const utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR';
        utterance.rate = 0.9;
        utterance.onend = callback; // Chama o callback QUANDO a fala terminar
        synth.speak(utterance);
    }

// (Pedido 3: Tocar Som Suave - Versão AudioContext)
    function tocarSomSuave() {
        // Cria um "batuque" suave em vez de um bipe agudo
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        if (!audioContext) return; // Se o navegador não suportar, não faz nada

        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        // --- Ajustes para ser um som suave ---
        
        // 'sine' é o tom mais puro e suave (como um "whoom")
        oscillator.type = 'sine'; 
        
        // Frequência (Tom): 880 era agudo (dói o ouvido). 
        // 220 é um "Lá" bem mais grave, como um tambor suave.
        oscillator.frequency.setValueAtTime(220, audioContext.currentTime); 
        
        // Volume: 0.5 era 50%. Vamos baixar para 0.2 (20%)
        gainNode.gain.setValueAtTime(0.2, audioContext.currentTime); 

        // Duração: 0.5s era longo. Um "plop" ou "batuque" é curto (0.1s)
        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.1); 
    }

    // (Atualizar Timer Display - sem mudanças)
    function atualizarTimerDisplay() {
        const minutos = Math.floor(tempoRestante / 60);
        const segundos = tempoRestante % 60;
        // Adiciona um '0' na frente se for menor que 10
        timerDisplay.innerText = `${minutos.toString().padStart(2, '0')}:${segundos.toString().padStart(2, '0')}`;
    }

    // --- O "Motor" do Timer (Tick de 1 segundo) ---
    function tick() {
        if (isPaused) return; // Se pausou, não faz nada

        tempoRestante--; // Tira 1 segundo
        atualizarTimerDisplay(); // Atualiza a tela

        // Se o tempo da postura acabou
        if (tempoRestante <= 0) {
            clearInterval(timerInterval); // Para o timer atual
            tocarSomSuave();             // Toca o sino
            indicePosturaAtual++;        // Vai para a próxima postura
            proximaPostura();            // Inicia a próxima
        }
    }

    // --- Iniciar Timer ---
    function iniciarTimer() {
        // Garantia de não criar timers duplicados
        clearInterval(timerInterval); 
        // Chama a função 'tick' a cada 1000ms (1 segundo)
        timerInterval = setInterval(tick, 1000);
    }

    // --- Carregar a Próxima Postura ---
    function proximaPostura() {
        // Se o treino acabou
        if (indicePosturaAtual >= treino.length) {
            statusDisplay.innerText = "Treino Concluído!";
            postureNameDisplay.innerText = "Parabéns!";
            yogiNameDisplay.innerText = "Namaste";
            timerDisplay.innerText = "00:00";
            
            // Reseta os botões
            pauseButton.style.display = 'none';
            playButton.style.display = 'flex';
            isPaused = true;
            indicePosturaAtual = 0; // Prepara para recomeçar
            tempoRestante = tempoTotalDoTreino; // Reseta o tempo total
            return;
        }

        // Carrega a postura atual
        const postura = treino[indicePosturaAtual];

        // Define o tempo restante para ESTA postura
        tempoRestante = postura.duracao;

        // Atualiza as informações na tela
        statusDisplay.innerText = postura.instrucao;
        postureNameDisplay.innerText = postura.nomePt;
        yogiNameDisplay.innerText = postura.nomeYogi || '---'; // Mostra '---' se não tiver nomeYogi
        atualizarTimerDisplay();

        // Fala a instrução. O timer SÓ COMEÇA quando a fala acabar.
        falar(postura.instrucao, () => {
            // Se o usuário não pausou ENQUANTO o áudio falava
            if (!isPaused) {
                iniciarTimer();
            }
        });
    }

    // --- 4. Controles de Play/Pausa (Pedido 1) ---
    function playTreino() {
        isPaused = false;
        playButton.style.display = 'none';
        pauseButton.style.display = 'flex';

        // *** LINHA 2 DA CORREÇÃO ***
        // A lógica de verificação foi trocada:
        // Se o tempoRestante é igual ao tempo TOTAL, é o primeiro play.
        if (tempoRestante === tempoTotalDoTreino) {
            // É o primeiro play. Carrega a primeira postura.
            proximaPostura();
        } else {
            // *** LINHA 3 DA CORREÇÃO ***
            // (Era: "if (tempoRestante === treino[indicePosturaAtual].duracao)")
            // É um resume. Apenas continue o timer.
            iniciarTimer();
        }
    }

    function pauseTreino() {
        isPaused = true;
        playButton.style.display = 'flex';
        pauseButton.style.display = 'none';

        clearInterval(timerInterval); // Para o timer
        synth.cancel(); // Para a fala
    }

    // --- 5. Ligar os Botões ---
    playButton.addEventListener('click', playTreino);
    pauseButton.addEventListener('click', pauseTreino);

    // --- Configuração Inicial ---
    // Mostra o tempo total do treino antes de começar
    atualizarTimerDisplay(); 
});