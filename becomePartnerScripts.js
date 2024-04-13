
// ------------- Become partiner page scripts -----------


const inputs = document.querySelectorAll('.inputLink');
const imgs = document.querySelectorAll('.inputImg');


// for being focus the inputs
let inputId;
inputs.forEach(input => {
    input.addEventListener('focus', () => {
        inputId = input.id;
        document.getElementById(inputId + 'img').hidden = true;
        document.getElementById(inputId + 'lb').hidden = true;
        showHiddens();
    });
});

function showHiddens() {
    inputs.forEach(e => {
        if (inputId.toString().includes(e.id.toString()) === false) {
            document.getElementById(e.id + 'img').hidden = false;
            document.getElementById(e.id + 'lb').hidden = false;
        }
    });
}



// for being focus the inputs when img click

imgs.forEach(img => {
    img.addEventListener('click', () => {
        let id = img.id.substring(0, img.id.indexOf("img"))
        document.getElementById(id).focus();
    });
});


// -------change page by js code--------

// document.getElementById('nextBtn').addEventListener('click', function () {
//     location.href = "./successEnterance.html"
// })
