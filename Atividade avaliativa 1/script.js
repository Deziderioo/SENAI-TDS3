var nomeGLobal;
var mensagemGlobal;

function conferirMensagemWhatsapp() {
  var nome = document.getElementById("nome").value;
  var mensagem = document.getElementById("mensagem").value;
  console.log(nome, mensagem);
  nomeGLobal = nome;
  mensagemGlobal = mensagem;

  document.getElementById("confNome").textContent = nome;
  document.getElementById("confMsg").textContent = mensagem;
}

function enviar() {
  var numeroTelefone = "55419962022300";

  var linkWhastApp =
    "https://wa.me/" +
    numeroTelefone +
    "?text=NOME: " +
    nomeGLobal +
    " - " +
    mensagemGlobal;

  window.open(linkWhastApp, "_blank");
}
