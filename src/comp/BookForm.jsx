//     import { useState, useEffect } from "react";
  
//     import { useForm } from "react-hook-form";
//     import { Splide, SplideSlide  } from "@splidejs/react-splide";
//     import { Container,Img, InnerCon, Desc,BottomCon, ImageCon, Main,Button, InputCon } from "./BookFormStyle";
//     import { Container,MainCon,SideBar,Button,SliderCon,LI } from "./BookFormStyle2";
//     import { useNavigate } from "react-router-dom";
//     import Formtwo from "./Formtwo";
//     import Formone from "./Formone";
//     import Formthree from "./Formthree";
//     import Formfour from "./Formfour";
  
//     const  BookForm = ({book,id,onSubmitHandeler,updateBook,handleClick,handleBackClick,IncreasAuthor,authors, com}) => {
       
//         const [image, setImage] = useState(null);
//         const [imgUrl, setImgUrl] = useState('');
//         const [percent, setPercent] = useState(null);

//         const navigate = useNavigate();
//         // default value to prefill the input element when we update
//         let defaultVal = {ISBN:"", title: "", pages: "", condition: "", catagory: "", description: "", coverType: "", publisher: "", publishedYear: "", firstname: "", middlename: "", lastname: "", price: '', img: "", address: '', contact: '' };
//         if(book !== undefined){
//             defaultVal = {ISBN: book.ISBN, title: book.title, pages: book.pages, condition: book.condition, catagory: book.catagory, description:book.description, firstname: book.firstname, lastname: book.lastname, middlename: book.middlename, publisher: book.publisher, publishedYear: book.date, coverType: book.coverType, img: book.image, address: book.address, contact: book.contact, price: book.price };
//         }

//         const { register, handleSubmit, formState: { errors } } = useForm();
        
//         const handleError = (errors) => {};
//         let count = 0;
//         const addAuthor = () => {
//             count++;
//             setAuthors(p => [...p, count])  ;
//         }
//         console.log(authors);
//         const submithandler = async (data) => {
//             const book = {...data,image: imgUrl}
//             if(id === undefined){
//                 onSubmitHandeler(book);
//                 navigate('/');
//             } else{
//                 updateBook(book);
//                 navigate('/');
//             }
//         }
//         const registerOptions = {
//             ISBN: { required: "ISBN is required",
//                     minLength: {
//                         value: 8,
//                         message: "ISBN must have at least 8 characters!"
//                     }
//             },
//             title: { required: "Title is required" },
//             publisher:{required:"Publisher is required"},
//             price : { required: "Price is required!" },
//             pages : { required: "Pages is required!" },
//             catagory : { required: "Category is required!" },
//             condition: { required: "Condition is required!" },
//             coverType: { required: "Cover-Type is required!" },
//             date: { required: "Year of Published is required!" },
//             description: { required: "Description is required!",
//                     minLength: {
//                         value: 30,
//                         message: "Description must have at least 30 characters!"
//                     }
//             },
//             firstname: { required: "First Name is required!" },
//             lastname: { required: "Last Name is required!" },
//             middlename: { required: "Middle Name is required!" },
//             address: { required: "Address is required!" },
//             contact: { required: "Contact is required!" },
//             image: {required: "Cover Image is required!"}
//     };
//     const submithandler =  (data) => {
//         console.log(data);
//     }
//     let compone = [<Formone handleClick={handleClick} com={com} />,
//                   <Formtwo handleClick={handleClick} com={com} IncreasAuthor={IncreasAuthor} authors={authors} />,
//                   <Formthree handleClick={handleClick} com={com} />,
//                   <Formfour />];
//     return (
//        <Container>
//             <SideBar>
//                 <LI id={0} com={com}>Book Information</LI>
//                 <LI id={1} com={com}>Authors Information</LI>
//                 <LI id={2} com={com}>Publisher Information</LI>
//                 <LI id={3} com={com}>Cover Image</LI>
//             </SideBar>
//             <MainCon>
//                 {compone[com]}   
//             </MainCon>
//        </Container>
//     );
// }

// export default BookForm;






//  <Container>
//             {
//                 id ? <h1>Update Book</h1> :<h1>Add Book</h1>
//             }
            
