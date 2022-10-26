var buttonelement = document.getElementById("fetchJoke")
buttonelement.addEventListener("click",getJoke)
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
        .then(responce => responce.json())
        .then(data => console.log(data))
    
}
handleFetch()