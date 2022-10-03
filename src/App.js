import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import styled from "styled-components";
import Login from "./components/Login";
import Register from "./components/Register";
import BookDetail from "./components/BookDetail";
import {BrowserRouter , Route, Routes } from "react-router-dom";
import { BooksProvider } from "./components/BooksContext";
import Favorite from "./components/Favorite";
import BookStore from "./components/BookStore";
import BookOnCart from "./components/BookOnCart";


const App = () => {
  return( 
  <Main>
    <BooksProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route path="login" element={<Login /> }/>
            <Route exact path="register" element={<Register />} />
            <Route exact path="books/:BookId" element={<BookDetail />} />
            <Route exact path="favorite" element={<Favorite />} />
            <Route exact path="bookStore" element={<BookStore />} />
            <Route exact path="cart" element={<BookOnCart />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </BooksProvider>
</Main>
  )
}
const Main = styled.div`
`
export default App;