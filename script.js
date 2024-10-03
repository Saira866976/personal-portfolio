let side = document.getElementById("side_menu");

function closemenu() {
    side.style.right = "-350px"; // Hide the menu
}

function openmenu() {
    side.style.right = "0"; // Show the menu
}



// sticky nav bar

let head = document.querySelector(".header")
const hero = document.querySelector(".hero");

const observer = new IntersectionObserver((entries) => {
    const ent = entries[0];
    console.log(ent)
    ent.isIntersecting == false ? head.classList.add('sticky') : head.classList.remove('sticky');
}, {
    root: null,
    rootMargin: "-100px",
    threshold: 0,
})

observer.observe(hero);



// ============================sillks===================


function startCounter(elementId, maxValue, incrementSpeed) {
    let element = document.getElementById(elementId);
    let count = 0;

    function runCounter() {
        const interval = setInterval(() => {
            if (count === maxValue) {
                clearInterval();
            } else {
                count += 1;
                element.innerHTML = count + "%";
            }
        }, incrementSpeed);
    }

    runCounter();
}


startCounter("HTML", 65, 40); // 65%
startCounter("css", 75, 30);   //  75%
startCounter("JS", 56, 55);    // 56%
startCounter("PHP", 45, 60);   // 45%
startCounter("angular", 30, 80); //  30%
startCounter("jquery", 50, 50); // 50%
startCounter("wordpress", 90, 25); //  90%
startCounter("react", 25, 100); //  10%



const scriptURL = 'https://script.google.com/macros/s/AKfycbw5cbHgKCjjS1_V7dpkT8PunmGxYPUKIcp7BFLl_PmT1OmhcoNtd0Mn-TxewUr9RDGp6Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg=document.querySelector("#msg");

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        //   .then(response => console.log('Success!', response))
        //   .catch(error => console.error('Error!', error.message))
        .then(response => {
            console.log('Success!', response);  // Check if success is being triggered
            msg.innerHTML = "Massage is send successfully!";
            setTimeout(function(){
                msg.innerHTML="";
            },3000)
            form.reset()
        })
        .catch(error => {
            console.error('Error:', error);  // Logs the entire error
            msg.innerHTML = "error: " + error.message;  // Displays more detailed error
        })
})






// ======================change moode================
var icon = document.getElementById("mood-icon");

icon.onclick = function () {
    document.body.classList.toggle("light-moode");
    if (document.body.classList.contains("light-moode")) {
        icon.src = "moon.png";
    }
    else {
        icon.src = "sun.png";
    }
}