/* =========================================
   ELEMENTS
========================================= */

const openGiftButton =
    document.getElementById("openGiftButton");

const landing =
    document.getElementById("landing");

const letterSection =
    document.getElementById("letterSection");

const envelope =
    document.getElementById("envelope");

const envelopeHint =
    document.getElementById("envelopeHint");

const continueButton =
    document.getElementById("continueButton");

const littleThingsSection =
    document.getElementById("littleThingsSection");

const stars =
    document.getElementById("stars");

const floatingHearts =
    document.getElementById("floatingHearts");


/* =========================================
   STARS
========================================= */

function createStars(amount = 65) {

    if (!stars) return;

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
   FLOATING HEARTS
========================================= */

function createFloatingHearts(amount = 15) {

    if (!floatingHearts) return;

    for (let i = 0; i < amount; i++) {

        const heart =
            document.createElement("span");

        heart.className =
            "floating-heart";

        heart.textContent =
            Math.random() > .45
                ? "♥"
                : "♡";

        heart.style.left =
            Math.random() * 100 + "%";

        heart.style.top =
            75 + Math.random() * 25 + "%";

        heart.style.fontSize =
            `${12 + Math.random() * 18}px`;

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

    if (!section) return;

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

if (openGiftButton) {

    openGiftButton.addEventListener(
        "click",
        () => {

            /*
             * Prevent multiple clicks
             */

            openGiftButton.disabled = true;


            /*
             * Landing fade
             */

            landing.style.transition =
                "opacity 1s ease, transform 1s ease";

            landing.style.opacity = "0";

            landing.style.transform =
                "scale(1.04)";


            /*
             * Show letter experience
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

            }, 900);

        }
    );
}


/* =========================================
   ENVELOPE OPEN
========================================= */

if (envelope) {

    envelope.addEventListener(
        "click",
        () => {

            /*
             * Already opened?
             */

            if (
                envelope.classList.contains(
                    "opened"
                )
            ) {
                return;
            }


            /*
             * Open envelope
             */

            envelope.classList.add(
                "opened"
            );


            /*
             * Change instruction
             */

            if (envelopeHint) {

                envelopeHint.textContent =
                    "তোমার জন্য একটা ছোট্ট চিঠি... ❤️";

                envelopeHint.style.opacity =
                    "0";

                envelopeHint.style.transition =
                    "opacity .5s ease";

                setTimeout(() => {

                    envelopeHint.style.opacity =
                        "1";

                }, 900);
            }

        }
    );
}


/* =========================================
   CONTINUE
========================================= */

if (continueButton) {

    continueButton.addEventListener(
        "click",
        () => {

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
}


/* =========================================
   START BACKGROUND EFFECTS
========================================= */

createStars();

createFloatingHearts();
