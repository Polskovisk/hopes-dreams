$.gI('avatar').style.backgroundImage = `url('./img/avatar\(${Math.floor(Math.random() * 26+1)}\).gif')`;

$.gI('searchbutton').onclick = function () {
    $.gI('search').active()
}

$.gI('settingsbt').onclick = function () {
    $.gI('settings').active()
}

$.gI('settingsclose').onclick = function () {
    $.gI('settings').active()
}

$.gI('close').onclick = function () {
    $.gI('search').active()
}

$.gI('noteclose').onclick = function () {
    $.gI('notescreen').active()
}

$.gI('note').onclick = function () {
    $.gI('notescreen').active()
}

$.gI('settingsredd').value = localStorage.redditsub
$.gI('city').value = localStorage.location

document.onkeydown = (e) => {
    if (e != undefined) {
        if (Number.isInteger(parseInt(e.key))) {
            if ($.gI(e.key)) {

            $.qA('#list div ul').forEach((elem) => {
                elem.removeAttribute("class");
            });

            $.gI(e.key).active()
            
            $.gI('pagenumber').innerText = e.key;

            $.gI('list').style.borderColor = 'blue';
            $.gI('list').style.boxShadow = "rgba(0, 0, 255, 0.33) 0px 0px 20px 5px";

            setTimeout(() => {
                $.gI('list').style.borderColor = 'black'
                $.gI('list').style.boxShadow = "transparent 0px 0px 0px 0px";
            }, 300);
            
            }
        }
    }
}

HTMLElement.prototype.active = function () {
    return this.classList.toggle('active')
}

HTMLElement.prototype.disable = function () {
    return this.classList.toggle('disable');
}