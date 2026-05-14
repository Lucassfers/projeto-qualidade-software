const validarLogin = require('../src/validarLogin');

describe('Derick Laroque - Validação de login', () => {
  test('deve validar login quando usuário e senha estiverem corretos', () => {
    // Cenário testado: credenciais válidas informadas diretamente.
    // Dados de entrada: usuario = admin, senha = 123456.
    // Resultado esperado: retornar true.
    const resultado = validarLogin('admin', '123456');

    expect(resultado).toBe(true);
  });

  test('não deve lançar erro quando credenciais válidas forem informadas por variáveis', () => {
    // Cenário testado: credenciais válidas armazenadas antes da validação.
    // Dados de entrada: usuario = admin, senha = 123456.
    // Resultado esperado: não lançar erro e permitir o login.
    const usuario = 'admin';
    const senha = '123456';

    expect(() => {
      validarLogin(usuario, senha);
    }).not.toThrow();
  });

  test('deve lançar erro quando usuário e senha estiverem vazios', () => {
    // Cenário testado: campos obrigatórios não preenchidos.
    // Dados de entrada: usuario = vazio, senha = vazia.
    // Resultado esperado: lançar erro de campos obrigatórios.
    expect(() => {
      validarLogin('', '');
    }).toThrow('Campos obrigatórios');
  });
});
