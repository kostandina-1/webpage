function addItem() {
    var ul = document.getElementById("list1");
    var movie = document.getElementById("movie");
    var lii= document.createElement("li");
    lii.setAttribute('id', movie.value);
    lii.appendChild(document.createTextNode(movie.value));
    ul.appendChild(lii);
}

function removeItem() {
    var ul = document.getElementById("list1");
    var movie = document.getElementById("movie");
    var item = document.getElementById(movie.value);
    ul.removeChild(item);
}
localStorage.setItem('key', 'value');
let variable = loaclStorage.getItem('key');
localStorage.setItem("store", JSON.stringify(li));

let data = localStorage.getItem("store");
if (data) {
    li = JSON.parse(data);
    loadToDo(li);
    id = li.length;
} else {
    li = [];
    
}
function loadToDo(array) {
    array.forEach(function (item) {
        addToDo(item.name, item.id, item.done, item.trash);
    });
}
