function handleSubmit(event) {
  event.preventDefault();
}

window.onload = function() {
  const submitBtn = querySelector('#submit-btn');
    submitBtn.addEventListener('click', handleSubmit);
};

function clearFields() {
  const formElement = document.querySelector('input');
    const textArea = document.querySelector('textarea');
      for (let index = 0; index < formElement.length; index += 1) {
        const userInput = formElement[index];
          userInput.value = '';
            userInput.checked = false;
      }
        textArea.value = '';
}

window.onload = function() {
  const clearBtn = document.querySelector('#clear-btn');
    clearBtn.addEventListener('click', clearFields);
      const submitBtn = document.querySelector('#submit-btn');
        submitBtn.addEventListener('click', handleSubmit);
          const agreement = document.querySelector('#agreement');
            agreement.addEventListener('change', enableSubmit);
}

function enableSubmit() {
  const submitBtn = document.querySelector('#submit-btn');
    const agreement = document.querySelector('#agreement');
      submitBtn.disabled = !agreement.checked;
}

function textInputValidation() {
  const emailInput = document.querySelector('#email').value.length;
    const invalidEmail = email < 10 || email > 50;

    const name = document.querySelector('#fullName').value.length;
      const invalidName = name < 10 || name > 40;

      const reason = document.querySelector('#why').value.length;
        const invalidReason = reason > 500;

      if (invalidEmail || invalidName || invalidReason) {
          return false;
      }
      else {
          return true;
      }
}

function handleSubmit(event) {
  event.preventDefault();
    const validation = textInputValidation();
      if (validation === false) {
        alert('Dados inválidos');
      }
      else {
        alert('Dados enviado com sucesso! Obrigado por participar do concurso TrybeTrip. :)')
      }
}
