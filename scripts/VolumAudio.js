let slider1 = document.querySelector('#slider');
let volumIcon1 = document.querySelector('#volumIcon');
let pointAudio1 = 10;
let volumstatus1 = false;
let nowimg1='./img/G3.svg';
		function range_change_event() {
		    let percent = slider1.value;
		   audio.volume=percent;
       pointAudio1 = percent;
       if (pointAudio1 > 0 && pointAudio1 <= 0.3) {
         nowimg1 ="./img/G1.svg";
         volumIcon1.src=nowimg1;
       } else if (pointAudio1 > 0.3  && pointAudio1 <= 0.7){
         nowimg1 ="./img/G2.svg";
         volumIcon1.src=nowimg1;
       } else if (pointAudio1 > 0.7 && pointAudio1 <= 1 ){
         nowimg1 ="./img/G3.svg";
         volumIcon1.src=nowimg1;
       } else if (pointAudio1 == 0) {
         volumIcon1.src="./img/G4.svg";
       }
		}
		slider1.addEventListener('input', range_change_event);
    volumIcon1.addEventListener('click', function() {
      if (volumstatus1 == false) {
        audio.volume=0;
         volumIcon1.src="./img/G4.svg";
        volumstatus1 = true;
      } else if (volumstatus1 == true){
        audio.volume=slider1.value;
         volumIcon1.src=nowimg1;
          volumstatus1 = false;
      }
    });