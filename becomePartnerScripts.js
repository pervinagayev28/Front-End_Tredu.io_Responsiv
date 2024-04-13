
// ------------- Become partiner page scripts -----------


// const inputs = document.querySelectorAll('.input_div_logos');
const divs = document.querySelectorAll('.input_div_logos');

// for being focus the inputs when img click

divs.forEach(div => {
    div.addEventListener('click', () => {
        let inputId = div.id.substring(0, div.id.indexOf("Div"))
        document.getElementById(inputId).focus();
        document.getElementById(inputId).placeholder =document.getElementById(inputId).getAttribute('data-placeholder');
        document.getElementById(div.id).style.display = 'none';
    });
});

// -------change page by js code--------

document.getElementById('nextBtn').addEventListener('click', function () {
    location.href = "./successEnterance.html"
})
