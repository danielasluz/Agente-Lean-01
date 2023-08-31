function exibirMensagem() {
    var elementoTerminal = document.getElementById("terminal");
    var mensagem = "Parabéns! Você foi selecionado para ser Agente Lean e participar da Operação Kaizen: Licença Para Melhorar. Seu treinamento começa agora. Prepare-se para aprimorar nossos processos e elevar a Unicred a novos patamares de eficiência. Esteja alerta, o treinamento incluirá simulações e análise de processos. Como Agente Lean, você terá um papel fundamental na seleção e implementação de melhorias. Seu comprometimento nos levará à vitória! Sua missão: Excelência Operacional. A contagem regressiva começou. Aguarde novos comandos. Com dedicação à eficiência, Escritório de Processos.";
    var indiceCaractere = 0;
    var velocidadeDigitacao = 20;
  
    function escreverMensagem() {
      if (indiceCaractere < mensagem.length) {
        elementoTerminal.textContent += mensagem.charAt(indiceCaractere);
        indiceCaractere++;
        setTimeout(escreverMensagem, velocidadeDigitacao);
      }
    } 
  
    var botaoLink = document.querySelector(".botao-link");
    botaoLink.style.display = "none"; 
    document.getElementById("mensagem").style.display = "block";
  
    elementoTerminal.textContent = "";
  
    escreverMensagem();
  }
  
  function aceitarMissao() {
    document.getElementById("mensagem").style.display = "none";
    document.getElementById("redirecionamento").style.display = "block";
  
    window.location.href = "dominio teams aqui";
  }
  