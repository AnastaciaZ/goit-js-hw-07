const refs = {
  input: document.querySelector('#font-size-control'),
  span: document.querySelector('#text'),
};

refs.input.addEventListener('input', onInputChange);
function onInputChange() {
  refs.span.setAttribute('style', `font-size: ${refs.input.value}px`);
}

/*Напиши скрипт, который реагирует на изменение значения
input#font-size-control (событие input) и изменяет инлайн-стиль
span#text обновляя свойство font-size. В результате при перетаскивании
ползунка будет меняться размер текста.

<input id="font-size-control" type="range" />
<br />
<span id="text">Абракадабра!</span>*/
