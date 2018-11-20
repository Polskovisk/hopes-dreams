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

const interative = [
    `Ei ${localStorage.username}, preciso de carne, é pra um amigo meow`,
    `meow meow meow meow MEOW MEOW MEOW  PET ME NOW`,
    `ASDNLKANDJAWNOGLAJNSLKDNKASJDN disse o ${localStorage.username} `,
    `${localStorage.username} é mais feio que cachorro.`,
    `Fato interessante: Eu acabei de fazer cocô.`,
    `Gato em inglês é cat. Gato ao contrário é Otag. Você ao contrário é gay.`,
    `${localStorage.username} pode até ser legal, mas o Polsk é mais daora.`,
    `Tô cheirando a saliva...bom pra caramba!`,
    `Ei ${localStorage.username}, me faz um carinho na barriguinha?  :3  `,
    `EU TO DROGADO SAI DE PERTO EU TO DOIDO AAAAAAAAAAAAAAAAA`,
    `Dizer que gatos tem 7 vidas é que nem dizer que humano dá Respawn.`,
    `Cheira meu cu`,
    `Kpop é lixo...só digo isso...`,
    `${localStorage.username} ${localStorage.username} ${localStorage.username} ${localStorage.username} ! Viu como é legal ficar chamando seu nome o tempo todo?`,
    `Ei, tô meio triste. Você com o nome ${localStorage.username} foi escolhido pra me fazer carinho!`,
    `Error code 239199#4JIAOÇ_1 (nametag@local). É, parece que o Polsk bugou tudo de novo...`,
    `Se meu nome fosse ${localStorage.username} eu adotava um gato....rosa...que flutua.`,
    `Sabe como eu flutuo assim? Eu peido o tempo todo...a realidade dói...`,
]

const interativehour = [
    `ZzzZzzZZZzzzz...hã? Você de novo?`,
    `Eu até gostaria de dormir, mas o ${localStorage.username} NÃO ESTÁ DEIXANDO!`,
]

const images = [
    "./img/cat.png",
    "./img/catlove.gif"
]

var catsleep = parseInt(localStorage.catsleep)

var style = (function () {
    // Create the <style> tag
    var style = document.createElement("style");
    // WebKit hack
    style.appendChild(document.createTextNode(""));
    // Add the <style> element to the page
    document.head.appendChild(style);
    return style;
})();

function cat() {
    $.gI('catimage').src = images[0]
    $.gI('cat').setAttribute('cat-talk', frases[Math.floor(Math.random() * 10 + 2)])
    $.gI('cat').classList.add('hover')
    setTimeout(() => {
        removerHover()
    }, 7000);
    setInterval(floating, 2000)

    setTimeout(() => {
        setInterval(cattalk, 15000)
        cattalk()
    }, 10000);

    if (!localStorage.username && localStorage.username == '') {
        window.onload = function () {
            var person = prompt("Please enter your name", "");
            localStorage.username = person;
        }
    }

    sleep();
}

function sleep() {
    if (localStorage.catsleep_control == 'false') {
        var past = new Date(localStorage.olddate).getTime()
        var difdate = (date.getTime() - past)
        var min = 1000 * 60 * 10;
        console.log(difdate)
        if (difdate >= min) {
            localStorage.olddate = date
            localStorage.catsleep_control = true;
            localStorage.catsleep = 0
        }
    } else if (catsleep < 2) {
        catsleep += 1
        localStorage.catsleep = catsleep
    }
}

function floating() {
    var cat = $.gI('cat');
    var cati = $.gI('catimage');
    cat.style.bottom = '80px';
    setTimeout(() => {
        cat.style.bottom = '30px';
    }, 1000);
    setTimeout(() => {
        cat.style.left = '0';
        setTimeout(() => {
            cati.classList.add('flip')
            style.sheet.insertRule('#cat:hover::after{ left: 15%;}', 0);
            style.sheet.insertRule('#cat:hover::before{ left: 58%;}', 0);
            style.sheet.insertRule('#cat.hover:after{ left: 15%;}', 0);
            style.sheet.insertRule('#cat.hover:before{ left: 58%;}', 0);
        }, 500);
    }, 5000);
}

function removerHover() {
    $.gI('cat').classList.remove('hover')
}

function cattalk() {
    //Load frase entre tempos random
    var hora = checkTime(date.getHours());
    var cat = $.gI('cat');

    if (localStorage.catsleep_control == 'true' && hora <= 7 && hora >= 0) {
        if (localStorage.catsleep == 1) {
            cat.setAttribute('cat-talk', interativehour[0])
        } else if (localStorage.catsleep == 2) {
            cat.setAttribute('cat-talk', interativehour[1])
            localStorage.catsleep_control = false;
        }
    } else {
        var random = Math.floor(Math.random() * 18)
            if (random == 9) {
                cat.classList.add('catdrugs')
                setTimeout(() => {
                    cat.classList.remove('catdrugs')
                }, 14000);
            }
        cat.setAttribute('cat-talk', interative[random])
    }

    cat.classList.add('hover')

    setTimeout(() => {
        removerHover()
    }, 7000);
}

cat();