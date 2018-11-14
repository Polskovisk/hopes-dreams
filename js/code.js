const $ = {
    gI: e => document.getElementById(e),
    gC: e => document.getElementsByClassName(e),
    gT: e => document.getElementsByTagName(e),
    qA: e => document.querySelectorAll(e),
    qS: e => document.querySelector(e)
};

function engines() {
    return {
        g: ['https://google.com/search?q=', 'Google'],
        d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
        y: ['https://youtube.com/results?search_query=', 'Youtube'],
    };
}

if (localStorage.getItem('location') == null) {
    localStorage.location = 'são paulo';
}

if (localStorage.getItem('randompost') == null) {
    localStorage.randompost = false;
}

localStorage.posts = 0

if (localStorage.getItem('todo') == null) {
    localStorage.todo = '[]';
}

if (localStorage.getItem('redditsub') == null) {
    localStorage.redditsub = 'news';
}

$.gI('city').onkeyup = (e) => {
    if (e.keyCode == 13) {
        if (e.target.value !== '') {
            localStorage.setItem("location", e.target.value);
            new Weather(localStorage.location).loadweather;
        }
    }
}

$.gI('applycity').onclick = (e) => {
    var value = $.gI('city').value
    if (value !== '') {
        localStorage.setItem("location", value);
        new Weather(localStorage.location).loadweather;
    } else {
        alert('You need to insert some city.')
    }
}

$.gI('settingsredd').onkeyup = (e) => {
    if (e.keyCode == 13) {
        if (e.target.value !== '') {
            localStorage.setItem("redditsub", e.target.value);
            new reddit(localStorage.redditsub).loadreddit;
    }
    }
}

$.gI('applyredd').onclick = (e) => {
    var value = $.gI('settingsredd').value
     if (value !== '') {
        localStorage.setItem("redditsub", value);
        new reddit(localStorage.redditsub).loadreddit;
    } else {
        alert('You need to insert some subreddit.')
    }
}

$.gI('reddnext').onclick = (e) => {
    updatereddit()
}

HTMLElement.prototype.active = function () {
    return this.classList.toggle('active')
}

HTMLElement.prototype.disable = function () {
    return this.classList.toggle('disable');
}

new Weather(city).loadweather;
new reddit(localStorage.redditsub).loadreddit;


function updatereddit() {
    localStorage.posts = parseInt($.gC('reddit')[0].id) + 1
    new reddit(localStorage.redditsub).loadreddit;
}

setTimeout(() => {
    setInterval(updatereddit, 30000)
}, 1000);
