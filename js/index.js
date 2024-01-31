const clocked = document.querySelector("#clock");

function setclocked() {
    const setdate = new Date("2024-12-25T00:00:00");
    const newdate = new Date();
    const distance = setdate - newdate;
    const seconds = String(Math.floor((distance / 1000) % 60)).padStart(2, "0");
    const minutes = String(Math.floor((distance / (1000 * 60)) % 60)).padStart(2, "0");
    const hours = String(Math.floor((distance / (1000 * 60 * 60)) % 24)).padStart(2, "0");
    const day = String(Math.floor(distance / (1000 * 60 * 60 * 24))).padStart(2, "0");
   
    clocked.innerText = `${day}일 ${hours}시 ${minutes}분 ${seconds}초`;
}

setclocked();
setInterval(setclocked, 1000);