const calcularTotalPedido = require('../src/calcularTotalPedido');

describe('Lucas Fernandes - Cálculo do total do pedido com valor mínimo', () => {
  test('deve calcular corretamente o total quando o pedido superar o valor mínimo', () => {
    // Cenário testado: soma dos itens acima do mínimo exigido.
    // Dados de entrada: itens = [{ preco: 10 }, { preco: 20 }], valorMinimo = 15.
    // Resultado esperado: retornar 30.
    const itens = [
      { preco: 10 },
      { preco: 20 }
    ];

    const resultado = calcularTotalPedido(itens, 15);

    expect(resultado).toBe(30);
  });

  test('deve aceitar pedido quando o total for exatamente igual ao valor mínimo', () => {
    // Cenário testado: soma dos itens igual ao mínimo exigido.
    // Dados de entrada: itens = [{ preco: 10 }, { preco: 5 }], valorMinimo = 15.
    // Resultado esperado: retornar 15.
    const itens = [
      { preco: 10 },
      { preco: 5 }
    ];

    const resultado = calcularTotalPedido(itens, 15);

    expect(resultado).toBe(15);
  });

  test('deve lançar erro quando o pedido não atingir o valor mínimo', () => {
    // Cenário testado: soma dos itens abaixo do mínimo exigido.
    // Dados de entrada: itens = [{ preco: 5 }, { preco: 5 }], valorMinimo = 20.
    // Resultado esperado: lançar erro de valor mínimo não atingido.
    const itens = [
      { preco: 5 },
      { preco: 5 }
    ];

    expect(() => {
      calcularTotalPedido(itens, 20);
    }).toThrow('Valor mínimo não atingido');
  });
});
