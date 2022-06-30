window.onload = function() {
let archiveMusic = ['Второй этаж поражает - Профессиональная смерть','Союз - Лирическая','НИИ Косметики - Верю','Дом престарелых аутистов - Синхрофазотрон','Электросон - Курортная','лампабикт - Остановись',
'Dontleaveme - Are you trying to get free why','Второй этаж поражает - Другое завтра','my bloody valentine - only shallow','Fallen Roses - Lies We Told'];
let MusicBox = document.querySelector('#MusicBox');

for (var i = 0; i < archiveMusic.length; i++) {

let divMusicBox = document.createElement('div');
divMusicBox.className = "content_music_Popular_track";

let pNumber = document.createElement('p');
pNumber.className = "content_music_Popular_track_nomber";
pNumber.innerHTML = i + 1;

let audio = document.createElement('audio');
audio.src = "music/"+ archiveMusic[i] + ".mp3";
audio.id = "player"+i;



let Play_Pause = false;
let imgPlay = document.createElement('img');
imgPlay.src = "img/Play.svg";
imgPlay.alt = "Play";
imgPlay.className = "Play_style1";
imgPlay.id = "Play"+i;
imgPlay.addEventListener('click', function() {
  for (var i = 0; i < archiveMusic.length; i++) {
    let pauseAll = "#player"+ String(i);
    let pauseAllget = document.querySelector(pauseAll);
    if(Play_Pause == false) {
    let playid = "Play"+i;
    playid.src = "img/Play.svg";
    pauseAllget.pause();
  }

  }
  if (Play_Pause == false) {
audio.play();
imgPlay.src = "img/Stop.svg";
Play_Pause = true;
} else if (Play_Pause == true) {
Play_Pause = false;
audio.pause();
imgPlay.src = "img/Play.svg";
}
});
let divImgPlay = document.createElement('div');
divImgPlay.className="divTime";
divImgPlay.append(imgPlay);

let divProgressName = document.createElement('div');
divProgressName.className="divProgressName";
let divProgressName_Name = document.createElement('div');
divProgressName_Name.className="divProgressName_Name";
divProgressName_Name.innerHTML = archiveMusic[i];
let divProgressName_inputRange = document.createElement('input');
divProgressName_inputRange.id="sliderMusic"+i;divProgressName_inputRange.type="range";
divProgressName_inputRange.min="0"; divProgressName_inputRange.max="100";
divProgressName_inputRange.step="1"; divProgressName_inputRange.value="0";
divProgressName.append(divProgressName_Name,divProgressName_inputRange);

let divVolumMusic = document.createElement('div');
divVolumMusic.className="divVolumMusic";
let Volumicon = document.createElement('img');
Volumicon.src="img/G3.svg"; Volumicon.className="Volumicon";

let inputRangeVolum = document.createElement('input');
inputRangeVolum.type="range"; inputRangeVolum.min="0"; inputRangeVolum.max="1";
inputRangeVolum.step="0.1"; inputRangeVolum.value="1"; inputRangeVolum.id="VolumMusicAudio" + i;
inputRangeVolum.className="inputRangeVolum";
divVolumMusic.append(Volumicon,inputRangeVolum);


let divTime = document.createElement('div');
divTime.className="divTime1";
divTime.id="TimeMusic"+i;divTime.innerHTML="00:00"


let divIconSave = document.createElement('div');
divIconSave.className="divIconSave";
let asave = document.createElement('a');
asave.href="https://cloud.mail.ru/public/AFYW/93YBd8B9S";
asave.target="_blank";
let saveIcon = document.createElement('img');
saveIcon.src="img/savemusic.svg";saveIcon.className="saveIcon";
asave.append(saveIcon);
divIconSave.append(asave);

divMusicBox.append(pNumber,audio,divImgPlay,divProgressName,divVolumMusic,divTime,divIconSave)

let Volumicon_bool = false;

Volumicon.addEventListener('click', function() {
  let audiovolumIcon = document.querySelector('#player'+i);
if(Volumicon_bool == false) {
audio.volume = 0;
Volumicon.src="img/G4.svg";
Volumicon_bool = true;
} else if(Volumicon_bool == true){
audio.volume = 1;
Volumicon.src="img/G3.svg";
Volumicon_bool = false;
}
});

MusicBox.append(divMusicBox);
}




for (var i = 0; i < archiveMusic.length; i++) {
  let InputVolum = document.querySelector('#VolumMusicAudio' + i);
 let audiovolum = document.querySelector('#player'+i);
  let TimeMusic = document.querySelector('#TimeMusic'+i);
  InputVolum.addEventListener('input', function() {
    let noze = InputVolum.value;
    audiovolum.volume = noze;
  });
  let timeText = document.querySelector('#TimeMusic' + i);
  let inputMusic = document.querySelector('#sliderMusic' + i);//Input range
  audiovolum.ontimeupdate = function() {
    let time = audiovolum.currentTime;
    let d = parseInt(time/60);
    let g = parseInt(time%60);
    if (g<10) {
    timeText.innerHTML = '0' + d +':0'+ String(g) ;
  } else if(g>=10){
    timeText.innerHTML = '0' + d +':'+ String(g) ;
  }
  inputMusic.max = parseInt(audiovolum.duration);
inputMusic.value = parseInt(time);
inputMusic.addEventListener('input', function() {
  audiovolum.currentTime = inputMusic.value;
});
  }


};


};
