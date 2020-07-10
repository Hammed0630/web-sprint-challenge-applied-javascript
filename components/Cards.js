// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


function articleCard(object){
    const card = document.createElement('div')
    const headliner = document.createElement('div')
    const author = document.createElement('div')
    const imgCont = document.createElement('div')
    const firstImg = document.createElement('img')
    const authorName = document.createElement('span')

    card.classList.add('card')
    headliner.classList.add('headline')
    author.classList.add('author')
    imgCont.classList.add('img-container')
    firstImg.src = object.authorPhoto
    card.append(headliner)
    card.append(author)
    author.append(imgCont)
    author.append(authorName)
    imgCont.append(firstImg)

    headliner.textContent =object.headline;
    authorName.textContent = object.authorName;


    


    card.addEventListener("click", () => {
        card.classList.toggle(console.log(object.headline));
      });

      return card
}


axios
  .get("https://lambda-times-backend.herokuapp.com/articles")
  .then((response) => {
    console.log(response);
    const divMainContainer = document.querySelector(".cards-container");
    const entries = Object.values(response.data.articles);
    // looping each array 
    console.log(entries)
    entries.forEach((element) => {
      element.forEach((card) => {
        divMainContainer.appendChild(articleCard(card));
        console.log("Card Created");
        
      });
    });
  })