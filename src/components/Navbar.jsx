import styled from "styled-components";
import avater from "../images/th.jpg";
import {Link} from "react-router-dom";
const Navbar = () => {
    return(
        <Container>
            <Hyperlink to="/">Books</Hyperlink>
            <ul>
                <FavLink to="/bookstore">Book Store</FavLink>
                <FavLink to="/favorite">My Favorite</FavLink>
            </ul>
            <div>
                <p>Hi, Lee</p>
                <img src={avater} alt="" />
            </div>
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
    padding: 1rem 3rem;
    height: 4rem;
    background-color: #f5f0f8;
    @media(max-width: 800px){
        padding: 1rem .3rem;
    }
    ul{
        flex: 2;
        display: flex;
        list-style: none;
        li{
            margin: 0 1rem;
            cursor: pointer;
            @media(max-width: 800px){
                margin: 0 .3rem;
                font-size: .9rem;
            }
        }
    }
    div{
        flex: .7;
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
        flex: 1;
        cursor: pointer;
        color: #1d8c7f;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
        &:hover{
            color: #22c2b0;
        }
`
const FavLink = styled(Link)`
    margin: 0 1rem;
    cursor: pointer;
    text-decoration: none;
    color: black;
    @media(max-width: 800px){
        margin: 0 .4rem;
    }
`

export default Navbar;