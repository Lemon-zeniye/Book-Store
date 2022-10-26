import styled, {css} from "styled-components";
export const Container = styled.div`
    max-width: 1600px;
    min-width: 400px;
    margin: 0 auto;
`
export const BookContainer = styled.div`
    margin: 1rem 3rem;
    box-shadow: 0px 0px 8px 2px #cfd8f4;
    border-radius: .4rem;
    h2{
        font-family: 'Prompt', sans-serif;
        padding: 1rem;
        padding-bottom: .5rem;
    }
    @media(max-width: 800px){
        margin: 1rem;
    }
`
export const InputContainer = styled.div`
    padding: .2rem 1rem;
    border-radius: .5rem;
    /* border: 1px solid #cfd8f4; */
    /* margin: 1rem; */
    /* box-shadow: 0px 0px 8px 2px #cfd8f4; */
    position: relative;
    ${props => props.author && css`
             padding-bottom: 2rem;
             i.fa-circle-plus{
                position: absolute; 
                bottom: .3rem;
                right: 1rem;
                font-size: 2rem;
                color:#849cf2;
                cursor: pointer;
                &:hover{
                    color: #6380e9;
                } 
                &:active{
                    color: white;
                }
        }
    `}  
    ${props => props.publisher && css`
        box-shadow: 0px 0px 8px 2px #dfe4f2;
        &:focus, &:hover{
            background-color:  #eef3ff;
            box-shadow: none;
        }
    `}  
    
`
export const TitleContainer = styled.div`
max-width: 1500px;
min-width: 200px;
margin-top: 1.4rem;
position: relative;
padding-top: 20px;
margin-bottom: 5px;
.custom-field{
        font-size: 14px;
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        }
        small.errorMessage{
            display: block;
            color: red;
            padding-top: .3rem;
        }
        input {
            border: none;
            padding: 10px;
            font-size: 17px;
            outline: none;
            font-family: 'Noto Sans', sans-serif;
            box-sizing: border-box;
            box-shadow: 0px 0px 8px 2px #dfe4f2;
            border-radius: .2rem;
            letter-spacing: 1px;
            width: 100%;
            /* border-radius: 0 0 1rem; */
            &:focus{
                border-bottom: 1px solid #8b9fe8;
                box-shadow: 0 6px 6px -6px #6e83d1;
                transition: box-shadow .5s linear,  border-bottom .5s linear;
            }
        }
        input:focus::placeholder{
            color: transparent;
        }
        .placeholder{
            font-size: 17px;
            position: absolute;
            font-family: 'Noto Sans', sans-serif;
            left: 12px;
            margin-bottom: .4rem;
            top: calc(50% + 10px);
            transform: translateY(-50%);
            -webkit-transition: top .3s ease-in-out,  font-size .3s ease-in-out ;
            transition: top .3s ease-in-out,  font-size .3s ease-in-out;
            span.requiredStar{
                color: red;
            }
        }
        input.valid + .placeholder{
            top: 5px;
            font-size: 16px;
        }
        input:focus + .placeholder{
            top: 5px;
            font-size: 16px;
            color: #8b9fe8; 
            text-shadow: 1px 1px 3px #90a5f4; 
        }
    textarea:focus + span.placeholder{
        color: #8b9fe8; 
        text-shadow: 1px 1px 3px #90a5f4; 
    }
    textarea{
        width: 100%;
        border: none;
        margin-top: .7rem;
        padding: .3rem;
        height: 5rem;
        box-shadow: 0px 0px 8px 2px #dfe4f2;
        outline: none;
        font-size: 17px;
        font-family: 'Noto Sans', sans-serif;
        letter-spacing: 1px;
        border-radius: .2rem;
        resize: none;
        &:focus{
            box-shadow: 0px 0px 8px 2px #91a6e0;
        }
    }
    textarea.valid + .placeholder{
        top: -1px;
        font-size: 16px;
    }
    textarea:focus + .placeholder{
        top: -1px;
        font-size: 16px;
        color: #8b9fe8; 
        text-shadow: 1px 1px 3px #90a5f4; 
    }
} 
${props => props.desc && css`
            margin-top: .3rem;
            padding-top: 5px;
