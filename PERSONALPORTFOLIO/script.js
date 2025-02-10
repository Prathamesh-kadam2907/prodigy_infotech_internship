const button = document.getElementById("theme-toggle");

button.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

document.body.classList.toggle("dark-mode", {
    background: "#333",
    color: "white"
});
