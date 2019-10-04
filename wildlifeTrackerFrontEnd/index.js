// function showMap(){
//     map = document.getElementById("googleMap")
//     map = new google.maps.Map(document.getElementById("googleMap"), {
//         center:{ lat: 39.117922, lng: -105.268891},
//         zoom:7,
//     }) 
// } 

// showMap()




document.addEventListener('DOMContentLoaded', () => {
    
    const allAnimals = []
    const addUserURL = 'http://localhost:3000/auth/login'
    const animalURL = 'http://localhost:3000/animals'
    const addAnimalsURL = 'http://localhost:3000/addAnimal'
    const removeAnimalURL = `http://localhost:3000/removeAnimal`
    const userAnimalsURL = 'http://localhost:3000/users/1'
    const mammalsButton = document.createElement("button")
    const reptilesButton = document.createElement("button")
    const birdsButton = document.createElement("button")
    const homeButton = document.querySelector("#home")
    const categories = document.querySelector(".categories")
    const animalContainer = document.createElement('div')
    const userAnimalContainer = document.createElement('div')
    const userInfo = document.querySelector(".userInfo")
    const flipCardContainer = document.createElement('div')
    
    flipCardContainer.className = "flip-card-container"
    animalContainer.className = "animalContainer"
    userAnimalContainer.className= "userAnimalContainer"

    // Map


    // let map = document.createElement('div')
    // map.setAttribute('id', 'map')
    // document.body.appendChild(map)
    // function initMap() {
    //     map = new google.maps.Map(document.getElementById('map'), {
    //         center: {lat: -34.397, lng: 150.644},
    //         zoom: 8
    //     })
    // } 

    // initMap()
    
    // if (document.querySelectorAll('#map').length > 0) {
    //     if(document.querySelector('html').lang)
    //         lang = document.querySelector('html').lang
    //     else
    //         lang = 'en'
    //     var js_file = document.createElement('script')
    //     js_file.type = 'text/javascript'
    //     js_file.src = 'https://maps.googleapis.com/maps/api/js?callback=initMap&signed_in=true&key=AIzaSyDJv15R3yL8mWxYp1J1Moj7VRKbaTXVJ9E&language=' + lang
    //     document.getElementsByTagName('head')[0].appendChild(js_file)
    // }

    // function hideMap(){
    //     map = document.getElementById("googleMap")
    //     console.log(map)
    //     map.style.display ="none"
    // } 


    // event listeners
    
    homeButton.addEventListener("click", event => {
        console.log(event)
        categories.innerText = ' '
        animalContainer.innerText = ''
        userInfo.innerText = ''
        showHomePage()
        // hideMammals()
        // hideSignIn()
    })

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

    // functions

    // function getUserToken() {
    //     fetch(addUserURL, {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }, 
    //         body: {
    //             username: username,
    //             password: password
    //         }
    //     })
    //     .then(response => response.json())
    //     .then(response => console.log(response))
    // }

    // getUserToken()

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
        
        let map = document.getElementById("googleMap")
        map.style.display= "block"

        const mapTitle = document.createElement('h2')
        mapTitle.className ='mapTitle'
        mapTitle.innerText= "Mark the Sighting!"

        map.prepend(mapTitle)
        userInfo.append(map, userTitle)
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
        document.body.append(categories)
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
       
        const userFlipCard = document.createElement('div')
        userFlipCard.className = "flip-card"
        const userFlipCardInner = document.createElement('div')
        userFlipCardInner.className = "flip-card-inner"
        const userFlipCardFront = document.createElement('div')
        userFlipCardFront.className = "flip-card-front"
        const userFlipCardBack = document.createElement('div')
        userFlipCardBack.className = "flip-card-back"
        const commonName = document.createElement('h1') 
        const scientificName = document.createElement('h4')
        const category = document.createElement('h5')
        const description = document.createElement('p')
        const approachable = document.createElement('p')
        const status = document.createElement('h6')
        const image = document.createElement('img')
        const removeAnimalButton = document.createElement('button')

        removeAnimalButton.addEventListener('click',event => { 
            const animalToRemove = userFlipCard
            // event.target.parentNode
            console.log(animalToRemove)
            fetch(removeAnimalURL + animal.id, {
                method: 'DELETE',
            }).then(animalToRemove.remove())
        })

        // userCard.className = "user-card"

        removeAnimalButton.innerText = "Remove Animal"
        commonName.innerText = animal.common_name
        scientificName.innerText = 'Scientific Name: ' + animal.scientific_name
        category.innerText = 'Category: ' + animal.category
        // description.innerText = animal.description
        approachable.innerText = animal.approachable
        status.innerText = animal.status
        image.src = animal.image

        userFlipCardFront.append(commonName, image)
        userFlipCardBack.append(scientificName, category, approachable, removeAnimalButton)
        userFlipCardInner.append(userFlipCardFront, userFlipCardBack)
        userFlipCard.append(userFlipCardInner)
        flipCardContainer.append(userFlipCard)
        userInfo.append(flipCardContainer)
        document.body.append(userInfo)
    }
    initMap()
    // hideMap()
    hideSignIn() 
    retrieveAnimals()
})




