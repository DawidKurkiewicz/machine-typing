const div = document.createElement("div");
document.body.appendChild(div);
const span = document.createElement("span");
span.classList.add("text");
div.appendChild(span);
const span2 = document.createElement("span");
span2.classList.add("cursor");
span2.innerHTML = "|"
div.appendChild(span2)
const spnCursor = document.querySelector(".cursor")
const spnText = document.querySelector(".text");
const txt =  " Hello im Dawid Kurkiewicz, im Front-End Developer. Im already working in Billennium, im programist for about one year."

let txtIndex = 0;
const addLetter = () => {
    spnText.textContent += txt[txtIndex];
    txtIndex++;
    if (txtIndex === txt.length) clearInterval(index)
}

const cursorAnim = () => {
spnCursor.classList.toggle("active")
}

const index = setInterval(addLetter, 50);
setInterval(cursorAnim, 400)
