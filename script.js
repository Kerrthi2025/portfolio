let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
    menu.classList.toggle('bx-x'); // Toggle 'X' icon
    navbar.classList.toggle('active'); // Toggle navbar visibility
};


window.onscroll = () =>
{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
function toggleDescription(descriptionId) {
    const description = document.getElementById(descriptionId);
    const button = event.target;
    if (description.style.display === "none" || description.style.display === "") {
        description.style.display = "block";
        button.textContent = "Read Less";
    } else {
        description.style.display = "none";
        button.textContent = "Read More";
    }
}
document.getElementById("read-more-btn").addEventListener("click", function() {
    const readMoreText = document.querySelector(".read-more");
    if (readMoreText.style.display === "none" || readMoreText.style.display === "") {
        readMoreText.style.display = "inline";
        this.textContent = "Read Less";
    } else {
        readMoreText.style.display = "none";
        this.textContent = "Read More";
    }
});

