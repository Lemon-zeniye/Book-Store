import { useState, useEffect } from "react";
import { db } from "../fireBaseConfig";
import { collection, addDoc,updateDoc , doc, getDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import NewAddBook from "./NewAddBook";
import { useParams } from "react-router-dom";


// import ListOfBook from "./ListOfBook";

const AddBook = () => {
    const [bookk, setBook] = useState([]);
    // const [books, setBooks] = useContext(BooksContext);
    const navigate = useNavigate();
    const { id } = useParams()
    // add book to the firebase collection
    const onSubmitHandeler = async (book) => {
        const booksCollectonRef = collection(db, "BookTwo");
        await addDoc(booksCollectonRef, book);
        navigate("/");    
    }
    const updateBookFun = async (book) => {
      const docRef = doc(db, "BookTwo", id);
        await updateDoc(docRef, book);
        navigate("/");
    }

    const numOfAuthor = 1;
    const [authors, setAuthor] = useState([1]);
    const IncreasAuthor = (num) => {
        if(authors.length < 5){
          setAuthor((p) => [...p,numOfAuthor]);
        }
    }
    const RemoveAuthor = (newAuthous, index) => {
      if(authors.length > 1){
          setAuthor(authors.filter((author, ind) => ind !== index));
      }
    }

    //to get a single book to update
        useEffect(() => {
            if(id){
                const docRef = doc(db, "BookTwo", id);
                const getDataById = async () => {
                    try {
                        const docSnap = await getDoc(docRef);
                        if(docSnap.exists()){
                            setBook(docSnap.data());
                        }else{
                            console.log("Document dose not eists");
                        }
                    }catch(err){
                        console.log(err);
                    }
                }
                getDataById();
            }
        },[id]);
  return  (
  <>
    <NewAddBook onSubmitHandeler={onSubmitHandeler}  authors={authors} setAuthor={setAuthor} IncreasAuthor={IncreasAuthor} id={id} updateBookFun={updateBookFun} RemoveAuthor={RemoveAuthor} bookk={bookk} />
  </>
  )
}

export default AddBook