const categories = document.querySelectorAll('#categories .item');
const listCategories = document.querySelectorAll('h2').length;

console.log(`В списке ${listCategories} категории`);

categories.forEach(function (liEl) {
  name = liEl.firstElementChild.textContent;
  const count = liEl.lastElementChild.children.length;
  console.log(`${name} - ${count}`);
});

/*Напиши скрипт, который выполнит следующие операции.
Посчитает и выведет в консоль количество категорий в ul#categories,
то есть элементов li.item. Получится 'В списке 3 категории.'.

Для каждого элемента li.item в списке ul#categories, найдет и выведет
в консоль текст заголовка элемента (тега h2) и количество элементов
в категории (всех вложенных в него элементов li).

Например для первой категории получится:

Категория: Животные
Количество элементов: 4*/
