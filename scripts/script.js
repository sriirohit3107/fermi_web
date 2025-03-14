document.addEventListener("DOMContentLoaded", () => {
    gsap.from("#hero h1", { opacity: 0, y: 30, duration: 1.5, ease: "power3.out" });
    gsap.from("#hero p", { opacity: 0, y: 30, duration: 1.5, delay: 0.5, ease: "power3.out" });

    const newsContainer = document.getElementById("news-container");
    if (newsContainer) {
        newsContainer.innerHTML = "<p>Loading latest news...</p>";
        setTimeout(() => {
            newsContainer.innerHTML = "<p>Fermi Energy secures new funding for battery innovation!</p>";
        }, 2000);
    }
});
