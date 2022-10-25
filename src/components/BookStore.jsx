  import styled from "styled-components";
  import { useContext  } from "react";
  import { BooksContext} from "./BooksContext";
  // import { Splide, SplideSlide } from '@splidejs/react-splide';
  // import '@splidejs/react-splide/css';
  // import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
  import BookTwo from "./BookTwo";
  import img3 from "../images/cover3.jpg"
  import img5 from "../images/cover5.jpg"
  import img6 from "../images/cover6.jpg"
  import img7 from "../images/cover7.jpg"
  import img8 from "../images/cover8.png"
  const BookStore = ({search}) => {
      const [books, setBooks] = useContext(BooksContext);
   const bookss = [img3,img5,img6,img7,img8];
      return(
        <Container>
          <InnerContainer>
              <h2>BestSeller Books</h2>
              <div className="div">
                  {/* <Splide options={{type: 'loop',arrows:false, autoWidth:true,  pagination: false, drag: 'free', gap: '1rem', focus:"center",
                    autoScroll: {
                        speed: .3,
                    }, }} extensions={{AutoScroll}}>  */}
                  {
                      bookss.map(best => (
                      // <SplideSlide key={best.id} >
                        <div key={best} className="inner">
                          <BookTwo key={best} book={best} books={books} setBooks={setBooks}/>
                        </div>
                      // </SplideSlide>
                      ))
                  }
                </div>
                {/* </Splide> */}
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
      div.div{
        display: flex;
        padding-bottom: 5rem;
      }
      .inner{
        margin: 0 1rem;
      }
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
  