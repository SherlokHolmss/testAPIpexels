const list = document.querySelector(".list");
const button = document.querySelector(".button");

function renderItems(){
    
}



fetch('https://jsonplaceholder.typicode.com/posts/')
    .then((response) => response.json())
    .then((json) => console.log(json));


