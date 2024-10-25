class Book {
    constructor(title, publishYear, price) {
        this.title = title || 'untitled'
        this.publishYear = publishYear || 0
        this.price = price || 0
    }
}


function purchaseBook(book, discountPercentage, taxPercentage) {
    if(!(book instanceof Book)) throw new Error("book should be instance of Book class")

    const bookInformationString = "Book title/publish year: "+book.title+"/"+book.publishYear
    console.log(bookInformationString)

    // console.log("Book title:", book.title)
    // console.log("Book publish year:", book.publishYear)

    console.log("Raw price:", book.price)

    console.log("Discount percentage:", discountPercentage+"%")

    const discountAmount = book.price * (discountPercentage / 100)
    console.log("Discounted amount:", discountAmount)

    const discountedPrice = book.price - discountAmount
    console.log("Price after discount:", discountedPrice)

    console.log("Tax percentage:", taxPercentage+"%")

    const taxAmount = discountedPrice * (taxPercentage / 100)
    console.log("Taxed amount:", taxAmount)

    const taxedPrice = discountedPrice - taxAmount
    console.log("Price after tax:", taxedPrice)
}

purchaseBook(new Book("Sapiens", 2011, 100000), 50, 11)