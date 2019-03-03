function init() {
    document.getElementById('play').onmousedown = function () {
        var timer = setInterval(function () {
            time++;
        }, 100);
        alert('you lost');
        document.getElementById('play').onmouseup = function () {
            alert('you lost');
        };
    };
}
function button() {
    if (a == 2) {
        console.log("异常!!");
    }
}
init();