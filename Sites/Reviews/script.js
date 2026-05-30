function showChapter(chapterNumber) {
    const displayContainer = document.getElementById('review-display');
    if (!displayContainer) return;

    fetch(`./Content/Arknight/arknights-ch${chapterNumber}.md`)
        .then(response => {
            if (!response.ok) throw new Error("Chapter content file not found.");
            return response.text();
        })
        .then(markdownText => {
            displayContainer.innerHTML = marked.parse(markdownText);
        })
        .catch(error => {
            console.log(error)
            displayContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
}

function showMovie(movieNumber) {
    const displayContainer = document.getElementById('review-display');
    if (!displayContainer) return;

    fetch(`./Content/StarWars/movie${movieNumber}.md`)
        .then(response => {
            if (!response.ok) throw new Error("Movie content file not found.");
            return response.text();
        })
        .then(markdownText => {
            displayContainer.innerHTML = marked.parse(markdownText);
        })
        .catch(error => {
            console.log(error)
            displayContainer.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
        });
}