var buttonelement = document.querySelector(".fetchJokes")
var image = document.querySelector(".image")
var joke = document.getElementById("jokeID")
var saveBtnEl = document.getElementById("saveBtnEl")
var saveNoteText = document.getElementById("saveNoteText")

var imageMonday = document.querySelector(".imageMonday")
var buttonMonday = document.getElementById("mondayButton")
var jokeMonday = document.getElementById("jokeIDMonday")
var saveBtnElMonday = document.getElementById("saveBtnElMonday")
var saveNoteTextMonday = document.getElementById("saveNoteTextMonday")

var imageTuesday = document.querySelector(".imageTuesday")
var buttonTuesday = document.getElementById("tuesdayButton")
var jokeTuesday = document.getElementById("jokeIDTuesday")
var saveBtnElTuesday = document.getElementById("saveBtnElTuesday")
var saveNoteTextTuesday = document.getElementById("saveNoteTextTuesday")

var imageWednesday = document.querySelector(".imageWednesday")
var buttonWednesday = document.getElementById("wednesdayButton")
var jokeWednesday = document.getElementById("jokeIDWednesday")
var saveBtnElWednesday = document.getElementById("saveBtnElWednesday")
var saveNoteTextWednesday = document.getElementById("saveNoteTextWednesday")

var imageThursday = document.querySelector(".imageThursday")
var buttonThursday = document.getElementById("thursdayButton")
var jokeThursday = document.getElementById("jokeIDThursday")
var saveBtnElThursday = document.getElementById("saveBtnElThursday")
var saveNoteTextThursday = document.getElementById("saveNoteTextThursday")

var imageFriday = document.querySelector(".imageFriday")
var buttonFriday = document.getElementById("fridayButton")
var jokeFriday = document.getElementById("jokeIDFriday")
var saveBtnElFriday = document.getElementById("saveBtnElFriday")
var saveNoteTextFriday = document.getElementById("saveNoteTextFriday")

var imageSaturday = document.querySelector(".imageSaturday")
var buttonSaturday = document.getElementById("saturdayButton")
var jokeSaturday = document.getElementById("jokeIDSaturday")
var saveBtnElSaturday = document.getElementById("saveBtnElSaturday")
var saveNoteTextSaturday = document.getElementById("saveNoteTextSaturday")

function handleSaveNote () {
    var noteContent = saveNoteText.value
    localStorage.setItem("note1", noteContent)
}

function handleSaveNoteMonday () {
    var noteContent = saveNoteTextMonday.value
    localStorage.setItem("noteMonday", noteContent)
}

function handleSaveNoteTuesday () {
    var noteContent = saveNoteTextTuesday.value
    localStorage.setItem("noteTuesday", noteContent)
}

function handleSaveNoteWednesday () {
    var noteContent = saveNoteTextWednesday.value
    localStorage.setItem("noteWednesday", noteContent)
}

function handleSaveNoteThursday () {
    var noteContent = saveNoteTextThursday.value
    localStorage.setItem("noteThursday", noteContent)
}

function handleSaveNoteFriday () {
    var noteContent = saveNoteTextFriday.value
    localStorage.setItem("noteFriday", noteContent)

    var noteContent = saveNoteTextMonday.value
    localStorage.setItem("noteMonday", noteContent)
}

function handleSaveNoteSaturday () {
    var noteContent = saveNoteTextSaturday.value
    localStorage.setItem("noteSaturday", noteContent)
}



function renderNotes () {
    var notes = localStorage.getItem("note1")
    saveNoteText.innerText = (notes)
}

function renderNotesMonday () {
    var notesMonday = localStorage.getItem("noteMonday")
    saveNoteTextMonday.innerText = (notesMonday)
}

function renderNotesTuesday () {
    var notesTuesday = localStorage.getItem("noteTuesday")
    saveNoteTextTuesday.innerText = (notesTuesday)
}

function renderNotesWednesday () {
    var notesWednesday = localStorage.getItem("noteWednesday")
    saveNoteTextWednesday.innerText = (notesWednesday)
}

