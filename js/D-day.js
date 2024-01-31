const dDay = document.querySelector(".d-day");

function happyDay() {
    const setDay = new Date("2024-02-18T00:00:00");
    const newDay = new Date();
    const distance = setDay - newDay;
    const day = String(Math.floor(distance / (1000*60*60*24))).padStart(2, "0");
    const hours = String(Math.floor(distance / (1000*60*60)) % 24).padStart(2, "0");
    const minutes = String(Math.floor(distance / (1000*60)) %60).padStart(2, "0");
    const seconds = String(Math.floor(distance / 1000 % 60)).padStart(2, "0");

    dDay.innerText = `생일까지 ${day}일 ${hours}시 ${minutes}분 ${seconds}초 남았습니다.`;
}

happyDay();
setInterval(happyDay, 1000);