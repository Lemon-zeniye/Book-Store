  import styled from "styled-components";
  import { useContext, useState, useEffect  } from "react";
  import { BooksContext} from "./BooksContext";
  import { Splide, SplideSlide } from '@splidejs/react-splide';
  import '@splidejs/react-splide/css';
  import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
  import BookTwo from "./BookTwo";
  const BookStore = ({search}) => {
      const [books, setBooks] = useContext(BooksContext);
      const [serachBooks, setSearchBook] = useState([]);
      useEffect(() => {
        setSearchBook(books.filter(b => b.title.includes(search)));
      },[search,books]);
      // const [bests, setBests] = useState([]);
      // const [newBooks, setNewBooks] = useState([]);
      // const [populars, setPopular] = useState([]);
      // useEffect(() => {
      //     const best = books.filter(book => book.info === "best");
      //     setBests(best);
      //     const newBook = books.filter(book => book.info === "new");
      //     setNewBooks(newBook);
      //     const popular = books.filter(book => book.info === "popular");
      //     setPopular(popular);
      // },[books]);
      let viewBooks = books;
      if(search !== ""){
         viewBooks = serachBooks;
      }
      return(
        <Container>
          <InnerContainer>
              <h2>BestSeller Books</h2>
              <Splide options={{type: 'loop',arrows:false,autoWidth:true,  pagination: false, drag: 'free', gap: '1rem',
                   autoScroll: {
                        speed: .5,
                    }, }} extensions={{AutoScroll}}>
                 {
                  viewBooks.map(best => (
                    <SplideSlide key={best.id}>
                      <BookTwo book={best} books={books} setBooks={setBooks}/>
                    </SplideSlide>
                  ))
                  }
              </Splide>
          </InnerContainer>
    
          {/* <InnerContainer>
              <h2>Popular</h2>
              <Splide options={{type: 'loop',drag: 'free',autoWidth: true, focus: 'center', gap: "1rem",        pagination:false, perPage: 3,
                        autoScroll: {
                          speed: .5,
                        },}} extensions={{AutoScroll}}  >
              {
                books.map(popular => (
                  <SplideSlide key={popular.id}>
                    <BookTwo book={popular} books={books} setBooks={setBooks}/>
                  </SplideSlide>
                ))
              }
              </Splide>
          </InnerContainer> */}
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