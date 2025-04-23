const formulario = document.querySelector("form");

function formularioEnviado(resposta) {
  if (resposta.ok) {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #317a00;'>Mensagem enviada</span>, em breve entraremos em contato. Geralmente respondemos em 24 horas.</p>";
  } else {
    formulario.innerHTML =
      "<p class='font-2-l' style='grid-column: 1/-1; padding: 1rem; border-radius: 4px; background: #f7f7f7;'><span style='color: #e00000;'>Erro no envio</span>, você pode enviar diretamente para o nosso email em: contato@bikcraft.com</p>";
  }
}

function enviarFormulario(event) {
  event.preventDefault();

  const botao = document.querySelector("form button");
  botao.disabled = true;
  botao.innerText = "Enviando...";

  // Simula envio com fetch
  setTimeout(() => {
    const sucesso = Math.random() > 0.3; // 70% de chance de sucesso
    const respostaFake = new Response(null, {
      status: sucesso ? 200 : 500,
      statusText: sucesso ? "OK" : "Erro",
    });
    formularioEnviado(respostaFake);
  }, 2000); // simula 2 segundos de envio
}

formulario.addEventListener("submit", enviarFormulario);


formulario.addEventListener("submit", enviarFormulario);