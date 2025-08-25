function ConverterTemperatura(temp) {
   if (temp.escala === "C") {
      let converido = (temp.valor * 1.8 + 32);
   return `${convertido.toFixed(2)} °F`;
   } else if (temp.escala === "F") {
      let converido = ((temp.valor - 32) / 1.8);
        return `${convertido.toFixed(2)} °C`;
   } else {
            return "Escala inválida. Use 'C' para Celsius ou 'F' para Fahrenheit.";
        }
}
console.log(ConverterTemperatura({ valor: 25, escala: "C" })); // Saída: "77.00 °F"
console.log(ConverterTemperatura({ valor: 77, escala: "F" })); // Saída: "25.00 °C"
console.log(ConverterTemperatura({ valor: 100, escala: "X" }));