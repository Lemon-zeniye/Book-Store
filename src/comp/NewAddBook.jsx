import React, { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../fireBaseConfig";
import {Container, BookContainer,InputContainer,TitleContainer, FieldContainer,AuthorsContainer, SingleAuthorCon,PublisherContainer, ImageContainer,ImageCon, Img, Button,ButtonCon, ErrorMessage } from "./NewAddBookStyle";
import { useForm } from "react-hook-form";


const  NewAddBook = ({authors,bookk, updateBookFun,id, onSubmitHandeler ,RemoveAuthor, IncreasAuthor}) => {
        const [image, setImage] = useState(null);
        const [imgUrl, setImgUrl] = useState("");
        const [percent, setPercent] = useState(0);
        const { register, handleSubmit, setValue,  formState: { errors } } = useForm();

      //setValue of many Inputs
       useEffect(() => {
            if (bookk) {
                Object.entries(bookk).forEach(
                    ([name, value]) => setValue(name, value));
                }
            }, [setValue, bookk]);
        

        // to upload an image
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

        //error messages 
        const registerOptions = {
            title: { required: "Title is required",
                    maxLength: {
                        value: 30,
                        message: "Title should not have more than 30 characters!"
                    }
             },
            ISBN: { required: "ISBN is required",
                    minLength: {
                        value: 13,
                        message: "ISBN must have at least 13 characters!"
                    },
                    maxLength: {
                        value: 15,
                        message: "ISBN shouldn't be more than 15 characters!"
                    }
            },
            price : { required: "Price is required!" },
            pages : { required: "Pages is required!", valueAsNumber: true, },
            date: { required: "Year of Published is required!"},
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
            fName: {required: "First Name is required!"},
            mName: {maxLength: {
                        value: 20,
                        message: "Middle Name shouldn't be more than 20 characters!"
                    }},
            lName: {maxLength: {
                        value: 20,
                        message: "Last Name shouldn't be more than 20 characters!"
                    }},
            category: {
                    required: "Select a category!"
            },
            condition: {
                    required: "Select condition of book!"
            },
            coverType:{
                    required: "Select cover type of book!"
            },
            pName: {
                    required: "Publisher Name is required!"
            },
            pCity: {
                maxLength: {
                    value: 20,
                    message: "City shouldn't be more than 20 characters!"
                }
            },
            psubSity:{
                maxLength: {
                    value: 20,
                    message: "Sub City shouldn't be more than 20 characters!"
                }
            },
            img: {
                
            }
        }

        //submit handeler functions update or add
        const submithandler = (data) => {
            const book = {...data, img: imgUrl};
            // const bookone = {title: data.title, ISBN: data.ISBN, pages: data.pages, price: data.price, pName: data.pName, pCity: data.pCity, category: data.category, coverType: data. psubSity: data.psubSity, descriptioin: data.descriptioin, authors: [{fName: data.fName0,mName: data.mName0, lName: data.lName0}, {fName: data.fName1, mName: data.mName1, lName: data.lName1}],img: imgUrl};
            if(id){
                updateBookFun(book);
            }else{
                onSubmitHandeler(book);
            }
            
        }
        
        //handle error message
        const handleError = (errors) => {
            console.log(errors);
        }
      
        
  return (
    <Container>
    <form onSubmit={handleSubmit(submithandler,handleError)}>
        <BookContainer>
            <h2>Book</h2>
            <InputContainer>
                <TitleContainer>
                    <label className="custom-field" > 
                        <input type="text" name='title' {...register('title', registerOptions.title)} className='valid' />
                        <span className="placeholder">Title<span className="requiredStar"> *</span> </span>
                        <small className='errorMessage'>
                             {errors?.title && errors.title.message} 
                        </small>
                    </label>
                </TitleContainer>
                <FieldContainer>
                    <div className="custom-field" >
                        <input type="text" name="ISBN" {...register('ISBN', registerOptions.ISBN)} className="valid"  />
                        <span className="placeholder">ISBN<span className="requiredStar"> *</span></span>
                        <small className='errorMessage'>
                            {errors?.ISBN && errors.ISBN.message}
                        </small>
                    </div>
                    <div className="custom-field" >
                        <input  type="number" step="any" name='price' {...register('price', registerOptions.price)} className="valid"  />
                        <span className="placeholder"> <span className="dolar" > $</span> Price <span className="requiredStar"> *</span> </span>
                        <small className='errorMessage'>
                            {errors?.price && errors.price.message}
                        </small>
                    </div>
                    <div className="custom-field last-field" >
                        <input  type="number" name='pages' {...register('pages', registerOptions.pages)} className="valid" />
                        <span className="placeholder">Pages<span className="requiredStar"> *</span> </span>
                        <small className='errorMessage'>
                            {errors?.pages && errors.pages.message}
                        </small>
                    </div>
                </FieldContainer>
                <FieldContainer select>
                    <label className="custom-field" >
                        <select name='coverType' {...register('coverType', registerOptions.coverType)}>
                            <option className='option1' value="">Cover Type</option>
                            <option value="Paperback">Paperback</option>
                            <option value="Hardcover Dust Jacket">Hardcover Dust Jacket</option>
                            <option value="Hardcover Case wrap">Hardcover Case wrap</option>
                        </select>
                        <small className='errorMessage'>
                            {errors?.coverType && errors.coverType.message}
                        </small>
                    </label>
                    <label className="custom-field" >
                        <select name='category' {...register('category', registerOptions.category)} >
                            <option className='option1' value="">Category</option>
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
                            <option className='option1' value="">Condition</option>
                            <option value="new">new</option>
                            <option value="old">old</option>
                            <option value="like new">like new</option>
                            <option value="used">used</option>
                        </select>
                        <small className='errorMessage'>
                            {errors?.condition && errors.condition.message}
                        </small>
                    </label>
                    <label htmlFor="date" className="custom-field last-field" >
                        <input id="date" placeholder='Published Year' type="text" onFocus={e => e.target.type = "date"}  name='date' {...register('date', registerOptions.date)}   className="date" />
                        <small className='errorMessage'>
                            {errors?.date && errors.date.message}
                        </small>
                    </label>
                </FieldContainer>
                <TitleContainer desc>
                    <label className="custom-field textarea">
                        <textarea name='description' {...register('description', registerOptions.description)} className='textarea valid'></textarea>
                        <span className='placeholder'>Description<span className='requiredStar'> *</span></span>
                        <small className='errorMessage'>
                           {errors?.description && errors.description.message} 
                        </small>
                    </label>
                </TitleContainer> 
            </InputContainer>
            <AuthorsContainer>
            <h3>Authours</h3>
            <InputContainer author>
            <ErrorMessage>
                {errors?.fName0 && <small>Author 1 {errors.fName0.message} </small>}
                {errors?.fName1 && <small>Author 2 {errors.fName1.message}</small>}
                {errors?.fName2 && <small>Author 3 {errors.fName2.message}</small>}
                {errors?.fName3 && <small>Author 4 {errors.fName3.message}</small>}
                {errors?.fName4 && <small>Author 5 {errors.fName4.message}</small>}
                {errors?.mName0 && <small>Author 1 {errors.mName0.message}</small>}
                {errors?.mName1 && <small>Author 2 {errors.mName1.message}</small>}
                {errors?.mName2 && <small>Author 3 {errors.mName2.message}</small>}
                {errors?.mName3 && <small>Author 4 {errors.mName3.message}</small>}
                {errors?.mName4 && <small>Author 5 {errors.mName4.message}</small>}
                {errors?.lName0 && <small>Author 1 {errors.lName0.message}</small>}
                {errors?.lName1 && <small>Author 2 {errors.lName1.message}</small>}
                {errors?.lName2 && <small>Author 3 {errors.lName2.message}</small>}
                {errors?.lName3 && <small>Author 4 {errors.lName3.message}</small>}
                {errors?.lName4 && <small>Author 5 {errors.lName4.message}</small>}
            </ErrorMessage>
                {
                    authors.map((author, index) => (
                        <SingleAuthorCon key={index}>
                            <h4>Author {index + 1} <i  className="fa-regular fa-circle-xmark" onClick={() => RemoveAuthor(author, index)}></i> </h4>
                            <FieldContainer author >
                                <div className="custom-field" >
                                    <input type="text" name={"fName"+ index } {...register(`${'fName' + index}`, registerOptions.fName)} className= "valid" />
                                    <span className="placeholder">First Name<span className="requiredStar"> *</span></span>
                                </div>
                                <div className="custom-field" >
                                    <input  type="text" name={"mName"+ index } {...register(`${'mName' + index}`, registerOptions.mName)} className="valid"   />
                                    <span className="placeholder">Middle Name</span>
                                </div>
                                <div className="custom-field" >
                                    <input  type="text" name={"lName"+ index } {...register(`${'lName' + index}`, registerOptions.lName)} className="valid"  />
                                    <span className="placeholder">Last Name </span>
                                </div>
                            </FieldContainer>
                        </SingleAuthorCon>
                    ))
                }
                <i className="fa-solid fa-circle-plus" onClick={() => IncreasAuthor(authors)} ></i>
            </InputContainer>
        </AuthorsContainer>
        <PublisherContainer>
           <h3>Publisher</h3> 
            <InputContainer publisher>
                <FieldContainer>
                    <div className="custom-field" >
                        <input type="text" name="pName" className="valid" {...register('pName', registerOptions.pName)} />
                        <span className="placeholder">Name <span className="requiredStar"> *</span></span>
                        <small className='errorMessage'>
                            {errors?.pName && errors.pName.message}
                        </small>
                    </div>
                    <div className="custom-field" >
                        <input  type="text" name='pCity'className='valid' {...register('pCity', registerOptions.pCity)}  />
                        <span className="placeholder">City</span>
                        <small className='errorMessage'>
                            {errors?.pCity && errors.pCity.message}
                        </small>
                    </div>
                    <div className="custom-field" >
                        <input  type="text" name='psubSity' className='valid' {...register('psubSity', registerOptions.psubSity)} />
                        <span className="placeholder">Sub City</span>
                        <small className='errorMessage'>
                            {errors?.psubSity && errors.psubSity.message}
                        </small>
                    </div>
                </FieldContainer>
            </InputContainer>
        </PublisherContainer>
        <ImageContainer>
        <h3>Book Cover</h3>
            <ImageCon>
             <label className='label' htmlFor="image"><p>Upload Cover Page<span className="requiredFiled"> *</span></p>
                 <i className="fa-solid fa-image"></i>
                 <input id="image"  name="image" type="file" {...register('img', registerOptions.img)} onChange={(e) => setImage(e.target.files[0]) } placeholder="input text" />
                 <small className='errorMessage'>
                    {errors?.img && errors.img.message}
                 </small>
                <p>uploading {Math.round(percent)} %</p>
             </label>
             <Img src={imgUrl ? imgUrl : bookk.img }  alt="cover page Image"/>
         </ImageCon>
        </ImageContainer>
        <ButtonCon>
          {
            percent > 0 && percent < 100 ? <Button disabled>Submit</Button> : <Button >Submit</Button>
          }
        </ButtonCon>
    </BookContainer>
    </form>
    </Container>
  )
}

export default NewAddBook;