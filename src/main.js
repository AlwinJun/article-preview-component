// console.log('test')
const shareButton = document.querySelector('.share-inactive button');
const activeShareButton = document.querySelector('.share-active button');
const activeShare = document.querySelector('.share-active');
const inactiveShare = document.querySelector('.share-inactive');
const mediaScreen = window.matchMedia('(min-width: 60.125em)');

if(mediaScreen.matches){
  shareButton.addEventListener('click',() => {
    activeShare.classList.toggle('hidden');
    shareButton.classList.toggle('active')

    if(activeShare.contains(activeShareButton)){
      activeShare.removeChild(activeShareButton);
    }
  })
}else{
  shareButton.addEventListener('click',() => {
    inactiveShare.classList.add('hidden');
    activeShare.classList.remove('hidden');

  })

  activeShareButton.addEventListener('click',() => {
    inactiveShare.classList.remove('hidden');
    activeShare.classList.add('hidden');

  })

}


