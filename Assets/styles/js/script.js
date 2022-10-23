function handleFetch (){
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(responce => responce.json())
        .then(data => console.log(data))
    
}
handleFetch()