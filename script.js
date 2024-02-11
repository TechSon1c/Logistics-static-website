// scroll to about us

let scrollAbout2 = document.getElementById('ScrollButton');

function scrollToAboutUs() {
    if (scrollAbout2) {
        scrollAbout2.scrollIntoView({
            behavior: "smooth"
        });
    }
}
// get started

function ScrollToAboutUs(event) {
    event.preventDefault();
    if (scrollAbout2) {
        scrollAbout2.scrollIntoView({
            behavior: "smooth"
        });
    }
}

// scroll to servicess

let services = document.getElementById('ScrollServices');

function ScrollToServices(event) {
    event.preventDefault();
    if (services) {
        services.scrollIntoView({
            behavior: "smooth"
        });
    }
}


// scroll to contact


let contactsScroll = document.getElementById('ScrollContact');

function ScrollToContact(event) {
    event.preventDefault();
    if (contactsScroll) {
        contactsScroll.scrollIntoView({
            behavior: "smooth"
        });
    }
}


//  scrol up to home

function scrollToHome() {
    var targetElement = document.getElementById("home"); 
    var offsetTop = targetElement.offsetTop; 
    window.scrollTo({
      top: offsetTop,
      behavior: "smooth" 
    });
}
// scroll to top from anywhere


// Card Reviews numbers rising up function 

let valueDisplays = document.querySelectorAll(".num");
let interval = 9000;
valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue);
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if(startValue == endValue) {
            clearInterval(counter)
        }
    }, duration)
});

// singup alert


let textSingup = document.getElementById('text-display')

function singup() {
    textSingup.textContent = "You have Signed up successfully! \nPlease Email:\nbryce@nexislogisticsllc.com \n for more instructions"
}
