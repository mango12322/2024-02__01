const quotes = [
    {
    quote: "겁쟁이는 시작조차 안한다.",
    author: "Les Brown",
    },
    {
    quote: "승자는 포기를 못 한다.",
    author: "Gen. Douglas MacArthur",
    },
    {
    quote: "실패는 쓰러지는 것이 아니라 다시 일어나지 않는 것이다.",
    author: "John Lennon",
    },
    {
    quote: "불편함으로써 편해지나니.",
    author: "Deepak Chopra",
    },
    {
    quote: "고통은 나약함이 몸에서 빠져나가는 것",
    author: "Arthur Shopenhauer",
    },
    {
    quote: "아무 것도 바꾸지 않으면 아무것도 변하지 않습니다.",
    author: "Tony Robbins",
    },
    {
    quote: "변화는 불가피합니다. 성장은 선택 사항입니다.",
    author: "John C. Maxwell",
    },
    {
    quote: "생각을 바꾸면 인생을 바꾸세요.",
    author: "Ernest Holmes",
    },
    {
    quote : "실패는 치명적이지는 않지만 변화의 실패는 치명적일 수 있습니다.",
    author: "John Wooden",
    },
    {
    quote: "변화 외에는 영원한 것은 없습니다.",
    author: "Buddha",
    },
    ];

const quote = document.querySelector(".quote span:first-child");
const author = document.querySelector(".quote span:last-child");


const nowQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = nowQuote.quote;
author.innerText = nowQuote.author;


const colors = [
    "#CAC5AD",
    "#ece6c8",
    "#948e6b",
    "#D4D8D9",
    "#E5CFA0",
];

const nowColor1 = colors[Math.floor(Math.random() * colors.length)];
const nowColor2 = colors[Math.floor(Math.random() * colors.length)];
document.body.style.background = `linear-gradient(to right, ${nowColor1},${nowColor2})`;