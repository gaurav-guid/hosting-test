let i = 1;

function buttonClicked() {
    console.log("button Clicked...");
    var element = document.getElementById("welcome-heading");
    if ( i === 1) {
        element.style.backgroundColor = 'blue';
        i = 2;
    }
    else {
        element.style.backgroundColor = 'red';
        i = 1
    }
}