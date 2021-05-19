let h2 = document.querySelector(".itemName");
let btnDraw = document.getElementById("btn-draw");
let li = document.querySelector("li");
let ul = document.querySelector("ul");
let btnWipe = document.getElementById("btn-wipe");

let iterator = 0;

function draw() {

    let randomNumber = Math.floor((Math.random() * 15) + 1);
    let students = ["Itallo", "Tayna", "Thiago", "Arthur", "Gabriel", "Henrique", "Weslley", "Jéssica",
        "Matheus", "Vitor", "Diego", "Marcos", "Cleisson", "Leandro", "Andry",];
    
    iterator++
    if (iterator == 7) {
        return window.location.reload()
    }

    students.forEach(function (value, index) {
        if (index == randomNumber) {
            h2.innerText = value;
            addChildren(h2.innerHTML)
        }

    })

}



function addChildren(value) {
    let text = document.createTextNode(value)
    let li = document.createElement("li");
    li.appendChild(text)
    ul.appendChild(li)
}



btnDraw.addEventListener("click", draw)

btnWipe.addEventListener("click", function () {
    h2.innerText = "Aguardando";
    window.location.reload()
})