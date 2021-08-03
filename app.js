// get svg element from html
const svg = document.querySelector('#svg')

// define a limit for your random numbers
let scale = 300

// create a color palette
const colors = ['rgba(0,0,0,0.1)', 'rgba(0,0,0,0.3)', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.7)', 'rgba(0,0,0,0.9)']

// loop a random number of times
for (i = 0; i < Math.floor(Math.random() * scale); i++) {
    // each iteration of the loop makes a new rectangle svg element
    let rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect')
    // each rectangle is given a random position, size, and color
    rect.setAttribute('x', Math.floor(Math.random() * scale))
    rect.setAttribute('y', Math.floor(Math.random() * scale))
    rect.setAttribute('width', `${Math.floor(Math.random() * scale)}`)
    rect.setAttribute('height', `${Math.floor(Math.random() * scale)}`)
    rect.setAttribute('fill', colors[`${Math.floor(Math.random() * colors.length)}`])
    // after defining the features of the rectangle it is appended to the svg container
    svg.appendChild(rect)
}