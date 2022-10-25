import styled, {css} from "styled-components";
import { deleteDoc,  doc } from "firebase/firestore";
import { db } from "../fireBaseConfig";
import { useNavigate } from "react-router-dom";
import {NavLink} from "react-router-dom";


function BookTwo({book, books, setBooks}) {
    const navigate = useNavigate();
    const updateBook = async (book) => {
       navigate(`/update/${book.id}`);
    }
    const deleteBook = async (id) => {
        console.log(id);
       try{
         await deleteDoc(doc(db, "Books", id));
        setBooks(books.filter((b) => b.id !== id));
       }catch(err){
          console.log(err)
       }
    }
  return (
    <Container>
      <ImgCon>
        <HyperLink to={'/books/ + book.id  ' }>
          <Img src={book} />
        </HyperLink>
      </ImgCon>
      <DescriptionCon>
         <HyperLink to={'/books/ + book.id'  }> <p className="title">The Merry Adventures of Robinhood</p></HyperLink>
          <small>by: James Corden</small>
          <p>4.5 <i className="fa-solid fa-star"></i></p>
          <p className="price">255$</p>
      </DescriptionCon>
      <ButtonCon>
          <Button onClick={() => updateBook(book)} >Edit</Button>
          <Button delete onClick={() => deleteBook(book.id)} >Delete</Button>
      </ButtonCon>
    </Container>
  )
}
const Container = styled.div`
    border: .5px solid lightgray;
    width: 13rem;
    min-height: 23rem;
    margin-top: 1rem;
    box-shadow: 0px 0px 8px 2px #cfd8f4;
    border: none;
    border-radius: .3rem;
    @media(max-width: 800px){
      width: 100%;
      margin: 1rem auto;
    }
  `
const HyperLink = styled(NavLink)`
    text-decoration: none; 
`
const ImgCon = styled.div`
    width: 9rem;
    height: 13rem;
    margin: 0 auto;
    padding-top: .5rem;
    transition: all .2s linear;
    border-radius: .3rem;
    cursor: pointer;
    &:hover{
      width: 10rem;
      height: 14rem;
    }
`
const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: fill;
    box-shadow: 0px 0px 8px 2px #dfe4f2;
    padding: .3rem;
    
`
const DescriptionCon = styled.div`
  padding: .5rem;
  p{
    margin: .2rem 0;
  }
  .title{
    line-height: 1.2;
    cursor: pointer;
    &:hover{
      color: #3939b1;
    }
  }
  small{
    color: #5a5a5a;
  }
  p {
    i.fa-star{
      color: gold;
    }
  }
  .price{
    color: tomato;
  }
`
const ButtonCon = styled.div`
     display: flex;
     justify-content: space-around;
     /* display: none; */
`

const Button = styled.button`
    padding: .2rem .8rem;
    border-radius: .3rem;
    color:white;
    cursor: pointer;
    border: 1px solid lightgray;
    color: #585858;
    &:hover{
      background-color: #50dd50;
      color: white;
    }
    ${props => props.delete && css`
      &:hover{
        background-color: #fd2424;
        color: white;
      }
    `}
`
 

export default BookTwo