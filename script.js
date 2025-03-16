const list = document.querySelector(".list");
const button = document.querySelector(".button");

const apiKey = "49368404-24cee39adef47ce95f9739319";


function render(items){
    const html = items.hits.map(item => `<li><img src = "${item.userImageURL}">${item.tags}</li>`).join("");
    list.innerHTML = html;
}
button.addEventListener("click", ()=>{
    fetch(`https://pixabay.com/api/?key=${apiKey}&q=cat&image_type=photo`)
    .then((response) => response.json())
    .then((json) => render(json));
});



