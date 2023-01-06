const quotes = [
    {
        quote: "In the end, it’s not the years in your life that count. It’s the life in your years",
        author: "Abraham Lincoln"
    },
    {
        quote: "Life is either a great adventure or nothing.",
        author: "Helen Keller"
    },
    {
        quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author: "Kamal Ravikant"
    },
    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },
    {
        quote: "It is better to fail in originality than to succeed in imitation.",
        author: "Herman Melville"
    },
    {
        quote: "Opportunities don’t happen. You create them.",
        author: "Chris Grosser"
    },
    {
        quote: "Successful people do what unsuccessful people are not willing to do. Don’t wish it were easier; wish you were better",
        author: "Jim Rohn"
    },
    {
        quote: "If you are not willing to risk the usual, you will have to settle for the ordinary.",
        author: "Jim Rohn"
    },
    {
        quote: "The ones who are crazy enough to think they can change the world, are the ones that do.",
        author: "Anonymous"
    },
    {
        quote: "All progress takes place outside the comfort zone.",
        author: "Michael John Bob"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = (quotes[Math.floor(Math.random() * quotes.length)]);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;