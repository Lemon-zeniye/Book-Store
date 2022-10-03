import styled from "styled-components";
import { useContext, useState, useEffect } from "react";
import { BooksContext } from "./BooksContext";
import Book from "./Book";
const Popular = () => {
    const [books, setBooks] = useContext(BooksContext);
    const [populars, setPoppulars] = useState([]);
    useEffect(() => {
        const data = books.filter(book => book.info === "popular");
        setPoppulars(data);
    },[books]);
    return(
        <Container>
            <h1>Popular</h1>
            <hr/>
            <div>
                {
                    populars.map(book => (
                        <Book key={book.id} book={book} books={books} setBooks={setBooks} />
                    ))
                }
            </div>
        </Container>
    )
}
const Container = styled.div`
    margin: 2rem 6rem;
    @media(max-width:800px){
        margin: 2rem .5rem;
    }
    h1 {
        text-align: center;
        margin: 1rem 0;
    }
    hr{
        width: 4rem;
        border: 0;
        border-top: .15rem solid black;
        margin: .5rem    auto;
        text-align: center;
    }
    div{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
`
export default Popular;