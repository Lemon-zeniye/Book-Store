import React from 'react'
import styled, {css} from "styled-components";
import { useForm } from "react-hook-form";

//  <label htmlFor="ISBN">ISBN<span className="requiredFiled">*</span>
//     <input  type="number" name="ISBN" {...register('ISBN', registerOptions.ISBN)} defaultValue={defaultVal.ISBN}   />
//     <small>
//         {errors?.ISBN && errors.ISBN.message}
//     </small> 
// </label>
function Formone({handleClick, com}) {
const { register, handleSubmit, formState: { errors } } = useForm();
const handleError = (errors) => {
    console.log(errors, 'error');
};
const submithandler = (data) => {
    console.log(data);
    handleClick(com);
}

    const registerOptions = {
            ISBN: { required: "ISBN is required",
                    minLength: {
                        value: 8,
                        message: "ISBN must have at least 8 characters!"
                    },
                    maxLength: {
                        value: 10,
                        message: "ISBN should not have more than 10 characters!"
                    }
            },
            title: { required: "Title is required",
                    maxLength: {
                        value: 25,
                        message: "Title should not have more than 10 characters!"
                    }
            
             },
            price : { required: "Price is required!", valueAsNumber: true, },
            pages : { required: "Pages is required!", valueAsNumber: true, },
            date: { required: "Year of Published is required!", valueAsDate: true },
            description: { required: "Description is required!",
                    minLength: {
                        value: 30,
                        message: "Description must have at least 30 characters!"
                    },
                    maxLength: {
                        value: 50,
                        message: "Description must be less than 50 characters!"
                   }
            },

    };
  return (
  <form onSubmit={handleSubmit(submithandler,handleError)}>
    <InputCon>
        <label className="custom-field" >
            <input type="text" name="ISBN" {...register('ISBN', registerOptions.ISBN)} />
            <span className="placeholder">ISBN<span className="requiredStar">*</span></span>
            <small className='errorMessage'>
                {errors?.ISBN && errors.ISBN.message}
            </small>
        </label>
        <label className="custom-field" >
            <input  type="text" name='title' {...register('title', registerOptions.title)} />
            <span className="placeholder">Title <span className="requiredStar">*</span> </span>
            <small className='errorMessage'>
                {errors?.title && errors.title.message}
            </small>
        </label>
        <label className="custom-field" >
            <input  type="number" name='price' {...register('price', registerOptions.price)} />
            <span className="placeholder">Price <span className="requiredStar">*</span> </span>
            <small className='errorMessage'>
                {errors?.price && errors.price.message}
            </small>
        </label>
        <label className="custom-field" >
            <input  type="number" name='pages' {...register('pages', registerOptions.pages)} />
            <span className="placeholder">Pages<span className="requiredStar">*</span> </span>
            <small className='errorMessage'>
                {errors?.pages && errors.pages.message}
            </small>
        </label>
        <label className="custom-field" >
            <select name='age' {...register('age', registerOptions.age)}>
                <option value=''>Age Type</option>
                <option value="bellow 7">bellow 7</option>
                <option value="8 - 15">8 - 15</option>
                <option value="15-20">15-20</option>
                <option value="above 20">above 20</option>
            </select>
            <small className='errorMessage'>
                {errors?.age && errors.age.message}
            </small>
        </label>
        <label className="custom-field" >
            <input  name='date' {...register('date', registerOptions.date)} type="date" className="date" />
            <small className='errorMessage'>
                {errors?.date && errors.date.message}
            </small>
        </label>
        <label className="custom-field" >
            <select name='coverType' {...register('coverType', registerOptions.coverType)}>
                <option value=''>Cover Type</option>
                <option value="Paperback">Paperback</option>
                <option value="Hardcover Dust Jacket">Hardcover Dust Jacket</option>
                <option value="Hardcover Case wrap">Hardcover Case wrap</option>
            </select>
            <small className='errorMessage'>
                {errors?.coverType && errors.coverType.message}
            </small>
 </label>
        <label className="custom-field" >
            <select name='category' {...register('category', registerOptions.category)}>
                <option value="">Catagory</option>
                <option value="Classics">Classics</option>
                <option value="Crime">Crime</option>
                <option value="Fairy tales">Fairy tales</option>
                <option value="Fantasy">Fantasy</option>
                <option value="Historical fiction">Historical fiction</option>
                <option value="Horror">Horror</option>
                <option value="Mystery">Mystery</option>
                <option value="Romance">Romance</option>
                <option value="Comic book">Comic book</option>
            </select>
            <small className='errorMessage'>
                {errors?.category && errors.category.message}
            </small>
        </label>
        <label className="custom-field" >
            <select name='condition' {...register('condition', registerOptions.condition)}>
                <option value="">Condition</option>
                <option value="new">new</option>
                <option value="old">old</option>
                <option value="like new">like new</option>
                <option value="used">used</option>
            </select>
            <small className='errorMessage'>
                {errors?.condition && errors.condition.message}
            </small>
        </label>
        <label className="custom-field textarea">
            <span className='description' >Description<span> *</span></span>
            <textarea name='description' {...register('description', registerOptions.description)}></textarea>
            <small className='errorMessage'>
                {errors?.description && errors.description.message}
            </small>
        </label>
    </InputCon> 
    <Button next>Next</Button>
    
    </form>
  )
}
const InputCon = styled.div`
     max-width: 100%;
     min-height: 65vh;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
     align-items: center;
     box-shadow: 0px 0px 8px 2px #cfd8f4;
     border-radius: .3rem;
     margin-top: 2rem;
     border-radius: .4rem 2rem;
    .custom-field{
        position: relative;
        font-size: 14px;
        padding-top: 20px;
        margin-bottom: 5px;
        input[type=number]::-webkit-inner-spin-button, 
        input[type=number]::-webkit-outer-spin-button { 
        -webkit-appearance: none; 
        margin: 0; 
        }
        input {
            border: none;
            padding: 12px;
            font-size: 14px;
            padding-bottom: 5px;
            outline: none;
            width: 250px;
            box-shadow: 0 5px 6px -6px #6981db;
            &:focus{
                border-bottom: 1px solid #96a9ef;
                box-shadow: 0 5px 6px -6px #6e83d1;
                transition: box-shadow 1s ease-in-out,  border-bottom 1s ease-in-out;

            }
            &:hover{
                background-color: white;
            } 
        }
        input[type="date"]{
            color: #aaa;
            font-family: 'Noto Sans', sans-serif;
        }
        input:focus::placeholder{
            color: transparent;
        }
        .placeholder{
            font-size: 14px;
            position: absolute;
            font-family: 'Noto Sans', sans-serif;
            left: 12px;
            top: calc(50% + 10px);
            transform: translateY(-50%);
            color: #aaa;
            -webkit-transition: top .3s ease-in-out,  font-size .3s ease-in-out ;
            transition: top .3s ease-in-out,  font-size .3s ease-in-out;
            span.requiredStar{
                color: red;
            }
        }
        input:valid + .placeholder{
            top: 10px;
            font-size: 14px;
        }
        input:focus + .placeholder{
            top: 10px;
            font-size: 14px;
            color: #c6ceeb; 
        }
        select{
            border: none;
            padding: 9px;
            font-size: 14px;
            outline: none;
            font-family: 'Noto Sans', sans-serif;
            width: 250px;
            box-shadow: 0 5px 6px -6px #6981db;
            border-radius: 3px;
            color: #aaa;
            &:focus{
                border-bottom: 1px solid #96a9ef;
                box-shadow: 0 5px 6px -6px #6e83d1;
            }
        }
        textarea{
            border: none;
            font-size: 14px;
            padding-bottom: 5px;
            outline: none;
            height: 3rem;
            width: 600px;
            box-shadow: 0 5px 6px -6px #6981db;
            &:focus{
                border-bottom: 1px solid #96a9ef;
                box-shadow: 0 5px 6px -6px #6e83d1;
            }
        }
        small.errorMessage{
            display: block;
            color: red;
            margin-top: .1rem;
            font-family: 'Noto Sans', sans-serif;
        }
    }
    .textarea {
       .description{
         display: block;
         color:#aaa;
         font-family: 'Noto Sans', sans-serif;
       } 
    }
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

export default Formone