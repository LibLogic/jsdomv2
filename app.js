const bookList = document.querySelector('#book-list');

console.log('The parent node is:', bookList.parentNode);
console.log('The parent element is:', bookList.parentElement.parentElement);

console.log(bookList.childNodes); //includes all nodes, spaces too
console.log(bookList.children); //includes just the elements