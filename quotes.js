const quotes = [
"Be the change you want to see in the world......... Anonymos ",
"Belive you can and you are half way there.........KHAY",
"Best way to predict your future is to create it.............KHAY",
"Bro do diligent crimes.............khay",
"We cannot solve problems with the kind of mentality we employed when we came up with them.................Albert Einstein",
"Learn as if you would live forever, live like you would die tomorrow..............Mahatma Gandhi",
"I never dreamt about succcess. I worked for it .........Estee Lauder",
"Success is getting what you want happiness is wanting what you get............W.P.Kinsella",
"Do not yesterday take up much of your today..........Will Rogers",
"Goal setting is the secret to a compelling future.........Tony Robbins",
"Either you run the day or the day rund you..........Jim Rohn",
"Setting goals is the first step in turning the invisible into visible...........Tony Robbins",
"People say nothing is impossible, but i do nothing everyday.......Winnie the Pooh",
"Education is the most powerful weapon you can use to change the world............Nelson Mandela",
"Talent wins games, but teamwork wins the tournament...........Micheal Jordan",
"opportunities do not  happen , you create them..........Chris Grosser",
"Its never too late to be what you might have been.........George Eliot",
"Nothin bad happens on a FRIDAY ....... MY NIGGAS (especially SLIME)"
];

const colors = [
    "#FEB2A8",
    "#F9D5E3",
    "#C7CEEA",
    "#FED7C4",
    "#B7D1A3",
    "#008B8B",
    "#B8860B",
    "#E9967A",
    "#FF8C00",
    "#FAEBD7",
    "#BDB76B",
    "#9932CC",
    "#556B2F",
    "#FF6337",
    "#FFFF00"
];

const quoteContaner = document.querySelectorAll('#conDiv');
const quoteText = document.querySelector('#quote');
const geeButton = document.querySelector('#butt')
const body = document.querySelector('body')

geeButton.addEventListener('click', () =>  {
    const randomQ = quotes[Math.floor(Math.random() * quotes.length)]
    const randomC = colors[Math.floor(Math.random() * colors.length)]

    quoteText.textContent = randomQ;
   body.style.backgroundColor = randomC;
    
});