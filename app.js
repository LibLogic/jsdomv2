const bookList = document.querySelector('#book-list');

console.log('The previous sibling is:', bookList.previousSibling);
console.log('The previous element sibling is:', bookList.previousElementSibling);

console.log('The next sibling is:', bookList.nextSibling);
console.log('The next element sibling is:', bookList.nextElementSibling);

bookList.previousElementSibling.querySelector('p').innerHTML += '<br />Too cool for everyone else!';
