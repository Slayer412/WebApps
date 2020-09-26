const date = "23 oct 2020";
const day = document.getElementById("day"); 
const hrs = document.getElementById("hrs");
const min = document.getElementById("mins");
const sec = document.getElementById("sec"); 
 


const form = document.getElementById("my_form")
const event_ = document.getElementById("name")
const date_ = document.getElementById("date_in")
const h2 = document.getElementById("h2")

var arr = [];

function countDown(){
    //const date = date_.value;
    //const name = event_.value;

    const date_d = new Date(arr[1]);
    const current_date = new Date();

    const seconds = (date_d - current_date) / 1000;
    const days = Math.floor(seconds / 3600 / 24);
    const hour = Math.floor(seconds / 3600) % 24;
    const mintues = Math.floor(seconds / 60) % 60;
    const final_sec = Math.floor(seconds) % 60;

    day.innerHTML = timeFormat(days);
    hrs.innerHTML = timeFormat(hour);
    min.innerHTML = timeFormat(mintues);
    sec.innerHTML = timeFormat(final_sec);
    h2.innerHTML = arr[0];
    
}

function timeFormat(t){
    return t<10 ? `0${t}`: t;
}
var timer;
//countDown();

function startTimer() {
    inputData()
    timer = setInterval(countDown,1000);
    countDown();
    return true;
}

function stopTimer() {
    clearInterval(timer);
    return true;
}

function inputData(){
    arr[0] = event_.value;
    arr[1] = date_.value;
}

//---------------------------------------------------------------------------------------------------------------------


