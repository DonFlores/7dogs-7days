function getDogByBreed (breed){
    fetch("https://dog.ceo/api/breed/"+breed+"/images")
        .then(responce => responce.json())
        .then(data => console.log(data))
    
}
getDogByBreed("hound")