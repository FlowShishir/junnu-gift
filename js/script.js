/* =========================================
   Junnu Gift — Complete Script
========================================= */

document.addEventListener("DOMContentLoaded", () => {

    const landing = document.getElementById("landing");
    const letterSection = document.getElementById("letterSection");
    const littleThingsSection =
        document.getElementById("littleThingsSection");

    const openGiftButton =
        document.getElementById("openGiftButton");

    const continueButton =
        document.getElementById("continueButton");

    const envelope =
        document.getElementById("envelope");

    const envelopeHint =
        document.getElementById("envelopeHint");


    /* =====================================
       BACKGROUND STARS
    ====================================== */

    const starsContainer =
        document.getElementById("stars");

    if (starsContainer) {

        for (let i = 0; i < 75; i++) {

            const star =
                document.createElement("span");

            star.className = "star";

            star.style.left =
                `${Math.random() * 100}%`;

            star.style.top =
                `${Math.random() * 100}%`;

            const size =
                1 + Math.random() * 3;

            star.style.width =
                `${size}px`;

            star.style.height =
                `${size}px`;

            star.style.setProperty(
                "--duration",
                `${2 + Math.random() * 4}s`
            );

            star.style.animationDelay =
                `${Math.random() * 4}s`;

            starsContainer.appendChild(star);
        }
    }


    /* =====================================
       FLOATING HEARTS
    ====================================== */

    const heartsContainer =
        document.getElementById("floatingHearts");

    if (heartsContainer) {

        for (let i = 0; i < 18; i++) {

            const heart =
                document.createElement("span");

            heart.className =
                "floating-heart";

            heart.textContent =
                Math.random() > 0.45
                    ? "♡"
                    : "♥";

            heart.style.left =
                `${Math.random() * 100}%`;

            heart.style.fontSize =
                `${12 + Math.random() * 20}px`;

            heart.style.setProperty(
                "--duration",
                `${9 + Math.random() * 9}s`
            );

            heart.style.animationDelay =
                `${Math.random() * 10}s`;

            heartsContainer.appendChild(heart);
        }
    }


    /* =====================================
       OPEN GIFT
    ====================================== */

    if (openGiftButton) {

        openGiftButton.addEventListener(
            "click",
            () => {

                openGiftButton.disabled = true;

                landing.style.transition =
                    "opacity .8s ease, transform .8s ease";

                landing.style.opacity = "0";

                landing.style.transform =
                    "translateY(-25px) scale(.98)";


                setTimeout(() => {

                    landing.style.display = "none";

                    letterSection.classList.remove(
                        "hidden-section"
                    );

                    letterSection.classList.add(
                        "section-reveal"
                    );

                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }, 650);

            }
        );

    }


    /* =====================================
       ENVELOPE / MAIN LETTER
    ====================================== */

    if (envelope) {

        envelope.addEventListener(
            "click",
            () => {

                const opened =
                    envelope.classList.toggle("opened");


                if (opened) {

                    if (envelopeHint) {

                        envelopeHint.style.opacity =
                            "0";

                    }

                } else {

                    if (envelopeHint) {

                        envelopeHint.style.opacity =
                            "1";

                    }

                }

            }
        );

    }


    /* =====================================
       CONTINUE TO LITTLE THINGS
    ====================================== */

    if (continueButton) {

        continueButton.addEventListener(
            "click",
            () => {

                letterSection.style.transition =
                    "opacity .7s ease";

                letterSection.style.opacity =
                    "0";


                setTimeout(() => {

                    letterSection.style.display =
                        "none";

                    littleThingsSection.classList.remove(
                        "hidden-section"
                    );

                    littleThingsSection.classList.add(
                        "section-reveal"
                    );

                    littleThingsSection.style.opacity =
                        "1";


                    window.scrollTo({
                        top: 0,
                        behavior: "smooth"
                    });

                }, 550);

            }
        );

    }


    /* =====================================
       LITTLE THINGS — SMALL LETTERS
    ====================================== */

    const littleCards =
        document.querySelectorAll(".little-card");


    littleCards.forEach((card) => {

        card.addEventListener(
            "click",
            () => {

                const targetId =
                    card.getAttribute(
                        "data-letter"
                    );


                const targetLetter =
                    document.getElementById(
                        targetId
                    );


                if (!targetLetter) return;


                const alreadyOpen =
                    targetLetter.classList.contains(
                        "open"
                    );


                /* -----------------------------
                   Close other letters
                ----------------------------- */

                document
                    .querySelectorAll(
                        ".little-letter.open"
                    )
                    .forEach((letter) => {

                        if (
                            letter !== targetLetter
                        ) {

                            letter.classList.remove(
                                "open"
                            );

                        }

                    });


                /* -----------------------------
                   Remove other active cards
                ----------------------------- */

                document
                    .querySelectorAll(
                        ".little-card.active"
                    )
                    .forEach((otherCard) => {

                        if (
                            otherCard !== card
                        ) {

                            otherCard.classList.remove(
                                "active"
                            );

                        }

                    });


                /* -----------------------------
                   Toggle current letter
                ----------------------------- */

                if (alreadyOpen) {

                    targetLetter.classList.remove(
                        "open"
                    );

                    card.classList.remove(
                        "active"
                    );

                } else {

                    targetLetter.classList.add(
                        "open"
                    );

                    card.classList.add(
                        "active"
                    );


                    /* -------------------------
                       Automatically bring
                       the small letter into view
                    ------------------------- */

                    setTimeout(() => {

                        const rect =
                            targetLetter.getBoundingClientRect();


                        if (
                            rect.bottom >
                            window.innerHeight - 20
                        ) {

                            window.scrollBy({

                                top:
                                    rect.bottom -
                                    window.innerHeight +
                                    35,

                                behavior:
                                    "smooth"

                            });

                        }

                    }, 220);

                }

            }
        );

    });

});
