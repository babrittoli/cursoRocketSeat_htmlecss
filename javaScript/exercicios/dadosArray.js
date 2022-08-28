/*      Buscando e contando dados em Arrays

Baseado no Array de livros por categorias abaixo faça os seguintes
desafios:

* contar o numero de categorias e o numero de livros em cada categoria
* contar o numero de autores
* mostrar livros do augusto cury
* transformar a função em uma função que irá receber o nome do autor
e devolver os livros dele
*/

const booksByCategory = [
    {
        category: "romance",
        books: [ {
            title: "Travessuras de uma menina má",
            author: "Mario Vargas Llosas"
        },
        {
            title: "A insustentável leveza do ser",
            author: "Milan Kundera"
        },
        {
            title: "Fique Comigo",
            author: "Ayobami Adebayo"
        }
        ]

    } , 

    {
        category: "inteligencia emocional",
        books: [ {
            title: "Prisioneiros da Mente",
            author: "Augusto Cury"
        },
        {
            title: "Você é insubstituivel",
            author: "Augusto Cury"
        },
        {
            title: "Socorro, meu filho não tem limites",
            author: "Augusto Cury"
        }
        ]

    }
]

const  totalCategories = booksByCategory.length 
console.log(totalCategories);
for(let category of booksByCategory) {
    console.log('total de livros da categoria' , category.category)
    console.log(category.books.length)
}

function countAuthors () {
    let authors = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(authors.indexOf(book.author) == -1){
                authors.push(book.author)
            }
        }
    }
     console.log("Total de autores:" , authors.length )
}

countAuthors();

function booksOfAuthor(author) {
    let books = [];

    for(let category of booksByCategory) {
        for(let book of category.books) {
            if(book.author === author) { 
                books.push(book.title)
            }
        }
    }

    console.log(`Livros do autor ${author}: ${books.join(",")})`)
}


booksOfAuthor('Augusto Cury')



