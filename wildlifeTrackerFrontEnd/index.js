document.addEventListener('DOMContentLoaded', () => {
    const animalURL = 'http://localhost:3000/animals'

    fetch(animalURL)
        .then(response => response.json())
        .then(response => {showAnimals(response)
        })


    function showAnimals(animals) {
        animals.forEach(animal => {
            console.log(animal)
            const animalCard = document.createElement('div')
            const commonName = document.createElement('h2')
            const scientificName = document.createElement('h4')
            const category = document.createElement('h5')
            const description = document.createElement('p')
            const approachable = document.createElement('p')
            const status = document.createElement('h6')
            const image = document.createElement('img')
            const addAnimalButton = document.createElement('button')

            commonName.innerText = 'Common Name: ' + animal.common_name
            scientificName.innerText = 'Scientific Name: ' + animal.scientific_name
            category.innerText = 'Category: ' + animal.category
            description.innerText = animal.description
            approachable.innerText = animal.approachable
            status.innerText = animal.status
            image.src = animal.image
            addAnimalButton.innerText = "Add Animal"

            animalCard.append(commonName, scientificName, category, description, approachable, image, addAnimalButton)

            document.body.appendChild(animalCard)
            
        })
    }
})