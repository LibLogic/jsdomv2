let books = document.querySelectorAll('#book-list li .name');
console.log(books);

books.forEach(function(book){
    book.textContent += ' (book title)';
});

var bookList = document.querySelector('#book-list');
//bookList.innerHTML = '<h2>Books and more books...</h2>';
bookList.innerHTML += '<p>This is how you add HTML</p>';