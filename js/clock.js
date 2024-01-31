const clocked = document.querySelector(".today-clock");
const today = document.querySelector(".today");

function todayClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clocked.innerText = `${hours}시 ${minutes}분 ${seconds}초`;
}

function todayed() {
    const todayDate = new Date();
    const year = String(todayDate.getFullYear()).padStart(2, "0");
    const month = String(todayDate.getMonth() + 1).padStart(2, "0");
    const day = String(todayDate.getDate()).padStart(2, "0");
    today.innerText = `${year}년 ${month}월 ${day}일`;
}

todayClock();
setInterval(todayClock, 1000);

todayed();
setInterval(todayed, 1000);