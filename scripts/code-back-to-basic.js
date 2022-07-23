//  Varaible, Functions
/* *************************************************** */
const conlog = 
    paramWhat => console.log("clog: ",paramWhat)

const renderHTML = 
    (paramWhere, paramWhat) => document.querySelector(paramWhere).innerHTML = paramWhat

const renderHTMLPlus = 
    (paramWhere, paramWhat) => document.querySelector(paramWhere).innerHTML += paramWhat

const devNote = 
    () => document.querySelector('.dev-note').style.display = 'none';
    
const renderFooter = 
    () => renderHTML('footer small', `&copy; ${new Date().getFullYear()} <strong>${siteName}</strong> by ${author}`)

const mathRandom = 
    paramInt => Math.floor(Math.random() * paramInt)

const changeStyleSingle = (paramWhat, paramAttribute, paramValue ) => {
    document.querySelector(paramWhat).style[paramAttribute] = paramValue
}

const loopData = (paramData) => {
    for (const eachItem in paramData) {
        renderHTMLPlus('.portfolio-list', 
        `<div class='col-10 col-lg-3 p-3 m-3 border bg-white rounded'>
            <img src="${paramData[eachItem].image}${mathRandom(100)}" class="img-fluid rounded">
            <h2>${paramData[eachItem].title}</h2>
            <p>${paramData[eachItem].excerpt}</p>        
        </div>`    
        )
    }
}


//  Config
/* *************************************************** */
const config = {
    author: "Snake Eyes",
    siteName: "Random Portfolio",
    description: "Next day, Thursday, April 30, I found him at home by himself. JOHNSON. 'Well, Sir, Ramsay gave us a splendid dinner. I love Ramsay. You will not find a man in whose conversation there is more instruction, more information, and more elegance, than in Ramsay's.' BOSWELL. ",
    mainGraphic: "./images/image1.jpg",

    buttonText: "click me",

    body: "#cccccc",
} 

const {description, fontColor, body, author, siteName, mainGraphic, buttonText, portfolioHeader} = config

const portfolioData = [
    {
        id: "item1",
        title: "item 1",
        url: "page1.html",
        image: "https://picsum.photos/500/300?random=",
        excerpt: `1 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,        
    },

    {
        id: "item2",
        title: "item 2",
        url: "page2.html",
        image: "https://picsum.photos/500/300?random=",
        excerpt: `2 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,        
    },

    {
        id: "item3",
        title: "item 3",
        url: "page3.html",
        image: "https://picsum.photos/500/300?random=",
        excerpt: `3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,        
    },    

    {
        id: "item4",
        title: "item 4",
        url: "page3.html",
        image: "https://picsum.photos/500/300?random=",
        excerpt: `3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,        
    },    
    
    {
        id: "item5",
        title: "item 5",
        url: "page3.html",
        image: "https://picsum.photos/500/300?random=",
        excerpt: `3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,        
    },    

    {
        id: "item6",
        title: "item 6",
        url: "page3.html",
        image: "https://picsum.photos/500/300?random=",
        excerpt: `3 Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. `,        
    },
]





//  Action
/* *************************************************** */
devNote()
try {renderPortfolio(portfolioData)}            catch(err) { conlog(err)}
try {renderHTML('h1',siteName)}                 catch(err) { conlog(err)}
try {renderHTML('.description', description)}   catch(err) { conlog(err)}
try {loopData(portfolioData) }                  catch(err) { conlog(err)}

changeStyleSingle('body','background-color', body)

renderFooter()