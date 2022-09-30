let h2Tag = document.querySelector('h2') // first h2 tag  css settings

h2Tag.style.fontSize = '3rem'
h2Tag.style.textAlign = 'center'
h2Tag.style.marginTop = '2rem'
h2Tag.style.textTransform = 'uppercase'
h2Tag.style.letterSpacing = '1rem'
h2Tag.style.fontFamily = `'Times New Roman', Times, serif`
h2Tag.style.lineHeight = '0'

let totalNumberOfCountries = document.getElementById('total-countries') // total number of countries css and total number

totalNumberOfCountries.style.fontFamily = `'Verdana', Times, serif`
totalNumberOfCountries.style.textAlign = 'center'
totalNumberOfCountries.style.fontSize = '.75rem'
totalNumberOfCountries.append(`Total Number of countries: ${countries.length}`)
totalNumberOfCountries.style.lineHeight = '0'


let h3Tag = document.querySelectorAll('h3') //h3 tag all css settings

h3Tag.forEach(element => {
    element.style.textAlign = 'center'
    element.style.fontWeight = 'normal'
    element.style.fontSize = '.75rem'
    element.style.lineHeight = '0'
    element.style.color = '#9C9C9C';
})


let divContainer = document.getElementsByClassName('countries-container')[0]
divContainer.style.float = 'left'
divContainer.style.marginLeft = '20%'
divContainer.style.marginTop = '5rem'
divContainer.style.width = '60%';
divContainer.style.height = '100%';
divContainer.style.textTransform = 'uppercase'


let divWrapper = document.getElementsByClassName('countries-wrapper')[0]



let divContainerİnside = document.getElementsByClassName('countries-wrapper')[0]


let sortCountries = countries.sort((a, b) => a - b)

sortCountries.forEach(element => {
    let pTag = document.createElement('p')
    pTag.style.fontSize = '24px'
    pTag.style.padding = '5px,0'
    pTag.style.textAnchor = 'middle'
    pTag.style.border = '1px solid #cccccc'
    pTag.style.textAlign = 'center'
    pTag.style.marginTop = '.5vh'
    pTag.style.marginBottom = '.1vh'
    pTag.style.marginRight = '.5vh'
    pTag.style.width = '200px'
    pTag.style.height = '150px'
    pTag.style.overflow = 'auto'
    pTag.style.fontWeight = 'bold'
    pTag.style.position = 'relavite'
    pTag.style.top = '20%'
    pTag.style.left = '10%'
    pTag.style.display = 'inline-block'
    pTag.appendChild(document.createTextNode(element))
    divContainerİnside.appendChild(pTag)

})