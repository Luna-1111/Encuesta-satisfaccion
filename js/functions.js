document.getElementById('survey-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    let results = '<h2>Resultados:</h2>';

    for (let entry of formData.entries()) {
        results += `<p><strong>${entry[0]}:</strong> ${entry[1]}</p>`;
    }

    document.getElementById('results').innerHTML = results;
});
