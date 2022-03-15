const quotes = [
{
    quote: "기적은 일어나는 것을 기다리는게 아니라, 일으키는 것",
    author: "unknown",
},
{
    quote: "하기 싫어도 일단은 하고 보자. 감정은 사라지고 결과는 남는다.",
    author: "unknown",
}
]

const quote = document.querySelector("#quotes span:first-child");
const author = document.querySelector("#quotes span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = ` - ${todaysQuote.author}`;