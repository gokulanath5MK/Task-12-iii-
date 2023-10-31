document.addEventListener("DOMContentLoaded", () => {
    const adviceText = document.querySelector(".advice-text");
    const getRandomAdviceButton = document.getElementById("getRandomAdvice");

    // Function to fetch random advice
    function fetchRandomAdvice() {
        fetch("https://api.adviceslip.com/advice")
            .then((response) => response.json())
            .then((data) => {
                const advice = data.slip.advice;
                adviceText.textContent = advice;
            })
            .catch((error) => {
                console.error("Error fetching advice:", error);
            });
    }

    // Event listener for the "Get Random Advice" button
    getRandomAdviceButton.addEventListener("click", fetchRandomAdvice);

    // Initial load of random advice
    fetchRandomAdvice();
});