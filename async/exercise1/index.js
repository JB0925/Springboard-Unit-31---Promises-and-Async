async function getData() {
    const url = 'http://numbersapi.com/2,4,6,8,10/trivia?json';
    let result = await axios.get(url);
    return result.data
}

const placeFactsInDOM = data => {
    const keys = [2,4,6,8,10];
    const root = document.querySelector('#root');
    keys.forEach(key => {
        const newParagraph = document.createElement('p');
        newParagraph.innerText = data[key]
        root.append(newParagraph)
    })
}

getData()
.then(data => placeFactsInDOM(data));