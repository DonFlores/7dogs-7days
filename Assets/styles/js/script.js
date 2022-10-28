var buttonelement = document.querySelector(".fetchJokes")
var image = document.querySelector(".image")
var joke = document.getElementById("jokeID")
var saveBtnEl = document.getElementById("saveBtnEl")
var saveNoteText = document.getElementById("saveNoteText")

function handleSaveNote () {
    var noteContent = saveNoteText.value
    localStorage.setItem("note1", noteContent)
}

function renderNotes () {
    var notes = localStorage.getItem("note1")
    saveNoteText.innerText = (notes)
}

saveBtnEl.addEventListener("click", handleSaveNote)

 function getJoke (){
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-RapidAPI-Key': '55cbef5d1emsh52692e2ba060886p1fbee7jsnd367b5d7a515',
            'X-RapidAPI-Host': 'matchilling-chuck-norris-jokes-v1.p.rapidapi.com'
        }
    };
    fetch('https://matchilling-chuck-norris-jokes-v1.p.rapidapi.com/jokes/random', options)
        .then(response => response.json())
        .then(response => {
            let dayJoke = document.createElement("p")
            console.log(response)
            let chuckJoke = response.value
            dayJoke.textContent = chuckJoke
            joke.appendChild(dayJoke)
        })
        .catch(err => console.error(err));
 }

function handleFetch (){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
            image.innerHTML =`<img src="${data.message}"/>`
        })
    
}
// const displayDog = function(image){
//     const dogImage = document.createElement("img")
//     dogImage.setAttribute("href","https://dog.ceo/" + image + "/random")
//     sundayImage.appendChild(dogImage)
// }

buttonelement.addEventListener("click",function(){
    getJoke()
    handleFetch()
    })

renderNotes()