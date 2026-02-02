function showChapter(chapterNumber) {
    const content = document.getElementById(`chapter${chapterNumber}-content`);

    if (!content) return;

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}

function showMovie(movieNumber){
    const content = document.getElementById(`movie${movieNumber}-content`);

    if (!content) return;

    if (content.style.display === "none" || content.style.display === "") {
        content.style.display = "block";
    } else {
        content.style.display = "none";
    }
}