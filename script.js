```javascript
const elements = document.querySelectorAll(
    .skill-card, .project-card, .timeline-item, .personal-card
);

const observer = new IntersectionObserver(
    (entries) = {

        entries.forEach((entry) = {

            if (entry.isIntersecting) {

                entry.target.style.opacity = 1;

                entry.target.style.transform =
                    translateY(0);

            }

        });

    },
    {
        threshold 0.15
    }
);


elements.forEach((element) = {

    element.style.opacity = 0;

    element.style.transform =
        translateY(25px);

    element.style.transition =
        opacity 0.7s ease, transform 0.7s ease;

    observer.observe(element);

});
```
