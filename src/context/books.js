import React, { useEffect, useState } from "react";
import { API, graphqlOperation } from "aws-amplify";
import { v4 as uuidv4 } from "uuid";

const BookContext = React.createContext();

function BookProvider({ children }) {
  const [books, setBooks] = useState([]);

  const fetchBooks = async () => {};

  useEffect(() => {
    fetchBooks();
  }, []);

  return <div></div>;
}

export default BookProvider;
