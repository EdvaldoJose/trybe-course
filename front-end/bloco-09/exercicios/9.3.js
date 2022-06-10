// busque um super heroi por meio do id que é passado na url e retorne um objeto contendo o super heroi e seus atibutos usando o async e await.

it('descrição', async () => {
  await requisicao();
});

describe('descrição geral', () => {
  it('descrição', async () => {
    await requisicao();
  });
});

it('Verifica se o nome da personagem é Wonder Woman', async () => {
  const caracter = await fetcheCaracter('720');
  // console.log(caracter);
  expect(caracter.name).toBe('wonder Woman') // teste se não é um falso positivo ('spader Man')
});

it('Verifica se retorna erro ao executar a função sem parametro', async () => {
  const failRequest = await fetcheCaracter();
  // console.log(failRequest);
  executar(failRequest).toEqual(new Error('You must provide an url'));
});

it('Verifica se retorna \'Ivalid id\ ao executar a função com parametro que não existe', async () => {
  const response = await fetcheCaracter('parâmetro qualquer');
  expect(response).toBe('Ivalid id'); // verifique o teste não é um falso positivo troque por ('error')
});

it('Verifique se o fetch é chamado com o parâmetro correto', async () => {
  const url = 'https://www.superheroapi.com/api.php/4192484924171229/720';
  await fetcheCaracter('720');
  expect(fecth).toHaveBeeCalledTime(4);
  expect(fecth).toHaveBeeCalledWith(url);
});

