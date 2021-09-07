const url = 'http://numbersapi.com/10/trivia?json';
let infoArray = [];

// Take in data, push it to an array, and return a
// call to the original url for new data

const pushToArray = (data,url) => {
    infoArray.push(data.text);
    return axios.get(url);
}

// Loops through the infoArray after all calls
// to the url are made, then adds the items in the
// array as new paragraphs to the DOM.

const putInfoInDom = () => {
    const root = document.querySelector('#root');
    infoArray.map(a => {
        let paragraph = document.createElement('p');
        paragraph.innerText = a
        root.append(paragraph);
    })
}

// Initial call used to get data

async function getData(){
    let result = await axios.get(url);
    return result;
};

// A wrapper to neatly put all of the above pieces together.

const wrapper = () => {
    getData()
    .then(data => pushToArray(data.data, url))
    .then(data => pushToArray(data.data, url))
    .then(data => pushToArray(data.data, url))
    .then(data => pushToArray(data.data, url))
    .then(() => putInfoInDom())
    .catch(e => console.log(e));
}

document.addEventListener('DOMContentLoaded', wrapper);