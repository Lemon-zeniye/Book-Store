import styled, {keyframes, css} from "styled-components";
import book1 from "../images/book1.avif";
import book from "../images/book.jpg";
import book4 from '../images/book4.jpg';
import BookStore from "./BookStore";
import { Link } from "react-router-dom";
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import { useState } from "react";
// import { Splide, SplideSlide } from "@splidejs/react-splide";
const HomePage = () => {
    const [search, setSearch] = useState('');
    // const imgs = [book, book1, book4,book2,book3];
    return(
    <BigCon>
        <Container>
            <InnerContainer>
                <h1>Buy and Sell your textbook for best price</h1>
                <p>Lorem  dignissimos eum doloremque, voluptate impedit iusto in nobis. Nobis, numquam adipisci.
                </p>
                <form>
                    <input onChange={(e) => setSearch(e.target.value)} type="text" placeholder="search for books" />
                    <button>Search</button>
                </form>
                <div>
                   <Link to="login"><button className="login">Login</button></Link> 
                   <Link to="register" ><button className="registor">Registor</button></Link>
                </div>
            </InnerContainer>
        
            <ImgContainer id="reactive">
               <Img below className="below" src={book}  alt=""/>
               <Img top className="top" src={book4}  alt=""/>
               <Img left className="left" src={book1}  alt=""/>
            </ImgContainer>
        </Container>
        <BookStore search={search} />
    </BigCon>
    )
}
const BigCon = styled.div`
    max-width: 1600px;
    min-width: 400px;
    margin: 0 auto;
    box-shadow: 0px 0px 8px 2px #cfd8f4;
    border-radius: .4rem;
`
const Container = styled.div`
    display: flex;
    max-height: 75vh;
    background-color: #f5f0f8;
    padding: 1rem;

`

const InnerContainer = styled.div`
    flex: 1;
    margin: 5rem;
    border-right: 1px solid #e3d6e1;
    /* box-shadow: 0 6px 6px -6px #6e83d1;
     */
     box-shadow: 6px 0 5px -6px #aaa;
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
    flex-direction: column;
    position: relative;
    @media(max-width: 800px){
        display: none;
    }
       
`

const AnimationName = keyframes`
        0%{
            opacity: 0;
        }
        50%{
            opacity: 1;
        }
        100%{
            opacity: 0;
        }
`
const Img = styled.img`
        width: 20rem;
        height: 27rem;
        object-fit: fill;
        position: absolute;
        box-shadow: 0px 0px 8px 2px #97aae2;
        padding: .5rem
        animation: ${AnimationName} 5s linear infinite;
        ${props => props.below && css`{
            z-index: 10;
            right: 10%;
            top: 18%;
        }
        `}
        ${props => props.top && css`{
            top: 0;
            left: 30%;
        }`}
        ${props => props.left && css`{
            left: 20%;
            top: 12%;
            z-index: 11;
        }`}
    
    /* .below{
        
    }
    .top{
        
    }
    .left{
        
    } */
`
export default HomePage;