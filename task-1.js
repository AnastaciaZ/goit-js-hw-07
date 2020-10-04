const categories = document.querySelectorAll('#categories .item');
const listCategories = document.querySelectorAll('h2').length;

console.log(`В списке ${listCategories} категории`);

categories.forEach(function (liEl) {
  name = liEl.firstElementChild.textContent;
  const count = liEl.lastElementChild.children.length;
  console.log(`${name} - ${count}`);
});
