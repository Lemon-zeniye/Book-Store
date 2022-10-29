import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import {BrowserRouter , Route, Routes } from "react-router-dom";
import AddBook from "./comp/AddBook";
// import { useState } from "react";
// import Login from "./components/Login";
// import Register from "./components/Register";
// import BookDetail from "./components/BookDetail";
// import Favorite from "./components/Favorite";
// import BookStore from "./components/BookStore";
// import BookOnCart from "./components/BookOnCart";

const App = () => {
// const [search, setSearch] = useState("");
  return( 
  <Main>
      <BrowserRouter>
      <Navbar />
        <BigContainer>
          <Routes>
              {/* <Route exact path="/" element={<HomePage />} />
              <Route path="login" element={<Login /> }/>
              <Route exact path="register" element={<Register />} /> 
              <Route exact path="books/:BookId" element={<BookDetail />} />
              <Route exact path="favorite" element={<Favorite />} />
              <Route exact path="bookStore" element={<BookStore search={search} />} />
              <Route exact path="cart" element={<BookOnCart  />} />
              <Route exact path="addBook" element={<AddBook />} />
              <Route exact path="update/:id" element={<AddBook />} /> */}
              <Route exact path="/" element={<HomePage />} />
              <Route exact path="/addBook" element={<AddBook/>} />
          </Routes>
        </BigContainer>
      </BrowserRouter>
</Main>
  )
}
const Main = styled.div`
  width:100%;
`
const BigContainer = styled.div`
  width:100%;
`
export default App;


/////////////////////////////////////////////////////////

// import { useEffect, useState } from "react";
// import AddBook from "./comp/AddBook";
// import { db } from "./fireBaseConfig";
// import { collection, getDocs } from "firebase/firestore";
// import ListOfBook from "./comp/ListOfBook";

// const App = () => {
// const [books, setBooks] = useState([]);
// const booksCollectonRef = collection(db, "Books");
// useEffect(() => {
//     const getBooks = async () => {
//         const data = await getDocs(booksCollectonRef);
//         setBooks(data.docs.map(doc => ({...doc.data(), id: doc.id})));
//     }
//     getBooks();
// },[]);

//     console.log(books.length);
//   return(
//     <>
//       <AddBook />
//       <ListOfBook books={books} />
//     </>
//   )
// }

// export default App;