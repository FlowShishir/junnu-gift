/* =========================================
   Junnu Gift
   Interactive Letter Animation
========================================= */


/* =========================================
   ELEMENTS
========================================= */

const landing =
    document.getElementById("landing");

const openGiftButton =
    document.getElementById("openGiftButton");

const letterSection =
    document.getElementById("letterSection");

const loveEnvelope =
    document.getElementById("loveEnvelope");

const letterSeal =
    document.getElementById("letterSeal");

const letterStage =
    document.querySelector(".letter-stage");

const closeLetter =
    document.getElementById("closeLetter");

const stars =
    document.getElementById("stars");

const floatingHearts =
    document.getElementById("floatingHearts");


/* =========================================
   STARS
========================================= */

function createStars() {

    if (!stars) return;

    for (let i = 0; i < 55; i++) {

        const star =
            document.createElement("span");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.setProperty(
            "--duration",
            (2 + Math.random() * 4) + "s"
        );

        star.style.animationDelay =
            (Math.random() * 4) + "s";

        stars.appendChild(star);
    }
}


/* =========================================
   FLOATING HEARTS
========================================= */

function createFloatingHearts() {

    if (!floatingHearts) return;

    const hearts = [
        "♡",
        "♥",
        "♡",
        "❤"
    ];

    for (let i = 0; i < 18; i++) {

        const heart =
            document.createElement("span");

        heart.className =
            "floating-heart";

        heart.textContent =
            hearts[
                Math.floor(
                    Math.random() * hearts.length
                )
            ];

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.bottom =
            (-10 - Math.random() * 20) + "%";

        heart.style.fontSize =
            (12 + Math.random() * 20) + "px";

        heart.style.setProperty(
            "--duration",
            (8 + Math.random() * 8) + "s"
        );

        heart.style.animationDelay =
            (Math.random() * 8) + "s";

        floatingHearts.appendChild(heart);
    }
}


/* =========================================
   OPEN GIFT
========================================= */

openGiftButton.addEventListener(
    "click",
    function () {

        openGiftButton.disabled = true;

        landing.style.transition =
            "opacity 0.8s ease, transform 0.8s ease";

        landing.style.opacity = "0";

        landing.style.transform =
            "scale(1.05)";

        setTimeout(() => {

            landing.style.display =
                "none";

            letterSection.classList.remove(
                "hidden-section"
            );

            letterSection.scrollIntoView({
                behavior: "smooth"
            });

        }, 750);

    }
);


/* =========================================
   OPEN LETTER
========================================= */

function openLetter() {

    if (
        loveEnvelope.classList.contains(
            "opened"
        )
    ) {
        return;
    }

    loveEnvelope.classList.add(
        "opened"
    );

    letterStage.classList.add(
        "opened"
    );


    /* small vibration on supported phones */

    if (
        navigator.vibrate
    ) {

        navigator.vibrate([
            20,
            30,
            20
        ]);

    }


    /* create burst hearts */

    createHeartBurst();

}


/* =========================================
   SEAL CLICK
========================================= */

letterSeal.addEventListener(
    "click",
    function (event) {

        event.stopPropagation();

        openLetter();

    }
);


/* =========================================
   ENVELOPE CLICK
========================================= */

loveEnvelope.addEventListener(
    "click",
    function (event) {

        if (
            event.target === letterSeal
        ) {
            return;
        }

        if (
            !loveEnvelope.classList.contains(
                "opened"
            )
        ) {

            openLetter();

        }

    }
);


/* =========================================
   CLOSE LETTER
========================================= */

closeLetter.addEventListener(
    "click",
    function () {

        loveEnvelope.classList.remove(
            "opened"
        );

        letterStage.classList.remove(
            "opened"
        );

    }
);


/* =========================================
   HEART BURST
========================================= */

function createHeartBurst() {

    const symbols = [
        "❤️",
        "💗",
        "💕",
        "♡"
    ];

    for (let i = 0; i < 14; i++) {

        const heart =
            document.createElement(
                "span"
            );

        heart.textContent =
            symbols[
                Math.floor(
                    Math.random() *
                    symbols.length
                )
            ];

        heart.style.position =
            "fixed";

        heart.style.left =
            "50%";

        heart.style.top =
            "55%";

        heart.style.zIndex =
            "9999";

        heart.style.pointerEvents =
            "none";

        heart.style.fontSize =
            (14 + Math.random() * 18) +
            "px";

        const angle =
            Math.random() * Math.PI * 2;

        const distance =
            70 + Math.random() * 130;

        const x =
            Math.cos(angle) *
            distance;

        const y =
            Math.sin(angle) *
            distance;

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(.4)",
                    opacity: 0
                },

                {
                    transform:
                        "translate(" +
                        x +
                        "px, " +
                        y +
                        "px) scale(1)",
                    opacity: 1
                },

                {
                    transform:
                        "translate(" +
                        (x * 1.5) +
                        "px, " +
                        (y * 1.5) +
                        "px) scale(.5)",
                    opacity: 0
                }
            ],
            {
                duration:
                    900 +
                    Math.random() * 500,

                easing:
                    "cubic-bezier(.16,1,.3,1)"
            }
        );

        document.body.appendChild(
            heart
        );

        setTimeout(() => {

            heart.remove();

        }, 1600);

    }
}


/* =========================================
   INITIALIZE
========================================= */

createStars();

createFloatingHearts();
