import styled from "styled-components";
const Register = () => {
    return(
        <Container>
            <FormContainer>
                <h2>Register</h2>
                <form>
                    <label htmlFor="password">userName
                        <input name="password" type="text" placeholder="your user-name pleace"/></label>
                    <label htmlFor="email">Email
                        <input type="email" placeholder="your email pleace" /></label>
                    <label htmlFor="password">Password
                        <input name="password" type="password" placeholder="your password pleace"/></label>
                    <label htmlFor="password">Confirm
                        <input name="password" type="password" placeholder="confirm your password"/></label>
                    <button>Register</button>
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
    height: 75vh;
    background-color: white;
    box-shadow: 1px 1px 5px 5px #edecee;
    padding: 1rem;
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
            margin: .7rem;
            background-color: #f5f0f8;
            border-radius: .3rem;
        }
        button{
            border-radius: .3rem;
            margin-top: 1rem;
            border: none;
            padding: .7rem 2rem;
            background-color: #02c9e0;
            color: white;
            cursor: pointer;
        }
        button:hover{
            background-color: #0b8795;
        }
    }
`
export default Register;