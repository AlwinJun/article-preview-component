// console.log('test')

const shareButton = document.querySelector(".share-inactive img[alt='share-button']")

shareButton.addEventListener('click',() => {
  const activeShare = document.querySelector('.share-acive');
  const activeShareButton = document.querySelector(".share-acive img[alt='share-button']")
  const mediaScreen = window.matchMedia('(min-width: 60.125em)');

  if(mediaScreen.matches){
    activeShare.classList.remove('hidden');

    if(activeShare.contains(activeShareButton)){
      activeShare.removeChild(activeShareButton)
    }
  }else{
    activeShare.classList.remove('hidden');
    document.querySelector('.share-inactive').classList.add('hidden');
  }


 
})