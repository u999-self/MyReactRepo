import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    query:''
    ,showingBooks: []
    //showingBooks: this.state.query===''?this.state.books:this.state.showingBooks
  }
  
  componentDidMount = () => {
    BooksAPI.getAll().then(books => {
      this.setState({ books: books, showingBooks: books });
    });
  };
  
  update_shelf=(book,shelf)=>{
    //console.log(book.book,shelf);
    BooksAPI.update(book.book,shelf)
    .then(()=>BooksAPI.getAll()
    .then(books => {this.setState({ books: books });
        //console.log(BooksAPI.search('finance'));
        //console.log(this.state.showingBooks)
      })
    )
  }

  updateQuery = (query) => {
    this.setState(()=>({query:query.trim()}));
    //.then(()=>{BooksAPI.search(query)
    //  .then((showingBooks)=>{this.setState({showingBooks:showingBooks})})
    //})
    query===''?
    this.setState(()=>({showingBooks:this.state.books}))
    //:this.setState(()=>({showingBooks:BooksAPI.search(query)
    :BooksAPI.search(query).then((response)=>{this.setState((currentState)=>({showingBooks:response}))})
    ////:BooksAPI.search(query).then((response)=>{this.setState({showingBooks:response.map(name => {name.shelf='none'; return name})}); console.log(response.length>0?'yes':'no')})
    //  .map(name => {name.shelf='none'; return name})
    //}));
    //console.log(this.state.showingBooks[0])
}
    
  render() {
    const books = this.state
    const query = this.state.query
    const showingBooks = this.state.showingBooks
    //showingBooks.shelf = 'none'
    //const showingBooks = BooksAPI.search(query)
    //BooksAPI.getAll().then(books=>{console.log(books.books)});
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Bookshelf title='Currently Reading' onChange={this.update_shelf} refbooks={books.books} books={books.books.filter((book)=>(
                  book.shelf==='currentlyReading'))}/>
                <Bookshelf title='Want to Read' onChange={this.update_shelf} refbooks={books.books} books={books.books.filter((book)=>(
                  book.shelf==='wantToRead'))}/>
                <Bookshelf title='Read' onChange={this.update_shelf} refbooks={books.books} books={books.books.filter((book)=>(
                  book.shelf==='read'))}/>
              </div>
            </div>
            <div className="open-search">
              <Link to='/search'>
                {/*NOT WORKING RESET QUERY */}
                <button onClick={()=>{this.setState({query:''})}}>Add a book</button>
              </Link>
            </div>
          </div>
        )} />
        <Route path='/search' render={() => (
          <div className="search-books">
            <div className="search-books-bar">
              <Link to='/'>
                <button className="close-search">Close</button>
              </Link>
              <div className="search-books-input-wrapper">
                {}
                <input type="text" onChange={(event)=>{this.updateQuery(event.target.value)}} placeholder="Search by title or author"/>
              </div>
            </div>
            <div className="search-books-results">
              {/*<ol className="books-grid"></ol>*/}
              <Bookshelf onChange={this.update_shelf} books={showingBooks} refbooks={books.books}
              //{this.showingBooks}
              />
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
