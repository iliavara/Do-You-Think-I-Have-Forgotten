const yesMessage = 'ვიიიიიი <33333'
const yesImage =
  'https://media.tenor.com/r0VCmLiA3mEAAAAj/sseeyall-bubu-dudu.gif'

const messages = [
  'ბებე',
  'ვტფ?',
  'ბროოო',
  ';-;',
  'ქრინჯ',
  'ბებე დააკიპე, მელევა ჩხუბები',
  'ჯკ',
  'მაინც გკოცნი',
  'წრაწო',
]

const imageLinks = [
  'https://media.tenor.com/s7WHtFALjkIAAAAj/bubu-dudu-bubu.gif',
  'https://media.tenor.com/j7bxg0MNS38AAAAj/bubu-dudu-sseeyall.gif',
  'https://media.tenor.com/GAtyFkKkKmIAAAAj/tkthao219-bubududu.gif',
  'https://media.tenor.com/vr9YTHv1DW4AAAAj/bubu-dudu-sseeyall.gif',
]

let messageIndex = 0
let imageIndex = 0

function handleNoClick() {
  const noButton = document.querySelector('.no-button')
  const yesButton = document.querySelector('.yes-button')
  const imageElement = document.querySelector('.image-element')
  noButton.textContent = messages[messageIndex]
  messageIndex++
  if (messageIndex >= messages.length) {
    noButton.style.display = 'none'
  }
  const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize)
  yesButton.style.fontSize = `${currentSize * 1.5}px`
  if (imageIndex < imageLinks.length) {
    const randomImageLink = imageLinks[imageIndex]
    imageElement.src = randomImageLink
    imageIndex++
  }
}

function handleYesClick() {
  const yesButton = document.querySelector('.yes-button')
  const noButton = document.querySelector('.no-button')
  const imageElement = document.querySelector('.image-element')
  const container = document.querySelector('.container')
  const headings = document.querySelectorAll('h1')

  yesButton.style.display = 'none'
  noButton.style.display = 'none'

  headings.forEach((heading) => {
    heading.style.display = 'none'
  })

  const messageElement = document.createElement('h1')
  messageElement.textContent = yesMessage
  container.appendChild(messageElement)

  imageElement.src = yesImage
}
