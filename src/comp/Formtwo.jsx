import React, { useState } from 'react';
import styled, {css} from "styled-components";
import { useForm } from "react-hook-form";
function Formtwo({IncreasAuthor, authors, handleClick, com}) {
const { register, handleSubmit, formState: { errors } } = useForm();
//   <input type="text" name="ISBN" {...register('ISBN', {required: "ISBN is required"})} />
//             <span className="placeholder">ISBN<span className="requiredStar">*</span></span>
//             <small className='errorMessage'>
//                 {errors?.ISBN && errors.ISBN.message}
//             </small>
const registerOptions = {
            fName: { required: "Name is required",
                    minLength: {
                        value: 10,
                        message: "must be greater than 10 caracter!"
                    },
                    maxLength: {
                        value: 15,
                        message: "must be less than 15 caracter!"
                    }

            },
            mName: {
                maxLength: {
                    value: 15,
                    message: "ISBN should not have more than 15 characters!"
                }
            },
            lName: {
                maxLength: {
                    value: 15,
                    message: "ISBN should not have more than 15 characters!"
                }
            },
            country: { required: "Counry is required",
                maxLength: {
                    value: 15,
                    message: "ISBN should not have more than 15 characters!"
                }
             },
             city: {
                maxLength: {
                    value: 15,
                    message: "ISBN should not have more than 15 characters!"
                }
             }, 
             streetNum : {
                maxLength: {
                    value: 15,
                    message: "ISBN should not have more than 15 characters!"
                }
             },
            phone : { required: "Phone is required!",
                      type: "number",
                minLength: {
                    value: 10,
                    message: "phone number must have more than 10 digit"
                },
                maxLength: {
                    value: 15,
                    message: "phone number must have less than 15 digit"
                }

             },
            email : { required: "Email is required!",
                      pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        },
                      maxLength: {
                        value: 20,
                        message: "email have less than 20 characters!"
                     } 
             },
            socialMedia: {
                 maxLength: {
                    value: 25,
                    message: "Social Media link should have less than 25 characters!"
                }
            }
            
    };
const handleError = (errors) => {
    console.log(errors);
}
const submithandler = (data) => {
    console.log(data);
    handleClick(com);
}

return (
  <form onSubmit={handleSubmit(submithandler,handleError)}>
        <InputCon>
            {
                authors.map(author => (
                    <InnerCon key={author}>
                        <div className="personal-info">
                            <p>Full Name</p>
                            <div>
                                <label className="custom-field" >
                                    <input name={"fName"+ author }  {...register(`${'fName' + author}`, registerOptions.fName)} type="text" />
                                    <span className="placeholder">First Name<span className="requiredStar"> *</span></span>
                                    <small className='errorMessage'>
                                        { errors?.fName1 && errors.fName1.message}
                                    </small>
                                </label>
                                <label className="custom-field" >
                                    <input   name={"mName"+ author }  {...register(`${'mName' + author}`, registerOptions.mName)} type="text" />
                                    <span className="placeholder">Middle Name</span>
                                    <small className='errorMessage'>
                                        { errors?.mName1 && errors.mName1.message}
                                    </small>
                                </label>
                                <label className="custom-field" >
                                    <input name={"lName"+ author }  {...register(`${'lName' + author}`, registerOptions.lName)}  type="text" />
                                    <span className="placeholder">Last Name</span>
                                    <small className='errorMessage'>
                                        { errors?.lName1 && errors.lName1.message}
                                    </small>
                                </label>
                            </div>
                        </div>
                        <div className="address">
                            <p>Address</p>
                            <div>
                                <label className="custom-field" >
                                    <input name={"country"+ author }  {...register(`${'country' + author}`, registerOptions.country)}  type="text" />
                                    <span className="placeholder">Country<span className="requiredStar"> *</span></span>
                                    <small className='errorMessage'>
                                        { errors?.country1 && errors.country1.message}
                                    </small>
                                </label>
                                <label className="custom-field" >
                                    <input name={"city"+ author }  {...register(`${'city' + author}`, registerOptions.city)}  type="text" />
                                    <span className="placeholder">City</span>
                                    <small className='errorMessage'>
                                        { errors?.city1 && errors.city1.message}
                                    </small>
                                </label>
                                <label className="custom-field" >
                                    <input  name={"streetNum"+ author }  {...register(`${'streetNum' + author}`, registerOptions.streetNum)} type="text"  />
                                    <span className="placeholder">Street Number</span>
                                    <small className='errorMessage'>
                                        { errors?.streetNum1 && errors.streetNum1.message}
                                    </small>
                                </label>
                            </div>
                        </div>
                        <div className='contact'>
                        <p>Contact</p>
                            <div>
                                <label className="custom-field" >
                                    <input name={"phone"+ author }  {...register(`${'phone' + author}`, registerOptions.phone)} type="text" />
                                    <span className="placeholder">Phone Number<span className="requiredStar"> *</span></span>
                                    <small className='errorMessage'>
                                        { errors?.phone1 && errors.phone1.message}
                                    </small>
                                </label>
                                <label className="custom-field" >
                                    <input name={"email"+ author }  {...register(`${'email' + author}`, registerOptions.email)}  type="text" />
                                    <span className="placeholder">Email Address<span className="requiredStar"> *</span></span>
                                    <small className='errorMessage'>
                                        { errors?.email1 && errors.email1.message}
                                    </small>
                                </label>
                                <label className="custom-field" >
                                    <input name={"socialMedia"+ author }  {...register(`${'socialMedia' + author}`, registerOptions.socialMedia)} type="text" />
                                    <span className="placeholder">Social Media</span>
                                    <small className='errorMessage'>
                                        { errors?.socialMedia1 && errors.socialMedia1.message}
                                    </small>
                                </label>
                            </div>
                        </div>
                        <hr />
                    </InnerCon>
                ))
            }
            <i className="fa-solid fa-circle-plus" onClick={(num) => IncreasAuthor(authors)} ></i>
        </InputCon>
        <Button next>Next</Button>
    </form>
  )
  }