function renderNotesThursday () {
    var notesThursday = localStorage.getItem("noteThursday")
    saveNoteTextThursday.innerText = (notesThursday)
}

function renderNotesFriday () {
    var notesFriday = localStorage.getItem("noteFriday")
    saveNoteTextFriday.innerText = (notesFriday)
}

function renderNotesSaturday () {
    var notesSaturday = localStorage.getItem("noteSaturday")
    saveNoteTextSaturday.innerText = (notesSaturday)
}

saveBtnEl.addEventListener("click", handleSaveNote)

saveBtnElMonday.addEventListener("click", handleSaveNoteMonday)

saveBtnElTuesday.addEventListener("click", handleSaveNoteTuesday)

saveBtnElWednesday.addEventListener("click", handleSaveNoteWednesday)

saveBtnElThursday.addEventListener("click", handleSaveNoteThursday)

saveBtnElFriday.addEventListener("click", handleSaveNoteFriday)

saveBtnElSaturday.addEventListener("click", handleSaveNoteSaturday)


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
            joke.innerHTML=""
            joke.appendChild(dayJoke)
        }) 
        .catch(err => console.error(err));
 }

 function getJokeMonday (){
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
            jokeMonday.innerHTML=""
            jokeMonday.appendChild(dayJoke)
        }) 
        .catch(err => console.error(err));
 }

 function getJokeTuesday (){
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
            jokeTuesday.innerHTML=""
            jokeTuesday.appendChild(dayJoke)
        }) 
        .catch(err => console.error(err));
 }
 
 function getJokeWednesday (){
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
            jokeWednesday.innerHTML=""
            jokeWednesday.appendChild(dayJoke)
        }) 
        .catch(err => console.error(err));
 }

 function getJokeThursday (){
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
            jokeThursday.innerHTML=""
            jokeThursday.appendChild(dayJoke)
        }) 
        .catch(err => console.error(err));
 }

 function getJokeFriday (){
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
            jokeFriday.innerHTML=""
            jokeFriday.appendChild(dayJoke)
        }) 
        .catch(err => console.error(err));
 }

 function getJokeSaturday (){
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
            jokeSaturday.innerHTML=""
            jokeSaturday.appendChild(dayJoke)
        }) 
        .catch(err => console.error(err));
 }

function handleFetch (){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {

            image.innerHTML =`<img class="dogs" src="${data.message}"/>`

        })
    
}

function handleFetchMonday (){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {

            imageMonday.innerHTML =`<img class="dogs" src="${data.message}"/>`

        })
    
}

function handleFetchTuesday (){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {

            imageTuesday.innerHTML =`<img class="dogs" src="${data.message}"/>`

        })
    
}

function handleFetchWednesday (){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {

            imageWednesday.innerHTML =`<img class="dogs" src="${data.message}"/>`

        })
    
}

function handleFetchThursday (){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {

            imageThursday.innerHTML =`<img class="dogs" src="${data.message}"/>`

        })
    
}

function handleFetchFriday (){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {

            imageFriday.innerHTML =`<img class="dogs" src="${data.message}"/>`

        })
    
}

function handleFetchSaturday (){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {

            imageSaturday.innerHTML =`<img class="dogs" src="${data.message}"/>`

        })
    
}

buttonelement.addEventListener("click",function(){
    getJoke()
    handleFetch()
    })

buttonMonday.addEventListener("click",function(){
    getJokeMonday()
    handleFetchMonday()
    })

buttonTuesday.addEventListener("click",function(){
     getJokeTuesday()
     handleFetchTuesday()
     })

buttonWednesday.addEventListener("click",function(){
    getJokeWednesday()
    handleFetchWednesday()
    })

buttonThursday.addEventListener("click",function(){
    getJokeThursday()
    handleFetchThursday()
    })

buttonFriday.addEventListener("click",function(){
    getJokeFriday()
    handleFetchFriday()
    })
     

buttonSaturday.addEventListener("click",function(){
    getJokeSaturday()
    handleFetchSaturday()
    })

renderNotes()
