let status_play = false,
    work = true,
    transparent_pin = false,
    interval,
    infinity = false,
    def_min = 25,
    def_rest = 5,
    def_sec = 00,
    min = def_min,
    sec = def_sec;

let min_span = document.getElementById("min"),
    sec_span = document.getElementById("sec"),
    play_but = document.getElementById("play"),
    reload_but = document.getElementById("reload"),
    exit_but = document.getElementById("exit"),
    eye_img = document.getElementById("eye");

play_but.addEventListener("click", () => {
    controllerPlay();
});

reload_but.addEventListener("click", () => {
    reset();
});

exit_but.addEventListener("click", () => {
    window.close();
});

eye_img.addEventListener("click", () => {
    transparent_pin = !transparent_pin;
    if (transparent_pin) {
        eye_img.src = "../img/pushpin.png";
        document.getElementsByTagName("html")[0].classList.add("transparent");
    } else {
        eye_img.src = "../img/eye.png";
        document.getElementsByTagName("html")[0].classList.remove("transparent");
    }
});

eye_img.addEventListener("mouseover", () => {
    document.getElementsByTagName("html")[0].classList.add("transparent");
});

eye_img.addEventListener("mouseleave", () => {
    if (!transparent_pin) {
        document.getElementsByTagName("html")[0].classList.remove("transparent");
    }
});

const controllerPlay = () => {
    if (!status_play) {
        play();
    } else {
        pause();
    }
}

const play = () => {
    play_but.lastChild.src = "../img/pause.png";
    status_play = true;
    if (min <= 0 && sec == 0) {
        min = def_min;
    }
    interval = setInterval(() => {
        if (sec == 0) {
            sec = 59;
            min--;
        } else {
            sec--;
        }
        if ((sec == 0 && min == 0) || min < 0) {
            autoPlay();
        }
        draw();
    }, 1000);
};

const pause = () => {
    play_but.lastChild.src = "../img/play.png";
    console.log(play_but);
    status_play = false;
    clearInterval(interval);
};

const autoPlay = () => {
    if (infinity) {
        pause();
        workOrRest();
        play();
    } else {
        pause();
    }
}

const workOrRest = () => {
    work = !work;
    if (work) {
        min = def_min;
        sec = def_sec;
        toggleDots();
    } else {
        min = def_rest;
        sec = def_sec;
        toggleDots();
    }
}

const toggleDots = () => {
    if (work) {
        document.getElementById('work_dot').classList.remove('hidden');
        document.getElementById('rest_dot').classList.add('hidden');
    } else {
        document.getElementById('work_dot').classList.add('hidden');
        document.getElementById('rest_dot').classList.remove('hidden');
    }
}

const toggleAuto = () => {
    console.log('toggleAuto');
    infinity = !infinity;
    let elem = document.getElementById('infinity_dot');
    if (infinity) {
        console.log(infinity, elem);
        elem.classList.remove('hidden');
    } else {
        elem.classList.add('hidden');
    }
}

const reset = () => {
    pause();
    work = true;
    toggleDots();
    min = def_min;
    sec = def_sec;
    draw();
};

const draw = () => {
    let m = "",
        s = "";
    if (min.toString().length == 1) m = "0";
    if (sec.toString().length == 1) s = "0";
    min_span.innerHTML = m + min;
    sec_span.innerHTML = s + sec;
};

draw();
