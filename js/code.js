const $ = {
    gI: e => document.getElementById(e),
    gC: e => document.getElementsByClassName(e),
    gT: e => document.getElementsByTagName(e),
    qA: e => document.querySelectorAll(e),
    qS: e => document.querySelector(e)
};

$.gI('avatar').style.backgroundImage = `url('../img/avatar\(${Math.floor(Math.random() * 26+1)}\).gif')`;