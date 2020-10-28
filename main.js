window.localStorage;
localStorage.setItem("countLove", "");
var count = localStorage.getItem("countLove");
document.querySelector('#btnLove').onclick = function () {
    count = Number(count) + Number(1);
    document.querySelector('#count').innerHTML = count;
    localStorage.setItem("countLove", count + 1);
}