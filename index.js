const trumpApi = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random'
const trumpApiPerson = 'https://api.whatdoestrumpthink.com/api/v1/quotes/personalized?q=Biden'
const trumpImg = document.getElementById('trumpPicture')
const trumpImg2 = document.getElementById('trumpPicture2')

document.getElementById("quote1").addEventListener("click", async ()=>{
        const response = await fetch(trumpApi)
        const randomName = await response.json()
        const trumpQuote = randomName.message
        
        document.getElementById('trumpText').innerHTML= trumpQuote

        trumpImg.classList.remove('hidden')
        trumpImg2.classList.add('hidden')
        const newImg= document.createElement('IMG')
        newImg.setAttribute('src', '/pictures/508400298.jpg') 
        trumpImg.appendChild(newImg)
    })
    
    document.getElementById("quote2").addEventListener("click", async ()=>{
        const response = await fetch(trumpApiPerson)
        const randomName = await response.json()
        const trumpQuote = randomName.message
    
        document.getElementById('trumpPerson').innerHTML= trumpQuote

        trumpImg.classList.add('hidden')
        trumpImg2.classList.remove('hidden')
        const newImg= document.createElement('IMG')
        newImg.setAttribute('src', '/pictures/angry2.jpg') 
        trumpImg2.appendChild(newImg)
    })   
        
    
    
    