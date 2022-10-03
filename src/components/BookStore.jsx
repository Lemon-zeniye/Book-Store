import styled from "styled-components";
import { useContext, useState, useEffect  } from "react";
import { BooksContext} from "./BooksContext";
import { Splide, SplideSlide } from '@splidejs/react-splide';
import Book from "./Book";
import '@splidejs/react-splide/css';
const BookStore = () => {
    const [books, setBooks] = useContext(BooksContext);
    const [bests, setBests] = useState([]);
    const [newBooks, setNewBooks] = useState([]);
    useEffect(() => {
        const best = books.filter(book => book.info === "best");
        setBests(best);
        const newBook = books.filter(book => book.info === "new");
        setNewBooks(newBook);
    },[books])

let page = 4;
  function useWindowSize() {
  const isSSR = typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState({
    width: isSSR ? 1200 : window.innerWidth,
    height: isSSR ? 800 : window.innerHeight,
  });

  useEffect(() => {
    window.addEventListener("resize", setWindowSize({ width: window.innerWidth}));
    return () => {
      window.removeEventListener("resize", setWindowSize({ width: window.innerWidth}));
    };
  }, []);
  return windowSize;
}
const { width } = useWindowSize();
    if(width < 1200 && width > 800){
    page = 2;
    } else if(width < 800){
      page = 1
    }
    return(
      <Container>
        <InnerContainer>
            <h2>BestSeller Books</h2>
            <Splide options={{perPage:page,  pagination: false, drag: 'free', gap: '4rem' }} >
            {
              bests.map(best => (
                <SplideSlide key={best.id}>
                  <Book book={best} books={books} setBooks={setBooks}/>
                </SplideSlide>
              ))
            }
            </Splide>
        </InnerContainer>
        <InnerContainer>
            <h2>New relised Books</h2>
            <Splide options={{perPage:page,  pagination: false, drag: 'free', gap: '4rem' }} >
            {
              newBooks.map(newBook => (
                <SplideSlide key={newBook.id}>
                  <Book book={newBook} books={books} setBooks={setBooks}/>
                </SplideSlide>
              ))
            }
            </Splide>
        </InnerContainer>
      </Container>
    )};
const Container = styled.div`
    margin: 1rem 2rem;
    @media(max-width: 800px){
      margin: 2rem .5rem;
    }
`
const InnerContainer = styled.div`
    cursor: grab;
    h2{
      color: #222246;
    }
`
export default BookStore;