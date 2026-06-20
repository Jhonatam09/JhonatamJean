// Aguarda o DOM carregar completamente para garantir que os elementos existem
document.addEventListener("DOMContentLoaded", function () {
    
    /* ==========================================
       1. FUNCIONALIDADE: ALTERNÂNCIA DE TEMA (DARK MODE)
       ========================================== */
    const themeButton = document.getElementById("toggle-theme");
    
    // Ouvinte de evento para o clique no botão de tema
    themeButton.addEventListener("click", function () {
        // Adiciona ou remove a classe 'dark-mode' do elemento <body>
        document.body.classList.toggle("dark-mode");
        
        // Altera o texto e o ícone do botão dinamicamente
        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "☀️ Claro";
        } else {
            themeButton.textContent = "🌙 Escuro";
        }
    });

    /* ==========================================
       2. FUNCIONALIDADE: VALIDAÇÃO DO FORMULÁRIO
       ========================================== */
    const contactForm = document.getElementById("contact-form");
    const feedbackDiv = document.getElementById("form-feedback");

    contactForm.addEventListener("submit", function (event) {
        // Impede o comportamento padrão de recarregar a página ao enviar formulário
        event.preventDefault();

        // Captura os valores digitados tirando os espaços em branco extras
        const nome = document.getElementById("nome").value.trim();
        const email = document.getElementById("email").value.trim();
        const mensagem = document.getElementById("mensagem").value.trim();

        // Limpa classes anteriores do feedback e o esconde temporariamente
        feedbackDiv.className = "feedback-message hidden";

        // Validação 1: Verificar se os campos estão completamente vazios
        if (nome === "" || email === "" || mensagem === "") {
            exibirFeedback("Por favor, preencha todos os campos obrigatórios.", "error");
            return; // Interrompe a execução da função aqui
        }

        // Validação 2: Expressão Regular (Regex) para validar o formato do e-mail
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            exibirFeedback("Por favor, insira um endereço de e-mail válido (ex@dominio.com).", "error");
            return;
        }

        // Simulação de Sucesso (Se passou pelas validações anteriores)
        exibirFeedback("Mensagem enviada com sucesso! (Simulação realizada)", "success");
        
        // Limpa os campos do formulário após o sucesso do envio
        contactForm.reset();
    });

    // Função auxiliar para exibir as mensagens de erro ou sucesso na tela
    function exibirFeedback(texto, tipo) {
        feedbackDiv.innerText = texto;
        feedbackDiv.classList.remove("hidden");
        feedbackDiv.classList.add(tipo); // adiciona classe 'success' ou 'error'
    }
});