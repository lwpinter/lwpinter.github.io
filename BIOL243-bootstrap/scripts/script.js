// Set the current year in the footer badge.
(() => {
    const yearTarget = document.getElementById("year");
    if (yearTarget) {
        yearTarget.textContent = new Date().getFullYear();
    }
})();