`}  
`
export const FieldContainer = styled.div`
margin: 1rem 0;
max-width: 1500px;
min-width: 200px;
display: flex;
flex-wrap: wrap;
justify-content: space-between;
@media(max-width: 800px){
    display: block;
}

.custom-field{
        position: relative;
        font-size: 14px;
        margin-bottom: 12px;
        padding-top: 20px;
        flex: 1;
        margin-right: 1rem;

        @media(max-width: 800px){
            padding-top: 20px;
            margin: 1rem 0;
        }
        small.errorMessage{
            display: block;
            color: red;
        }
        input {
            border: none;
            padding: 10px;
            font-size: 17px;
            outline: none;
            width: 100%;
            font-family: 'Noto Sans', sans-serif;
            box-sizing: border-box;
            box-shadow: 0px 0px 8px 2px #dfe4f2;
            border-radius: .2rem;
            letter-spacing: 1px;
            
            &:focus{
                border-bottom: 1px solid #8b9fe8;
                box-shadow: 0 6px 6px -6px #6e83d1;
                transition: box-shadow .5s linear,  border-bottom .5s linear;
            }
        }
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none;
        }
        input[type="date"]{
            padding: 12px;
            width: 100%;
            box-shadow: 0px 0px 8px 2px #dfe4f2;
            border-radius: .2rem;
            font-family: 'Noto Sans', sans-serif;
            cursor: pointer;
            @media(max-width: 800px){
                width: 100%;
                margin: .5rem 0;
            }
            &:focus{
                box-shadow: 0px 0px 8px 2px #91a6e0;
                border: none;
            }
        }
        
        .placeholder{
            font-size: 17px;
            position: absolute;
            font-family: 'Noto Sans', sans-serif;
            left: 12px;
            top: calc(50% + 10px);
            transform: translateY(-50%);
            letter-spacing: 1px;
            -webkit-transition: top .3s ease-in-out,  font-size .3s ease-in-out ;
            transition: top .3s ease-in-out,  font-size .3s ease-in-out;
            display: flex;
            @media(max-width: 800px){
                top: 0;
            }
            span.requiredStar{
                color: red;
            }
        }
        input.valid + .placeholder{
            top: 5px;
            font-size: 16px;
        }
        input:focus + .placeholder{
            top: 5px;
            font-size: 16px;
            color: #8b9fe8; 
            text-shadow: 1px 1px 3px #90a5f4;
        }
        select{
            border: none;
            font-size: 17px;
            outline: none;
            font-family: 'Noto Sans', sans-serif;
            padding: 12px;
            width: 100%;
            box-shadow: 0 6px 6px -6px #849cf2;
            box-shadow: 0px 0px 8px 2px #dfe4f2;
            border-radius: .2rem;
            cursor: pointer;
            
            @media(max-width: 800px){
                margin: .5rem 0;
            }
            &:focus{
                box-shadow: 0px 0px 8px 2px #91a6e0;
            }
        }
        
}
.last-field{
    margin-right: 0;
}
${props => props.select && css`
            .custom-field{
                padding-top: 5px;
            }
        `}
${props => props.author && css`
    margin-top: 0;
    padding: .3rem;
    .custom-field{
    margin-bottom: 0;
    padding-bottom: .5rem;
        input{
            border: none;
            /* border-bottom: 1px solid #a9b6da; */
        }
    }
