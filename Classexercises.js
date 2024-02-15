class Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
            this.title = title;
            this.author = author;
            this.copyright = copyright;
            this.isbn = isbn;
            this.pages = pages;
            this.timesCheckedOut = timesCheckedOut;
            this.discarded = discarded;
    }
    checkout(uses=1) {
    this.timesCheckedOut += uses;
    }
    }
class Manual extends Book {
    constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
    super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
    }
    dispose(currentYear){ 
    if (currentYear-this.copyright > 5) {
    this.discarded = 'Yes'; 
                   }
                        }

                           }

class Novel extends Book {
        constructor(title, author, copyright, isbn, pages, timesCheckedOut, discarded){
        super(title, author, copyright, isbn, pages, timesCheckedOut, discarded);
        }
        dispose(){
        if (this.timesCheckedOut > 100) 
        this.discarded = 'Yes';    
                  }
                         }


    const NewNovel = { 
        title: "Pride and Prejudice",
        author: "Jane Austen",
        Copyright: 1813,
        ISBN: 1111111111111,
        pages: 432,
        timesCheckedOut: 32,
        discarded: "No"  }

    const NewManual = { 
        title: "Top Secret Shuttle Building Manual",
        author: "Redacted",
        copyright: 2013,
        ISBN: "0000000000000",
        pages: 1147,
        timesCheckedOut: 1,
        discarded: "No"   }

     NewManual.dispose(2024);   

     NewNovel.checkout(5);
     NewNovel.dispose();

    


                          