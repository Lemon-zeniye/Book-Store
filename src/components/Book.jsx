import styled from "styled-components";
import {NavLink} from "react-router-dom";
const Book = ({book, books, setBooks}) => {
const updateFavorite = books.map(b => book.id === b.id  ? {...b, favorite: !b.favorite}: b);
    return(
            <Container>
                    <HyperLink to={'/books/' + book.id}>
                        <img src={book.img} alt="" />
                    </HyperLink>
                    <InnerContener>
                        <HyperLink to={'/books/' + book.id}>
                            <p>Nature Kingdom</p>
                        </HyperLink>
                        <small>Business & Money</small>
                        <h5>$33.00</h5>
                        <div>
                            <button onClick={() => setBooks(books.map(b => b.id === book.id ? {...b, onCart: true}: b))} >Add to Cart</button>
                            {
                                book.favorite === false ? 
                                <i onClick={() => {setBooks(updateFavorite)}}  className="fa-regular fa-heart"></i> :
                                 <i onClick={() => setBooks(updateFavorite)}  className="fa-solid fa-heart"></i>
                            }
                        </div>
                    </InnerContener>
            </Container>
    )
}
const Container = styled.div`
    margin: 1rem;
    width: 20rem;
    height: 11rem;
    border-radius: .3rem;
    display: flex;
    box-shadow: .5px .5px 3px lightgray;
    @media(max-width: 800px){
        width: 18rem;
    }
    :hover{
        box-shadow: 1px 1px 3px 3px lightgray;
        cursor: pointer;
    }
    img{
        width: 8rem;
        height: 11rem;
        object-fit: fill;
        border-radius: .3rem;
    }
    
`
const HyperLink = styled(NavLink)`
    text-decoration: none;
`
const InnerContener = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        margin: .6rem 1rem;
        p{
            color: #101031;
            &:hover{
            color: #844bbd;

    }
        }
        small{
            font-size: small;
        }
        h5{
            color: #521473;
        }
        div{
            display: flex;
            align-items: center;
            margin-left: .4rem;
            button{
                margin-right:.5rem;
                padding:.3rem .6rem;
                border: none;
                border-radius: .4rem;
                background-color: #243342; 
                color: white;
                cursor: pointer;
                &:hover{
                   background-color: #425c76;
                } 
                &:active{
                background-color: white;
                color: #243342;
                }
            }
            i{
                cursor: pointer;
                color: #d10000;
            }
         }
`

export default Book