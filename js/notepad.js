const note = $.gI('notepad');
const list = $.gI('todolist');
var today = new Date();
var time = `${today.getHours()}:${checkTime(today.getMinutes())}`
var month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
var text = null;
show();
control();

//Todo code

$.gI('todoinput').onkeyup = (e) => {
    if (e.keyCode == 13) {
        if (e.target.value !== '') {
            var todo = []
            var todotemp = localStorage.todo;

            todo = JSON.parse(todotemp);
            var count = Object.keys(todo).length
            todo.push({
                [count]: [time, e.target.value, month[today.getMonth()], today.getDate(), "incomplete"]
            })

            localStorage.todo = JSON.stringify(todo);

            e.target.value = '';

            show(true);
            control();
        }
    }
}

function show(current = false) {
    let todos = JSON.parse(localStorage.todo);

    if (current) {
        todos = todos.slice(-1);
    }

    for (let key of todos) {
        for (let item in key) {
            console.log(key, item)
            $.gI('todolist').innerHTML += `<li id="${item}" class="${key[item][4]}"><p>${key[item][3]} ${key[item][2]}</p> <p>${key[item][0]}</p><div><i class="fas fa-times"></i></div><p>${key[item][1]}</p></li>`
        }
    }
}

function control() {
    $.qA('#todolist li').forEach((elem) => {
        elem.onclick = function (e) {
            elem.classList.toggle('incomplete')
            elem.classList.toggle('complete')

            let todos = JSON.parse(localStorage.todo),
                index = [].slice.call($.gI('todolist').children).indexOf(elem),
                state = elem.classList.contains('complete') ? 'complete' : 'incomplete',
                temp = todos[index],
                obj = {};

                console.log(index)
                console.log(temp)

            for (let key in temp) {
                obj = {
                    [key]: [temp[key][0], temp[key][1], temp[key][2], temp[key][3], state]
                };
            }

            console.log(obj)

            todos.splice(index, 1, obj);
            localStorage.todo = JSON.stringify(todos.filter((el) => {
                return typeof el != "object" || Array.isArray(el) || Object.keys(el).length > 0;
            }));;
        }
    });

    $.qA('#todolist li i').forEach((elem) => {
        elem.onclick = (e) => {
            $.gI('todolist').removeChild(e.target.parentNode.parentNode)
        }
    })
}
//Notes code

$.gI('todo').onclick = function () {
    $.gI('todoarea').classList.add('active')
    $.gI('todo').classList.add('active')
    $.gI('notes').classList.remove('active')
    setTimeout(() => {
    $.gI('todoinput').disable()
    }, 300);
}

$.gI('notes').onclick = function () {
    $.gI('todoarea').classList.remove('active')
    $.gI('todo').classList.remove('active')
    $.gI('notes').classList.add('active')
    setTimeout(() => {
       $.gI('todoinput').disable()
    }, 300);
}

if (!text) {
    text = localStorage.note || "";
    note.value = text
}

note.onkeydown = (e) => {
    var key = e.keyCode || e.which;
    if (key === 27) {
        note.blur();
    }
}

note.onblur = function () {
    if (text !== note.value) {
        text = note.value;
        localStorage.setItem("note", text);
    }
}