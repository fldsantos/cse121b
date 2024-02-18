const quote_text = document.getElementById("quote-text");
const quote_author = document.getElementById("quote-author");
const quote_pic = document.getElementById("quote-pic")
const quote_button = document.getElementById("switch-quote")
const quote_data = [];
const pic_data = [];
let quote_formatted_data = [];

let queue = 0;

const populateData = async (requests) => {
    for(let i = 0; i < requests; i++) {
        const quote_response = await fetch('https://api.quotable.io/random');
        if (quote_response.ok) {
            quote_data.push(await quote_response.json());
            pic_data.push(getImage(quote_data[i].author))
            quote_formatted_data.push({
                "text" : quote_data[i].content,
                "author" : quote_data[i].author,
                "pic" : pic_data[i]
            })
        }
    }
    setData()
}

const getImage = async (keyword) => {
    let data;
    const response = await fetch(`https://customsearch.googleapis.com/customsearch/v1?cx=6430bb28783814e3d&q=${keyword}&searchType=image&key=AIzaSyBFYGceUq3l2D_T8s1zTk1W7sbWTA9l1Fk`);
    try{
        data = await response.json();
        console.log(data)
        quote_pic.setAttribute("src", data.items[0].link)
    } catch(error) {
        return "default_char.jpg"
    }
        
}

const setData = () => {
    quote_author.textContent = quote_formatted_data[queue].author;
    quote_text.textContent = quote_formatted_data[queue].text;
    //quote_pic.setAttribute("src", quote_formatted_data[queue].pic)
}

const getNewQuote = () => {
    location.reload();
}

quote_button.addEventListener("click", getNewQuote);

//getQuote();
populateData(1);
console.log(quote_formatted_data)
console.log(quote_formatted_data[0])