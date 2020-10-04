const counterValue = document.querySelector('#value').textContent;
console.log(counterValue);

let number = 0;
const decrementBtn = document.querySelector('[data-action="decrement"]');
decrementBtn.addEventListener('click', decrement);

function decrement() {
  number -= 1;
  console.log(number);
  counterValue.innerHTML = number;
  //counterValue.textContent = number;
}

const incrementBtn = document.querySelector('[data-action="increment"]');
incrementBtn.addEventListener('click', increment);
function increment() {
  number += 1;
  console.log(number);
  //counterValue.innerHTML = number;
}

/*Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать
 значение счетчика на 1.
Создай переменную counterValue в которой будет хранится текущее значение
счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения
счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса*/
