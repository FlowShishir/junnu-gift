/* =========================================
   JUNNU GIFT — MAIN JAVASCRIPT
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
   CREATE STARS
========================================= */

function createStars(amount = 65) {

    if (!stars) return;

    stars.innerHTML = "";

    for (let i = 0; i < amount; i++) {

        const star =
            document.createElement("span");

        star.className = "star";

        star.style.left =
            `${Math.random() * 100}%`;

        star.style.top =
            `${Math.random() * 100}%`;

        star.style.animationDelay =
            `${Math.random() * 4}s`;

        star.style.animationDuration =
            `${1.5 + Math.random() * 4}s`;

        stars.appendChild(star);
    }
}


/* =========================================
   CREATE FLOATING HEARTS
========================================= */

function createFloatingHearts(amount = 15) {

    if (!floatingHearts) return;

    floatingHearts.innerHTML = "";

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
            `${Math.random() * 100}%`;

        heart.style.top =
            `${75 + Math.random() * 25}%`;

        heart.style.fontSize =
            `${12 + Math.random() * 18}px`;

        heart.style.animationDelay =
            `${Math.random() * 8}s`;

        heart.style.animationDuration =
            `${7 + Math.random() * 7}s`;

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
   OPEN YOUR GIFT
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


            /* Landing fade */

            if (landing) {

                landing.style.transition =
                    "opacity 1s ease, transform 1s ease";

                landing.style.opacity =
                    "0";

                landing.style.transform =
                    "scale(1.04)";
            }


            /*
             * Wait for landing animation
             */

            setTimeout(() => {

                if (landing) {

                    landing.style.display =
                        "none";
                }


                /*
                 * Show letter section
                 */

                showSection(
                    letterSection
                );


                /*
                 * Scroll smoothly
                 */

                setTimeout(() => {

                    if (letterSection) {

                        letterSection.scrollIntoView({
                            behavior: "smooth",
                            block: "start"
                        });

                    }

                }, 120);

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
             * Prevent multiple taps
             */

            envelope.style.pointerEvents =
                "none";


            /*
             * =================================
             * STEP 1
             * Envelope opens
             * =================================
             */

            envelope.classList.add(
                "opened"
            );


            /*
             * Change instruction text
             */

            if (envelopeHint) {

                envelopeHint.style.transition =
                    "opacity .4s ease";

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
             * =================================
             * STEP 2
             * Paper comes out automatically
             *
             * CSS handles the actual movement.
             * We only add the final glow class
             * after the animation finishes.
             * =================================
             */

            setTimeout(() => {

                const paper =
                    envelope.querySelector(
                        ".envelope-paper"
                    );


                if (paper) {

                    paper.classList.add(
                        "finished"
                    );

                }

            }, 2300);

        }
    );
}


/* =========================================
   CONTINUE / MORE BUTTON
========================================= */

if (continueButton) {

    continueButton.addEventListener(
        "click",
        () => {

            /*
             * Show next section
             */

            showSection(
                littleThingsSection
            );


            /*
             * Scroll to next section
             */

            setTimeout(() => {

                if (
                    littleThingsSection
                ) {

                    littleThingsSection.scrollIntoView({
                        behavior: "smooth",
                        block: "start"
                    });

                }

            }, 120);

        }
    );
}


/* =========================================
   INITIALIZE WEBSITE
========================================= */

createStars();

createFloatingHearts();


/* =========================================
   PAGE LOAD
========================================= */

window.addEventListener(
    "load",
    () => {

        document.body.classList.add(
            "page-loaded"
        );

    }
);