`}
`
export const AuthorsContainer = styled.div`
    /* margin: 1rem 4rem; */
    box-shadow: 0px 0px 8px 2px #dfe4f2;
    border-radius: .3rem;
    margin:1rem;
    h3{
        font-family: 'Prompt', sans-serif;
        padding: .5rem;
        padding-bottom: .5rem;
    }
    @media(max-width: 800px){
        margin: 1rem;
    }
`
export const SingleAuthorCon = styled.div`
    /* box-shadow: 0px 0px 8px 2px #cfd8f4; */
    /* border: 1px solid #cfd8f4; */
    box-shadow: 0px 0px 8px 2px #dfe4f2;
    /* margin: 1rem 0; */
    margin-bottom: 1rem;
    border-radius: .3rem;
    &:focus,&:hover {
        /* box-shadow: 0px 0px 8px 2px #91a6e0; */
        background-color:  #eef3ff;
        box-shadow: none;
    }
    h4{
        display: flex;
        justify-content: space-between;
        padding: .5rem;
        color: #3a4a77;
    }
    i.fa-circle-xmark{
        font-size: 17px;
        color: #f36464;
        cursor: pointer;
        &:hover{
            color: red;
        }
        &:active{
            color: white;
        }
    }
`
export const PublisherContainer = styled.div`
    /* margin: 1rem 4rem; */
    /* box-shadow: 0px 0px 8px 2px #dfe4f2; */
    border-radius: .3rem;
    margin:1rem;
    h3{
        font-family: 'Prompt', sans-serif;
        padding: 1rem;
        padding-bottom: .5rem;
    }
    @media(max-width: 800px){
        margin: 1rem;
    }
`
export const ImageContainer = styled.div`
    margin: 1rem;
    /* box-shadow: 0px 0px 8px 2px #dfe4f2; */
    border-radius: .3rem;
    margin:1rem;
    h3{
        font-family: 'Prompt', sans-serif;
        padding: 1rem;
        padding-bottom: .5rem;
    }
    @media(max-width: 800px){
        margin: 1rem;
    }
`
export const ImageCon = styled.div`
        padding: .2rem 1rem;
        /* box-shadow: 0px 0px 8px 2px #cfd8f4; */
        box-shadow: 0px 0px 8px 2px #dfe4f2;
        border-radius: .3rem;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        padding:1rem 4rem;
        min-height: 10vh;
        &:focus, &:hover{
            background-color:  #eef3ff;
            box-shadow: none;
        }
        .label{
            font-size: .9rem;
            font-weight: bold;
            .requiredFiled{
                color: red;
            }
            .errorMessage{
                color: red;
            }
            i{
                display: block;
                font-size: 1.6rem;
                color: #0f0f54;
                cursor: pointer;
                margin-left: 2rem;
                margin-top: .5rem;
            }
            input{
                display: none;
            }
        }
        @media(max-width: 800px){
            margin-top: .5rem;
        }
    `
export const Img = styled.img`
        border-radius: .3rem;
        max-width: 450px;
        max-height: 450px;
        padding:.5rem;
        object-fit: fill;
        box-shadow: 0px 0px 8px 2px #cfd8f4;
        background-color: white;
    `
export const ButtonCon = styled.div`
    min-height: 5rem;
    max-height: 12rem;
`
export const Button = styled.button`
    border:none;
    outline: none;
    padding: 1rem 5rem;
    border-radius: .2rem;
    margin: 1rem 4rem 2rem 0;
    cursor: pointer;
    float: right;
    background-color: #70c7e4;    
    &:hover{
        color: white;
        background-color:#4b93ab;
    }
    &:active{
        background-color: white;
        color: #4b93ab;
        border: 2px solid #95d7ee;
    }
    @media(max-width: 800px){
        width: 90%;
        margin: 1rem;
    }
            
    ${props => props.disabled && css`{
        cursor: not-allowed;
        &:hover{
            background-color: #70c7e4;    
        }
        &:active{
            background-color: #70c7e4;    
        }
    }`}
    
`
export const ErrorMessage = styled.div`
    padding: .5rem;
    small{
        color: red;
        display: block;
        font-weight: bold;
    }
`