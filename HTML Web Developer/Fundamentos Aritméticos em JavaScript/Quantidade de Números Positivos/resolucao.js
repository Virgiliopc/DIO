// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados e a função print para imprimir a saída (output) de dados e já pula uma linha ("\n")
// Abaixo segue um exemplo de código que você pode ou não utilizar

let total = 0
let i = 0
let valor

while (i <= 5) {
  valor = parseInt(gets())

  if (valor > 0) {
    total++
  }

  i++
}

console.log(total + ' ' + 'valores positivos')
