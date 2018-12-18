var titles = document.getElementsByTagName('li');

// titles = Array.from(titles)
console.log(Array.isArray(titles));



Array.from(titles).forEach(function(item){
    console.log(item);
});













// const titles = document.getElementsByClassName('title');

// console.log(Array.isArray(titles));
// console.log(Array.isArray(Array.from(titles)));

// Array.from(titles).forEach(function(title){
//   console.log(title);
// });
