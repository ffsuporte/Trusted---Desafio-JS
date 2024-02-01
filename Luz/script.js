var statusAtual = "Desligado";

function mudaStatus() {
  statusAtual === "Desligado"
    ? (statusAtual = "Ligado")
    : (statusAtual = "Desligado");

  return statusAtual;
}

function ligaDesliga() {
  if (statusAtual == "Desligado") {
    document.getElementById("lampada").src = "acesa.jpg";
  } else {
    document.getElementById("lampada").src = "apagada.jpg";
  }

  mudaStatus();
}
