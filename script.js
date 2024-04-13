// ------------ index page header scripts ------------

document.getElementById('menu_btn_navbar_responsive').addEventListener('click', function () {
    // document.querySelector('.nav_links_responsive').style.display =
    //     document.querySelector('.nav_links_responsive').style.display === 'block' ? 'none' : 'block';

    let div = document.querySelector('.nav_links_responsive').style;


    if (div.display === 'none') {
        div.display = 'block';
        div.display = 'flex';
        div.flexDirection = 'column';
        div.alignItems = 'center';
        div.gap = '3vw';
        div.width = '100%';
        div.padding = '1em';
        div.position = 'absolute';
        div.zIndex = '1';
        div.backgroundColor = 'white';
    }
    else {
        div.display = 'none';
    }

});



// ------------------------ index page footer scripts ------------------


//reset the default value of displays
document.getElementById('about_div_content').style.display = 'none';
document.getElementById('contact_div_content').style.display = 'none';


document.getElementById('about_div').addEventListener('click', function () {

    document.getElementById('about_btn').className =
        document.getElementById('about_btn').className === 'fa-solid fa-arrow-down' ?
            'fa-solid fa-arrow-right' : 'fa-solid fa-arrow-down';
    lookContent(document.getElementById('about_div_content').style);
});

document.getElementById('contact_div').addEventListener('click', function () {

    document.getElementById('contact_btn').className =
        document.getElementById('contact_btn').className === 'fa-solid fa-arrow-down' ?
            'fa-solid fa-arrow-right' : 'fa-solid fa-arrow-down';
    lookContent(document.getElementById('contact_div_content').style);
});


function lookContent(divStyle) {
    console.log("in func");
    if (divStyle.display === 'none') {
        console.log("in if");
        divStyle.display = 'block';
        divStyle.display = 'flex';
        divStyle.flexDirection = 'column';
        divStyle.gap = '10px';
    }
    else {
        console.log("in else");
        divStyle.display = 'none';

    }
}


// ------------------------ index page section 6 scripts ------------------

// seed data
var courses = [
    [
        { "img": "https://tredu.io/assets/chess-f0f3dd4b.svg", "Kind": "Chess", "Content": "Master Strategy on the Board of Intellectual Battles." },
        { "img": "https://tredu.io/assets/robotics-7232b213.svg", "Kind": "Robotics", "Content": "Build, Code, Innovate: Your Robotic Odyssey Awaits." },
        { "img": "https://tredu.io/assets/music-37718504.svg", "Kind": "Music", "Content": "Harmonize Your Talents: Notes of Melody." }
    ],
    [
        { "img": "https://tredu.io/assets/music-37718504.svg", "Kind": "Music", "Content": "Harmonize Your Talents: Notes of Melody." },
        { "img": "https://tredu.io/assets/art-71a45ec0.svg", "Kind": "Art", "Content": "Unleash Creativity: Colors, Canvas, and Expressive Creations" },
        { "img": "https://tredu.io/assets/dance-c00d69b0.svg", "Kind": "Dance", "Content": "Move to the Beat: Find Your Groove on the Dance Floor." }
    ],
    [
        { "img": "https://tredu.io/assets/art-71a45ec0.svg", "Kind": "Art", "Content": "Unleash Creativity: Colors, Canvas, and Expressive Creations" },
        { "img": "https://tredu.io/assets/dance-c00d69b0.svg", "Kind": "Dance", "Content": "Move to the Beat: Find Your Groove on the Dance Floor." },
        { "img": "https://tredu.io/assets/music-37718504.svg", "Kind": "Sport", "Content": "Embrace Fitness and Fun: Where Skills and Sportsmanship Converge.." }
    ]
];




//actions

let temp = 0;


document.querySelector('#btnRight').addEventListener('click', () => {
    ChangeContent(courses[(temp + 1) === 3 ? temp = 0 : ++temp]);
    
});

document.querySelector('#btnLeft').addEventListener('click', () => {
    ChangeContent(courses[(temp - 1) < 0 ? temp = 2 : --temp]);
});



function ChangeContent(element) {
    let i = 1;
    element.forEach(course => {
        document.querySelector('#img_course_'+i+'_section_6').src = course.img;
        document.querySelector('#h'+i+'_section_6').textContent = course.Kind;
        document.querySelector('#p'+(i++)+'_section_6').textContent = course.Content;
    });

}