const resultEl = document.getElementById('result');
function getWords() {
  let inputBoxEl = document.getElementById("inputBox");
  const wordsInfo = inputBoxEl.value;

  const getWordsInfo = async (words) => {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${words}`);
      const data = await response.json();
      

      document.getElementById("output").innerHTML = data[0].meanings[0].definitions[0].definition === undefined ? "Not Found" : data[0].meanings[0].definitions[0].definition;

      resultEl.innerHTML = `<strong>Example</strong>${data[0].meanings[0].definitions[0].example === undefined ? "Not Found" : data[0].meanings[0].definitions[0].example}`;
    } catch (error) {
      console.error('Error fetching word information:', error);
      document.getElementById("output").innerHTML = "Error fetching word information.";
      resultEl.innerHTML = "";
    }
  }

  getWordsInfo(wordsInfo);
}