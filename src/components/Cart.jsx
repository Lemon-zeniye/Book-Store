import Styled from "styled-components";

const Cart = ({cartBook ,books, setBooks}) => {
const updateCart = books.map(book => book.id === cartBook.id ? {...book, onCart: false}:book);
const addNumOfBook = books.map(book => book.id === cartBook.id ? {...book, numOfBook: book.numOfBook + 1}: book); 
const minusNumOfBook = books.map(book => book.id === cartBook.id ? {...book, numOfBook: book.numOfBook - 1}: book);
    return(
    <>
        <Container key={cartBook.id}>
            <ImgCon>
                <img src={cartBook.img} alt="this is" />
            </ImgCon>
            <TitleCon>
                <h4>{cartBook.title}</h4>
                <small>{cartBook.author}</small>
            </TitleCon>
            <h4>{cartBook.price  * cartBook.numOfBook} $</h4>
            <NumberOfBook>
                {
                    cartBook.numOfBook > 1 ? <i onClick={() => setBooks(minusNumOfBook)} className="fa-sharp fa-solid fa-minus"></i> : <></>
                }
                
                <h5>{cartBook.numOfBook}</h5>
                <i onClick={() => setBooks(addNumOfBook)}  className="fa-sharp fa-solid fa-plus"></i>
            </NumberOfBook>
            <i onClick={() => setBooks(updateCart)} className="fa-sharp fa-solid fa-xmark"></i>
        </Container>
    </>
    )
}
const Container = Styled.div`
    margin: 2rem 7rem;
    display: flex;
    justify-content: space-between;
    box-shadow: .5px .5px 4px lightgray;
    align-items: center;
    border-radius: .5rem;
    @media(max-width: 800px){
        margin: .5rem;
        font-size: .9rem;
    }
    .fa-xmark{
     font-size: 1.2rem;
     color: red;
     padding-right:1rem;
     cursor: pointer;
    }
`
const ImgCon = Styled.div`
    width: 5rem;
    height: 7rem;
    @media(max-width: 800px){
        width: 4rem;
        height: 5rem;
    }
    img{
        width: 100%;
        height: 100%;
        border-radius: .5rem 0 0 .5rem;
    }
`
const TitleCon = Styled.div`
    h4{
        font-weight: bold;
    }
    @media(max-width: 800px){
        font-weight: lighter;
        margin-left: .2rem;
    }
`
const NumberOfBook = Styled.div`
    display: flex;
    align-items: center;
    i{
      margin: 0 .6rem;
      cursor: pointer;
    }
    h5{
        font-size: 1.5rem;
        @media(max-width: 800px){
            font-size: 1rem;
        }
    }
`
export default Cart;