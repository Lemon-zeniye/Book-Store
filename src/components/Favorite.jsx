import styled from "styled-components";
import { useContext, useEffect, useState } from "react";
import { BooksContext } from "./BooksContext";
import Book from "./Book";
const Favorite = () => {
const [books, setBooks] = useContext(BooksContext);
const [FavBooks, setFavBooks] = useState([]);
useEffect(() => {
    const data = books.filter(book => book.favorite === true);
    setFavBooks(data);
},[books]);     

    return(
    <>
        {
           FavBooks.length === 0 ? <Message>Select Your Favorite Books to see it here!</Message> :
            <Container>
                {
                    FavBooks.map(FavBook => (
                        <Book book={FavBook} books={books} setBooks={setBooks} />
                    ))
                }
            </Container>
        }
    </>
    )
}
const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 1rem 4rem;
    @media(max-width: 800px){
        margin: .5rem;
    }
`
const Message = styled.div`
    text-align: center;
    margin-top: 4rem;
    
`
export default Favorite;