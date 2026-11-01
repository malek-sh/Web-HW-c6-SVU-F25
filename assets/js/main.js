// دالة فلترة الفعاليات في الصفحة الرئيسية وحفظ التفضيلات في localStorage (Bonus)
function filterHomeEvents(category, btnElement) {
    const items = document.querySelectorAll("#eventsList .event-item");
    const buttons = document.querySelectorAll(".category-btn");
    const noEventsMsg = document.getElementById("noEvents");

    if (!items.length) return;

    // تحديث حالة الأزرار
    buttons.forEach(btn => btn.classList.remove("active"));
    if (btnElement) {
        btnElement.classList.add("active");
    } else {
        buttons.forEach(btn => {
            if (btn.dataset.cat === category) btn.classList.add("active");
        });
    }

    // حفظ التصنيف المفضل في المتصفح
    localStorage.setItem("preferredCategory", category);

    let visibleCount = 0;
    items.forEach(item => {
        if (category === "الكل" || item.dataset.category === category) {
            item.hidden = false;
            visibleCount++;
        } else {
            item.hidden = true;
        }
    });

    if (noEventsMsg) {
        noEventsMsg.hidden = visibleCount > 0;
    }
}

document.addEventListener("DOMContentLoaded", function () {
    // 1. إدارة الوضع المظلم (Dark Mode) وحفظه في localStorage
    const darkModeToggle = document.getElementById("darkModeToggle");
    if (localStorage.getItem("darkMode") === "enabled") {
        document.body.classList.add("dark-mode");
        if (darkModeToggle) darkModeToggle.textContent = "☀️";
    }

    if (darkModeToggle) {
        darkModeToggle.addEventListener("click", function () {
            document.body.classList.toggle("dark-mode");
            const isDark = document.body.classList.contains("dark-mode");
            localStorage.setItem("darkMode", isDark ? "enabled" : "disabled");
            darkModeToggle.textContent = isDark ? "☀️" : "🌙";
        });
    }

    // 2. زر العودة للأعلى (Scroll to Top)
    const scrollTopBtn = document.getElementById("scrollTopBtn");
    if (scrollTopBtn) {
        scrollTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    // 3. استرجاع تفضيل التصنيف المحفوظ في الصفحة الرئيسية تلقائياً
    if (document.getElementById("eventsList")) {
        const savedCat = localStorage.getItem("preferredCategory") || "الكل";
        filterHomeEvents(savedCat, null);
    }
});