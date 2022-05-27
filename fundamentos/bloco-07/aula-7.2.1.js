// // Calendário usando arrow fanction switch case

const diasNoMes = (month) => {
  switch (month) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
      return 31;
    case 4:
    case 6:
    case 9:
    case 11:
      return 30;
    case 2:
      return 28;
    default:
      throw new Error('Mês inválido!');
  }
};

window.onload = () => {
  const botao = document.getElementById('botao');

  botao.addEventListener('click', () => {
    const mes = parseInt(document.getElementById('mes').value);
    const result = document.getElementById('result');

    try {
      result.innerHTML = diasNoMes(mes);
    } catch (error) {
      result.innerHTML = error.message;
        console.log(error);
    } finally {
      console.log('Execute o finally');
    }
        console.log('Funfou1');
  });
};