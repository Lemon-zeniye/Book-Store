  import styled from "styled-components";
  import { useContext  } from "react";
  import { BooksContext} from "./BooksContext";
  import { Splide, SplideSlide } from '@splidejs/react-splide';
  import '@splidejs/react-splide/css';
  import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
  import BookTwo from "./BookTwo";
  const BookStore = ({search}) => {
      const [books, setBooks] = useContext(BooksContext);
   const bookss = [1,2,3,4,5];
      return(
        <Container>
          <InnerContainer>
              <h2>BestSeller Books</h2>
                  <Splide options={{type: 'loop',arrows:false, autoWidth:true,  pagination: false, drag: 'free', gap: '1rem', focus:"center",
                    autoScroll: {
                        speed: .3,
                    }, }} extensions={{AutoScroll}}> 
                  {
                      bookss.map(best => (
                      <SplideSlide key={best} >
                          <BookTwo book={best} books={books} setBooks={setBooks}/>
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

  //  <Splide options={{type: 'loop',arrows:false, autoWidth:true,  pagination: false, drag: 'free', gap: '1rem', focus:"center",
  //           autoScroll: {
  //               speed: .3,
  //           }, }} extensions={{AutoScroll}}> 
  // </Splide>
  