// Requisito 7 - Ao clicar no botão com o id #button-login, deve exibir um alert com o valor do campo "Email ou telefone"

const btnLogin = document.querySelector('#button-login');
btnLogin.addEventListener('click', () => {
  const emailOuTelefone = document.getElementById('user-email-phone');
  alert(emailOuTelefone.value);
});

// Requisito 18 - Exibir uma mensagem "Campos inválidos" dentro do formulário caso pelo menos um campo não esteja preenchido

const facebookForm = document.getElementById('facebook-form');
const span = document.createElement('span');
const elFacebookForms = facebookForm.elements;
function validatingForm(event) {
  for (let key = 0; key < elFacebookForms.length; key += 1) {
    if (elFacebookForms[key].value === '' && !elFacebookForms[8].value) {
      event.preventDefault();
      span.innerHTML = 'Campos inválidos';
      facebookForm.appendChild(span);
      return true;
    }
  } return false;
}
const btnSubmit = document.getElementById('facebook-register');
btnSubmit.addEventListener('click', validatingForm);

// Requisito 19 - Parte 1 - Exibir o campo gender-costum, caso o radio-button Personalizado seja clicado

const genderField = document.getElementById('gender-custom');
function createField() {
  genderField.style.display = 'flex';
}

const custom = document.getElementById('custom');
const male = document.getElementById('male');
const female = document.getElementById('female');

// Requisito 19 - Parte 2 - Esconder o campo gender-costum, caso os outros radio-buttons sejam clicados

function hideField() {
  genderField.style.display = 'none';
}
custom.addEventListener('click', createField);
male.addEventListener('click', hideField);
female.addEventListener('click', hideField);

// Variáveis globais usadas nas funções gender, revalidatingForm e helloMessage

const firstName = document.getElementById('firstname');
const lastName = document.getElementById('lastname');
const celEmail = document.getElementById('celOuEmail');
const birth = document.getElementById('birthdate');

// Função que retorna os valores de cada um dos radio buttons, caso sejam clicados - função auxiliar para função helloMessage

function gender() {
  if (female.checked) {
    return female.value;
  }
  if (male.checked) {
    return male.value;
  }
  if (custom.checked) {
    return custom.value;
  }
}

// Função que revalida formulário - função auxiliar para função helloMessage

function revalidatingForm() {
  if (firstName.value !== '' && lastName.value !== '') {
    return true;
  }
  if (celEmail.value !== '' && birth.value !== '') {
    return true;
  }
  return false;
}

// Requisito 20 - Mensagem de Olá, John Doe no container right-content

function helloMessage() {
  const rightContent = document.querySelector('.right-content');
  if (revalidatingForm() && gender()) {
    rightContent.innerHTML = '';
    rightContent.innerHTML = `<p>Olá, ${firstName.value} ${lastName.value}</p>`;
    rightContent.innerHTML += `<br><p>${celEmail.value}</p>`;
    rightContent.innerHTML += `<br><p>${birth.value}</p>`;
    rightContent.innerHTML += `<br><p>${gender()}`;
  }
}
btnSubmit.addEventListener('click', helloMessage);

/* Referências:
* Sobre validação de formulários, uso de preventDefault():
--> DUCKETT, Jon. JavaScript & JQuery: desenvolvimento de interfaces web interativas. Rio de Janeiro: Alta Books, 2015.
* Agradecimento especial ao colega Lucas Pedroso, que sugeriu incluir outra verificação no if da função validatingForm (linha 16), ajudando
assim a consertar um erro que fazia com que a função helloMessage sobrescrevesse a função validatingForm.
* Sobre uso do flexbox:
--> https://origamid.com/projetos/flexbox-guia-completo/
* Sobre uso da propriedade align-content:
--> https://www.w3schools.com/cssref/css3_pr_align-content.asp
* Sobre uso da propriedade justify-content:
--> https://www.w3schools.com/cssref/css3_pr_justify-content.asp
*/
