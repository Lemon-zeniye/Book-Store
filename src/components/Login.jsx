import styled from "styled-components"; 
const Login = () => {
    return(
        <Container>
            <FormContainer>
                <h2>Login</h2>
                <form>
                    <label htmlFor="email">Email
                    <input type="email" placeholder="your email pleace" /></label>
                    <label htmlFor="password">Password
                    <input  name="password" type="password" placeholder="your password pleace"/></label>
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
// # Review

// ## You didn't ASK anything at all!
// => NOT ASKING === ASSUMING ON YOUR OWN --- really bad!!!!!!

// ==> To figure out the REAL requirement

//  -what is needed?
//  -what should it include?
//  -what should it look like?
//  -what functionality do you want to have?
//  -Among many functionalities, which one should be the highest priority?

// => Functionalities:

// => Add a book
// => Update a book
// => Search
// => Delete

// => Priority?
// => Add a book  => Pri 0
// => Update a book => Pri 1
// => Search =>  Pri 2
// => Delete =>  Pri 3

// Remeber: lowest pri number such as 0 has highest priority than higher number such as 1, 2 or 3

// ==> Info about Books:

// -title: [20 chars]
// -price: number
// -cover type: [hard cover, paperback]
// -description: [200 chars]
// -pages: number
// -authors: Author[]
// -condition: [new, likeNew, used, old]
// -category: [fiction, textbook, ....]
// -publisher
// -yearPublished
// -ISBN

// ==> Info about Author:
// -First name
// -Middle name
// -Last Name
// -Address: .....
// -Contact: .....

// ==>Info about Publisher
// -name
// -address

// ==> UI Look and feel (Mock up/wireframe)

//  Inerview: write a function to revese a string (abebe=>ebeba)
//  Q: null? what if it has . !? how about if its just 1 char long?./..... 

// useState(() => { const data = localStorage.getItems(key) return data : intinalState } )
/*

const [Books, setBooks] = useState({name: props.name ? props.name :  "", price: "" , autore: ""})



Adventure
Classics
Crime
Fairy tales
Fantasy
Historical fiction
Horror
Mystery
Romance
Comic book

new
like new
used
old




 */