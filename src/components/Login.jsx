import {useState} from "react";
import styled from "styled-components"; 
const Login = () => {
const [user, setUser] = useState({email:"", password: ""});
const loginHandeler = (e) => {
    e.preventDefault();
}
    return(
        <Container>
            <FormContainer>
                <h2>Login</h2>
                <form onSubmit={(e) => loginHandeler(e)} >
                    <label htmlFor="email">Email
                    <input onChange={(e) => setUser({email: e.target.value})} type="email" placeholder="your email pleace" /></label>
                    <label htmlFor="password">Password
                    <input onChange={(e) => setUser({password: e.target.value})}  name="password" type="password" placeholder="your password pleace"/></label>
                    <button>Login</button>  
                </form>
            </FormContainer>
        </Container>
    )
}
const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: calc(100vh - 4rem);
    background-color: #f5f0f8;
    color: #212135;
    `
const FormContainer = styled.div`
    border-radius: .4rem;
    width: 25rem;
    height: 60vh;
    background-color: white;
    box-shadow: 1px 1px 5px 5px #edecee;
    padding: 3rem;
    h2{
        text-align: center;
    }

    form{
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        label{
            
        }
        input{
            display: block;
            border: none;
            padding: .7rem 2rem;
            padding-left: 1.3rem;
            margin: 1rem;
            background-color: #f5f0f8;
            border-radius: .3rem;
        }
        button{
            border-radius: .3rem;
            margin-top: 1rem;
            border: none;
            padding: 1rem 2rem;
            background-color: #02c9e0;
            color: white;
            cursor: pointer;
            &:active{
                background-color: white;
                color: #15585f;
            }
            &:hover{
                background-color: #15585f;
            }
            
        }
    }
`
export default Login;