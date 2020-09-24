const main = document.querySelector('.container')
main.style.display = 'flex'
main.style.flexDirection = 'column'
main.style.alignItems = 'center'
main.style.fontFamily = 'sans-serif'


// Blue heading
const heading = document.createElement('nav')
heading.style.backgroundColor = '#53a7f9'
heading.style.width ='100%'
heading.style.height='80px'
heading.style.display = 'flex'


main.appendChild(heading)

const headText = document.createElement('h2')
headText.textContent = 'HighOnCoding'
headText.style.color = 'white'
headText.style.padding = '10px'
heading.appendChild(headText)

const homeText = document.createElement('h4')
homeText.textContent = 'Home'
homeText.style.color = 'white'
homeText.style.paddingTop = '15px'
homeText.style.paddingLeft = '25px'
heading.appendChild(homeText)

const catText = document.createElement('p')
catText.textContent = 'Categories'
catText.style.color = 'white'
catText.style.paddingTop = '20px'
catText.style.paddingLeft = '30px'
catText.style.fontWeight = '100'

heading.appendChild(catText)


// grey box
const greyBox = document.createElement('div')
greyBox.style.backgroundColor = '#dddee1'
greyBox.style.width = '90%'
greyBox.style.width = '90%'
greyBox.style.marginTop = '20px'
main.appendChild(greyBox)

const curseText = document.createElement('h2')
curseText.textContent = 'Curse of Current Reviews'
curseText.style.color = '#62676d'
curseText.style.marginLeft = '10px'
greyBox.appendChild(curseText)

const cursePar = document.createElement('p')
cursePar.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odit doloribus dolore ex, quia quas exercitationem eligendi molestias inventore unde quibusdam nulla, impedit quidem provident praesentium assumenda, minima veritatis quaerat!  '
cursePar.style.marginLeft = '10px'
cursePar.style.color = '#62676d'
cursePar.style.width = '95%'
greyBox.appendChild(cursePar)

// hello text
const helloText = document.createElement('p')
helloText.textContent = 'Hello WatchKit'
helloText.style.color = '#4688cf'
helloText.style.alignSelf = 'flex-start'
helloText.style.marginLeft = '5%'
helloText.style.fontSize = '20px'
helloText.style.marginBottom = '-10px'
main.appendChild(helloText)

//first paragragh
const helloPar = document.createElement('p')
helloPar.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odit doloribus dolore ex, quia quas exercitationem eligendi molestias inventore unde quibusdam nulla, impedit quidem provident praesentium assumenda, minima veritatis quaerat!  '
helloPar.style.color = 'black'
helloPar.style.width = '90%'
main.appendChild(helloPar)

//orange bar 1
const obar1 = document.createElement('div')
obar1.style.backgroundColor = '#f39017'
obar1.style.width = '90%'
obar1.style.display = 'flex'
obar1.style.height = '20px'
const bar1 = document.querySelector('.container')
bar1.appendChild(obar1)

const barText1 = document.createElement('p')
barText1.textContent= '12 comments 124 likes'
barText1.style.fontSize = '15px'
barText1.style.color = 'white'
barText1.style.alignSelf = 'center'

obar1.appendChild(barText1)

// intro text
const introText = document.createElement('p')
introText.textContent = 'Introduction to Swift'
introText.style.color = '#4688cf'
introText.style.alignSelf = 'flex-start'
introText.style.marginLeft = '5%'
introText.style.fontSize = '20px'
introText.style.marginBottom = '-10px'
main.appendChild(introText)
//first paragragh
const introPar = document.createElement('p')
introPar.textContent = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim odit doloribus dolore ex, quia quas exercitationem eligendi molestias inventore unde quibusdam nulla, impedit quidem provident praesentium assumenda, minima veritatis quaerat!  '
introPar.style.color = 'black'
introPar.style.width = '90%'
main.appendChild(introPar)
//orange bar 2
const obar2 = document.createElement('div')
obar2.style.backgroundColor = '#f39017'
obar2.style.width = '90%'
obar2.style.display = 'flex'
obar2.style.height = '20px'
main.appendChild(obar2)

const barText2 = document.createElement('p')
barText2.textContent = '15 comments 45 likes'
barText2.style.fontSize = '15px'
barText2.style.color = 'white'
barText2.style.alignSelf = 'center'
obar2.appendChild(barText2) 