

document.addEventListener('DOMContentLoaded', () => {
    
    const allAnimals = []
    const animalURL = 'http://localhost:3000/api/v1/animals'
    const addAnimalsURL = 'http://localhost:3000/api/v1/addAnimal'
    const removeAnimalURL = `http://localhost:3000/api/v1/removeAnimal/`
    const userAnimalsURL = 'http://localhost:3000/api/v1/users/1'
    const mammalsButton = document.createElement("button")
    const reptilesButton = document.createElement("button")
    const birdsButton = document.createElement("button")
    const homeButton = document.querySelector("#home")
    const categories = document.querySelector(".categories")
    const animalContainer = document.createElement('div')
    const userAnimalContainer = document.createElement('div')
    const userInfo = document.querySelector(".userInfo")

    animalContainer.className = "animalContainer"
    userAnimalContainer.className= "userAnimalContainer"

    // event listeners
    
    homeButton.addEventListener("click", event => {
        console.log(event)
        showHomePage()
        hideMammals()
        hideSignIn()
    })

    reptilesButton.addEventListener('click', event => {
        animalContainer.innerText = ''
        const allReptiles = allAnimals.flat().filter(animal => {
            return animal.category === "Reptile"
        })
        allReptiles.forEach(reptile => {
            createCards(reptile)
        })
        // const reptilesTitle = document.createElement('h2')
        // reptilesTitle.innerText = "Reptile's"
        // animalContainer.prepend(reptilesTitle)
    })

    birdsButton.addEventListener('click', event => {
        animalContainer.innerText = ''
        const allBirds = allAnimals.flat().filter(animal => {
            return animal.category === "Bird"
        })
        allBirds.forEach(bird => {
            createCards(bird)
        })
        // const birdsTitle = document.createElement('h2')
        // birdsTitle.innerText = "Bird's"
        // animalContainer.prepend(birdsTitle)
    })

    mammalsButton.addEventListener('click', event => {
        animalContainer.innerText = ''
        const allMammals = allAnimals.flat().filter(animal => {
            return animal.category === "Mammal"
        })
        allMammals.forEach(mammal => {
            createCards(mammal)
        })
        // const mammalsTitle = document.createElement('h2')
        // mammalsTitle.innerText = "Mammal's"
        // animalContainer.prepend(mammalsTitle)
    })

    // functions

    function showUserPage() {
        fetch(userAnimalsURL)
        .then(response => response.json())
        .then(response => {
            animalContainer.innerText = ''
            response.animals.forEach(animal => {
                createUserCards(animal)  
            })
            console.log(response.animals)
            categories.style.display = "none"
        }) 
        const userTitle = document.createElement('h2')
        userTitle.className = "userTitle"
        userTitle.innerText = "Animal's You've Seen!"

        userInfo.append(userTitle)
        document.body.append(userInfo)
    } 

    function retrieveAnimals() {
        fetch(animalURL)
            .then(response => response.json())
            .then(animals => {allAnimals.push(animals)
            })
    }

    function hideSignIn(){
        signIn = document.querySelector("#signIn")
        form = document.querySelector(".signInForm")
        signIn.addEventListener('click', event => {
            form.style.display = "none"
            showHomePage()
        })
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
                showUserPage()
            })
            
            animalCard.appendChild(image)
            animalCard.append(commonName, scientificName,category, description, approachable, addAnimalButton)
            animalContainer.append(animalCard)
            document.body.appendChild(animalContainer)
    }

    function createUserCards(animal){
        const userCard = document.createElement('div')
        const commonName = document.createElement('h1') 
        const scientificName = document.createElement('h4')
        const category = document.createElement('h5')
        const description = document.createElement('p')
        const approachable = document.createElement('p')
        const status = document.createElement('h6')
        const image = document.createElement('img')
        const removeAnimalButton = document.createElement('button')

        removeAnimalButton.addEventListener('click',event => { 
            const animalToRemove = event.target.parentNode
            fetch(removeAnimalURL + animal.id, {
                method: 'DELETE',
            }).then(animalToRemove.remove())
        })

        userCard.className = "user-card"

        removeAnimalButton.innerText = "Remove Animal"
        commonName.innerText = animal.common_name
        scientificName.innerText = 'Scientific Name: ' + animal.scientific_name
        category.innerText = 'Category: ' + animal.category
        description.innerText = animal.description
        approachable.innerText = animal.approachable
        status.innerText = animal.status
        image.src = animal.image

        userCard.appendChild(image)
        userCard.append(commonName, scientificName, category, description, approachable, removeAnimalButton)
        userAnimalContainer.appendChild(userCard)
        userInfo.append(userAnimalContainer)
        document.body.appendChild(userInfo)
    }
    hideSignIn() 
    retrieveAnimals()
})




