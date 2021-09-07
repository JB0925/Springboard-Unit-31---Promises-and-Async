let cardArray = [];


// Create a string of the card's suit and value and
// push it to the cardArray. Return a new call to the 
// cards API.
const formatData = data => {
    const deckId = data.deck_id;
    let card = data.cards[0];
    const cardString = `${card.value} of ${card.suit}`;
    cardArray.push(cardString);
    return axios.get(`http://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`);
}


// Initial call to get data
async function getData() {
    const url = 'http://deckofcardsapi.com/api/deck/new/draw/?count=1';
    let res = await axios.get(url);
    return res;
};


// A wrapper for the above functions, and then, finally printing out
// the contents of the cardArray, as asked to do in the assignment.
const makePromises = () => {
    getData()
    .then(data => formatData(data.data))
    .then(data => formatData(data.data))
    .then(() => cardArray.forEach(c => console.log(c)))
    .catch(e => console.log(e));
};


document.addEventListener('DOMContentLoaded', makePromises);