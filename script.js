const div = document.createElement("div");
document.body.appendChild(div);
const span = document.createElement("span");
span.classList.add("text");
div.appendChild(span);
const spnText = document.querySelector(".text");
const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore tenetur rerum ad? Eum quos reprehenderit minima! Fugit, omnis! Eveniet repellendus et iure deserunt iusto quas in est odit, labore optio? END'

let txtIndex = 0;
const addLetter = () => {
    spnText.textContent += txt[txtIndex];
    txtIndex++;
    if (txtIndex === txt.length) clearInterval(index)
}
const index = setInterval(addLetter, 50);