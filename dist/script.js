//Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");
//Theme Vars
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme:dark)").matches;
//Icon toggling
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};
//Initial Theme Check
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none");
        return;
    }
    sunIcon.classList.add("display-none");
};
//Manual Theme Switch
const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
        iconToggle();
        return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    iconToggle();
};
//call theme switch on clicking buttons
sunIcon.addEventListener("click", () => {
    themeSwitch();
});
moonIcon.addEventListener("click", () => {
    themeSwitch();
});
//invoke theme check on intial load
themeCheck();

function validateEmail() {
    var emailInput = document.getElementById('emailInput');
    var emailError = document.getElementById('emailError');

    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Please provide a valid email address.';
        emailError.style.color = 'red';
        emailInput.style.borderColor = 'red'; // Set border color to red
    } else {
        emailError.textContent = '';
        emailInput.style.borderColor = ''; // Reset border color
        emailInput.value = '';
        alert('Thank you! Your Email is valid...');
    }
}