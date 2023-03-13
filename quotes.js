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
"Nothin bad happens on a FRIDAY ....... MY NIGGAS (especially SLIME)",
"The greatest glory in living lies not in never falling, but in rising every time we fall.........-Nelson Mandela",
"The way to get started is to quit talking and begin doing........... -Walt Disney",
"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma , which is living with the results of other people's thinking. .........-Steve Jobs",
"If life were predictable it would cease to be life, and be without flavor........... -Eleanor Roosevelt",
"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.........-Oprah Winfrey",
"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success...........-James Cameron",
"Life is what happens when you're busy making other plans.............-John Lennon",

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
const button = document.querySelector('button')

geeButton.addEventListener('click', () =>  {
    const randomQ = quotes[Math.floor(Math.random() * quotes.length)]
    const randomC = colors[Math.floor(Math.random() * colors.length)]

    quoteText.textContent = randomQ;
   body.style.backgroundColor = randomC;
   button.style.backgroundColor = randomC;
 
});