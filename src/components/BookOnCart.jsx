import {useState, useContext, useEffect} from "react";
import { BooksContext } from "./BooksContext";
import styled from "styled-components";
import Cart from "./Cart";

const BookOnCart = () => {
    const [books, setBooks] = useContext(BooksContext);
    const [cartBooks, setCartBooks] = useState([]);
    useEffect(() => {
        const onCart = books.filter(b => b.onCart === true);
        setCartBooks(onCart);
    },[books]);
return(
    <>
    {
        cartBooks.length === 0 ?  <Message>The cart is empty!</Message> :
        <Container>
            {
                cartBooks.map(cartBook => (
                    <Cart key={cartBook.id} cartBook={cartBook} books={books} setBooks={setBooks} />
                ))
            }
        </Container>
    }
    </>
)
}
const Container = styled.div`
    margin: 1rem;
    @media(max-width: 800px){
        margin: 0;
    }
`
const Message = styled.div`
    margin-top: 4rem;
    text-align: center;
`

export default BookOnCart;