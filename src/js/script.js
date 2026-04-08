let featuredCards =  document.getElementById("featured-cards-body");
let featuredArrows = document.getElementsByClassName('featured-cards-arrows')
let featuredArrowsWidth = parseFloat(window.getComputedStyle(featuredCards).width)

// for (let i = 0; i < 10; i++)
// {
//     createFeaturedCard(
//         'ceumacard.jpg', 
//         'Universidade Ceuma (ou Uniceuma) é uma tradicional instituição de ensino superior particular com sede em São Luís, Maranhão, fundada em 1990', 
//         'ceumaofficial', 
//         'ceumaofficial.png',
//         '5.0')

// }

// featuredArrows[0].addEventListener('onclick')
// console.log(parseFloat(window.getComputedStyle(featuredCards).width))
for (let arrow of featuredArrows){
    arrow.addEventListener('click', ()=>{
        if (arrow.id.includes('left-arrow') || arrow.id.includes('right-arrow'))
        {

        }
    });
}

function addFeaturedCard(cardImgSrc, cardTitleName, profileName, profileIconSrc, star){

}

function createFeaturedCard(cardImgSrc, cardTitleName, profileName, profileIconSrc, star){
    // Div principal para o card
    // let card = document.createElement('div') 
    // card.style="max-width: 16rem;  height: 20rem;"
    // card.classList.add('card') // Adiciona o card do estilo do bootstrap
    // card.classList.add('flex-shrink-0') // Card nao se 'espreme' ao outros


    // // Imagem no topo
    // let imgCard = document.createElement('img')
    // imgCard.src = './images/cards/' + cardImgSrc
    // imgCard.classList.add('card-img-top') // Bota imagem no topo do card
    // imgCard.classList.add('card-img')

    // // Os textos do card
    // let cardBody = document.createElement('div') // Card do texto
    // cardBody.classList.add("card-body") 
    // cardBody.classList.add("d-flex")    
    // cardBody.classList.add("flex-column")    

    // // Titulo do card
    // let cardTitle = document.createElement('h5') // Titulo do card
    // cardTitle.classList.add('card-title') // Adiciona a propriedade de card title do bootstrap
    // cardTitle.classList.add('line-clamp-card') // Adiciona o limite de linhas para nao ultrapassar
    // cardTitle.textContent = cardTitleName
    
    // // Informacoes do card (Perfil e Estrelas)
    // let infoCard = document.createElement('div')
    // infoCard.classList.add('mt-auto')
    // infoCard.classList.add('text-end')
    // infoCard.classList.add('info-cards')
    
    // let infoProfileCard = document.createElement('div')
    // infoProfileCard.classList.add('info-profile-cards')
    
    // let infoProfileIconCard = document.createElement('img')
    // infoProfileIconCard.classList.add('info-profile-icon-cards')
    // infoProfileIconCard.src = './images/profile/' + profileIconSrc

    // let infoProfileNameCard = document.createElement('p')
    // infoProfileNameCard.textContent = profileName
    // infoProfileNameCard.classList.add('card-text')

    // let infoStarCard = document.createElement('div')
    // infoStarCard.classList.add('info-stars-cards')

    // let infoStarIconCard = document.createElement('i')
    // infoStarIconCard.classList.add('bi')
    // infoStarIconCard.classList.add('bi-star-fill')


    // let infoStarNoteCard = document.createElement('p')
    // infoStarNoteCard.textContent = star
    // infoStarNoteCard.classList.add('card-text')
    
    // infoProfileCard.appendChild(infoProfileIconCard)
    // infoProfileCard.appendChild(infoProfileNameCard)

    // infoStarCard.appendChild(infoStarNoteCard)
    // infoStarCard.appendChild(infoStarIconCard)

    // infoCard.appendChild(infoProfileCard)
    // infoCard.appendChild(infoStarCard)

    // cardBody.appendChild(cardTitle)
    // cardBody.appendChild(infoCard)
    
    // card.appendChild(imgCard)
    // card.appendChild(cardBody);

    // featuredCards.appendChild(card);
}
