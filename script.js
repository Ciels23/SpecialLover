const CORRECT_PIN = "0522"; 
let currentPin = "";

function appendDigit(digit) {
    if (currentPin.length >= 4) return;
    currentPin += digit;
    document.getElementById(`d${currentPin.length}`).value = digit;
    
    if (currentPin.length === 4) {
        setTimeout(checkPin, 300);
    }
}

function deleteDigit() {
    if (currentPin.length === 0) return;
    document.getElementById(`d${currentPin.length}`).value = "";
    currentPin = currentPin.slice(0, -1);
    document.getElementById("pin-error").classList.remove("show");
}

function clearPin() {
    currentPin = "";
    for (let i = 1; i <= 4; i++) {
        document.getElementById(`d${i}`).value = "";
    }
    document.getElementById("pin-error").classList.remove("show");
}

function checkPin() {
    if (currentPin === CORRECT_PIN) {
        document.getElementById("pin-screen").classList.add("hidden");
        document.querySelector("header").classList.remove("hidden");
        setTimeout(() => document.querySelector("header").classList.add("visible"), 50);
        document.getElementById("welcome-page").classList.remove("hidden");
        setTimeout(() => document.getElementById("welcome-page").classList.add("visible"), 50);
        startPetals();
    } else {
        document.getElementById("pin-error").classList.add("show");
        setTimeout(clearPin, 1000);
    }
}

function hideAllPages() {
    document.querySelectorAll(".page-section").forEach(page => {
        page.classList.add("hidden");
        page.classList.remove("visible");
    });
}

function enterOurStory() {
    document.getElementById("welcome-page").classList.add("hidden");
    showPage(1);
}

function showPage(pageNum) {
    hideAllPages();
    const targetPage = document.getElementById(`page${pageNum}`);
    if (targetPage) {
        targetPage.classList.remove("hidden");
        setTimeout(() => targetPage.classList.add("visible"), 50);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showFinal() {
    hideAllPages();
    const finalSection = document.getElementById("final-section");
    finalSection.classList.remove("hidden");
    setTimeout(() => finalSection.classList.add("visible"), 50);
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function showLetters() {
    hideAllPages();
    const lettersSection = document.getElementById("letters-section");
    if (lettersSection) {
        lettersSection.classList.remove("hidden");
        setTimeout(() => lettersSection.classList.add("visible"), 50);
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function toggleLetter(letterId) {
    const clickedLetter = document.getElementById(letterId);
    const willOpen = !clickedLetter.classList.contains("open");
    
    document.querySelectorAll(".letter-content").forEach(letter => {
        letter.classList.remove("open");
    });
    
    if (willOpen) {
        clickedLetter.classList.add("open");
    }
}


function startPetals() {
    const container = document.querySelector(".petals-container");
    if (!container) return;
    
    setInterval(() => {
        const petal = document.createElement("div");
        petal.className = "floating-petal";
        const flowers = ["🌸", "🌷", "💮", "✿"];
        petal.innerHTML = flowers[Math.floor(Math.random() * flowers.length)];
        petal.style.left = Math.random() * 100 + "%";
        petal.style.animationDuration = (5 + Math.random() * 4) + "s";
        container.appendChild(petal);
        
        setTimeout(() => petal.remove(), 9000);
    }, 600);
}