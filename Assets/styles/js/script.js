var buttonelement = document.getElementById("fetchJokes")
var sundayImage = document.getElementById("Sunday-image")
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
        .then(response => console.log(response))
        .catch(err => console.error(err));
 }

function handleFetch (){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => displayDog(data))
    
}
const displayDog = function(image){
    const dogImage = document.createElement("img")
    dogImage.setAttribute("href","https://dog.ceo/" + image + "/random")
    sundayImage.appendChild(dogImage)
}

buttonelement.addEventListener("click",function(){
    getJoke()
    handleFetch()
    })