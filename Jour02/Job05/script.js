const footer = document.getElementById("progressBar");

window.addEventListener("scroll", function() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = (scrollTop / docHeight) * 100;
    
    const red = Math.floor(255 * (1 - scrollPercent / 100));
    const green = Math.floor(255 * (scrollPercent / 100));
    const blue = 0;
    
    footer.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    footer.style.width = scrollPercent + "%";
});
