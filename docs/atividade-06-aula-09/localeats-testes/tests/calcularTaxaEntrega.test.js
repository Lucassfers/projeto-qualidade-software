const calcularTaxaEntrega = require('../src/calcularTaxaEntrega');

describe('Adriel Martins - Cálculo de taxa de entrega', () => {
  test('deve retornar taxa fixa quando a distância for menor que 3km', () => {
    // Cenário testado: distância dentro do limite da taxa fixa.
    // Dados de entrada: distancia = 2.
    // Resultado esperado: retornar 5.
    const resultado = calcularTaxaEntrega(2);

    expect(resultado).toBe(5);
  });

  test('deve retornar taxa fixa quando a distância for exatamente 3km', () => {
    // Cenário testado: distância no limite da taxa fixa.
    // Dados de entrada: distancia = 3.
    // Resultado esperado: retornar 5.
    const resultado = calcularTaxaEntrega(3);

    expect(resultado).toBe(5);
  });

  test('deve lançar erro quando a distância for negativa', () => {
    // Cenário testado: distância inválida.
    // Dados de entrada: distancia = -1.
    // Resultado esperado: lançar erro de distância inválida.
    expect(() => {
      calcularTaxaEntrega(-1);
    }).toThrow('Distância inválida');
  });
});
