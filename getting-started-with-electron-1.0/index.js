
const remote = require('electron').remote
const main = remote.require('./main.js')


let buttonwebsite = document.createElement('button')
buttonwebsite.textContent = 'Open ATLAS Open Data website'
buttonwebsite.addEventListener('click', () => {
  main.openWeb()
}, false)
document.body.appendChild(buttonwebsite)


var button = document.createElement('button')
button.textContent = 'Open Window'
button.addEventListener('click', () => {
  main.openWindow()
}, false)
document.body.appendChild(button)


let buttonbigpanda = document.createElement('button')
buttonbigpanda.textContent = 'Open BigPanda'
buttonbigpanda.addEventListener('click', () => {
  main.openBigPanda()
}, false)
document.body.appendChild(buttonbigpanda)
