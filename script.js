// Banco de dados de exemplos (Ampliando o conteúdo original com novas situações)
const dadosMensagens = [
    {
        id: 1,
        origem: "SMS - Banco Alerta",
        texto: "Sua compra de R$53.000 foi aprovada. Se voce nao reconhece, clique no link abaixo para cancelar: bit.ly/banco-seguro-cancelar",
        eGolpe: true,
        explicacao: "É GOLPE! Bancos reais não usam encurtadores de links como 'bit.ly' e nem mandam mensagens desesperadoras com valores altos para te assustar."
    },
    {
        id: 2,
        origem: "WhatsApp - Sorteio Pix",
        texto: "Parabens! Voce ganhou R$2.000 no Pix da virada. Resgate clicando no link abaixo imediatamente: www.pix-gratis-ganhar.net",
        eGolpe: true,
        explicacao: "É GOLPE! O Banco Central não faz sorteios de Pix por mensagens e links terminados em '.net' desconhecidos são criados para roubar dados."
    },
    {
        id: 3,
        origem: "E-mail - Streaming de Filmes",
        texto: "Prezado cliente, sua assinatura falhou no processamento. Acesse sua conta em nosso site oficial para atualizar seu cartão de crédito.",
        eGolpe: false,
        explicacao: "É REAL (mas atenção)! Empresas de streaming avisam por e-mail quando o cartão falha, mas a regra de ouro é: nunca clique no link do e-mail. Abra o aplicativo oficial no celular ou digite o site diretamente no navegador para regularizar."
    },
    {
        id: 4,
        origem: "SMS - Correios Informa",
        texto: "Seu pacote retido na alfandega. Taxa de despacho pendente de pagamento. Regularize em: correios-taxas-pagamento.com",
        eGolpe: true,
        explicacao: "É GOLPE! Esse golpe é muito comum hoje em dia. Os Correios nunca mandam link direto para pagamento via SMS. Rastreie sempre pelo site oficial usando seu código."
    }
];

const container = document.getElementById('simulator-container');

// Função para renderizar as mensagens na tela
function carregarSimulador() {
    dadosMensagens.forEach(msg => {
        const msgDiv = document.createElement('div');
        msgDiv.className = 'message-box';
        
        msgDiv.innerHTML = `
            <strong>📱 ${msg.origem}</strong>
            <p class="message-text">"${msg.texto}"</p>
            <div class="actions">
                <button class="btn-danger" onclick="verificarResposta(${msg.id}, true)">Acho que é Golpe 🚨</button>
                <button class="btn-success" onclick="verificarResposta(${msg.id}, false)">Acho que é Seguro ✅</button>
            </div>
            <div id="feedback-${msg.id}" class="feedback"></div>
        `;
        
        container.appendChild(msgDiv);
    });
}

// Função para validar a escolha do usuário
function verificarResposta(id, escolheuGolpe) {
    const mensagem = dadosMensagens.find(m => m.id === id);
    const feedbackDiv = document.getElementById(`feedback-${id}`);
    
    feedbackDiv.style.display = "block";
    
    if (mensagem.eGolpe === escolheuGolpe) {
        feedbackDiv.className = "feedback correto";
        feedbackDiv.innerHTML = `🎉 <strong>Você acertou!</strong> ${mensagem.explicacao}`;
    } else {
        feedbackDiv.className = "feedback errado";
        feedbackDiv.innerHTML = `⚠️ <strong>Cuidado...</strong> ${mensagem.explicacao}`;
    }
}

// Inicia o simulador quando a página carrega
window.onload = carregarSimulador;