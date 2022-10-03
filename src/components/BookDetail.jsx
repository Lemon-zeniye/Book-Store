import styled from "styled-components";
import { useContext } from "react";
import { BooksContext } from "./BooksContext";
import { useParams } from "react-router-dom";
const BookDetail = () => {
    const {BookId} = useParams();
    //AIzaSyBegwL2CBBVChTQn0t9sk-cOhSd7MIc-Sc
    const [books, setBooks] = useContext(BooksContext);
    const updateFavorite = books.map(b => books[BookId].id === b.id  ? {...b, favorite: !b.favorite}: b);

    return(
        <Container>
            <ImageContainer>
                <img src={books[BookId].img} alt=" " />
            </ImageContainer>
            <Decription>
                <h2>Big Magic: Creative Living Beyond Fear</h2>
                <p className="author" >Jullian Barns</p>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-regular fa-star-half-stroke"></i>
                </div>
                <h4>55 $</h4>
                <div>
                    <button>Add To Cart</button>
                    {
                                books[BookId].favorite === false ? 
                                <i onClick={() => setBooks(updateFavorite)}  className="fa-regular fa-heart"></i> :
                                 <i onClick={() => setBooks(updateFavorite)}  className="fa-solid fa-heart"></i>
                            }
                    
                </div>
                <p className="description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat culpa, accusamus soluta odit quod aliquam incidunt perspiciatis dolorum? Maxime autem numquam quaerat quisquam aspernatur! A doloremque doloribus unde vitae error aspernatur, porro exercitationem accusantium facere reiciendis quam autem mollitia rerum, aliquam ad nihil! Eligendi, harum. </p>
            </Decription>
        </Container>
    )
}
const Container = styled.div`
    background-color: #f5f3f3;
    height: calc(100vh - 4rem);
    padding: 1rem 7rem;
    display: flex;
    position: relative;
    @media(max-width: 800px){
        flex-direction: column;
        padding: 1rem;
        background-color: white;
    }
    .fa-arrow-left{
        position: absolute;
        top:2rem;
        left: 3rem;
        font-size: 1rem;
        cursor: pointer;
    }
`
const ImageContainer = styled.div`
    flex: 1;
    img{
        width: 20rem;
        height: 70vh;
        object-fit: fill;
        @media(max-width: 800px){
            height: 60vh;
        }
    }
`
const Decription = styled.div`
    flex: 2;
    .author{
        margin: .6rem 0;
    }
    .stars{
        margin: .6rem 0;
    }
    button{
        border: none;
        padding: .7rem 1.5rem;
        margin: .6rem 0;
        border-radius: .3rem;
        background-color: #2b2b56;
        color: white;
        font-size: .8rem;
        cursor: pointer;
    }
    button:hover{
        background-color: #4a4a76;
    }
    i.fa-star, i.fa-star-half-stroke{
        margin-right: .3rem;
        color: gold;
    }
    i.fa-heart{
        margin-left: 1rem;
        font-size: 1.5rem;
        cursor: pointer;
        color: #d40404;
    }
    .description{
        margin-right: 8rem;
        color: #2b2b56;
        @media(max-width: 800px){
            margin: .5rem 1rem 1.5rem 0 ;
        }
    }
    
`
export default BookDetail;