const SCROLL_SPEED = 218;

let featuredCards =  document.getElementById("featured-cards-body");

let leftArrow = document.getElementById('featured-cards-left-arrow')
let rightArrow = document.getElementById('featured-cards-right-arrow')

for (let i = 0; i < 10; i++)
{
addFeaturedCard(
    'ceumacard.jpg', 
    'Universidade Ceuma (ou Uniceuma) é uma tradicional instituição de ensino superior particular com sede em São Luís, Maranhão, fundada em 1990', 
    'ceumaofficial', 
    'ceumaofficial.png',
    '5.0')

}

leftArrow.addEventListener('click', function(){
    featuredCards.scrollBy({left: -SCROLL_SPEED, behavior: 'smooth'})
})

rightArrow.addEventListener('click', function(){
    featuredCards.scrollBy({left: SCROLL_SPEED, behavior: 'smooth'})
})




function addFeaturedCard(cardImgSrc, cardTitleName, profileName, profileIconSrc, star){
    // Div para criar o card
    let card = document.createElement('button')
    card.classList = 'card flex-shrink-0 bnt bnt-featured-card card-style-aureon'

    // Imagem Thumbnail do card
    let cardThumb = document.createElement('img')
    cardThumb.src = `./../../assets/images/cards/${cardImgSrc}`
    cardThumb.classList = 'bnt-featured-card-thumb card-img-top mt-2 rounded'
    
    // Body do meu card
    let cardBody = document.createElement('div')
    cardBody.classList = "card-body text-white d-flex px-2 py-0 flex-column justify-content-between"

    let cardTitle = document.createElement('p')
    cardTitle.classList = "card-title fs-6 line-clamp-card text-start"
    cardTitle.textContent = cardTitleName

    // #region Card Info
    let cardInfo = document.createElement('div')
    cardInfo.classList = "bnt-featured-card-info pb-2 d-flex justify-content-between"
    
    // #region Profile Card Info
    let cardProfile = document.createElement('a')
    cardProfile.classList = "d-flex gap-1 align-items-center justify-content-center text-decoration-none"

    let cardProfileIcon = document.createElement('img')
    cardProfileIcon.classList = 'my-0 py-0 rounded-pill img-fluid featured-card-prof-icon'
    cardProfileIcon.src = `./../../assets/images/profile/${profileIconSrc}`

    let cardNickname = document.createElement('p')
    cardNickname.textContent = profileName
    cardNickname.classList = 'text-white py-0 my-0'

    cardProfile.appendChild(cardProfileIcon)
    cardProfile.appendChild(cardNickname)
    // #endregion

    // #region Star Card Info
    let cardStar = document.createElement('p')
    cardStar.classList = 'py-0 my-0'
    cardStar.innerHTML = `${star} <span class="bi bi-star-fill"></span>`
    // #endregion

    cardInfo.appendChild(cardProfile)
    cardInfo.appendChild(cardStar)
    // #endregion

    cardBody.appendChild(cardTitle)
    cardBody.appendChild(cardInfo)    

    card.appendChild(cardThumb)
    card.appendChild(cardBody)

    featuredCards.appendChild(card);
}