const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const my_work = document.querySelector("#my-work");
const modal_container = document.querySelector("#modal-container");
const continue_button = document.querySelector("#continue");
const go_to_github_button = document.querySelector("#go-to-github");

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open')
})

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open');
    })
})

my_work.addEventListener('click', () => {
    modal_container.classList.add('show');
    disableScrolling();
})

continue_button.addEventListener('click', () => {
    modal_container.classList.remove('show');
    window.location.replace("#work");
    enableScrolling();
})

go_to_github_button.addEventListener('click', () => {
    modal_container.classList.remove('show');
    window.location.replace("https://github.com/chinatu/chinatu/blob/main/README.md#-examples-of-my-work-");
    enableScrolling();
})

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}


const textToType = "Hi, my name is Chinatu Enyinnaya";

// DOM element
const typingTextElement = document.getElementById("typing-text");

// Function to simulate typing effect
function typeText() {
    let index = 0;
    const typingInterval = setInterval(function () {
        typingTextElement.textContent += textToType[index];
        index++;

        if (index === textToType.length) {
            clearInterval(typingInterval);
        }
    }, 100); // Adjust the interval to control typing speed
}

// Call the function to start the typing effect
typeText();
