document.addEventListener('DOMContentLoaded', () => {
    const animalURL = 'http://localhost:3000/animals'
    
    const mammalsButton = document.createElement("button")
    const reptilesButton = document.createElement("button")
    const birdsButton = document.createElement("button")
    
    fetch(animalURL)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            showMammals(response)
            // showBirds(response)
            // showReptiles(response)
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

    function showHomePage(){
        const p = document.createElement("p")

        p.innerText = "What did you see?"
        mammalsButton.innerText = "Mammals"
        reptilesButton.innerText = "Reptiles"
        birdsButton.innerText = "Birds" 
        
        categories = document.querySelector(".categories")
        categories.append(p, mammalsButton, reptilesButton, birdsButton)
    } 

    function showMammals(animals) {
        mammalsButton.addEventListener('click', event => {
        const allMammals = animals.filter(animal => animal.category === "Mammal")
        allMammals.forEach(animal => {
            createCards(animal)
        })
    })
    }
    // showMammals()


    function showBirds(animals) {
        const allBirds = animals.filter(animal => animal.category === "Bird")
        allBirds.forEach(animal => {
            createCards(animal)
        })
    }
    // showBirds()
    function showReptiles(animals) {
        const allReptiles = animals.filter(animal => animal.category === "Reptile")
        allReptiles.forEach(animal => {
            createCards(animal)
        })
    }

    

    function createCards(animal) {
            const animalCard = document.createElement('div')
            const commonName = document.createElement('h2')
            const scientificName = document.createElement('h4')
            const category = document.createElement('h5')
            const description = document.createElement('p')
            const approachable = document.createElement('p')
            const status = document.createElement('h6')
            const image = document.createElement('img')
            const addAnimalButton = document.createElement('button')
            
            commonName.innerText = 'Common N: ' + animal.common_name
            scientificName.innerText = 'Scientific Name: ' + animal.scientific_name
            category.innerText = 'Category: ' + animal.category
            description.innerText = animal.description
            approachable.innerText = animal.approachable
            status.innerText = animal.status
            image.src = animal.image
            addAnimalButton.innerText = "Add Animal"
            
            animalCard.append(commonName, scientificName, category, description, approachable, image, addAnimalButton)
            
            document.body.appendChild(animalCard)
    }



//     function showAnimals(animals) {
//         animals.forEach(animal => {
//             const animalCard = document.createElement('div')
//             const commonName = document.createElement('h2')
//             const scientificName = document.createElement('h4')
//             const category = document.createElement('h5')
//             const description = document.createElement('p')
//             const approachable = document.createElement('p')
//             const status = document.createElement('h6')
//             const image = document.createElement('img')
//             const addAnimalButton = document.createElement('button')

//             commonName.innerText = 'Common Name: ' + animal.common_name
//             scientificName.innerText = 'Scientific Name: ' + animal.scientific_name
//             category.innerText = 'Category: ' + animal.category
//             description.innerText = animal.description
//             approachable.innerText = animal.approachable
//             status.innerText = animal.status
//             image.src = animal.image
//             addAnimalButton.innerText = "Add Animal"

//             animalCard.append(commonName, scientificName, category, description, approachable, image, addAnimalButton)

//             document.body.appendChild(animalCard)
            
//         })
//     }
// }) 


})


