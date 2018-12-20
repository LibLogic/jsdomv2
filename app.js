document.addEventListener('DOMContentLoaded', function(){
    // disappearing link
    const link = document.querySelector('#page-banner a');
    link.addEventListener('click', function(e){
        e.preventDefault();
        alert('Default action was prevented!');
        e.target.classList.add('hide');
    });
    
    // delete a book
    const list = document.querySelector('#book-list ul');
    list.addEventListener('click', function(e){
        if (e.target.className == 'delete'){
            const li = e.target.parentElement;
            list.removeChild(li);
        }
    });
    
    // add a book
    const addBook = document.forms['add-book'];
    addBook.addEventListener('submit', function(e){
        e.preventDefault();
        const value = addBook.querySelector('input[type="text"]').value;
        addBook.querySelector('input[type="text"]').value = '';
        const li = document.createElement('li');
        const book = document.createElement('span');
        const deleteBtn = document.createElement('span');
        deleteBtn.classList.add('delete');
        book.textContent = value;
        deleteBtn.textContent = 'delete';
    
        li.appendChild(book);
        li.appendChild(deleteBtn);
        list.appendChild(li);
    });
    
    // hide the whole UL
    const hideBox = document.querySelector('#hide');
    hideBox.addEventListener('change', function(e){
        if ( hideBox.checked === true ){
            list.style.display = "none";
        } else {
            list.style.display = "initial";
        }
    });
    
    // search bar
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
    
    // tabbed content
    const tabs = document.querySelector('.tabs');
    const panels = document.querySelectorAll('.panel');
    tabs.addEventListener('click', function(e){
        if (e.target.tagName == "LI" ){
            const targetPanel = document.querySelector(e.target.dataset.target);
            console.log(targetPanel);
            panels.forEach(function(panel){
                if(panel == targetPanel) {
                    panel.classList.add('active');
                } else {
                    panel.classList.remove('active');
                }
            });
        }
    });
});