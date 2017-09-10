
var height = document.documentElement.scrollHeight;

function scroll(event){
    var y = event.clientY;
    var yPercentage = y/screen.height;
    //ctrlKey is subject to change as more features will be added
    if (event.ctrlKey)
    window.scrollTo(0,yPercentage*height);
}


window.onmousemove = scroll;
