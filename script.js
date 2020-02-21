



const quotes = [
    "Lift the day! - Me",
    "Excuses are the refuge of the defeated. - My Dad", 
    "Tough times don't last. Tough people do. - Eric Thomas", 
    "Setback is a setup for a comeback. - Willie Jolley",
    "New levels bring new devils. - Eric Thomas",
    "Win the day. - Me",
    "Green light the day. - Me"
]
 
function motivate () {
    let numberQuotes = quotes.length;
    let randomDecimal= Math.random();
    let randomNumberwithDecimal = randomDecimal * numberQuotes;
    let randomInteger = Math.floor(randomNumberwithDecimal);
    document.getElementById("displayText").innerHTML = quotes[randomInteger];
    console.log("button is working");
}

