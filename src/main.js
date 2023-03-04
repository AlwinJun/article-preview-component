// console.log('test')

const shareButton = document.querySelector(".share-inactive img[alt='share-button']")

shareButton.addEventListener('click',() => {
  document.querySelector('.share-acive').classList.remove('hidden');
  document.querySelector('.share-inactive').classList.add('hidden')
})