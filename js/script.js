document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       ELEMENTS
    ========================================= */

    const landing = document.getElementById("landing");
    const letterSection = document.getElementById("letterSection");
    const littleThingsSection =
        document.getElementById("littleThingsSection");

    const openGiftButton =
        document.getElementById("openGiftButton");

    const envelope =
        document.getElementById("envelope");

    const envelopeHint =
        document.getElementById("envelopeHint");

    const continueButton =
        document.getElementById("continueButton");


    /* =========================================
       STARS
    ========================================= */

    const stars = document.getElementById("stars");

    if (stars) {

        for (let i = 0; i < 75; i++) {

            const star = document.createElement("span");

            star.className = "star";

            star.style.left =
                `${Math.random() * 100}%`;

            star.style.top =
                `${Math.random() * 100}%`;

            const size =
                `${Math.random() * 3 + 1}px`;

            star.style.width = size;
            star.style.height = size;

            star.style.setProperty(
                "--duration",
                `${2 + Math.random() * 4}s`
            );

            star.style.animationDelay =
                `${Math.random() * 4}s`;

            stars.appendChild(star);
        }
    }


    /* =========================================
       FLOATING HEARTS
    ========================================= */

    const floatingHearts =
        document.getElementById("floatingHearts");

    if (floatingHearts) {

        for (let i = 0; i < 18; i++) {

            const heart =
                document.createElement("span");

            heart.className =
                "floating-heart";

            heart.textContent =
                Math.random() > 0.35
                    ? "♡"
                    : "♥";

            heart.style.left =
                `${Math.random() * 100}%`;

            heart.style.fontSize =
                `${12 + Math.random() * 18}px`;

            heart.style.setProperty(
                "--duration",
                `${10 + Math.random() * 12}s`
            );

            heart.style.animationDelay =
                `${Math.random() * 12}s`;

            floatingHearts.appendChild(heart);
        }
    }


    /* =========================================
       OPEN GIFT
    ========================================= */

    if (openGiftButton) {

        openGiftButton.addEventListener(
            "click",
            () => {

                landing.classList.add("hidden");

                letterSection.classList.remove(
                    "hidden"
                );

                window.scrollTo({
                    top: 0,
                    behavior: "smooth"
                });

            }
        );
    }


    /* =========================================
       ENVELOPE
    ========================================= */

    if (envelope) {

        function openEnvelope() {

            if (
                envelope.classList.contains(
                    "opened"
                )
            ) {
                return;
            }

            envelope.classList.add("opened");

            if (envelopeHint) {
                envelopeHint.classList.add("hide");
            }
        }


        envelope.addEventListener(
            "click",
            (event) => {

                /*
                 * If the user taps the paper,
                 * don't close/reopen the envelope.
                 */

                if (
                    event.target.closest(".paper")
                ) {
                    return;
                }

                openEnvelope();
            }
        );


        /* Keyboard support */

        envelope.addEventListener(
            "keydown",
            (event) => {

                if (
                    event.key === "Enter" ||
                    event.key === " "
                ) {

                    event.preventDefault();

                    openEnvelope();
                }
            }
        );
    }


    /* =========================================
       PAPER SCROLL
    ========================================= */

    const paper =
        document.querySelector(".paper");

    if (paper) {

        /*
         * Allow the letter to scroll
         * without triggering envelope click.
         */

        paper.addEventListener(
            "click",
            (event) => {
                event.stopPropagation();
            }
        );


        paper.addEventListener(
            "touchstart",
            (event) => {
                event.stopPropagation();
            },
            { passive: true }
        );


        paper.addEventListener(
            "touchmove",
            (event) => {
                event.stopPropagation();
            },
            { passive: true }
        );
    }


    /* =========================================
       CONTINUE BUTTON
    ========================================= */

    if (continueButton) {

        continueButton.addEventListener(
            "click",
            () => {

                littleThingsSection.classList.remove(
                    "hidden"
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

});
/* =========================================
   LITTLE THINGS — SMALL LETTERS
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const littleCards =
        document.querySelectorAll(".little-card");

    littleCards.forEach((card) => {

        card.addEventListener("click", () => {

            const targetId =
                card.getAttribute("data-letter");

            const targetLetter =
                document.getElementById(targetId);


            if (!targetLetter) return;


            const isAlreadyOpen =
                targetLetter.classList.contains("open");


            /*
             * Close every other letter
             */

            document
                .querySelectorAll(".little-letter.open")
                .forEach((letter) => {

                    if (letter !== targetLetter) {
                        letter.classList.remove("open");
                    }

                });


            /*
             * Remove active state
             * from other cards
             */

            document
                .querySelectorAll(".little-card.active")
                .forEach((otherCard) => {

                    if (otherCard !== card) {
                        otherCard.classList.remove("active");
                    }

                });


            /*
             * Toggle current letter
             */

            if (isAlreadyOpen) {

                targetLetter.classList.remove("open");

                card.classList.remove("active");

            } else {

                targetLetter.classList.add("open");

                card.classList.add("active");


                /*
                 * Small smooth scroll so the
                 * opened letter stays visible.
                 */

                setTimeout(() => {

                    const rect =
                        targetLetter.getBoundingClientRect();

                    const viewportHeight =
                        window.innerHeight;

                    if (
                        rect.bottom >
                        viewportHeight - 20
                    ) {

                        targetLetter.scrollIntoView({
                            behavior: "smooth",
                            block: "nearest"
                        });

                    }

                }, 180);

            }

        });

    });

});
