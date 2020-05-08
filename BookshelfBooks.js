import React, { Component } from 'react'
import Book from './Book'

export default class BookshelfBooks extends Component{
    render(){
        //const books = [{id:1,title:'Good Book',author:'Mr Ben',imageLinks:{smallThumbnail:'http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api'}}]
        const books = this.props.books
        return(
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {books.map((book) => (
                        <li key={book.id}><Book onChange={this.props.onChange} book={book}/></li>
                    ))}
                </ol>
            </div>
        )
    }}