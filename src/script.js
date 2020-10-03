let status = false,
    interval,
    def_min = 25,
    def_sec = 00,
    min = def_min,
    sec = def_sec;

let min_span = document.getElementById("min"),
    sec_span = document.getElementById("sec"),
    play_but = document.getElementById("play"),
    reload_but = document.getElementById("reload");

play_but.addEventListener("click", () => {
    if (!status) {
        play();
    } else {
        pause();
    }
});

reload_but.addEventListener("click", () => {
    reset();
});

min_span.addEventListener("change", () => {
    min = min_span.value;
    def_min = min_span.value;
});

const play = () => {
    play_but.lastChild.src = "../img/pause.png";
    status = true;
    interval = setInterval(() => {
        if (sec == 0) {
            sec = 59;
            min--;
        } else {
            sec--;
        }
        if ((sec == 0 && min == 0) || min < 0) {
            pause();
        }
        draw();
    }, 1000);
};

const pause = () => {
    play_but.lastChild.src = "../img/play.png";
    console.log(play_but);
    status = false;
    clearInterval(interval);
};

const reset = () => {
    pause();
    min = def_min;
    sec = def_sec;
    draw();
};

const draw = () => {
    let m = "",
        s = "";
    if (min.toString().length == 1) m = "0";
    if (sec.toString().length == 1) s = "0";
    min_span.value = m + min;
    sec_span.innerHTML = s + sec;
};

draw();
