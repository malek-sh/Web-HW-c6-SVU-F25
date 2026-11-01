document.addEventListener("DOMContentLoaded", function () {
    
    // 1. كود زر الوضع المظلم (Dark Mode) وتذكره عبر المتصفح
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (darkModeToggle) {
        if (localStorage.getItem("darkMode") === "enabled") {
            document.body.classList.add("dark-mode");
            darkModeToggle.textContent = "☀️";
        }

        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
            darkModeToggle.textContent = isDark ? "☀️" : "🌙";
        });
    }

    // 2. كود زر العودة للأعلى (Scroll to Top)
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

});