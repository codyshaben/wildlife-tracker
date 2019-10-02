document.addEventListener('DOMContentLoaded', () => {
    const animalURL = 'http://localhost:3000/animals'
    
    const mammalsButton = document.createElement("button")
    const reptilesButton = document.createElement("button")
    const birdsButton = document.createElement("button")
    const homeButton = document.querySelector("#home")
    const categories = document.querySelector(".categories")
    
    homeButton.addEventListener("click", event => {
        showHomePage()
    })
    
    fetch(animalURL)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            showMammals(response)
            showBirds(response)
            showReptiles(response)
        })

    function hideSignIn(){
        signIn = document.querySelector("#signIn")
        form = document.querySelector(".signInForm")
        signIn.addEventListener('click', event => {
            form.style.display = "none"
            showHomePage()
        })
    } 
        
    hideSignIn() 

    function hideHomePage(){
        categories.style.display = "none"
    }

    function showHomePage(){
        const p = document.createElement("p")

        p.innerText = "What did you see?"
        mammalsButton.innerText = "Mammals"
        reptilesButton.innerText = "Reptiles"
        birdsButton.innerText = "Birds" 
        
        categories.appendChild(p)
        categories.append(mammalsButton, reptilesButton, birdsButton)
    } 

    function showMammals(animals) {
        mammalsButton.addEventListener('click', event => {
            const allMammals = animals.filter(animal => animal.category === "Mammal")
            allMammals.forEach(animal => {
                createCards(animal)
            })
            hideHomePage()

        })
    }

    function showBirds(animals) {
        birdsButton.addEventListener('click', event => {
            const allBirds = animals.filter(animal => animal.category === "Bird")
            allBirds.forEach(animal => {
                createCards(animal)
            })
            hideHomePage()
        })
    }

    function showReptiles(animals) {
        reptilesButton.addEventListener('click', event => {
            const allReptiles = animals.filter(animal => animal.category === "Reptile")
            allReptiles.forEach(animal => {
                createCards(animal)
            })
            hideHomePage()
        })
    }

    function createCards(animal) {
            const animalCard = document.createElement('div')
            const commonName = document.createElement('h1')
            const scientificName = document.createElement('h4')
            const category = document.createElement('h5')
            const description = document.createElement('p')
            const approachable = document.createElement('p')
            const status = document.createElement('h6')
            const image = document.createElement('img')
            const addAnimalButton = document.createElement('button')

            animalCard.className = "animal-card"
            addAnimalButton.className = "add-animal-button"
            
            commonName.innerText = animal.common_name
            scientificName.innerText = 'Scientific Name: ' + animal.scientific_name
            category.innerText = 'Category: ' + animal.category
            description.innerText = animal.description
            approachable.innerText = animal.approachable
            status.innerText = animal.status
            image.src = animal.image
            addAnimalButton.innerText = "Add Animal"
            
            animalCard.appendChild(image)
            animalCard.append(commonName, scientificName, category, description, approachable, addAnimalButton)
            document.body.appendChild(animalCard)
    }
})


