import React, { Component } from 'react'

export default class Book extends Component{
    render(){
        let book = this.props.book
        let refbooks = this.props.refbooks
        //let altURL = 'https://image.flaticon.com/icons/svg/29/29302.svg'
        console.log(book)
        //console.log(`url(${book.imageLinks.smallThumbnail||altURL})`)
        let shelf=[]
        let value={}
        let refbook ={}
        
        {console.log('START')}
        {console.log(refbooks)}
        {console.log(book)}
        {console.log(refbooks.filter((refbook)=>(refbook.id===book.id)).length)}
        //const abc = refbooks.filter((refbook)=>(refbook.id===book.id))
        //{console.log(abc)}
        {console.log(refbooks.filter((refbook)=>(refbook.id===book.id)).length===1?refbooks.filter((refbook)=>(refbook.id===book.id))[0].shelf:'none')}
        {console.log(refbooks.filter((refbook)=>(refbook.id===book.id)).shelf)}
        {console.log(book.shelf==="none"?(refbooks.filter((refbook)=>(refbook.id===book.id)).length===1?refbooks.filter((refbook)=>(refbook.id===book.id))[0].shelf:'none'):book.shelf)}
        //{console.log((refbooks.filter((refbook)=>(refbook.id===book.id)))||[])}
                    

        return(
            <div className="book">
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={(event) => {this.props.onChange(book={book},shelf=event.target.value)}}
                        value={typeof book.shelf==="undefined"?(refbooks.filter((refbook)=>(refbook.id===book.id)).length===1?refbooks.filter((refbook)=>(refbook.id===book.id))[0].shelf:'none'):book.shelf}
                        //value={book.shelf||"none"}
                        
                        //console.log(event.target.value,{book}
                        >
                            <option value="move" disabled>Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none">None</option>
                        </select>
                    </div>
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">
                    {(book.authors||['No Author']).map((author)=>(
                        `${author}, `
                    ))}
                    </div>
            </div>

        )
    }
}