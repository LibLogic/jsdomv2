var link = document.querySelector('#page-banner a');
link.addEventListener('click', function(e){
    e.preventDefault();
    alert('Default action was prevented!');
    e.target.classList.add('hide');
});

var list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
    if (e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});

const addBook = document.forms['add-book'];
addBook.addEventListener('submit', function(e){
    e.preventDefault();
    const value = addBook.querySelector('input[type="text"]').value;
    addBook.querySelector('input[type="text"]').value = '';
    var li = document.createElement('li');
    const book = document.createElement('span');
    const deleteBtn = document.createElement('span');
    deleteBtn.classList.add('delete');
    book.textContent = value;
    deleteBtn.textContent = 'delete';

    li.appendChild(book);
    li.appendChild(deleteBtn);
    list.appendChild(li);
});

const hideBox = document.querySelector('#hide');
hideBox.addEventListener('change', function(e){
    if ( hideBox.checked === true ){
        list.style.display = "none";
    } else {
        list.style.display = "initial";
    }
});

const searchBar = document.forms['search-books'].querySelector('input');
searchBar.addEventListener('keyup', function(e){
    const term = e.target.value.toLowerCase();
    const books = list.getElementsByTagName('li');
    Array.from(books).forEach(function(book){
        const title = book.firstElementChild.textContent;
        if(title.toLowerCase().indexOf(term) !== -1){
            book.style.display = 'block';
        } else {
            book.style.display = 'none';
        }
    });
});


