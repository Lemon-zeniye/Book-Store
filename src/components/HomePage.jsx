import styled from "styled-components";
import book1 from "../images/book1.avif";
import book from "../images/book.jpg";
import book4 from '../images/book4.jpg';
import Popular from "./Popular";
import { Link } from "react-router-dom";

const HomePage = () => {
    return(
    <div>
        <Container>
            <InnerContainer>
                <h1>Buy and Sell your textbook for best price</h1>
                <p>Lorem  dignissimos eum doloremque, voluptate impedit iusto in nobis. Nobis, numquam adipisci.
                </p>
                <form>
                    <input type="text" placeholder="search for books" />
                    <button>Search</button>
                </form>
                <div>
                   <Link to="login"><button className="login">Login</button></Link> 
                   <Link to="register" ><button className="registor">Registor</button></Link>
                
                </div>
            </InnerContainer>
            <ImgContainer>
               <img className="below" src={book}  alt=""/>
               <img className="top" src={book4}  alt=""/>
               <img className="left" src={book1}  alt=""/>
            </ImgContainer>
        </Container>
        <Popular />
    </div>
    )
}
const Container = styled.div`
    display: flex;
    height: 75vh;
    background-color: #f5f0f8;
    padding: 1rem;

`
const InnerContainer = styled.div`
    flex: 1;
    margin: 5rem;
    border-right: 1px solid #e3d6e1;
    @media(max-width: 800px){
        border: none;
        margin: 1rem;
    }
    p{
        margin:3rem 3rem 3rem 0 ;
    }
    form{
        width: 17rem;
        height: 2.5rem;
        background-color: white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        input{
            outline: none;
            border: none;
            height: 2.5rem;
        }
        button{
            border: none;
            padding: .2rem 1rem;
            background-color: #1d8c7f;
            color: white;
            cursor: pointer;
        }
        button:hover{
            background-color: #1eb8a6;
        }
    }
    div{
        margin:2rem auto;
        .login, .registor{
            margin: .5rem;
            padding: .3rem 1rem;
            border: none;
            background-color: #50c5b7;
            border-radius: .3rem;
            color: white;
            cursor: pointer;
        }
        .login:hover, .registor:hover{
            background-color: #2c6e66;
        }
    }
    
    
`
const ImgContainer = styled.div`
    flex: 1;
    display: flex;
    margin-left: 1rem;
    align-items: center;
    justify-content: center;
    position: relative;
    @media(max-width: 800px){
        display: none;
    }

    img{
        width: 15rem;
        height: 20rem;
        object-fit: fill;
        position: absolute;
        border: 1px solid black;
    }
    .below{
        z-index: 10;
        right: 20%;
        bottom: 5%;
    }
    .top{
        top: 0;
        right: 30%;
    }
    .left{
        left: 20%;
        top: 5%;
        z-index: 11;
    }
    
    
`
export default HomePage;