const frases = [
    "13/12/2017 - The first day that changed my life...",
    "15/02/2018 - When we finally stay togheter",
    "É melhor ter duas pombas na mão do que três voando. ~Teteuzin, 2021",
    "O que é um beijo na nuca... para quem já esta com o pau no cu. ~Principe Eysse, 2045",
    "Pra que ter tudo quando você pode ter nada. ~Vino, DCLXVI",
    "O que não mata, engorda. ~Gabes, 1999",
    "Comida é vida. ~Mary, 15",
    "Alguém me fala o que está escrito aqui...? ~Polsk, XIV",
    "Tenha sempre a mão em um lugar quente e molhado. ~Schambeck, 1111",
    "Só porque o céu esta nublado, não significa que as estrelas sumiram. ~Yandra, 2015",
    "Quando penso em desistir, lembro que a Sakura não desistiu de dar uma cabeçada no Sasuke, VEM DAR CABEÇADA. ~Zubu, 2019",
    "Regras foram feitas para serem quebradas. ~Gi, 2017",
    "Pão é pão, beijo é beijo, se pão é bom imagina teu beijo. ~Lari, 1996"
]

const images = [
    "./img/cat.png",
    "./img/catlove.gif"
]

var date = new Date();

var style = (function () {
        // Create the <style> tag
        var style = document.createElement("style");

        // WebKit hack
        style.appendChild(document.createTextNode(""));

        // Add the <style> element to the page
        document.head.appendChild(style);

        console.log(style.sheet.cssRules); // length is 0, and no rules

        return style;
    })();

if (date.getDate() !== 15) {
    $.gI('catimage').src = images[0]
    $.gI('cat').setAttribute('cat-talk', frases[Math.floor(Math.random() * 10 + 2)])
    $.gI('cat').classList.add('hover')
    setTimeout(() => {
        removerHover()
    }, 7000);
    setInterval(floating, 2000)
} else {
    $.gI('catimage').src = images[1]
    $.gI('cat').setAttribute('cat-talk', frases[Math.floor(Math.random() * 2)])
    var cat = $.gI('cat');
    cat.style.bottom = '0';
    cat.style.left = '0';
    cat.style.height = '198px'
    cat.style.width = '498px'

    $.gI('cat').classList.add('hover')
    setTimeout(() => {
        removerHover()
    }, 7000);

    style.sheet.insertRule('#cat:hover::after{ left: 15%;}', 0);
}


function floating() {
    var cat = $.gI('cat');
    var cati = $.gI('catimage');
    cat.style.bottom = '80px';
    setTimeout(() => {
        cat.style.bottom = '30px';
    }, 1000);
    cat.focus
    setTimeout(() => {
        cat.style.left = '0';
        setTimeout(() => {
            cati.classList.add('flip')
            style.sheet.insertRule('#cat:hover::after{ left: 15%;}', 0);
            style.sheet.insertRule('#cat.hover:after{ left: 15%;}', 0);
        }, 500);
    }, 5000);
}

function removerHover() {
    $.gI('cat').classList.remove('hover')
}