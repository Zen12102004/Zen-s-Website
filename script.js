document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("#navigation li").forEach(li => {
        li.style.cursor = "pointer";

        li.addEventListener("click", () => {
            const text = li.textContent.trim();
            const url = "Sites/" + text + ".html";
            window.location.href = url;
        });
    });
});



