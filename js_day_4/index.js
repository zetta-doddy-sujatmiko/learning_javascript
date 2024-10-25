class Book {
    constructor(title, publishYear, price, stock) {
        this.title = title || 'untitled'
        this.publishYear = publishYear || 0
        this.price = price || 0
        this.stock = stock || 0
    }
}


function purchaseBook(book, discountPercentage, taxPercentage, purchaseAmount) {
    if(!(book instanceof Book)) throw new Error("book should be instance of Book class")
    // if(purchaseAmount > book.stock) throw new Error("Book stock is not enough")

    const bookInformationString = "Book title/publish year: "+book.title+"/"+book.publishYear
    console.log(bookInformationString)

    // console.log("Book title:", book.title)
    // console.log("Book publish year:", book.publishYear)

    console.log("Raw price:", book.price)

    console.log("Discount percentage per book:", discountPercentage+"%")

    const discountAmount = book.price * (discountPercentage / 100)
    console.log("Discounted amount per book:", discountAmount)

    const discountedPrice = book.price - discountAmount
    console.log("Price after discount per book:", discountedPrice)

    console.log("Tax percentage per book:", taxPercentage+"%")

    const taxAmount = discountedPrice * (taxPercentage / 100)
    console.log("Taxed amount per book:", taxAmount)

    const taxedPrice = discountedPrice - taxAmount
    console.log("Price after tax per book:", taxedPrice)

    let totalPrice = 0
    
    for(let i = 0; i < purchaseAmount; i++) {
        book.stock--
        if(book.stock < 0) break
        totalPrice += taxedPrice
    }
    
    console.log("Books bought: "+totalPrice/taxedPrice)
    console.log("Total price:", totalPrice)
    console.log(book.stock < 1 ? book.title+" can't be purchased again" : book.title+" can be purchased again")
}

const Books = {
    'Sapiens': new Book("Sapiens", 2011, 100000, 100),
    'Homodeus': new Book("Homodeus", 2015, 120000, 20)
}

purchaseBook(Books['Sapiens'], 50, 11, 110)