/* Variables and Functions 
****************************************************** */
const conlog = paramMsg => console.log(paramMsg)

const renderHTML = (paramWhere, paramValue) => document.querySelector(paramWhere).innerHTML = paramValue


const renderHTMLPlus = (paramWhere, paramValue) => document.querySelector(paramWhere).innerHTML += paramValue


const renderPortfolioList =  (paramWhere, paramData) => {
    for (let i=0; i< paramData.length; i++) {
        const renderEach = `
        <div class="col-10 col-md-3">
            <p>${paramData[i].name}</p>
            <img src="${paramData[i].image}" class="img-fluid">
            <p>${paramData[i].excerpt}</p>
        </div>
        `
        renderHTMLPlus(paramWhere,renderEach)    
    }
}



/* Config
****************************************************** */
const configObject = {
    author: "Natalia",
    siteName: "Test2 Portfolio",
    biography: "lorem loream  loream loream loream loream loream",
}

const {author, siteName, biography} = configObject

const portfolioData = [
    /*0* =>*/ {
        name: "port 1",
        image: "https://picsum.photos/300/300?random=1",
        excerpt: "blah blah blah blah blah",
    },

    /*1* =>*/ {
        name: "port 2",
        image: "https://picsum.photos/300/300?random=2",
        excerpt: "blah blah blah blah blah 22",
    },
    
] 


/* Action
****************************************************** */
renderHTML('h1', siteName)
renderHTML('.author', author)
renderHTML('#biography', biography)
renderPortfolioList('.portfolio-list', portfolioData)

