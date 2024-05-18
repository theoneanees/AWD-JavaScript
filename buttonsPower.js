function changeBackgroundColorOfBody(color) {
    document.body.style.backgroundColor = color;
}


function changeBackgroundColorOfParapraph() {
    document.getElementById("myParagraph").style.backgroundColor = "yellow";
}

function changeTextColor() {
    document.getElementById("myParagraph").style.color = "red";
}

function changeFontSize() {
    document.getElementById("myParagraph").style.fontSize = "20px";
}

function changeToRandomColor() {
    let randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
}

function changeFontFamily() {
    document.getElementById("myParagraph").style.fontFamily = "Arial";
}

function hideParagraph() {
    document.getElementById("myParagraph").style.visibility = "hidden";
}

function showParagraph() {
    document.getElementById("myParagraph").style.visibility = "visible";
}

function moveBlock() {
    let block = document.getElementById("myBlock");
    let position = 0;
    let id = setInterval(frame, 5);
    function frame() {
        if (position == 350) {
            clearInterval(id);
        } else {
            position++; 
            block.style.left = position + 'px'; 
        }
    }
}

function changeBGColorOfH1()
{
    document.getElementById("IWillChangeItsColor").style.backgroundColor = "pink"
}

