const fetchButton = document.querySelector("#fetch-btn");

fetchButton.addEventListener("click", function fetchHandler() {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
        .then(Response => {
            console.log(Response.ok,Response.status,Response.statusText);
            if (Response.status == 404) {
                throw Error("404 Error occured")
            }
            else if(Response.status == 401){
                throw Error("401 Error occured")
            }else {
                return Response.json()
            }
        })
        .then(json => console.log(json))
        .catch((error) => {
            console.log(error);
        })
})