const InputCon = styled.div`
    padding-top: .5rem;
     max-width: 100%;
     min-height: 65vh;
     /* box-shadow: 0px 0px 8px 2px #ebeef8; */
     border-radius: .3rem;
     display: flex;
     flex-direction: column;
     justify-content: space-around;
     position: relative;
     i.fa-circle-plus{
        font-size: 2rem;
        margin: .3rem 2rem;
        cursor: pointer;
        float: right;
        color: #59bdcfcc;
        position: absolute;
        z-index: 3;
        bottom: .2rem;
        right: 1rem;
        &:hover{
          color: #2f8493cc;  
        }
     }
`
const InnerCon = styled.div`
    hr{
        border: none;
        border-bottom: 1px solid #6bb7c4cc;
        margin: 1.5rem 0;
        box-shadow: 0px 0px 4px 1px #c7cdde;
    } 
     .contact, .address, .personal-info {
        margin-top: 1.3rem;
        padding-top: 1rem;
        box-shadow: 0px 0px 8px 2px #ebeef8;
        border-radius: .4rem 1.4rem;
     }
     div p{
        margin-left: 1.8rem;
        color: #a5b2de;
        font-family: 'Prompt', sans-serif;
     }
     div div{
        display: flex;
        justify-content: space-around;
        border: none;
        flex-wrap: wrap;
        padding-bottom: 1rem;
        .custom-field{
            position: relative;
            font-size: 14px;
            padding-top: 20px;
            margin-bottom: 5px;
            small.errorMessage{
                color: red;
                display: block;
            }
            input{
                border: none;
                padding: 12px;
                font-size: 14px;
                padding-bottom: 5px;
                outline: none;
                width: 250px;
                /* border-bottom: 1px solid #bdc9f7; */
                box-shadow: 0 5px 6px -6px #6981db;
                &:focus{
                    box-shadow: 0 5px 6px -6px #6981db;
                    border-bottom: 1px solid #9eb3ff;
                }
            }
            .placeholder{
                font-size: 14px;
                font-family: 'Noto Sans', sans-serif;
                position: absolute;
                left: 12px;
                top: calc(50% + 10px);
                transform: translateY(-50%);
                color: #aaa;
                -webkit-transition: top .3s ease-in-out,  font-size .3s ease-in-out ;
                transition: top .3s ease-in-out,  font-size .3s ease-in-out;
                span.requiredStar{
                    color: red;
                }}

            input:valid + .placeholder{
                top: 10px;
                font-size: 12px;
            }
            input:focus + .placeholder{
                top: 10px;
                font-size: 14px;
                color: #c6ceeb; 
            }
        },
     small.errorMessage {
        /* display: block; */
        color: red;
     }
     }
`
const Button = styled.button`
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


export default Formtwo