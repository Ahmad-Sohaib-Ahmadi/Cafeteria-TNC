document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.numbers');

    // Function to start the counting animation
    function startCounting(element, target) {
        let currentNumber = 0;
        const increment = Math.ceil(target / 100); // Increment value to make the counting smooth
        const interval = 20; // Time between each increment in milliseconds

        const updateCounter = () => {
            currentNumber += increment;
            if (currentNumber >= target) {
                currentNumber = target; // Ensure it does not exceed the target
                clearInterval(timer);
            }
            element.textContent = `${currentNumber}+`; // Add "+" after the number
        };

        const timer = setInterval(updateCounter, interval);
    }

    // Function to handle the intersection observer
    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numberElement = entry.target;
                const target = parseInt(numberElement.parentElement.getAttribute('data-target'), 10);
                if (!isNaN(target)) {
                    startCounting(numberElement, target);
                    observer.unobserve(entry.target); // Stop observing after counting
                }
            }
        });
    }

    // Create an intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.5 // Adjust this value if necessary
    });

    // Observe each counter element
    counters.forEach(counter => {
        observer.observe(counter);
    });
});