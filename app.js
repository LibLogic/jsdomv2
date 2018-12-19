var link = document.querySelector('#page-banner a');
link.addEventListener('click', function(e){
    e.preventDefault();
    e.target.classList.add('hide');
});

var list = document.querySelector('#book-list ul');
list.addEventListener('click', function(e){
    if (e.target.className == 'delete'){
        const li = e.target.parentElement;
        list.removeChild(li);
    }
});
