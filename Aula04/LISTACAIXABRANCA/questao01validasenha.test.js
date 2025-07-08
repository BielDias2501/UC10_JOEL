const { validaSenha } = require('./questao01validasenha');

describe('validaSenha', () => {
  test('retorna false para senha não-string', () => {
    expect(validaSenha(12345678)).toBe(false);
  });

  test('retorna false para senha com menos de 8 caracteres', () => {
    expect(validaSenha('a1b2')).toBe(false);
  });

  test('retorna false para senha sem letras', () => {
    expect(validaSenha('12345678')).toBe(false);
  });

  test('retorna false para senha sem números', () => {
    expect(validaSenha('abcdefgh')).toBe(false);
  });

  test('retorna false para senha com espaços', () => {
    expect(validaSenha('abc 1234')).toBe(false);
  });

  test('retorna true para senha válida', () => {
    expect(validaSenha('abc12345')).toBe(true);
  });
});
