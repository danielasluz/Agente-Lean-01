function exibirMensagem() {
    var elementoTerminal = document.getElementById("terminal");
    var mensagem = "Parabéns! Você foi selecionado para ser Agente Lean e participar da Operação Kaizen: Licença Para Melhorar. Seu treinamento começa agora. Prepare-se para aprimorar nossos processos e elevar a Unicred a novos patamares de eficiência. Esteja alerta, o treinamento incluirá simulações e análise de processos. Como Agente Lean, você terá um papel fundamental na seleção e implementação de melhorias. Seu comprometimento nos levará à vitória! Sua missão: Excelência Operacional. A contagem regressiva começou. Aguarde novos comandos. Com dedicação à eficiência, Escritório de Processos.";
    var indiceCaractere = 0;
    var velocidadeDigitacao = 50;
  
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
  
    // Limpa o conteúdo do elemento #terminal no início
    elementoTerminal.textContent = "";
  
    // Chama a função escreverMensagem após o botão ser ocultado
    escreverMensagem();
  }
  
  function aceitarMissao() {
    document.getElementById("mensagem").style.display = "none";
    document.getElementById("redirecionamento").style.display = "block";
  
    window.location.href = "https://teams.microsoft.com/l/team/19%3aqddF25kQDb0vd-CahExzQAzNN5c6jYfxHMKqklj4G2A1%40thread.tacv2/conversations?groupId=b93211d8-29a1-40b1-903f-aeb4d3932d56&tenantId=f88c7305-11d1-4b34-a8a0-da6536019e31";
  }
  