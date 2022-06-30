function updateTitleDisplay() {
        var xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function () {
            if ((xmlhttp.readyState === 4) && (xmlhttp.status === 200)) {
                var s = xmlhttp.responseText;
                s = s.split('\n');
                //current track
                document.querySelector('#np_current_track').innerHTML = s[0];
            }
        };
        xmlhttp.open("GET", "nowplaying/nowplaying_title.txt?"  + new Date().getTime(), true);
        xmlhttp.send();
    }

    //update every 5 seconds
    document.addEventListener('DOMContentLoaded', function () {
        setInterval(updateTitleDisplay, 10 * 1000);
        updateTitleDisplay();
    });
