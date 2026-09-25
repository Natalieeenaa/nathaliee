/* =========================================================
   REVALINA PORTFOLIO — SCRIPT
========================================================= */


/* =========================================================
   ✨ SCROLL ANIMATION
========================================================= */

const elements = document.querySelectorAll(
    ".skill-card, .project-card, .timeline-item, .personal-card"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = 1;

                entry.target.style.transform =
                    "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


elements.forEach((element) => {

    element.style.opacity = 0;

    element.style.transform =
        "translateY(25px)";

    element.style.transition =
        "opacity 0.7s ease, transform 0.7s ease";

    observer.observe(element);

});


/* =========================================================
   ✨ MOUSE GLOW — FOTO PROFIL
========================================================= */

const heroPhoto = document.querySelector(".hero-photo");

if (heroPhoto) {

    const glow = document.createElement("div");

    glow.classList.add("mouse-glow");

    heroPhoto.appendChild(glow);


    heroPhoto.addEventListener("mousemove", (e) => {

        const rect = heroPhoto.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        glow.style.left = `${x}px`;
        glow.style.top = `${y}px`;

        glow.classList.add("active");

    });


    heroPhoto.addEventListener("mouseleave", () => {

        glow.classList.remove("active");

    });


    /* =====================================================
       ✦ SPARKLE MENGIKUTI MOUSE
    ===================================================== */

    let lastSparkle = 0;

    heroPhoto.addEventListener("mousemove", (e) => {

        const now = Date.now();

        if (now - lastSparkle < 90) return;

        lastSparkle = now;

        const rect = heroPhoto.getBoundingClientRect();

        const sparkle = document.createElement("span");

        sparkle.classList.add("mouse-sparkle");

        sparkle.innerHTML =
            Math.random() > 0.5 ? "✦" : "✧";

        sparkle.style.left =
            `${e.clientX - rect.left}px`;

        sparkle.style.top =
            `${e.clientY - rect.top}px`;

        heroPhoto.appendChild(sparkle);


        setTimeout(() => {

            sparkle.remove();

        }, 800);

    });

}
