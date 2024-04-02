
function converter() {
    const valorDolar = document.getElementById("inputValor").value;
    const resultado = document.getElementById("resultado");
  
    // Conversão de dólar para real
    const taxaConversao = 5.05; // 1 dólar = 5,05 reais
    const valorReal = valorDolar * taxaConversao;
  
    resultado.textContent = "Valor em reais: R$ " + valorReal.toFixed(2);}