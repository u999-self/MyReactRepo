import React, { Component } from 'react'
import BookshelfBooks from './BookshelfBooks'

export default class Bookshelf extends Component{
    render(){
        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{this.props.title}</h2>
                <BookshelfBooks onChange={this.props.onChange} books={this.props.books} 
                refbooks={this.props.refbooks}/>
            </div>
        )
    }
}