

document.addEventListener('DOMContentLoaded', () => {
    const allAnimals = []
    const animalURL = 'http://localhost:3000/api/v1/animals'
    const addAnimalsURL = 'http://localhost:3000/api/v1/addAnimal'
    const mammalsButton = document.createElement("button")
    const reptilesButton = document.createElement("button")
    const birdsButton = document.createElement("button")
    const homeButton = document.querySelector("#home")
    const categories = document.querySelector(".categories")
    const animalContainer = document.createElement('div')
    animalContainer.className = "animalContainer"

    
    
    homeButton.addEventListener("click", event => {
        console.log(event)
        showHomePage()
        hideMammals()
        hideSignIn()
    })
    
    function retrieveAnimals() {
        fetch(animalURL)
            .then(response => response.json())
            .then(animals => {allAnimals.push(animals)
            })
    }
    
        console.log(allAnimals)

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
        const buttonContainer = document.createElement("div")
        buttonContainer.className = "buttonContainer"
        const p = document.createElement("p")

        p.innerText = "What did you see?"
        mammalsButton.innerText = "Mammals"
        reptilesButton.innerText = "Reptiles"
        birdsButton.innerText = "Birds" 
        
        buttonContainer.append(mammalsButton, reptilesButton, birdsButton)
        categories.append(p, buttonContainer)
        document.body.appendChild(categories)
    } 


    // function showMammals(animals) {
    //     mammalsButton.addEventListener('click', event => {
    //         const allMammals = animals.filter(animal => animal.category === "Mammal")
    //         allMammals.forEach(animal => {
    //             createCards(animal)
    //         })
    //         hideHomePage()

    //     })
    // } 

    // function hideMammals(){
    //     animalContainer.style.display = "none"
    // }
    

    // function showBirds(animals) {
    //     birdsButton.addEventListener('click', event => {
    //         const allBirds = animals.filter(animal => animal.category === "Bird")
    //         allBirds.forEach(animal => {
    //             createCards(animal)
    //         })
    //         hideHomePage()
    //     })
    // }

        reptilesButton.addEventListener('click', event => {
            animalContainer.innerText = ''
            const allReptiles = allAnimals.flat().filter(animal => {
                return animal.category === "Reptile"
            })
            allReptiles.forEach(reptile => {
                createCards(reptile)
            })
        })

        birdsButton.addEventListener('click', event => {
            animalContainer.innerText = ''
            const allBirds = allAnimals.flat().filter(animal => {
                return animal.category === "Bird"
            })
            allBirds.forEach(bird => {
                createCards(bird)
            })
        })

        mammalsButton.addEventListener('click', event => {
            animalContainer.innerText = ''
            const allMammals = allAnimals.flat().filter(animal => {
                return animal.category === "Mammal"
            })
            allMammals.forEach(mammal => {
                createCards(mammal)
            })
        })

        
    

   
        function createCards(animal) {
            console.log(animal)
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

            addAnimalButton.addEventListener('click',event => {
                console.log(event)
                const animalToAdd = event.target.parentNode
                fetch(addAnimalsURL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }, 
                    body: JSON.stringify(
                        {
                            user_id: 1, 
                            animal_id: animal.id
                        }
                    )
                }).then(console.log(animalToAdd))
            })
            
            animalCard.appendChild(image)
            animalCard.append(commonName, scientificName, category, description, approachable, addAnimalButton)
            animalContainer.append(animalCard)
            document.body.appendChild(animalContainer)
    }
    retrieveAnimals()
})




