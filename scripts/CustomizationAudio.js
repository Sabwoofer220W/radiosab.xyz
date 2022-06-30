const audio = document.querySelector('.audio');
let statusLoadaudio = false;
let load = false;
let controlsPlay = document.querySelector('.Play_style');
let text_control = document.querySelector('.Text_control');


audio.addEventListener('loadeddata', function() {
  load = true;
text_control.innerHTML="Сейчас в эфире!";
});





function statusRadio() {

  text_control.innerHTML="Подключение.";
  setTimeout(() => { text_control.innerHTML="Подключение..";}, 1000);
  setTimeout(() => { text_control.innerHTML="Подключение...";}, 2000);

}

//setTimeout(() => { if(load == false) {text_control.innerHTML="Трансляция закончилась:(";}}, 12000);

function play_audio(){
    /*if (load == true){
        text_control.innerHTML="Сейчас в эфире!";
    }*/
setTimeout(() => { if(text_control.innerHTML=="Подключение...") {text_control.innerHTML="Трансляция закончилась:(";}}, 25000);
  if (statusLoadaudio == false) {
    statusRadio();
  controlsPlay.src="img/Stop.svg";
  statusLoadaudio = true;
  audio.load();
  audio.play();
  } else {
  controlsPlay.src="img/Play.svg";
  statusLoadaudio = false;
  audio.pause();
  }

}

