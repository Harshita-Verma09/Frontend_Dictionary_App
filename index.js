const form = document.querySelector('form');
const resultDiv = document.querySelector('.result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    getWordInfo(form.elements[0].value);
});

const getWordInfo = async (word) => {
    try {
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
            throw new Error(`Word not found: ${word}`);
        }
        const data = await response.json();
        if (data[0]?.meanings?.[0]?.definitions?.[0]?.definition) {
            let definitions = data[0].meanings[0].definitions[0];
            resultDiv.innerHTML = `
                <h2><strong>Word: </strong> ${data[0].word}</h2>
                <p>Pars Of Speech: ${data[0].meanings[0].partOfSpeech}</p>
                <p><strong>Meaning: </strong>${definitions.definition === undefined ? "Not Found" : definitions.definition}</p>
                <p><strong>Synonyms: </strong>${definitions.synonyms[0] === undefined ? "Not Found" : definitions.synonyms}</p>
                <p><strong>Antonyms: </strong>${definitions.antonyms[0] === undefined ? "Not Found" : definitions.antonyms}</p>
                <p><strong>Example: </strong>${definitions.example === undefined ? "Not Found" : definitions.example}</p>
            `;
        } else {
            resultDiv.innerHTML = "<h2>Definition not available.</h2>";
        }
        resultDiv.innerHTML += `<a class="result-link" href="${data[0].sourceUrls}" target="_blank">Read More...</a>`
    } catch (error) {
        console.error(error);
        resultDiv.innerHTML = "<h2>Sorry, the word not found.</h2>";
    }
};