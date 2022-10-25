import styled from "styled-components";
import avater from "../images/th.jpg";
import {Link} from "react-router-dom";
const Navbar = ({setSearch}) => {
    return(
        <Container>
            <Hyperlink to="/">Books</Hyperlink>
            <ul>
                {/* <FavLink to="/bookstore">Book Store</FavLink>
                <FavLink to="/favorite">My Favorite</FavLink> */}
                <input type="text" onChange={(e) => setSearch(e.target.value)} placeholder="search for your favorite book" />
                <Button>Search</Button>
            </ul>
            <div>
                <p>Hi, Lee</p>
                <img src={avater} alt="" />
            </div>
             <Link to="addBook" > <Button2>Add Book</Button2></Link> 
            <FavLink to="/cart">
                <i className="fa-sharp fa-solid fa-cart-shopping"></i>
            </FavLink>
        </Container>
    )
}
const Container = styled.div`
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    padding: 1rem 3rem;
    height: 4rem;
    min-width: 100%;
    background-color: #d8deef;
    /* background-color: #f5f0f8; */
    @media(max-width: 800px){
        padding: 1rem .3rem;
       align-items: center;

    }
    ul{
        display: flex;
        list-style: none;
        width: 100%;
        margin: 0 .3rem;
        max-width: 40rem;
        @media(max-width: 600px){
                display: none;
            }
        input{
            width: 100%;
            border: none;
            outline: none;
            padding:.5rem;
            
        }
        /* li{
            margin: 0 1rem;
            cursor: pointer;
            @media(max-width: 800px){
                margin: 0 .3rem;
                font-size: .9rem;
            }
        } */
    }
    div{
        margin: 0 .3rem;
        display: flex;
        align-items: center;
        @media(max-width: 800px){
            display: none;
        }
        img{
            width: 2rem;
            height: 2rem;
            border-radius: 50%;
            margin-left: 1rem;
            cursor: pointer;
        }
    }
`
const Hyperlink = styled(Link)`
        margin: 0 .3rem;
        cursor: pointer;
        color: #1d8c7f;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
        &:hover{
            color: #22c2b0;
        }
`
 const Button = styled.button`
        border: none;
        padding: .2rem 1rem;
        background-color: #1d8c7f;
        color: white;
        cursor: pointer;
        outline: none;
        &:hover{
            background-color: #1eb8a6;
        }

 `
 const Button2 = styled.button`
        margin: .5rem;
        padding: .3rem 1rem;
        border: none;
        background-color: #50c5b7;
        border-radius: .3rem;
        color: white;
        cursor: pointer;
        &:hover{
            background-color: #2c6e66;
        }
 `
            
    

const FavLink = styled(Link)`
    margin: 0 .3rem;
    cursor: pointer;
    text-decoration: none;
    color: black;
    @media(max-width: 800px){
        margin: 0 .4rem;
    }
`

export default Navbar;