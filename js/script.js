/* =========================================
   Junnu Gift — Main JavaScript
========================================= */


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
            Math.random() > 0.45
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

            if (
                openGiftButton.disabled
            ) {
                return;
            }

            openGiftButton.disabled = true;


            /* Fade landing */

            if (landing) {

                landing.style.transition =
                    "opacity 1s ease, transform 1s ease";

                landing.style.opacity =
                    "0";

                landing.style.transform =
                    "scale(1.04)";
            }


            /*
             * Give the fade animation
             * time to finish.
             */

            setTimeout(() => {

                if (landing) {
                    landing.style.display =
                        "none";
                }

                showSection(
                    letterSection
                );


                /*
                 * Scroll to the letter
                 */

                if (letterSection) {

                    setTimeout(() => {

                        letterSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }, 100);
                }

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
             * Prevent opening twice.
             */

            if (
                envelope.classList.contains(
                    "opened"
                )
            ) {
                return;
            }


            /*
             * Stop the user from
             * accidentally clicking again.
             */

            envelope.style.pointerEvents =
                "none";


            /*
             * STEP 1
             *
             * Envelope flap opens.
             */

            envelope.classList.add(
                "opened"
            );


            /*
             * Change hint text.
             */

            if (envelopeHint) {

                envelopeHint.style.opacity =
                    "0";

                setTimeout(() => {

                    envelopeHint.textContent =
                        "তোমার জন্য একটা ছোট্ট চিঠি... ❤️";

                    envelopeHint.style.opacity =
                        "1";

                }, 850);
            }


            /*
             * STEP 2
             *
             * Letter animation begins
             * after the flap has opened.
             */

            setTimeout(() => {

                const paper =
                    envelope.querySelector(
                        ".envelope-paper"
                    );

                if (!paper) return;


                /*
                 * Restart animation safely.
                 */

                paper.style.animation =
                    "none";

                void paper.offsetWidth;


                /*
                 * Paper comes out.
                 */

                paper.style.animation =
                    "letterSettle 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards, letterGlow 3s ease-in-out 1.5s infinite";


            }, 650);

        }
    );
}


/* =========================================
   CONTINUE BUTTON
========================================= */

if (continueButton) {

    continueButton.addEventListener(
        "click",
        () => {

            showSection(
                littleThingsSection
            );


            setTimeout(() => {

                if (
                    littleThingsSection
                ) {

                    littleThingsSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }, 100);

        }
    );
}


/* =========================================
   INITIALIZE
========================================= */

createStars();

createFloatingHearts();
