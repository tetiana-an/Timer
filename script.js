const getId = id => document.getElementById(id);

let d = new Date();
let dd = d.getDate();
if (dd < 10) {
    dd = '0' + dd;
}
let mm = d.getMonth() + 1;
if (mm < 10) {
    mm = '0' + mm;
}
let yy = d.getFullYear();
getId('date').innerHTML = `${dd}.${mm}.${yy}`;
setInterval(() => {
    let d = new Date();
    let hh = d.getHours();
    if (hh < 10) {
        hh = '0' + hh;
    }
    let mm = d.getMinutes();
    if (mm < 10) {
        mm = '0' + mm;
    }
    let ss = d.getSeconds();
    if (ss < 10) {
        ss = '0' + ss;
    }
    getId('time').innerHTML = `${hh}:${mm}:${ss}`;
}, );

let int;
let hh1 = 0;
let mm1 = 0;
let ss1 = 0;
if (hh1 < 10) {
    hh1 = '0' + hh1;
}
if (mm1 < 10) {
    mm1 = '0' + mm1;
}
if (ss1 < 10) {
    ss1 = '0' + ss1;
}
getId('start').onclick = function () {
    int = setInterval(() => {
        ss1++;
        if (ss1 < 10) {
            ss1 = '0' + ss1;
        } else if (ss1 >= 60) {
            ss1 = '0' + 0;
            mm1++;
            if (mm1 < 10) {
                mm1 = '0' + mm1;
            } else if (mm1 >= 60) {
                mm1 = '0' + 0;
                hh1++;
                if (hh1 < 10) {
                    hh1 = '0' + hh1;
                } else if (hh1 >= 24) {
                    hh1 = '0' + 0;
                }
            }
        }
        getId('time_value').innerHTML = `${hh1}:${mm1}:${ss1}`
    }, 1000);
    this.disabled = true;
    getId('stop').disabled = false;
}

getId('stop').onclick = function () {
    clearInterval(int);
    this.disabled = true;
    getId('start').disabled = false;
}

getId('loop').onclick = function () {
    getId('p').innerHTML = getId('loop_value').innerHTML + getId('time_value').innerHTML;
}

getId('reset').onclick = function () {
    clearInterval(int);
    hh1 = '0' + 0;
    mm1 = '0' + 0;
    ss1 = '0' + 0;
    getId('start').disabled = false;
    getId('time_value').innerHTML = `${hh1}:${mm1}:${ss1}`;
}

let mm2 = getId('minutes').innerHTML;
if (mm2 < 10) {
    mm2 = '0' + mm2;
}

getId('plus').onclick = function () {
    mm2++
    if (mm2 < 10) {
        mm2 = '0' + mm2;
    }
    getId('minutes').innerHTML = `${mm2}`;
}

getId('minus').onclick = function () {
    mm2--
    if (mm2 < 0) {
        mm2 = '0' + 0;
    } else if (mm2 < 10) {
        mm2 = '0' + mm2;
    }
    getId('minutes').innerHTML = `${mm2}`;
}

let int1;
let ss2 = 0;
if (ss2 < 10) {
    ss2 = '0' + ss2;
}

getId('start1').onclick = function timer() {
    getId('reverseTime').innerHTML = `${mm2}:${ss2}`;
    int1 = setInterval(() => {
        ss2--;
        if (ss2 < 0) {
            ss2 = 59;
            mm2--;
            if (mm2 < 0) {
                clearInterval(int1)
                ss2 = '0' + 0;
                mm2 = '0' + 0;
            } else if (mm2 < 10) {
                mm2 = '0' + mm2;
            }
        } else if (ss2 < 10) {
            ss2 = '0' + ss2;
        }
        getId('reverseTime').innerHTML = `${mm2}:${ss2}`;
    }, 1000);
    this.disabled = true;
    getId('stop1').disabled = false;
}

getId('stop1').onclick = function () {
    clearInterval(int1);
    this.disabled = true;
    getId('start1').disabled = false;
}

getId('reset1').onclick = function () {
    clearInterval(int1);
    mm2 = getId('minutes').innerHTML;
    ss2 = '0' + 0;
    getId('start1').disabled = false;
    getId('reverseTime').innerHTML = '00:00';
}