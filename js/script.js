/* =========================================
   ELEMENTS
========================================= */

const openGiftButton =
    document.getElementById("openGiftButton");

const continueButton =
    document.getElementById("continueButton");

const landing =
    document.getElementById("landing");

const letterSection =
    document.getElementById("letterSection");

const littleThingsSection =
    document.getElementById("littleThingsSection");

const stars =
    document.getElementById("stars");

const floatingHearts =
    document.getElementById("floatingHearts");


/* =========================================
   CREATE STARS
========================================= */

function createStars(amount = 55) {

    for (let i = 0; i < amount; i++) {

        const star =
            document.createElement("span");

        star.className = "star";

        star.style.left =
            Math.random() * 100 + "%";

        star.style.top =
            Math.random() * 100 + "%";

        star.style.setProperty(
            "--duration",
            `${1.5 + Math.random() * 4}s`
        );

        star.style.animationDelay =
            `${Math.random() * 4}s`;

        stars.appendChild(star);
    }
}


/* =========================================
   CREATE FLOATING HEARTS
========================================= */

function createFloatingHearts(amount = 12) {

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("span");

        heart.className =
            "floating-heart";

        heart.innerHTML =
            Math.random() > .5
                ? "♥"
                : "♡";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.top =
            70 + Math.random() * 30 + "%";

        heart.style.fontSize =
            12 + Math.random() * 18 + "px";

        heart.style.setProperty(
            "--duration",
            `${7 + Math.random() * 7}s`
        );

        heart.style.animationDelay =
            `${Math.random() * 8}s`;

        floatingHearts.appendChild(heart);
    }
}


/* =========================================
   SHOW SECTION
========================================= */

function showSection(section) {

    section.classList.remove(
        "hidden-section"
    );

    section.classList.add(
        "sectionReveal"
    );
}


/* =========================================
   OPEN GIFT
========================================= */

openGiftButton.addEventListener(
    "click",
    function () {

        /*
         * Hide landing screen
         */

        landing.style.transition =
            "opacity 1s ease, transform 1s ease";

        landing.style.opacity = "0";

        landing.style.transform =
            "scale(1.03)";


        /*
         * After animation,
         * show letter
         */

        setTimeout(() => {

            landing.style.display =
                "none";

            showSection(
                letterSection
            );

            letterSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 850);

    }
);


/* =========================================
   CONTINUE
========================================= */

continueButton.addEventListener(
    "click",
    function () {

        showSection(
            littleThingsSection
        );

        setTimeout(() => {

            littleThingsSection.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 100);

    }
);


/* =========================================
   START EFFECTS
========================================= */

createStars();

createFloatingHearts();
