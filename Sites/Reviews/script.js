function showChapter(chapterNumber) {
    const displayContainer = document.getElementById('review-display');
    if (!displayContainer) return;

    fetch(`./content/Arknight/arknights-ch${chapterNumber}.md`)
        .then(response => {
            if (!response.ok) throw new Error("Chapter content file not found.");
            return response.text();
        })
        .then(markdownText => {
            displayContainer.innerHTML = marked.parse(markdownText);
        })
        .catch(error => {
            displayContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
}

function showMovie(movieNumber) {
    const displayContainer = document.getElementById('review-display');
    if (!displayContainer) return;

    fetch(`./content/starwars-movie${movieNumber}.md`)
        .then(response => {
            if (!response.ok) throw new Error("Movie content file not found.");
            return response.text();
        })
        .then(markdownText => {
            displayContainer.innerHTML = marked.parse(markdownText);
        })
        .catch(error => {
            displayContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
}