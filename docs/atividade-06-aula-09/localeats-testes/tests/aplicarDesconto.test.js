const aplicarDesconto = require('../src/aplicarDesconto');

describe('Henrique Laroque - Aplicação de desconto percentual', () => {
  test('deve aplicar desconto percentual válido sobre o total do pedido', () => {
    // Cenário testado: desconto promocional válido.
    // Dados de entrada: valorTotal = 100, desconto = 10.
    // Resultado esperado: retornar 90.
    const resultado = aplicarDesconto(100, 10);

    expect(resultado).toBe(90);
  });

  test('deve manter o valor original quando o desconto for de 0%', () => {
    // Cenário testado: pedido sem desconto aplicado.
    // Dados de entrada: valorTotal = 100, desconto = 0.
    // Resultado esperado: retornar 100.
    const resultado = aplicarDesconto(100, 0);

    expect(resultado).toBe(100);
  });

  test('deve lançar erro quando o desconto for maior que 100%', () => {
    // Cenário testado: desconto inválido acima do limite permitido.
    // Dados de entrada: valorTotal = 100, desconto = 150.
    // Resultado esperado: lançar erro de desconto inválido.
    expect(() => {
      aplicarDesconto(100, 150);
    }).toThrow('Desconto inválido');
  });
});
