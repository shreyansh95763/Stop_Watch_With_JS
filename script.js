var isStop = true;
var sec = 0;
var min = 0;
var hour = 0;
var count = 0;
function start() {
    if(isStop == true){
        isStop = false;
        timer();
    }
}

function timer () {
    if(isStop == false){
        sec = parseInt(sec);
        min = parseInt(min);
        hour = parseInt(hour);
        count = parseInt(count);
        // sec++;
        count++
        if(count==100){
            count=0;
            sec++;
        }
        if(sec == 60){
            sec = 0;
            min++;
        }
        if(min == 60){
            min = 0;
            hour++;
        }
        if(count<10){
            count = "0" + count;
        }
        if(sec<10){
            sec = "0" + sec;
        }
        if(min<10){
            min = "0" + min;
        }
        if(hour<10){
            hour = "0" + hour;
        }

        // stopwatch.innerHTML = hour + " : "+ min + " : " + sec;
        document.getElementById("hr").innerHTML=hour;
        document.getElementById("min").innerHTML=min;
        document.getElementById("sec").innerHTML=sec;
        document.getElementById("count").innerHTML=count;

        setTimeout("timer()",10);
    }

}

function stop() {
    isStop = true;
}

function reset() {
    isStop = true; 
    sec = 0; 
    min=0;
    hour=0;
    // stopwatch.innerHTML = "00 : 00 : 00";
    document.getElementById("hr").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("count").innerHTML="00";
}
