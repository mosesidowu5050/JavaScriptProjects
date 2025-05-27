const wrapper = document.getElementById("wrapper")
console.log(wrapper)

const book = document.getElementById("book-list")
console.log(book)

const addBook = document.getElementById("book-list")
console.log(addBook)

const bookTitle = document.getElementsByClassName("title");
const isArray = Array.isArray(Array.from(bookTitle));
console.log(isArray)

let arr  = Array.from(bookTitle)
arr.forEach((element) => {
    console.log(element)
});

const liTag = document.getElementsByTagName("li")
console.log(liTag)

const booklist = document.querySelector("#book-list ul");
console.log(booklist);




booklist.addEventListener("click",(event)=>{
    console.log(event)
    // const deleteBtn = event.target.className
    // console.log(deleteBtn)

    if(event.target.textContent == "delete"){
        const li= event.target.parentElement
        booklist.removeChild(li)
    // console.log(liTag)
    }

})


const addBookForm = document.querySelector("#add-book");
addBookForm.addEventListener("submit",(event)=>{
    event.preventDefault()
    let value = document.querySelector("#add-book input").value.trim();
    if(value != ""){
        const{valueSpan, deleteSpan, liTag} = createElement();

        valueSpan.textContent = value;
        deleteSpan.textContent = "delete"

        liTag.appendChild(valueSpan);
        liTag.appendChild(deleteSpan)
        booklist.appendChild(liTag)

        valueSpan.classList.add("name")
        deleteSpan.classList.add("delete")
    }
});

const searchBook = document.querySelector("#search-books");
searchBook.addEventListener("submit", (event) => {
   event.preventDefault();
   let value = document.querySelector("#search-books input").value.trim();
   if (value != ""){

   }
});

// function addTextContent(){

// }

function createElement(){
    const liTag = document.createElement("li")
    const valueSpan = document.createElement("span")
    const deleteSpan = document.createElement("span")
    return {valueSpan, deleteSpan, liTag}
}