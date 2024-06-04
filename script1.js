document.addEventListener('DOMContentLoaded', () => {
    let count = 0;
    const counter = document.getElementById('counter');
    const increaseButton = document.getElementById('increase');
    const decreaseButton = document.getElementById('decrease');

    increaseButton.addEventListener('click', () => {
        count++;
        counter.textContent = count;
    });

    decreaseButton.addEventListener('click', () => {
        count--;
        counter.textContent = count;
    });
});
