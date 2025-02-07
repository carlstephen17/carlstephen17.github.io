function moveButton(event) {
    event.target.style.backgroundColor = "tomato";


    let maxWidth = window.innerWidth - event.target.offsetWidth;
    let maxHeight = window.innerHeight - event.target.offsetHeight;

    let newX = Math.floor(Math.random() * maxWidth);
    let newY = Math.floor(Math.random() * maxHeight);

    event.target.style.position = "absolute";

    event.target.style.left = `${newX}px`;
    event.target.style.top = `${newY}px`;
}

const noBtn = document.getElementById("noBtn");

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("click", moveButton);
