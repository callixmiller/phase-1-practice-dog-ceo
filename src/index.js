function getBreeds() {
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    return fetch(imgUrl)
    .then(reponse => reponse.json())
    .then(data => {
        const dogImage = document.getElementById('dog-image-container')
        data.message.forEach(url => {
            const img = document.createElement('img')
            img.src = url
            dogImage.append(img)
        })
    })
}

function getBreedNames() {
    const breedUrl = "https://dog.ceo/api/breeds/list/all"
    fetch(breedUrl)
    .then(response => response.json())
    .then(data => {
      breeds = Object.keys(data.message)
      addBreedNameToDom(breeds)
    })
}

function addBreedNameToDom(breeds) {
    const ul = document.querySelector('#dog-breeds')
    breeds.map(breed => {
        const li = document.createElement('li')
        li.textContent = breed
        ul.append(li)
    })
}

document.addEventListener('click', event => {
    if(event.target.matches('li')){
        event.target.style.color = 'red'
    }
})

document.addEventListener('change', event => {
    if(event.target.matches('#breed-dropdown')){
        const ul = document.querySelector('#dog-breeds')
        ul.innerHTML = ""
        const filteredBreeds = breeds.filter(breed => breed[0] === event.target.value)
        addBreedNameToDom(filteredBreeds)
    }
    
    
})

getBreeds()
getBreedNames()