const newQuoteButton = document.querySelector('.new-quote');
const quoteTag = document.querySelector('blockquote');
const endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

const displayQuote = (message) => {
  quoteTag.innerHTML = message
}

const getQuote = () => {
  fetch(endpoint)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayQuote(data.message)
      // console.log(data);
    })
    .catch(function () {
      console.log("An error occurred");
    });
}
newQuoteButton.addEventListener('click', getQuote);


getQuote()