//             <form onSubmit={handleSubmit(submithandler, handleError) }>
//             <Main>
//                 <InnerCon>
//                     <InputCon>
//                         <label htmlFor="ISBN">ISBN<span className="requiredFiled">*</span>
//                             <input  type="number" name="ISBN" {...register('ISBN', registerOptions.ISBN)} defaultValue={defaultVal.ISBN}   />
//                             <small>
//                                 {errors?.ISBN && errors.ISBN.message}
//                             </small>
//                         </label>
//                         <label>Title<span className="requiredFiled">*</span>
//                             <input  type="text" name="title" {...register('title', registerOptions.title) }  defaultValue={defaultVal.title} />
//                             <small>
//                                 {errors?.title && errors.title.message}
//                             </small>
//                         </label>
//                         <label htmlFor="publiser">Publisher<span className="requiredFiled">*</span>
//                             <input  type="text" name="publisher" {...register('publisher', registerOptions.publisher)}   defaultValue={defaultVal.publisher} />
//                             <small>
//                                 {errors?.publisher && errors.publisher.message}
//                             </small>
//                         </label>
//                         <label htmlFor="price">Price<span className="requiredFiled">*</span>
//                             <input  type="number" name="price"  {...register("price", registerOptions.price)} defaultValue={defaultVal.price}  />
//                             <small>
//                                 {errors?.price && errors.price.message}
//                             </small>
//                         </label>
//                         <label htmlFor="author">Page Number<span className="requiredFiled">*</span>
//                             <input  type="number" name="pages" placeholder="page number" {...register("pages", registerOptions.pages)} defaultValue={defaultVal.pages} />
//                             <small>
//                                 {errors?.pages && errors.pages.message}
//                             </small>
//                         </label>
//                         <label htmlFor="catagory">Category<span className="requiredFiled">*</span>
//                             <select defaultValue={defaultVal.catagory} name="catagory" {...register("catagory", registerOptions.catagory)}  id="">
//                                 <option value="Classics">Classics</option>
//                                 <option value="Crime">Crime</option>
//                                 <option value="Fairy tales">Fairy tales</option>
//                                 <option value="Fantasy">Fantasy</option>
//                                 <option value="Historical fiction">Historical fiction</option>
//                                 <option value="Horror">Horror</option>
//                                 <option value="Mystery">Mystery</option>
//                                 <option value="Romance">Romance</option>
//                                 <option value="Comic book">Comic book</option>
//                             </select>
//                         </label>
//                         <label htmlFor="condition">Condition<span className="requiredFiled">*</span>
//                             <select defaultValue={defaultVal.condition} name="condition" {...register("condition", registerOptions.condition)} id="">
//                                 <option value="new">new</option>
//                                 <option value="old">old</option>
//                                 <option value="like new">like new</option>
//                                 <option value="used">used</option>
//                             </select>
//                         </label>
//                         <label htmlFor="coverType">Cover Type<span className="requiredFiled">*</span>
//                             <select defaultValue={defaultVal.coverType} name="coverType" {...register("coverType", registerOptions.coverType)} id="">
//                                 <option value="Paperback">Paperback</option>
//                                 <option value="Hardcover Dust Jacket">Hardcover Dust Jacket</option>
//                                 <option value="Hardcover Case wrap">Hardcover Case wrap</option>
//                             </select>
//                         </label>
//                         <label htmlFor="yearOfPublished">Year of Published<span className="requiredFiled">*</span>
//                             <input type="date" defaultValue={defaultVal.publishedYear} name="publishedYear" {...register("date", registerOptions.date)}  />
//                             <small>
//                                 {errors?.date && errors.date.message}
//                             </small>
//                         </label>
//                     </InputCon>
//                     <Desc>
//                         <label htmlFor="description">Description<span className="requiredFiled">*</span>
//                             <textarea defaultValue={defaultVal.description} name="description"  {...register("description", registerOptions.description)} placeholder="Description about the book..."></textarea>
//                             <small>
//                                 {errors?.description && errors.description.message}
//                             </small>
//                         </label>
                        
//                     </Desc>
//                     <BottomCon>
//                     <h3>Author's Information</h3>
//                     {
//                         authors.map(author => (
//                             <div key={author} >
//                                 <label htmlFor="firstname">First Name<span className="requiredFiled">*</span>
//                                     <input type="text" {...register("firstname", registerOptions.firstname)}  name="firstname" placeholder="firstname" defaultValue={defaultVal.firstname} />
//                                     <small>
//                                         {errors?.firstname && errors.firstname.message}
//                                     </small>
//                                 </label>
//                                 <label htmlFor="middlename">Middle Name<span className="requiredFiled">*</span>
//                                     <input  type="text" name="middlename" {...register("middlename", registerOptions.middlename)} placeholder="middlename" defaultValue={defaultVal.middlename} />
//                                     <small>
//                                         {errors?.middlename && errors.middlename.message}
//                                     </small>
//                                 </label>
//                                 <label htmlFor="lastname">Last Name<span className="requiredFiled">*</span>
//                                     <input  type="text" name="lastname" {...register("lastname", registerOptions.lastname)} placeholder="lastname" defaultValue={defaultVal.lastname} />
//                                     <small>
//                                         {errors?.lastname && errors.lastname.message}
//                                     </small>
//                                 </label>
//                                 <label htmlFor="address">Address<span className="requiredFiled">*</span>
//                                     <input  type="text" name="address" {...register("address", registerOptions.address)} placeholder="addres" defaultValue={defaultVal.address} />
//                                     <small>
//                                         {errors?.address && errors.address.message}
//                                     </small>
//                                 </label>
//                                     <label htmlFor="cotact">Contact<span className="requiredFiled">*</span>
//                                     <input  type="number" name="contact" {...register("contact", registerOptions.contact)} placeholder="contact" defaultValue={defaultVal.contact} />
//                                     <small>
//                                         {errors?.contact && errors.contact.message}
//                                     </small>
//                                 </label>
//                             </div>
//                         ))}
//                     </BottomCon>
//                     <i className="fa-solid fa-plus" onClick={addAuthor} ></i>
//                 </InnerCon>
//                 <ImageCon>
//                     <label htmlFor="image"><p>Upload Cover Page<span className="requiredFiled">*</span></p>
//                         <i className="fa-solid fa-image"></i>
//                         <input id="image"  name="image" type="file"{...register("image", registerOptions.image)} onChange={(e) => setImage(e.target.files[0]) } placeholder="input text" />
//                         <small>
//                             {errors?.image && errors.image.message}
//                         </small>
//                     </label>
//                     <p>uploading {Math.round(percent)} %</p>
//                     <Img src={imgUrl  ? imgUrl : defaultVal.img}  alt="cover page Image"/>
//                 </ImageCon>
//                 </Main>
//                 <Button disabled={percent !== null && percent < 100 } >
//                     {
//                         id ? <>UpdateBook</> :<>AddBook</> 
//                     }
//                 </Button>
//             </form>
//         </Container>
