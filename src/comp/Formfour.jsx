import styled, {css} from 'styled-components';
import {useEffect, useState} from "react";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../fireBaseConfig";
    import { useForm } from "react-hook-form";


function Formfour() {
        const [image, setImage] = useState(null);
        const [imgUrl, setImgUrl] = useState('');
        const [percent, setPercent] = useState(null);
        const { register, handleSubmit, formState: { errors } } = useForm();

     //upload an image to firebase and setBook with the image url 
        useEffect(() => {
            const uploadImage = () => {
                const fileName = new Date().getTime() + image.name;
                const storageRef = ref(storage, fileName);
                const uploadTask = uploadBytesResumable(storageRef, image);
                uploadTask.on('state_changed', (snapshot) => {
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    setPercent(progress);
                }, 
                (error) => {
                    console.log(error);
                }, 
                () => {
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    setImgUrl(downloadURL);
                    });
                });
            }
            image && uploadImage();
        },[image]);
  return (
    <form onSubmit={handleSubmit()}>
    <InputCon>
        <ImageCon>
             <div className='label' htmlFor="image"><p>Upload Cover Page<span className="requiredFiled">*</span></p>
                 <i className="fa-solid fa-image"></i>
                 <input id="image"  name="image" type="file"{...register("image", "image filed is required")} onChange={(e) => setImage(e.target.files[0]) } placeholder="input text" />
                 <small>
                     {errors?.image && errors.image.message}
                 </small>
             <p>uploading {Math.round(percent)} %</p>
             </div >
             <Img src={imgUrl}  alt="cover page Image"/>
         </ImageCon>
    </InputCon> 
    <Button next>Submit</Button>
    </form>
  )
}
const InputCon = styled.div`
     max-width: 100%;
     min-height: 70vh;
     display: flex;
     flex-wrap: wrap;
     justify-content: space-around;
     align-items: center;
     box-shadow: 0px 0px 8px 2px #cfd8f4;
     border-radius: .3rem;
     margin-top: 1rem;
     border-radius: .4rem 2rem;
`
 const ImageCon = styled.div`
        border-radius: .5rem;
        display: flex;
        width: 100%;
        padding:1rem 4rem;
        height: 75vh;
        label{
           flex: 1;
            font-size: .9rem;
            font-weight: bold;
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
 const Img = styled.img`
        flex: 2;
        max-width: 90%;
        object-fit: fill;
        border-radius: .2rem 1.5rem;
    `
export const Button = styled.button`
    border:none;
    outline: none;
    padding: .5rem 1.5rem;
    border-radius: .2rem .4rem;
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
export default Formfour