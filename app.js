const form = document.querySelector("#listForm");
const input = document.querySelector("#itemInput");
const ulList = document.querySelector("#list");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const inputValue = input.value;
    const newLi = document.createElement("LI");
    newLi.innerText = inputValue;
    ulList.appendChild(newLi);
    input.value = "";
});

ulList.addEventListener("click", function(e){
    e.target.nodeName === "LI" && e.target.remove();
});