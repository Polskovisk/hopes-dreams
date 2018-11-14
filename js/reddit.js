class reddit {
    constructor(subreddit) {
        this.sr = subreddit;
    }

     get loadreddit() {
         return this.freddit(this.hreddit);
     }

    hreddit(result) {
        var n = localStorage.posts

        if (n >= result.data.children.length) {
            n = 0
            localStorage.posts = n
        }

        if (localStorage.randompost == true) {
            n = Math.floor(Math.random() * result.data.children.length);
        } else if (n == null) {
            n = 0
        }
        
        if (result.data.children[n].data.stickied) {
            n =+ 1
            localStorage.posts = n
        }

        $.gC('reddit')[0].href = `https://www.reddit.com/${result.data.children[n].data.permalink}`
        $.gC('reddit')[0].id = `${n}`
        $.gC('reddit')[0].innerText = `${result.data.children[n].data.title}`
        $.gI('reddup').innerText = `${result.data.children[n].data.ups}`
    }


    freddit(callback) {
        var request = new XMLHttpRequest(),
            url = `https://www.reddit.com/r/${this.sr}/.json?`;


        request.open('GET', url, true);

        request.onload = function () {
            if (this.status >= 200 && this.status < 400)
                callback(JSON.parse(this.response));
            else {
                console.log("Weather API returned an error: " + this.response);
                callback(null);
            }
        };

        request.onerror = () => {
            console.log("Request to weather API failed.");
            callback(null);
        };

        request.send();
    }
}