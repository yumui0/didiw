const WIDTH = document.body.clientWidth;
const HEIGHT = document.body.clientHeight;
const BTN_H_MAR = 90;
const BTN_W_MAR = 120;
let count = 0;

function random(nobtn) {
    nobtn.style.position = "absolute";
    let randomH = Math.random() * (HEIGHT - BTN_H_MAR) + BTN_H_MAR;
    let randomW = Math.random() * (WIDTH - BTN_W_MAR) + BTN_W_MAR;

    nobtn.style.top = `${randomH}px`;
    nobtn.style.left = `${randomW}px`;
    count++;

    if (count >= 10) {
        document.getElementById("yesbtn").classList.add("ics");
        let interval = setInterval(() => {
            nobtn.style.opacity = count / 10;
            count--;
            if (count <= 0) {
                nobtn.style.display = "none";
                clearInterval(interval);
            }
        }, 100);
    }
}
