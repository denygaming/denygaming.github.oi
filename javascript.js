// Add smooth scrolling anchor link, jump to a spesific part of a web page
// Menambahkan efek mengarahkan tautan tertentu menjadi halus
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior : "smooth"
        });
    });
});