import styled from "styled-components";
import { css } from "styled-components";
export const Container = styled.div`
    display:flex;
    height: calc(100vh - 4rem);
`
export const SideBar = styled.div`
    flex: 1;
    background-color: #e9ecf5;
`
export const LI = styled.li`
    list-style: none;
        padding: .5rem;
        border: 2px solid white;
        /* background-color: #f8fafe; */
        background-color: white;
        margin: 1rem;
        color: #5c5c5c;
        border-radius: .4rem;
        font-family: 'Noto Sans', sans-serif;
        /* font-family: 'Ubuntu', sans-serif; */
        ${props => props.com === props.id && css`
            background-color:#5987e3;
            padding: 1rem;    
            color: white;
            box-shadow: 1px 1px 5px 5px white;
            border:none;
    `}  
`
export const MainCon = styled.div`
    flex: 3;
    padding: 0 5rem;
    background-color: white;
    
`
export const Button = styled.button`
    border:none;
    outline: none;
    padding: .5rem 1.5rem;
    border-radius: .2rem;
    margin-top: 1rem;
    cursor: pointer;
    
    ${props => props.next && css`
        background-color: #70c7e4;    
        float: right;
        border: none;
        &:hover{
            color: white;
            background-color:#4b93ab;
        }
        &:active{
            background-color: white;
            color: #4b93ab;
            border: 1px solid #95d7ee;
        }
    `}  
    ${props => props.back && css`
        background: transparent;   
        border: 1px solid lightgray;
        color:gray;
        &:hover{
            background-color: lightgray ;
            color: white;
        }
        &:active{
            background-color: white;
            color: gray;
        }
    `}
`
export const SliderCon = styled.div`
    display: flex;
    overflow: hidden;
`
