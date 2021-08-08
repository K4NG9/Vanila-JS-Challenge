const quotes = [
  {
    quote: "새로운 일에 도전하다 보면 가끔 실수를 저지를 수 있다. 자신의 실수를 빨리 인정하고 다른 시도에 집중하는 것이 최선이다.",
    author: "Steve Jobs",
  },
  {
    quote: "행동은 모든 성공의 가장 기초적인 핵심이다.",
    author: "Pablo Picasso",
  },
  {
    quote: "위대한 업적은 대개 커다란 위험을 감수한 결과이다.",
    author: "Herodotus",
  },
  {
    quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
    author: "Benjamin Franklin",
  },
  {
    quote: "승리는 가장 끈기 있는 사람에게 돌아간다.",
    author: "Bonaparte Napoleon",
  },
  {
    quote: "혁명은 다 익어 저절로 떨어지는 사과가 아니다. 떨어뜨려야 하는 것이다.",
    author: 'Ernesto "Che" Guevara',
  },
  {
    quote: "오늘 나무 그늘에서 쉴 수 있는 이유는 예전에 나무를 심었기 때문이다.",
    author: "Warren Buffett",
  },
  {
    quote: "과거의 사건들은 크게, 십중팔구 아예 일어나지 않았던 일과 중요하지 않은 일로 나눌 수 있을 것이다",
    author: "William Ralph Inge",
  },
  {
    quote: "절대로 고개를 떨구지 말라. 고개를 꼿꼿이 치켜 들고 두 눈으로 똑똑히 세상을 보라.",
    author: "Helen Keller",
  },
  {
    quote: "실패에 대해 걱정하지마라. 한번만 제대로 하면 된다.",
    author: "Andrew Houston",
  },
  {
    quote: "꿈을 이루고자 하는 용기만 있다면, 모든 꿈을 이룰 수 있다.",
    author: "Walt Disney",
  },
  {
    quote: "나약한 태도는 그 사람 자체도 나약하게 만든다.",
    author: "Albert Einstein",
  },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;

//[1, 2, 3, 4, 5].length : 배열의 길이를 확인하는 함수

//올림 : Math.ceil()
//내림 : Math.floor()
//반올림 : Math.round()
//0~1 사이 무작위 난수 추출 : Math.random()