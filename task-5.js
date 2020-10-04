const refs = {
  input: document.querySelector('#name-input'),
  span: document.querySelector('#name-output'),
};
refs.input.addEventListener('input', onInputChange);
function onInputChange(event) {
  if (refs.input.value.length > 0) {
    refs.span.textContent = event.currentTarget.value;
  } else {
    refs.span.textContent = 'незнакомец';
  }
  //console.log(event.currentTarget.value);
}

/*Напиши скрипт который, при наборе текста в инпуте
input#name-input (событие input), подставляет его текущее значение
в span#name-output. Если инпут пустой, в спане должна отображаться
строка 'незнакомец'.

<input type="text" placeholder="Ваше имя?" id="name-input" />
<h1>Привет, <span id="name-output">незнакомец</span>!</h1>*/
