const unlockTime = new Date("october 20, 2026 23:59:00").getTime();

const timeLock = document.getElementById("timeLock");
const countdown = document.getElementById("countdown");

function updateCountdown() {

    const now = new Date().getTime();
    const distance = unlockTime - now;

    if (distance <= 0) {
        timeLock.style.display = "none";
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor(
        (distance % (1000 * 60 * 60)) / (1000 * 60)
    );
    const seconds = Math.floor(
        (distance % (1000 * 60)) / 1000
    );

    countdown.innerHTML =
        `${days} Days : ${hours} Hours : ${minutes} Minutes : ${seconds} Seconds`;
}

updateCountdown();
setInterval(updateCountdown, 1000);


const heart = document.querySelector(".heart");
const balloons = document.querySelector(".balloons");

heart.addEventListener("click", function () {

    // Click text hide
    document.querySelector(".click-text").style.display = "none";

    // Heart hide
    heart.style.display = "none";

    // Balloons show
    createBalloons();

    // confetti 
    createConfetti();

    // 5 seconds baad balloons remove
    setTimeout(function () {

    balloons.innerHTML = "";

    // Cake show
    document.querySelector("#cake-section").style.display = "block";

}, 5000);
});

function createBalloons() {

    const colors = [
        "#ff4d6d",
        "#ffbe0b",
        "#3a86ff",
        "#8338ec",
        "#06d6a0",
        "#ff7b00",
        "#f72585"
    ];

    for (let i = 0; i < 200; i++) {

        const balloon = document.createElement("div");

        balloon.textContent = "🎈";
        balloon.style.position = "absolute";
        balloon.style.fontSize = (35 + Math.random() * 35) + "px";

        balloon.style.left = Math.random() * 95 + "%";
        balloon.style.top = Math.random() * 95 + "%";

        balloon.style.filter =
            "hue-rotate(" + Math.floor(Math.random() * 360) + "deg)";

        balloons.appendChild(balloon);
    }
}

function createConfetti() {

    const colors = [
        "#ff4d6d",
        "#ffbe0b",
        "#3a86ff",
        "#8338ec",
        "#06d6a0",
        "#f72585"
    ];

    for (let i = 0; i < 300; i++) {

        const confetti = document.createElement("div");

        confetti.textContent = "✨";
        confetti.style.position = "fixed";
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.top = "-20px";
        confetti.style.fontSize = (12 + Math.random() * 18) + "px";
        confetti.style.color =
            colors[Math.floor(Math.random() * colors.length)];
        confetti.style.zIndex = "50";
        confetti.style.pointerEvents = "none";

        document.body.appendChild(confetti);

        const duration = 2 + Math.random() * 3;

        confetti.animate(
            [
                {
                    transform: "translateY(0) rotate(0deg)",
                    opacity: 1
                },
                {
                    transform:
                        `translateY(110vh) rotate(${Math.random() * 720}deg)`,
                    opacity: 0
                }
            ],
            {
                duration: duration * 1000,
                easing: "ease-out"
            }
        );

        setTimeout(function () {
            confetti.remove();
        }, duration * 1000);
    }
} 


function playBirthdaySong() {

    const cakeSection = document.querySelector("#cake-section");
    const birthdayWish = document.querySelector(".birthday-wish");

    const song = new Audio("birthday-song.mp3");

    // Song starts
    song.play();

    // Cake hide only after song finishes
    song.addEventListener("ended", function () {

        cakeSection.style.display = "none";

        birthdayWish.style.display = "flex";
        birthdayWish.classList.add("show");

    });
}
function createFloatingHeart() {
    const heart = document.createElement("div");

    heart.classList.add("floating-heart");
    heart.textContent = "❤️";

    heart.style.left = Math.random() * 100 + "%";
    heart.style.fontSize = (15 + Math.random() * 20) + "px";
    heart.style.animationDuration = (5 + Math.random() * 4) + "s";

    document.body.appendChild(heart);

    setTimeout(function () {
        heart.remove();
    }, 9000);
}

setInterval(createFloatingHeart, 800);   

document.querySelector(".scroll-arrow").addEventListener("click", function () {
    document.querySelector(".message").scrollIntoView({
        behavior: "smooth"
    });
});

function createFloatingStar() {

    const star = document.createElement("div");

    star.classList.add("floating-star");

    const symbols = ["✨", "⭐", "🌟", "✦"];

    star.textContent =
        symbols[Math.floor(Math.random() * symbols.length)];

    star.style.left = Math.random() * 100 + "%";

    star.style.fontSize =
        (12 + Math.random() * 18) + "px";

    star.style.animationDuration =
        (6 + Math.random() * 5) + "s";

    document.body.appendChild(star);

    setTimeout(function () {
        star.remove();
    }, 11000);
}

setInterval(createFloatingStar, 600);

function showWishButton() {

    const wishButton = document.querySelector("#wish-button");
    const cakeText = document.querySelector("#cake-text");

    wishButton.style.display = "inline-block";
    cakeText.textContent = "Now make a wish 🕯️✨";
}

function makeWish() {

    const wishButton = document.querySelector("#wish-button");
    const cakeText = document.querySelector("#cake-text");
    const cake = document.querySelector(".cake");

    wishButton.style.display = "none";
    cakeText.textContent = "Make your wish... ✨";

    cake.style.animation = "wishGlow 1s ease-in-out infinite";

    createWishSparkles();

    setTimeout(function () {

        cake.style.animation = "";

        cakeText.textContent = "Your wish is on its way... 💫";

        playBirthdaySong();

    }, 3000);
}

function createWishSparkles() {

    for (let i = 0; i < 80; i++) {

        const sparkle = document.createElement("div");

        sparkle.textContent = "✨";
        sparkle.style.position = "fixed";
        sparkle.style.left = "50%";
        sparkle.style.top = "50%";
        sparkle.style.fontSize = (12 + Math.random() * 20) + "px";
        sparkle.style.zIndex = "100";
        sparkle.style.pointerEvents = "none";

        document.body.appendChild(sparkle);

        const x = (Math.random() - 0.5) * 500;
        const y = (Math.random() - 0.5) * 500;

        sparkle.animate(
            [
                {
                    transform: "translate(-50%, -50%) scale(0)",
                    opacity: 1
                },
                {
                    transform:
                        `translate(calc(-50% + ${x}px), calc(-50% + ${y}px)) scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration: 1800,
                easing: "ease-out"
            }
        );

        setTimeout(function () {
            sparkle.remove();
        }, 1800);
    }
}



function openLetter() {
    const letter = document.getElementById("letter");

    letter.style.display = "block";
}