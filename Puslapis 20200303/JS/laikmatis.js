function countdown() {
    var now = new Date();
    var eventDate = new Date(2020, 09, 22, 00, 36, 00);
    var currentTime = now.getTime();
    var eventTime = eventDate.getTime();
    var remTime = eventTime - currentTime;
    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24);
    
    h %= 24;
    m %= 60;
    s %= 60;
    
    
    if (remTime <= 0) {
        document.getElementById("message").innerHTML = "Success";
        clear;
    }

    d = (d < 10) ? "0" + d : d;
    if (h < 10) {
        h = "0" + h;
    }
    if (m < 10) {
       m = "0" + m;
    }
    s = (s < 10) ? "0" + s : s;
    document.getElementById("days").textContent = d;
    document.getElementById("days").innerText = d;

    document.getElementById("hours").textContent = h;
    document.getElementById("minutes").textContent = m;
    document.getElementById("seconds").textContent = s;
    setTimeout(countdown, 1000);

}

countdown();