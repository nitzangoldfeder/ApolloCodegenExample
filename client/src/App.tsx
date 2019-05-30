import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloClient, { ApolloQueryResult } from "apollo-boost";
import { booksQuery } from './queries/queries';
import { books } from './types/graphql';

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql"
});


const App: React.FC = () => {
  const [listOfBooks, setBooks] = useState<books>();

  useEffect(() => {
    client.query({query: booksQuery})
      .then((result: ApolloQueryResult<books>) => {
        setBooks(result.data);
      });
  },[listOfBooks]);

  function renderBooks(){
    const books = listOfBooks && listOfBooks.books;
    if (!books) {
      return (<p>Waiting for new books</p>)
    }
    return books.map(book => <p>{book!.title} by <strong>{book!.author}</strong></p>) 
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        { renderBooks() }
      </header>
    </div>
  );
}

export default App;
