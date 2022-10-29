import React, { useState, useEffect } from 'react';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../fireBaseConfig";
import {Container, BookContainer,InputContainer,TitleContainer, FieldContainer,AuthorsContainer, SingleAuthorCon,PublisherContainer, ImageContainer,ImageCon, Img, Button,ButtonCon } from "./NewAddBookStyle";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";


const  NewAddBook = ({bookk, updateBookFun,id, onSubmitHandeler }) => {
        const [imgUrl, setImgUrl] = useState("");
        const [percent, setPercent] = useState(0);
        const [inputList, setInputList] = useState([{fName: "", mName: "", lName: "", val: true}]);
        const [valu, setValu ]= useState([true, false, false,false,false]);
        const [image, setImage] = useState(null);

        
        // validation schema
        const requirdSchema = yup.string().max(20).required().typeError("First Name is required");
        const schema = yup.object().shape({
            title: yup.string().max(45).required(),
            ISBN: yup.string().min(13).max(15).required(),
            price: yup.number().required().test('is-decimal', 'Two decimal only', (value) => (value +"").match(/^\s*-?(\d+(\.\d{1,2})?|\.\d{1,2})\s*$/)).typeError("price is required"),
            image: yup.mixed()
            .test('fileFormat', 'Unsupported file type', (value) => value.length === 0  || (value && ["image/jpg","image/png","image/jpeg","image/avif"].includes(value[0].type)))
            .test('fileSize', 'File too large must be less than 2MB',  (value) => value.length === 0 || (value && value[0].size <= 200000)),
            pages: yup.number().integer().required().typeError("Page is required"),
            category: yup.string().required(),
            coverType: yup.string().required(),
            condition: yup.string().required(),
            date: yup.string().required(),
            description: yup.string().min(30).max(50).required(),
            mName: yup.string().max(20),
            lName: yup.string().max(20),
            pName: yup.string().max(20).required("Publisher Name is required").typeError("Publisher Name is required"),
            pCity: yup.string().max(30),
            psubSity: yup.string().max(30),
            fName0: yup.string().max(20).required("First Name is required").typeError("First Name is required"),
            fName1:  valu[1] ? requirdSchema : null,
            fName2:  valu[2] ? requirdSchema : null,
            fName3:  valu[3] ? requirdSchema : null,
            fName4:  valu[4] ? requirdSchema : null
            
        });
        
        
        // useForm from react hook form
        const { register, handleSubmit, setValue, formState: { errors } } = useForm({ resolver: yupResolver(schema) });
      
        const productImageRegister = register("image");
      
        //setValue of many Inputs
        useEffect(() => {
            if (bookk) {
            Object.entries(bookk).forEach(
                ([name, value]) => setValue(name, value));
            }
        }, [setValue, bookk]);
        
        //image on change function
        const handleImageUpload = (e) => {
            setImage(e.target.files[0]);
        }
        //
        

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

        

        //submit handeler functions update or add
        const submithandler = (data) => {
            const book = {...data, image: imgUrl};
            // const bookone = {title: data.title, ISBN: data.ISBN, pages: data.pages, price: data.price, pName: data.pName, pCity: data.pCity, category: data.category, coverType: data. psubSity: data.psubSity, descriptioin: data.descriptioin, authors: [{fName: data.fName0,mName: data.mName0, lName: data.lName0}, {fName: data.fName1, mName: data.mName1, lName: data.lName1}],img: imgUrl};
            if(id){
                updateBookFun(book);
            }else{
                onSubmitHandeler(book);
            }
            console.log(data)
        }
        
        
        //handle error message
        const handleError = (errors) => {
            console.log(errors);
        }


        //to remover the author
        const handleRemoveClick = index => {
            const list = [...inputList];
            list.splice(index, 1);
            setInputList(list);
            setValu((p) => p.map((item, idx) => idx === index ? !item : item))
        };
            
        // to add the author
        const handleAddClick = (index) => {
            if(inputList.length < 5){
                index = index + 1;
                setInputList([...inputList, {fName: "", mName: "", lName: ""}]);
                setValu((p) => p.map((item, idx) => idx === index ? !item : item))
            }
        };

        
  return (
<Container>
  <form onSubmit={handleSubmit(submithandler,handleError)}>
    <BookContainer>
        <h2>Book</h2>
        <InputContainer>
            <TitleContainer>
                <label className="custom-field" > 
                    <input type="text" name='title' {...register('title')} className='valid' />
                    <span className="placeholder">Title<span className="requiredStar"> *</span> </span>
                    <small className='errorMessage'>
                            {errors?.title && errors.title.message} 
                    </small>
                </label>
            </TitleContainer>
            <FieldContainer>
                <div className="custom-field" >
                    <input type="text" name="ISBN" {...register('ISBN')} className="valid"  />
                    <span className="placeholder">ISBN<span className="requiredStar"> *</span></span>
                    <small className='errorMessage'>
                        {errors?.ISBN && errors.ISBN.message}
                    </small>
                </div>
                <div className="custom-field" >
                    <input  type="number" step="any" name='price' {...register('price')} className="valid"  />
                    <span className="placeholder"> <span className="dolar" > $</span> Price <span className="requiredStar"> *</span> </span>
                    <small className='errorMessage'>
                        {errors?.price && errors.price.message}
                    </small>
                </div>
                <div className="custom-field last-field" >
                    <input  type="number" step="any" name='pages' {...register('pages')} className="valid" />
                    <span className="placeholder">Pages<span className="requiredStar"> *</span> </span>
                    <small className='errorMessage'>
                        {errors?.pages && errors.pages.message}
                    </small>
                </div>
            </FieldContainer>
            <FieldContainer select>
                <label className="custom-field" >
                    <select name='coverType' {...register('coverType')}>
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
                    <select name='category' {...register('category')} >
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
                    <select name='condition' {...register('condition')}>
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
                    <input id="date" placeholder='Published Year' type="text" onFocus={e => e.target.type = "date"}  name='date' {...register('date')}   className="date" />
                    <small className='errorMessage'>
                        {errors?.date && errors.date.message}
                    </small>
                </label>
            </FieldContainer>
            <TitleContainer desc>
                <label className="custom-field textarea">
                    <textarea name='description' {...register('description')} className='textarea valid'></textarea>
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
                {
                    inputList.map((author, index) => (
                        <SingleAuthorCon key={index}>
                            <h4>Author {index + 1} {inputList.length !== 1 && <i  className="fa-regular fa-circle-xmark" onClick={() => handleRemoveClick(index)}></i>} </h4>
                            <FieldContainer author >
                                <div className="custom-field" >
                                    <input type="text" name={author.fName + index } {...register(`${'fName' + index}`)} className= "valid" />
                                    <span className="placeholder">First Name<span className="requiredStar"> *</span></span>
                                    <small className='errorMessage'>{errors?.['fName' + index ] && errors.fName0.message }</small>
                                </div>
                                <div className="custom-field" >
                                    <input  type="text" name={author.mName+ index } {...register(`${'mName' + index}`)} className="valid"   />
                                    <span className="placeholder">Middle Name</span>
                                    <small className='errorMessage'>{errors["mName"+ index ]?.message}</small>
                                </div>
                                <div className="custom-field" >
                                    <input  type="text" name={author.lName+ index } {...register(`${'lName' + index}`)} className="valid"  />
                                    <span className="placeholder">Last Name </span>
                                    <small className='errorMessage'>{errors["lName"+ index ]?.message}</small>
                                </div>
                            </FieldContainer>
                            {inputList.length -1 === index && <i className="fa-solid fa-circle-plus" onClick={() => handleAddClick(index)} ></i> }
                        </SingleAuthorCon>
                    ))
                }
                
                
            </InputContainer>
        </AuthorsContainer>
        <PublisherContainer>
            <h3>Publisher</h3> 
            <InputContainer publisher>
                <FieldContainer>
                    <div className="custom-field" >
                        <input type="text" name="pName" className="valid" {...register('pName')} />
                        <span className="placeholder">Name <span className="requiredStar"> *</span></span>
                        <small className='errorMessage'>
                            {errors?.pName && errors.pName.message}
                        </small>
                    </div>
                    <div className="custom-field" >
                        <input  type="text" name='pCity'className='valid' {...register('pCity')}  />
                        <span className="placeholder">City</span>
                        <small className='errorMessage'>
                            {errors?.pCity && errors.pCity.message}
                        </small>
                    </div>
                    <div className="custom-field" >
                        <input  type="text" name='psubSity' className='valid' {...register('psubSity')} />
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
                    <input id="image" name="image" type="file"  {...productImageRegister }
                        onChange={e => {
                            productImageRegister.onChange(e);
                            handleImageUpload(e);
                        }}   />
                    <small className='errorMessage'>
                        {errors?.image && errors.image.message}
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





//error messages 
        // const registerOptions = {
        //     title: { required: "Title is required" ,
        //             maxLength: {
        //                 value: 45,
        //                 message: "Title should not have more than 45 characters!"
        //             }
        //      },
        //     ISBN: { required: "ISBN is required",
        //             minLength: {
        //                 value: 13,
        //                 message: "ISBN must have at least 13 characters!"
        //             },
        //             maxLength: {
        //                 value: 15,
        //                 message: "ISBN shouldn't be more than 15 characters!"
        //             }
        //     },
        //     price : { required: "Price is required!",
        //     pattern: {
        //         value:/^\s*-?(\d+(\.\d{1,2})?|\.\d{1,2})\s*$/ ,
        //         message: "inavalid input filed"
        //     }
        //      },
        //     pages : { required: "Pages is required!", valueAsNumber: true, },
        //     date: { required: "Year of Published is required!"},
        //     description: { required: "Description is required!",
        //             minLength: {
        //                 value: 30,
        //                 message: "Description must have at least 30 characters!"
        //             },
        //             maxLength: {
        //                 value: 50,
        //                 message: "Description must be less than 50 characters!"
        //            }
        //     },
        //     fName: {required: "First Name is required!"},
        //     mName: {maxLength: {
        //                 value: 20,
        //                 message: "Middle Name shouldn't be more than 20 characters!"
        //             }},
        //     lName: {maxLength: {
        //                 value: 20,
        //                 message: "Last Name shouldn't be more than 20 characters!"
        //             }},
        //     category: {
        //             required: "Select a category!"
        //     },
        //     condition: {
        //             required: "Select condition of book!"
        //     },
        //     coverType:{
        //             required: "Select cover type of book!"
        //     },
        //     pName: {
        //             required: "Publisher Name is required!"
        //     },
        //     pCity: {
        //         maxLength: {
        //             value: 20,
        //             message: "City shouldn't be more than 20 characters!"
        //         }
        //     },
        //     psubSity:{
        //         maxLength: {
        //             value: 20,
        //             message: "Sub City shouldn't be more than 20 characters!"
        //         }
        //     },
        //     img: {
        //         pattern: {
        //             value: validationRules,
        //             message: "Image format is invalid!"
        //         }
        //     }
        // }