let status = false,
    interval;
let min = 25,
    sec = 00,
    def_min = 25,
    def_sec = 00;

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

const play = () => {
    play_but.innerHTML = "⏸";
    status = true;
    interval = setInterval(() => {
        if (sec == 0) {
            sec = 59;
            min--;
        } else {
            sec--;
        }
        console.log(min, ":", sec);
        draw();
    }, 1000);
};

const pause = () => {
    play_but.innerHTML = "▶";
    console.log("PAUSE");
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
    if (min.toString().length == 1) m = '0';
    if (sec.toString().length == 1) s = '0';
    min_span.innerHTML = m + min;
    sec_span.innerHTML = s + sec;
};
