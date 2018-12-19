var btns = document.querySelectorAll('#book-list .delete');

btns.forEach(function(btn){
    btn.addEventListener('click', function(e){
        const li = e.target.parentElement;
        li.parentElement.removeChild(li);
    });
});

var link = document.querySelector('#page-banner a');
link.addEventListener('click', function(e){
    e.preventDefault();
    e.target.classList.add('hide');
})
