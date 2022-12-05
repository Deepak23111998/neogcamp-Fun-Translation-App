const inputText = document.getElementById('text');
const outputDiv = document.getElementById('display-output')
const translateBtn = document.getElementById('btn-translate');
translateBtn.addEventListener('click', clickHandler);
let URL = 'https://api.funtranslations.com/translate/yoda.json';
let serverURL = 'https://lessonfourapi.tanaypratap.repl.co/translate/yoda.json';
function clickHandler(){
      let input = inputText.value;
    fetch(getTranslationURL(input))
    .then(response => response.json())
    .then(json => {
        let translatedText = json.contents.translated;
        outputDiv.innerText = translatedText;})
    .catch(err => console.log(`Error occured --> ${err}`))
}
function getTranslationURL(text){
    return `${URL}?text=${text}`;
}
