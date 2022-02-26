const loadingText = document.querySelector("#loading-text");
const loadButton = document.querySelector("#load-btn");

loadButton.addEventListener("click", function loadingHandler() {
    loadingText.style.display = "block";
    loadButton.style.display = "none";
    setTimeout(()=>{
        loadingText.style.display = "none";
        loadButton.style.display = "block";
    }, 3000);
})