const addItemButton = document.querySelector("#add-li-btn")
let counter = 1;


addItemButton.addEventListener("click",function (){
    let ulElem = document.getElementById("ul-items")
    let liElem = document.createElement("li")
    const textNode = document.createTextNode("Item"+counter)
    liElem.appendChild(textNode)
    ulElem.appendChild(liElem)
    let bElem = document.createElement("b")
    bElem.appendChild(textNode)
    liElem.appendChild(bElem)
    counter++
})