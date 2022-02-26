const fetchButton = document.querySelector("#get-data");

fetchButton.addEventListener("click", function(){
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(Response => Response.json())
    .then(json => console.log(json.title))
})

