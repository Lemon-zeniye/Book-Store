    import styled from "styled-components";
    export const Container = styled.div`
        margin: 1rem 2rem;
        span.requiredFiled{
                color: red;
                margin-left: .2rem;
            }
        small {
            color: red;
        }
        @media(max-width: 800px){
            margin: .5rem;
        }
    `
    export const Main = styled.div`
        display: flex;
        flex-wrap: wrap;
    `
    export const InnerCon = styled.div`
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: flex-start;
        flex: 2;
        border-radius: .5rem;
        margin-right: .3rem;
        border: .5px solid lightgray;
        justify-content: space-evenly;
        
    `
    export const InputCon = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        label{
            display: block;
            font-size: .9rem;
            font-weight: bold;
            margin: 1rem;
            input, select{
                width: 12rem;
                display: block;
                padding: .5rem 1rem;
                margin-top: .5rem;
                border: .5px solid lightgray;
                outline: none;
                border-radius: .3rem;
                option[disabled]{
                    color: red;
                }
                &:focus{
                    box-shadow: 0px 0px 8px 2px rgba( 92, 92, 92 , 0.34 ) ;
                    &::placeholder {
                    color: transparent;
                    transition: color .3s ease;
                    }
                }
        }
    }   
    `

    export const Desc = styled.div`
        label{
            font-size: .9rem;
            font-weight: bold;
            display: block;
            textarea{
            display: block;
            margin-top: .5rem;
            width: 95%;
            height: 6rem;
            border: .5px solid lightgray;
            padding: .5rem;
            margin: .5rem;
            outline: none;
            &:focus{
                box-shadow: 0px 0px 8px 2px rgba( 92, 92, 92 , 0.34 ) ;
                &::placeholder {
                    color: transparent;
                    transition: color .4s ease;
                    }
            }}
        }
    `

    export const BottomCon = styled.div`
            margin-left: 2rem;
            div{
                display: flex;
                flex-wrap: wrap;
                margin: 1rem;
                label{
            display: block;
            font-size: .9rem;
            font-weight: bold;
            margin: 1rem;
            input, select{
                width: 12rem;
                display: block;
                padding: .5rem 1rem;
                margin-top: .5rem;
                border: .5px solid lightgray;
                outline: none;
                border-radius: .3rem;
                option[disabled]{
                    color: red;
                }
                &:focus{
                    box-shadow: 0px 0px 8px 2px rgba( 92, 92, 92 , 0.34 ) ;
                    &::placeholder {
                    color: transparent;
                    transition: color .3s ease;
                    }
                }
        }
    }   
}
    `
    export const ImageCon = styled.div`
        flex: 1;
        display: flex;
        border: .5px solid lightgray;
        border-radius: .5rem;
        align-items: center;
        justify-content: top;
        flex-direction: column;
        padding-top: 1rem;
        label{
            font-size: .9rem;
            font-weight: bold;
            margin-left: 2rem;
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
        margin-top: 2rem;
        max-width: 90%;
        /* max-height: 30em; */
        object-fit: fill;
        border-radius: .5rem;
    `
    
    export const Button = styled.button`
        border: none;
        padding: 1rem 4rem;
        border-radius: .4rem;
        margin: 1rem;
        float: right;
        background-color: #530f5d;
        box-shadow: 0px 0px 8px 2px  #cd72db;
        color: white;
        cursor: pointer;
        margin-left: 5rem;
        &:hover{
            background-color: #8c02a1;
        }
        &:active{
            background-color: white;
            color: #530f5d;
        }
        &:disabled{
            background-color: #280a2c;
            box-shadow: none;
        }
        @media(max-width: 800px){
            width: 90%;
            margin:2rem 1rem; 
        }
    `