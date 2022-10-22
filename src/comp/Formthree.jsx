import styled, {css} from "styled-components"
import { useForm } from "react-hook-form";

const Formthree = ({handleClick,com}) => {
const {register, handleSubmit, formState: { errors }} = useForm();
const handleError = (errors) => {
    console.log(errors, 'error');
};
const submithandler = (data) => {
    console.log(data);
    handleClick(com);
}
const registerOptions = {
            pName: { required: "Title is required",
                maxLength: {
                    value: 25,
                    message: "Name should be less than 25 caracter!"
                }
             },
            pCountry: { required: "Counry is required",
                maxLength: {
                    value: 15,
                    message: "ISBN should not have more than 15 characters!"
                }
             },
             pCity: {
                maxLength: {
                    value: 15,
                    message: "ISBN should not have more than 15 characters!"
                }
             }, 
             pStreetNum : {
                maxLength: {
                    value: 15,
                    message: "ISBN should not have more than 15 characters!"
                }
             },
            pPhone : { required: "Phone is required!",
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
            pEmail : { required: "Email is required!",
                      pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: "invalid email address"
                        },
                      maxLength: {
                        value: 20,
                        message: "email have less than 20 characters!"
                     } 
             },
            pSocialMedia: {
                 maxLength: {
                    value: 25,
                    message: "Social Media link should have less than 25 characters!"
                }
            }
    };
    return(
    <form onSubmit={handleSubmit(submithandler,handleError)}>
        <InputCon>
            <InnerCon>
                <div className="personal-info">
                    <p>Publisher Name</p>
                    <div className='publishername'>
                        <label className="custom-field" >
                            <input type="text" name="pName" {...register('pName', registerOptions.pName)} />
                            <span className="placeholder">Name<span className="requiredStar"> *</span></span>
                            <small className='errorMessage'>
                                {errors?.pName && errors.pName.message}
                            </small>
                        </label>
                    </div>
                </div>
                <div className="address">
                    <p>Address</p>
                    <div>
                        <label className="custom-field" >
                            <input type="text" name="pCountry" {...register('pCountry', registerOptions.pCountry)} />
                            <span className="placeholder">Country<span className="requiredStar"> *</span></span>
                            <small className='errorMessage'>
                                {errors?.pCountry && errors.pCountry.message}
                            </small>
                        </label>
                        <label className="custom-field">
                            <input type="text" name="pCity" {...register('pCity', registerOptions.pCity)} />
                            <span className="placeholder">City</span>
                            <small className='errorMessage'>
                                {errors?.pCity && errors.pCity.message}
                            </small>
                        </label>
                        <label className="custom-field" >
                            <input type="text" name="pStreetNum" {...register('pStreetNum', registerOptions.pStreetNum)} />
                            <span className="placeholder">Street Number<span className="requiredStar"> *</span></span>
                            <small className='errorMessage'>
                                {errors?.pStreetNum && errors.pStreetNum.message}
                            </small>
                        </label>
                    </div>
                </div>
                <div className='contact'>
                <p>Contact</p>
                    <div>
                        <label className="custom-field" >
                           <input type="text" name="pPhone" {...register('pPhone', registerOptions.pPhone)} />
                            <span className="placeholder">Phone<span className="requiredStar"> *</span></span>
                            <small className='errorMessage'>
                                {errors?.pPhone && errors.pPhone.message}
                            </small>
                        </label>
                        <label className="custom-field" >
                            <input type="text" name="pEmail" {...register('pEmail', registerOptions.pEmail)} />
                            <span className="placeholder">Email<span className="requiredStar"> *</span></span>
                            <small className='errorMessage'>
                                {errors?.pEmail && errors.pEmail.message}
                            </small>
                        </label>
                        <label className="custom-field" >
                            <input type="text" name="pSocialMedia" {...register('pSocialMedia', registerOptions.pSocialMedia)} />
                            <span className="placeholder">Social Media</span>
                            <small className='errorMessage'>
                                {errors?.pSocialMedia && errors.pSocialMedia.message}
                            </small>
                        </label>
                    </div>
                </div>
                <hr />
            </InnerCon>
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
    div div {
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
                }
            }

            input:valid + .placeholder{
                top: 10px;
                font-size: 12px;
            }
            input:focus + .placeholder{
                top: 10px;
                font-size: 14px;
                color: #c6ceeb; 
            }
        }
    }
    div .publishername{
        justify-content: flex-start;
        margin-left: 2rem;
        label{
            input {
                width: 310px;
            }
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
export default Formthree;

