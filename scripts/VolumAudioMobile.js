let volumIconMobile1 = document.querySelector('#volumIconMobile');
let volumstatusMobile1 = false;
volumIconMobile1.addEventListener('click', function() {
  if (volumstatusMobile1 == false) {
    audio.volume=0;
     volumIconMobile1.src="./img/G4.svg";
    volumstatusMobile1 = true;
  } else if (volumstatusMobile1 == true){
    audio.volume=1;
     volumIconMobile1.src="./img/G3.svg";
      volumstatusMobile1 = false;
  }
});
