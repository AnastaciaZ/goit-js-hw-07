const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const listEngredients = ingredients.map(ingredient => {
  const liEl = document.createElement('li');
  liEl.textContent = ingredient;
  return liEl;
});
console.log(listEngredients);
const listEl = document.querySelector('#ingredients');
listEl.append(...listEngredients);

/*Напиши скрипт, который для каждого элемента массива ingredients создаст
отдельный li, после чего вставит все li за одну операцию в список ul.ingredients.
Для создания DOM-узлов используй document.createElement().*/
